<template>
    <h4 class="py-4 container">選擇方案</h4>
    <div v-for="(detail, index) in product.product_detail" :key="index" class="container">
        <div class="row">
            <div class="col-md-3">
                <img :src="detail.img" class="img-fluid" alt="" style="width: 100%; height: 93%; object-fit: cover;">
            </div>
            <div class="col-md-7">
                <h5>{{detail.name}}</h5><br>
                {{detail.introduction}}
            </div>
            <div class="col-md-2 py-3">
                <div class="row">
                    <div class="col-11">
                        <h5 class="text-end">$ {{detail.price}}</h5><br><br><br><br><br>
                    </div>
                    <div class="row d-grid gap-2 mx-auto">
                        <div class="col-12 d-grid d-lg-flex justify-content-lg-end">
                            <!-- 使用 type="default" 並添加自定義類 -->
                            <el-button size="large" type="default" class="custom-button" data-bs-toggle="collapse" :data-bs-target="'#more' + index" aria-expanded="false" :aria-controls="'more' + index">
                                選擇方案
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 摺疊區塊 -->
        <div class="pb-4">
            <div :id="'more' + index" class="collapse">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <VueDatePicker v-model="date[index]" inline auto-apply :enable-time-picker="false" :min-date="minDate" :max-date="maxDateString"/>
                        </div>
                        <div class="col-md-9">
                            <p>選擇數量</p><br>
                            <div class="row">
                                <div class="col-8">數量</div>
                                <div class="col-4 d-grid d-lg-flex justify-content-lg-end">
                                    <div>
                                        <el-input-number v-model="count[index]" :value="count[index]" @change="countChange(index, $event)" />
                                    </div>
                                </div>
                            </div>
                            <hr><br><br><br>
                            <div class="row">
                                <div class="col-8">金額</div>
                                <div class="col-4">
                                    <h5 class="text-end">$ {{detail.price * count[index]}}</h5>
                                </div>
                            </div>
                            <div class="row py-2">
                                <div class="col-7"></div>
                                <div class="col-5 d-grid d-lg-flex justify-content-lg-end">
                                    <el-button size="large" type="default" class="custom-button" @click="addToCart(detail, count[index], date[index])">加入購物車</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr> <!-- 將灰色的線移到這裡 -->
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { ElMessage } from 'element-plus';

const date = ref([]);
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const count = ref({});

props.product.product_detail.forEach((detail, index) => {
    count.value[index] = 1;
    date.value[index] = new Date().toISOString().slice(0, 10); // 設置日期為當日日期
});

// 設置日期選擇器的最小日期為當前日期
const minDate = new Date().toISOString().slice(0, 10);

// 設置日期選擇器的最大日期為未來一年
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 1);
const maxDateString = maxDate.toISOString().slice(0, 10);

const countChange = (index, value) => {
    count.value[index] = value <= 0 ? 1 : value;
};

const cartStore = useCartStore();

const addToCart = (product, quantity, selectedDate) => {
    const formattedDate = selectedDate ? formatDate(selectedDate) : formatDate(new Date()); // 如果未選擇日期，則使用當日日期
    const goods = {
        skuId: product.product_detail_id,
        count: quantity,
        price: product.price,
        picture: product.img,
        name: product.name,
        attrsText: '',
        selectedDate: formattedDate,
    };
    cartStore.addToCart(goods);
    ElMessage({
        message: '已加入購物車',
        type: 'success',
    });
};

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('zh-TW', options);
};

</script>

<style scoped>
/* 圖片圓角 */
img {
    border-radius: 10px;
}

/* 自定義按鈕樣式 */
.custom-button {
    border: 2px solid rgb(118, 116, 116); /* 黑色邊框 */
    color: rgb(99, 96, 96); /* 黑色文字 */
    background-color: white; /* 白色背景 */
}

/* 計數器 */
.number-quantity {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
}

.number-quantity button {
    background-color: #007bff;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 20px;
}

.number-quantity button:focus {
    outline: none;
}

.number-quantity input {
    width: 60px;
    height: 40px;
    border: none;
    text-align: center;
    font-size: 18px;
}

.number-quantity input:focus {
    outline: none;
}
</style>
