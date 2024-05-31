<script setup>

import HomeCategory from "./components/HomeCategory.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import homeProduct from "./components/HomeProduct.vue";




import { ref ,inject} from "vue";
const name = inject("name");
const permission = inject("permission");
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
