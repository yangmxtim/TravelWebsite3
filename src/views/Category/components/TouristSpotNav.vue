<!-- 上方分類項 -->
<template>
    <div class="card  my-2 p-0 box-shadow">
                        <div class="row ">
                            <div class="col-md-12 my-2 d-flex">
                                <div class="card-body">
                                    <span class="nav-link2">選擇分類：</span>
                                    <a class="nav-link2 mx-lg-2" href="#">遊樂園</a>
                                    <a class="nav-link2 mx-lg-2" href="#">海生館</a>
                                    <a class="nav-link2 mx-lg-2" href="#">觀光景點</a>
                                </div>
                                <div>
                                    <img style=" height: 65px; width: auto;" src="/src/views/Layout/img/cat.png">
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<style scoped>
    /* 清除超連結預設底線、顏色 */
a{
  text-decoration: none;
  color:gray;
}
.router-link-active{
  text-decoration: none;
}
@media (max-width: 767.98px) {
    a {
      padding: 8px
    }
  }
</style>