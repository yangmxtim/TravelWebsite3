<template>
  <el-container>
    <el-header>
      <f-header></f-header>
    </el-header>
    <el-container>
      <el-aside class="col-3">
        <f-menu></f-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
// Backstage 全局引入
// import "@/views/Backstage/permission";
import "nprogress/nprogress.css";
</script>

<style>
/* 載入進度條&轉圈圈 */
#nprogress .bar {
  /* background-color: #f4f4f4 !important; */
  height: 3px !important;
}
</style>