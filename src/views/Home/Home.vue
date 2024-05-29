<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import axios from 'axios'
axios
  .post("http://localhost:8080/authorize", null, {
    withCredentials: true,
  })
  .then((response) => {
    alert(response.data);
  });
</script>


<template>

  <div class="container">
    <HomeCategory />

  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>
