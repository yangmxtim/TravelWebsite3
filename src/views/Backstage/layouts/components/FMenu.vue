<template>
  <div
    class="sidebar bg-light"
    style="border: 2px solid lavender"
  >
    <nav class="navbar bg-light navbar-light">
      <a
        href="#"
        @click.prevent="this.$router.push('/')"
        class="navbar-brand mx-4 mb-3 mt-2"
      >
        <h3 class="d-flex" style="color: chocolate">
          <img
            class="rounded-circle"
            src="@/assets/images/seaIsland_logo.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <img
            class="ms-2"
            src="@/assets/images/seaIsland_word.png"
            style="width: px; height: 40px"
          />
        </h3>
      </a>
      <div class="navbar-nav w-100 h5">
        <a
          href="#"
          class="nav-item nav-link mb-2"
          @click.prevent="this.$router.push('backMain')"
        >
          <i class="fa fa-tachometer-alt me-2"></i>
          統計圖表
        </a>
        <a
          href="#"
          @click.prevent="this.$router.push('member')"
          class="nav-item nav-link mb-2"
        >
          <i class="fa fa-users me-2" aria-hidden="true"></i>
          會員管理
        </a>
        <a
          href="#"
          @click.prevent="this.$router.push('newProduct')"
          class="nav-item nav-link mb-2"
        >
          <i class="fa fa-inbox me-2" aria-hidden="true"></i>
          新增商品
        </a>
        <a
          href="#"
          @click.prevent="this.$router.push('productManage')"
          class="nav-item nav-link mb-2"
        >
          <i class="fa fa-cart-shopping me-2" aria-hidden="true"></i>
          商品查詢  
        </a>
      </div>
    </nav>
  </div>
</template>