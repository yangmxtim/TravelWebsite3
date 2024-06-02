<template>
  <div class="aside" style="height: calc(100vh - 60px)">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          >
          <!-- @open="handleOpen"
          @close="handleClose" -->
          <router-link to="/backMain">
            <el-menu-item class="aside" index="1">
              <el-icon><DataAnalysis /></el-icon>
              <span>數據分析 </span>
            </el-menu-item>
          </router-link>
          <router-link to="/member">
            <el-menu-item class="aside" index="2">
              <el-icon><Avatar /></el-icon>
              <span> 會員管理 </span>
            </el-menu-item>
          </router-link>
          <router-link to="/orderManage">
            <el-menu-item class="aside" index="3">
              <el-icon><document /></el-icon>
              <span>訂單管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/productManage">
            <el-menu-item class="aside" index="4">
              <el-icon><Goods /></el-icon>
              <span>商品管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>
