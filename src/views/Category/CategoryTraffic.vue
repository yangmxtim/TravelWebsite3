<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import CategoryAside from './components/CategoryAside.vue';
import TrafficNav from './components/TrafficNav.vue';
import CategorySection from './components/CategorySection.vue';

const products = ref([]);
const loading = ref(true);
const error = ref('');
const selectedTag = ref(null);
const filteredProducts = ref([]);

async function loadproduct() {
    try {
        const response = await axios.get('http://localhost:8080/products?type=交通');
        products.value = response.data;
        filteredProducts.value = products.value; // 初始化 filteredProducts
    } catch (err) {
        error.value = '無法載入產品';
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    loadproduct();
});

watch(selectedTag, (newValue, oldValue) => {
    if (newValue) {
        filteredProducts.value = products.value.filter(product => product.tag === newValue);
    } else {
        filteredProducts.value = products.value;
    }
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" data-aos="fade-up">
                <CategoryAside></CategoryAside>
            </div>
            <div class="col-md-9">
                <TrafficNav @filter="selectedTag = $event"></TrafficNav> <!-- 監聽 TrafficNav 的 filter 事件 -->
                <div v-if="loading">載入中...</div>
                <div v-if="error">{{ error }}</div>
                <CategorySection v-for="goods in filteredProducts" :goods="goods" :key="goods.id"></CategorySection>
            </div>
        </div>
    </div>
</template>
