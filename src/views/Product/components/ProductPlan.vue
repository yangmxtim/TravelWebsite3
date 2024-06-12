<template>
    <h4 class="py-2 container">選擇方案</h4>
    <div v-for="(detail, index) in product.product_detail" :key="index" class="container">
        <div class="row">
            <div class="col-md-3"><img :src="detail.img" class="img-fluid" alt=""></div>
            <div class="col-md-7"><h5>{{detail.name}}</h5><br>
                {{detail.introduction}}
            </div>
            <div class="col-md-2">
                <div class="row">
                    <div class="col-11">
                        <h5 class="text-end">TWD{{detail.price}}</h5><br><br><br><br><br>
                    </div>
                    <div class="row d-grid gap-2 mx-auto">
                        <div class="col-12 d-grid d-lg-flex justify-content-lg-end">
                            <el-button size="large" type="button" data-bs-toggle="collapse" :data-bs-target="'#more' + index" aria-expanded="false" :aria-controls="'more' + index">
                                選擇方案
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 摺疊區塊 -->
            <div :id="'more' + index" class="collapse">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <VueDatePicker v-model="date[index]" inline auto-apply :enable-time-picker="false"/>
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
                                    <h5 class="text-end">TWD{{detail.price * count[index]}}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-7"></div>
                                <div class="col-5 d-grid d-lg-flex justify-content-lg-end">
                                    <el-button size="large" type="button" @click="addToCart(detail, count[index], date[index])">加入購物車</el-button>
                                    <!-- <el-button type="button" class="btn btn-primary">立即訂購</el-button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import { useCartStore } from '@/stores/cartStore'; // 引入購物車 store
  
  const date = ref([]);
  const props = defineProps({
    product: {
        type: Object,
        required: true
    }
  });
  
  const count = ref({});
  
  // 初始化所有數量為 1
  props.product.product_detail.forEach((detail, index) => {
    count.value[index] = 1;
  });
  
  const countChange = (index, value) => {
    // 如果數量小於等於0，則設置為1
    count.value[index] = value <= 0 ? 1 : value;
  };
  
  const cartStore = useCartStore(); // 使用購物車 store
  
  const addToCart = (product, quantity, selectedDate) => {
    // 將選擇的時間轉換為所需格式
    const formattedDate = selectedDate ? formatDate(selectedDate) : '';
  
    const goods = {
      skuId: product.product_detail_id, // 使用商品的 product_detail_id 作為識別符
      count: quantity, // 數量
      price: product.price, // 價格
      picture: product.img, // 圖片
      name: product.name, // 商品名稱
      attrsText: '', // 屬性文字描述，這裡先留空，您可以根據您的實際情況添加
      selectedDate: formattedDate, // 選擇的時間，已轉換為所需格式
    };
    cartStore.addToCart(goods);
  };
  
  // 將日期格式化為"YYYY年M月D日"的形式
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
  