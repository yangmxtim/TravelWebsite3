<template>
  <el-container>
    <el-header>
      <f-header></f-header>
    </el-header>
    <el-container>
      <el-aside  style="width: 20%;">
        <f-menu></f-menu>
      </el-aside>
      <el-main>
        <f-bread></f-bread>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
import FBread from "./components/FBread.vue"
</script>

<style>
/* 載入進度條&轉圈圈 */
#nprogress .bar {
  /* background-color: #f4f4f4 !important; */
  height: 3px !important;
}
</style>