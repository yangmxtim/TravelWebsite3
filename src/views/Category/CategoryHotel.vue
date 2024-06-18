

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import CategoryAside from './components/CategoryAside.vue'; // 確保引入了 CategoryAside 组件
import CategorySection from './components/CategorySection.vue';
import HotelNav from './components/HotelNav.vue';

const products = ref([]);
const loading = ref(true);
const error = ref('');
const selectedTag = ref(null);
const filteredProducts = ref([]);
const selectedCity = ref(null);

async function loadProducts() {
    try {
        const response = await axios.get('http://localhost:8080/products?type=住宿');
        products.value = response.data;
        filteredProducts.value = products.value; // 初始化 filteredProducts
    } catch (err) {
        error.value = '無法載入產品';
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    loadProducts();
});

// 監聽 selectedTag 和 selectedCity 的變化，更新 filteredProducts
watch([selectedTag, selectedCity], ([newTag, newCity]) => {
    console.log(`Watch - Selected Tag: ${newTag}, Selected City: ${newCity}`);
    if (newTag && newCity) {
        filteredProducts.value = products.value.filter(product => product.tag === newTag && product.address.includes(newCity));
    } else if (newTag) {
        filteredProducts.value = products.value.filter(product => product.tag === newTag);
    } else if (newCity) {
        filteredProducts.value = products.value.filter(product => product.address.includes(newCity));
    } else {
        filteredProducts.value = products.value;
    }
    console.log(`Filtered Products: ${JSON.stringify(filteredProducts.value)}`);
});

// 處理城市選擇變化的方法
const handleCityChange = (city, checked) => {
    console.log(`Main Component - City: ${city}, Checked: ${checked}`);
    selectedCity.value = checked ? city : null;
    console.log(`Main Component - Selected City: ${selectedCity.value}`);
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" data-aos="fade-up">
                <CategoryAside @city-change="handleCityChange"></CategoryAside> <!-- 确保正确绑定 city-change 事件 -->
            </div>
            <div class="col-md-9">
                <HotelNav @filter="selectedTag = $event"></HotelNav>
                <div v-if="loading">載入中...</div>
                <div v-if="error">{{ error }}</div>
                <CategorySection v-for="goods in filteredProducts" :goods="goods" :key="goods.id"></CategorySection>
            </div>
        </div>
    </div>
</template>


