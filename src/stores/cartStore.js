import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([]);

  // 更新購物車總數量跟總價格
  const totalItems = ref(0);
  const totalPrice = ref(0);

  const updateCartSummary = () => {
    totalItems.value = cartList.value.reduce((a, c) => a + c.count, 0);
    totalPrice.value = cartList.value.reduce((a, c) => a + c.count * c.price, 0);
  };

  // 加入購物車
  // 加入購物車
const addToCart = (product) => {
  const { product_id, skuId, count } = product; // 假設 product 中包含 product_id 和 skuId 作為商品的唯一識別符
  const item = cartList.value.find(item => item.skuId === skuId);
  if (item) {
    item.count++;
  } else {
    cartList.value.push({...product, selected: true}); // 將商品添加到購物車時，添加 selected 屬性並設置為 true，表示默認選中
  }
  updateCartSummary();
};


  // 刪除商品
  const removeFromCart = (skuId) => {
    const idx = cartList.value.findIndex(item => item.skuId === skuId);
    cartList.value.splice(idx, 1);
    updateCartSummary();
  };

  // 單選回調
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId);
    if (item) {
      item.selected = selected;
      updateCartSummary();
    }
  };

  // 清除購物車
  const clearCart = () => {
    cartList.value = [];
    updateCartSummary();
  };

  // 監聽購物車列表的變化，以更新總數量和總價格
  watch(cartList, updateCartSummary, { deep: true });

  return {
    cartList,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
    clearCart,
    singleCheck
  };
}, {
  persist: true, // 持久化數據
});
