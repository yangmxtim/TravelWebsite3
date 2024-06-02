<script setup>
const checkInfo = {}  // 訂單對象
const curAddress = {} // 地址對象


import { ref } from 'vue';
import axios from 'axios';

//存儲用戶選擇的支付方式
const selectedPaymentMethod = ref('');

//支付方式按鈕的點擊事件,並設置當前選擇的支付方式
const handlePaymentMethodClick = (paymentMethod) => {
  selectedPaymentMethod.value = paymentMethod;
}


const handleConfirmOrder = () => {
  //根據用戶選擇支付方式連確定連接後端的URL
  let backendURL = '';
  if (selectedPaymentMethod.value === '綠界支付') {
    backendURL = 'http://localhost:8080/ecpayCheckout';
  } else if (selectedPaymentMethod.value === 'LINE PAY') {
    backendURL = 'linePayCheckoutURL'; // 我先預設我會做出LINE PAY
  }

  // 發送POST 請求到後端
  axios.post(backendURL, {
    //這邊添加要傳送到後端的數據

  })
  .then(response => {
    // 請求成功處理邏輯
    console.log(response.data);
    // 根據後端返回結果進行相對應的處理 例如跳轉頁面

  })
  .catch(error => {
    //請求失敗處理邏輯
    console.error(error);
    
  });
}
</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 會員資訊 -->
        <h3 class="box-title">會員資訊</h3>
        <div class="box-body">
          <div class="address">
            
            
          </div>
        </div>
        <!-- 商品信息 -->
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
              <tr v-for="i in checkInfo.goods" :key="i.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="i.picture" alt="">
                    <div class="right">
                      <p>{{ i.name }}</p>
                      <p>{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ i.price }}</td>
                <td>{{ i.price }}</td>
                <td>&yen;{{ i.totalPrice }}</td>
                <td>&yen;{{ i.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- 付款方式 -->
        <h3 class="box-title">付款方式</h3>
        <div class="box-body">
          <a class="my-btn" href="javascript:;" :class="{ 'active': selectedPaymentMethod === '綠界支付' }" @click="handlePaymentMethodClick('綠界支付')">綠界支付</a>
          <a class="my-btn" href="javascript:;" :class="{ 'active': selectedPaymentMethod === 'LINE PAY' }" @click="handlePaymentMethodClick('LINE PAY')">LINE PAY</a> 
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">交易明細</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件數：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品總價：</dt>
              <dd>TWD{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            
            <dl>
              <dt>應付金額：</dt>
              <dd class="price">{{ checkInfo.summary?.totalPayPrice.toFixed(2) }}</dd>
            </dl>
          </div>
        </div>
        <!-- 確認下單 -->
        <div class="submit">
          <el-button type="primary" size="large" @click="handleConfirmOrder">確認下單</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

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
    border-color:#83c4f8;
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
        font-size: 20px;
        color: #999;
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