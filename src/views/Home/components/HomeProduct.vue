<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-12">
        <h4 class="py-2">城市旅遊</h4>
      </div>
      <div class="container">
        <div class="row gallery-item">
            <div class="col-md-3 col-sm-12 mb-4">
                <img src="https://placehold.co/310x425" class="img-fluid portrait-image" alt="">
            </div>
            <div class="col-md-9 col-sm-12">
                <div class="row">
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 col-6 mb-4">
                        <img src="https://placehold.co/310x200" class="img-fluid" alt="">
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
                content: url('https://placehold.co/520x265'); /* 替換為橫向圖 */
            }
                }
                /* 全部圖片設圓角 */
        img {
        border-radius: 10px;
        }
</style>