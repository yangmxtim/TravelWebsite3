<script setup>

import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import homeProduct from "./components/HomeProduct.vue";




</script>


<template>
  <!-- Permission: {{ permission }}
  <br />
  Name: {{ name }} -->
  
  <HomeCategory />
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>
