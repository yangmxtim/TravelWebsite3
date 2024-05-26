<script setup>
import HeaderCart from './HeaderCart.vue'
import HeaderLogin from './HeaderLogin.vue'
import HeaderLove from './HeaderLove.vue'
</script>


<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid container">
        <router-link to="/">
        <a class="navbar-brand me-auto" href="#">
          <img src="/src/views/Layout/img/logo.png" alt="">
        </a>
      </router-link>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">海島旅遊</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active mx-lg-2" aria-current="page" href="#">目的地</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">交通</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">住宿</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">景點門票</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#">會員專區</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="../../Login">登入</a>
              </li>
            </ul>
                <!-- 我的最愛 -->
                <div><HeaderLove></HeaderLove></div>
                <!-- 購物車 -->
                <div><HeaderCart></HeaderCart></div>
                <!-- 會員登入 -->
                <div><HeaderLogin></HeaderLogin></div>
        
          </div>
        
        </div>
        <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div style="height: 100px;"></div>
  </template>
  
  <style scoped>
  .navbar {
    background-color: white;
    height: 100px; /* 设置导航栏的高度 */
  }
  
  .navbar-nav {
    margin: auto; /* 将导航项居中显示 */
  }
  
  /* 漢堡圖示樣式 */
  .navbar-toggler {
    border: none;
    font-size: 1.25rem;
    box-shadow: none; /* 移除漢堡框線 */
  }
  
  /* 清除漢堡點選框線 */
  .navbar-toggler:focus {
    outline: none;
  }
  
  /* 清除叉叉點選框線 */
  .btn-close:focus {
    outline: none;
  }
  
  /* 標籤列樣式 */
  .nav-link {
    color: #666777;
    font-weight: 500;
    position: relative;
  }
  
  /* 標籤列滑鼠懸停樣式 */
  .nav-link:hover,
  .nav-link.active {
    color: #df2e2e;
  }
  
  /* 項目列表底線 */
  .nav-link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2.8px;
    background-color: #2e6cdf;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
  
  /* 項目列表底線滑鼠懸停 */
  .nav-link:hover:before {
    width: 100%;
    visibility: visible;
  }
  
  /* 社交图标 */
  .social-icon>a {
    font-size: 25px;
    color: #666777;
    margin-right: 20px;
  }
  
  .social-icon> a:hover {
    color: #2e6cdf;
  }
  </style>
  