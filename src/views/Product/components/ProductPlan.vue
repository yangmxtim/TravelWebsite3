<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    increment() {
      this.quantity++;
    }
  }
};

// count購物車新增/減少數字框
const count = ref(1)
const countChange = (count) => {
  console.log(count)
}

</script>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());

</script>

<template>
    <div class="container">
            <h4 class="py-2">方案</h4>
            <div class="row">
                <div class="col-md-3"><img src="https://placehold.co/310x200"></div>
                <div class="col-md-7"><h5>{方案名稱}</h5><br>
                    {方案敘述}
                </div>

                <div class="col-md-2">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="text-end">TWD{金額}</h5><br><br><br><br><br>
                        </div>
                        <div class="row d-grid gap-2 mx-auto">
                            <div class="col-12 d-grid d-lg-flex justify-content-lg-end">

                              
                                <el-button  size="large" type="button" data-bs-toggle="collapse" data-bs-target="#more"
                                    aria-expanded="false" aria-controls="collapseExample">
                                    選擇方案
                                </el-button>
                        </div>
                        </div>
                    </div>
                </div>
                <!-- 摺疊區塊 -->
                <div class="collapse" id="more">
                    <div class="card card-body">
                        <div class="row">
                            <div class="col-md-3">
                              <VueDatePicker  v-model="date" inline auto-apply :enable-time-picker="false"/>
                            </div>
                            <div class="col-md-9">
                                <p>選擇數量</p><br>
                                <div class="row">
                                    <div class="col-8">數量</div>
                                    <div class="col-4 d-grid d-lg-flex justify-content-lg-end">
                                      <div >
                                        <el-input-number  v-model="count" @change="countChange" />
                                      </div>

                                    </div>
                                </div>
                                <hr><br><br><br>
                                <div class="row">
                                    <div class="col-8">金額</div>
                                    <div class="col-4">
                                        <h5 class="text-end">TWD{金額}*{數量}</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-7"></div>
                                    <div class="col-5 d-grid d-lg-flex justify-content-lg-end">
                                        <el-button size="large" type="button" >加入購物車</el-button>
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

<style scoped>
    /* 圖片圓角 */
img{
    border-radius: 10px
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