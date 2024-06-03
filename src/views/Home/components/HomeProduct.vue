<template>
    <div class="container">
      <div class="row py-4">
        <div class="col-12">
          <h4 class="py-2">城市旅遊</h4>
        </div>
        <div class="container">
          <div class="row gallery-item">
            <div class="col-md-3 col-sm-12 mb-4">
              <div class="image-container">
                <img src="/src/views/Layout/img/Taipei2.jpg" class="img-fluid portrait-image" alt="">
                <div class="image-text">台北</div>
              </div>
            </div>
            <div class="col-md-9 col-sm-12">
              <div class="row">
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/Keelung.jpg" class="img-fluid" alt="">
                    <div class="image-text">基隆</div>
                  </div>
                </div>
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/Chiayi.jpg" class="img-fluid" alt="">
                    <div class="image-text">嘉義</div>
                  </div>
                </div>
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/Lanyu.jpg" class="img-fluid" alt="">
                    <div class="image-text">蘭嶼</div>
                  </div>
                </div>
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/NewTaipei.jpg" class="img-fluid" alt="">
                    <div class="image-text">新北</div>
                  </div>
                </div>
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/Penghu.jpg" class="img-fluid" alt="">
                    <div class="image-text">澎湖</div>
                  </div>
                </div>
                <div class="col-md-4 col-6 mb-4">
                  <div class="image-container">
                    <img src="/src/views/Layout/img/Taitung.jpg" class="img-fluid" alt="">
                    <div class="image-text">台東</div>
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
  /* 小螢幕時將縱向圖換成橫向圖 */
  @media (max-width: 767.98px) {
    .portrait-image {
      content: url('/src/views/Layout/img/Taipei3.jpg'); /* 替換為橫向圖 */
    }
  }
  /* 全部圖片設圓角 */
  img {
    border-radius: 10px;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
  }
  
  .image-container img {
    display: block;
    transition: all 0.3s ease-in-out;
  }
  
  .image-container .image-text {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  .image-container:hover img {
    filter: brightness(70%);
    cursor: pointer;
  }
  
  .image-container:hover .image-text {
    opacity: 1;
  }
  </style>
  