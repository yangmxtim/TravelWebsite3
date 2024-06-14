<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-12">
        <h4 class="py-2">最新優惠</h4>
      </div>
      <div class="container">
        <div class="row gallery-item">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-12 mb-4">
                <div class="img-container">
                  <img src="/src/views/Layout/img/p1.png" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-4 col-sm-12 mb-4">
                <div class="img-container">
                  <router-link :to="'/news'">
                  <img src="/src/views/Layout/img/p2.png" class="img-fluid" alt="">
                </router-link>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 mb-4">
                <div class="img-container">
                  <img src="/src/views/Layout/img/p3.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 全部圖片設圓角 */
.img-container {
  overflow: hidden; /* Hide overflow to maintain the frame size */
  border-radius: 10px; /* Round corners of the frame */
}

img {
  transition: transform 0.8s ease; /* Smooth transition */
  width: 100%; /* Ensure images take the full width of the container */
}

img:hover {
  transform: scale(1.05); /* Slightly enlarge the image */
  cursor: pointer; /* Change cursor to pointer */
}
</style>
