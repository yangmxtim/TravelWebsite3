<script>
import { useCartStore } from '@/stores/cartStore'; // 導入購物車 store

export default {
  setup() {
    const cartStore = useCartStore();
    const cartList = cartStore.cartList;

    // 刪除購物車中的商品
    const removeFromCart = (skuId) => {
      cartStore.removeFromCart(skuId);
    };

    // 單選回調
    const singleCheck = (i, selected) => {
      console.log(selected)
      // store cartList 
      // 除了 selected 補充一個用來篩選的參數 skuId
      cartStore.singleCheck(i.skuId, selected)
    }

    return { cartList, removeFromCart, singleCheck };
  }
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
               
              </th>
              <th width="400">購買商品</th>
              <th width="220">單價</th>
              <th width="180">數量</th>
              <th width="180">合計</th>
              <th width="140">刪除</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartList" :key="i.id">
              <td>
                  <!-- 單選框 -->
                <el-checkbox :model-value="i.selected" @change="(selected) => singleCheck(i, selected)" />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"><img :src="i.picture" alt="" /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc" >
                <p>${{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">${{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm title="確定刪除嗎?" confirm-button-text="確定" cancel-button-text="取消" @confirm="removeFromCart(i.skuId)">
                    <template #reference>
                        <a href="javascript:;">删除</a>
                  </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="購物車目前沒商品">
                    <el-button type="primary">來去逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <!-- 操作欄 -->
      <div class="action">
        <div class="batch">
          共 {{ cartList.length }} 件商品，已選擇 {{ cartList.filter(item => item.selected).length }} 件，價格合計：
          <span class="red">$ {{ (cartList.filter(item => item.selected).reduce((total, item) => total + item.price * item.count, 0)).toFixed(2) }} </span>
        </div>
        <div class="total">
          <el-button size="large" type="primary" @click="$router.push('/checkout')">前往結帳</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    margin: 0 auto;
    width: 80%; /* 設置購物車料表的寬度 */

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
  text-align: start;

  a {
    color: #e94242;
    text-decoration: none; /* 新增這行以移除超連結的底線 */
  }

  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}


  .red {
    color: #e94242;
  }

  .green {
    color: #e94242;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    >div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
  }

  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }

}
</style>
