<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 會員資訊 -->
        <h3 class="box-title">會員資訊</h3>
        <div class="box-body">
          <div class="ps-4 ">
            <p>姓名：{{ name }}</p>
            <p>電話：{{ phone }}</p>
            <p>信箱：{{ email }}</p>
          </div>
        </div>
        <!-- 商品資訊 -->
        <h3 class="box-title">商品資訊</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品資訊</th>
                <th width="170">單價</th>
                <th width="170">數量</th>
                <th width="170">合計</th>
                <th width="170">應付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in selectedProducts" :key="item.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="item.picture" alt="">
                    <div class="right">
                      <p>{{ item.name }}</p>
                      <p class="attr">票卷日期：{{ item.selectedDate }}</p>
                      <!-- 如果有其他屬性需要顯示，可以在這裡添加 -->
                    </div>
                  </a>
                </td>
                <td>${{ item.price }}</td>
                <td>{{ item.count }}</td>
                <td>${{ item.count * item.price }}</td>
                <td>${{ item.count * item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 付款方式 -->
        <h3 class="box-title">付款方式</h3>
        <div class="box-body">
          <a class="my-btn" href="javascript:;" :class="{ 'active': selectedPaymentMethod === '綠界支付' }"
            @click="handlePaymentMethodClick('綠界支付')">綠界支付</a>
          <a class="my-btn" href="javascript:;" :class="{ 'active': selectedPaymentMethod === 'LINE PAY' }"
            @click="handlePaymentMethodClick('LINE PAY')">LINE PAY</a>
        </div>
        <!-- 金額明細 -->
        <h3 class="box-title">交易明細</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件數：</dt>
              <dd>{{ selectedProducts.length }}件</dd>
            </dl>
            <dl>
              <dt>商品總價：</dt>
              <dd>${{ totalAmount.toFixed(0) }}</dd>
            </dl>
            <dl>
              <dt>應付金額：</dt>
              <dd class="price">TWD ${{ totalAmount.toFixed(0) }}</dd>
            </dl>
          </div>
        </div>
        <!-- 確認下單 -->
        <div class="submit">
          <el-button type="primary" size="large" @click="handleConfirmOrder">確認下單</el-button>
        </div>
      </div>
    </div>
    <!-- 支付表單容器 -->
    <div id="paymentFormContainer" style="display: none;"></div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'; // 引入購物車 store
import { ref, inject } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// 會員：
const email = inject("email");
const phone = inject("phone");
const name = inject("name");

const router = useRouter();
const cartStore = useCartStore(); // 使用購物車 store
const selectedProducts = ref([]);

// 計算購物車中已選產品的總金額
selectedProducts.value = cartStore.cartList.filter(item => item.selected);

const selectedPaymentMethod = ref('綠界支付'); // 預設選擇綠界支付

// 合併商品名稱和描述
const itemName = selectedProducts.value.map(item => item.name).join('#');
const tradeDesc = selectedProducts.value.map(item => 1).join(', ');

// 計算總金額
const totalAmount = ref(selectedProducts.value.reduce((total, item) => total + item.price * item.count, 0));

// 抓取會員 id
const uid = inject("id");

const handlePaymentMethodClick = (method) => {
  selectedPaymentMethod.value = method;
};
let ecpayOrderId = "";
// 產生訂單方法
const generateOrder = () => {
  const len = selectedProducts.value.length;
  const obj = [];
  // 綠界編號
  
  // 第一個 api 是生成 order detail
  return axios.post('http://localhost:8080/generateOrder', { totalAmount: totalAmount.value,id: uid.value })
    .then(response => {
      const orderid = response.data.orderId;
      ecpayOrderId = response.data.ecpayOrderId;
      console.log(response.data);
      for (let i = 0; i < len; i++) {
        const newobj = {
          ...selectedProducts.value[i],
          orderDetailId: orderid
        };
        obj.push({ [i]: newobj });
      }
      return axios.post('http://localhost:8080/generateOrderItems', obj);
    });
};
const handleConfirmOrder = () => {
  if (!uid.value) {
    ElMessage({
      message: '請先登入會員，將於兩秒後跳轉',
      type: 'success',
    });
    setTimeout(() => {
      router.push('/Login').then(() => {
        window.scrollTo(0, 0); // 跳轉後捲動到頂部
      });
    }, 2000);
    return;
  }

  generateOrder()
    .then(() => {
      // 清空購物車
      cartStore.clearCart();

      // 根據用戶選擇支付方式連接後端的 URL
      let backendURL = '';
      if (selectedPaymentMethod.value === '綠界支付') {
        backendURL = 'http://localhost:8080/ecpayCheckout';
      } else if (selectedPaymentMethod.value === 'LINE PAY') {
        backendURL = 'linePayCheckoutURL'; // 假設你將來會添加 LINE PAY 的處理
      }

      // 發送 POST 請求到後端
      return axios.post(backendURL, {
        totalAmount: totalAmount.value,
        itemName: itemName,
        tradeDesc: tradeDesc,
        ecpayOrderId: ecpayOrderId

      });
    })
    .then(response => {
      // 獲取後端返回的 HTML 表單內容
      const formData = response.data;

      // 將表單內容添加到頁面中
      const formContainer = document.getElementById('paymentFormContainer');
      formContainer.innerHTML = formData;

      // 提交表單
      formContainer.querySelector('form').submit();
    })
    .catch(error => {
      // 請求失敗處理邏輯
      console.error(error);
    });
};


</script>

<style scoped>
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #d4d0d0;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    >ul {
      flex: 1;
      padding: 20px;

      li {
        line-height: 30px;

        span {
          color: #999;
          margin-right: 5px;

          >i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }

    >a {
      color: #999;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    width: 420px;
    text-align: center;

    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  .info {
    display: flex;
    text-align: left;
    text-decoration: none;
    color: inherit;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }

    .right {
      line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }

  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
  text-decoration: none;

  &:hover {
    border-color: #83c4f8;
  }
}

.my-btn.active,
.my-btn:hover {
  border-color: #83c4f8;
}

.my-btn.active {
  background-color: #83c4f8;
  color: white;
}

@media screen and (max-width: 768px) {
  .my-btn {
    display: block;
    margin-bottom: 10px;
    margin-right: 0;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 19px;
        color: #f74747;
      }
    }
  }
}

.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}

.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: #999;
      background: lighten(#999, 50%);
    }

    >ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
