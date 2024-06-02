<script setup>
import CategoryAside from './components/CategoryAside.vue';
import HotelNav from './components/HotelNav.vue';
import CategorySection from './components/CategorySection.vue'; 

import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const products = ref([]);
    const loading = ref(true);
    const error = ref('');

    async function loadproduct() {
    try{
    const response = await axios.get('http://localhost:8080/product');
    products.value = response.data;
    }catch(err){
    error.value = '無法載入產品';
    }finally{
    loading.value = false;
    }
}
onMounted(loadproduct);
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <CategoryAside></CategoryAside>
            </div>
            <div class="col-md-9">
                <HotelNav></HotelNav>
                <CategorySection v-for="goods in products" :goods="goods" :key="goods.id"></CategorySection>
            </div>

        </div>
    </div> 
</template>

