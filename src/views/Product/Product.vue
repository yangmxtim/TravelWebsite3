<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
        <ProductMain :product="product"></ProductMain>
        <ProductPlan :product="product"></ProductPlan>
        <ProductInformation :product="product"></ProductInformation>
        <ProductComment :product="product"></ProductComment>
    </div>
</template>

<script setup>
import ProductMain from './components/ProductMain.vue';
import ProductPlan from './components/ProductPlan.vue';
import ProductInformation from './components/ProductInformation.vue';
import ProductComment from './components/ProductComment.vue';

import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const product = ref(null);
const loading = ref(true);
const error = ref('');

async function loadProduct() {
    try {
        const response = await axios.get(`http://localhost:8080/product/${props.id}`);
        product.value = response.data;
    } catch (err) {
        error.value = '無法載入產品';
    } finally {
        loading.value = false;
    }
}

onMounted(loadProduct);
</script>