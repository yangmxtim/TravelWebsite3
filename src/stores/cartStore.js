import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const totalItems = ref(0);
    const totalPrice = ref(0);

    const updateCartSummary = () => {
        totalItems.value = cartList.value.reduce((a, c) => a + c.count, 0);
        totalPrice.value = cartList.value.reduce((a, c) => a + c.count * c.price, 0);
    };

    const addToCart = (product) => {
        const { skuId, count, selectedDate } = product;
        const existingItem = cartList.value.find(item => item.skuId === skuId && item.selectedDate === selectedDate);

        if (existingItem) {
            existingItem.count += count;
        } else {
            cartList.value.push({ ...product, selected: true });
        }

        updateCartSummary();
    };

    const removeFromCart = (skuId) => {
        const idx = cartList.value.findIndex(item => item.skuId === skuId);
        if (idx !== -1) {
            cartList.value.splice(idx, 1);
            updateCartSummary();
        }
    };

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find(item => item.skuId === skuId);
        if (item) {
            item.selected = selected;
            updateCartSummary();
        }
    };

    const clearCart = () => {
        cartList.value = [];
        updateCartSummary();
    };

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
    persist: true
});
