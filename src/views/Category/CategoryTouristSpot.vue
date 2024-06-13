<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import CategoryAside from './components/CategoryAside.vue'; // 确保引入了 CategoryAside 组件
import CategorySection from './components/CategorySection.vue';
import TouristSpotNav from './components/TouristSpotNav.vue';

const products = ref([]);
const loading = ref(true);
const error = ref('');
const selectedTag = ref(null);
const filteredProducts = ref([]);
const selectedCity = ref(null);

async function loadProducts() {
    try {
        const response = await axios.get('http://localhost:8080/products?type=景點門票');
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

// 监听 selectedTag 和 selectedCity 的变化，更新 filteredProducts
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

// 处理城市选择变化的方法
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
                <TouristSpotNav @filter="selectedTag = $event"></TouristSpotNav>
                <div v-if="loading">載入中...</div>
                <div v-if="error">{{ error }}</div>
                <!-- 遍历 filteredProducts 显示产品信息 -->
                <CategorySection v-for="goods in filteredProducts" :goods="goods" :key="goods.id"></CategorySection>
            </div>
        </div>
    </div>
</template>
