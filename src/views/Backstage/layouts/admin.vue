<template>
  <div>
    <f-menu></f-menu>
    <div class="content">
      <f-header></f-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
import "@/styles/backStyle.css";
// import "@/utils/backStageUtils.js";
// import "@/utils/lib/chart/chart.min.js";
// import "@/utils/lib/easing/easing.min.js";
// import "@/utils/lib/waypoints/waypoints.min.js";
// import "@/utils/lib/owlcarousel/owl.carousel.min.js";
// import "@/utils/lib/tempusdominus/js/moment.min.js";
// import "@/utils/lib/tempusdominus/js/moment-timezone.min.js";
</script>

<style>
/* 載入進度條&轉圈圈 */
#nprogress .bar {
  /* background-color: #f4f4f4 !important; */
  height: 3px !important;
}
</style>