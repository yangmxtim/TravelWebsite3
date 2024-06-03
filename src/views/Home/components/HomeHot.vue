<template>
    <div class="container">
            <div class="row py-4">
                <h4 class="py-2">熱門活動</h4>
                <div class="gallery-wrap">
                    <div class="item item-1"></div>
                    <div class="item item-2"></div>
                    <div class="item item-3"></div>
                    <div class="item item-4"></div>
                </div>
            </div>
        </div>
  </template>
  <style scoped>
    .gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30vh;
  gap: 25px;
}

  .item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: flex 0.8s ease;

  &:hover {
      flex: 3;
      cursor: pointer;
  }
}

.item-1 {
  background-image: url('/src/views/Layout/img/p4.jpg');
  border-radius: 10px;
}

.item-2 {
  background-image: url('/src/views/Layout/img/p5.jpg');
  border-radius: 10px;
}

.item-3 {
  background-image: url('/src/views/Layout/img/p6.jpg');
  border-radius: 10px;
}

.item-4 {
  background-image: url('/src/views/Layout/img/p7.jpg');
  border-radius: 10px;
}

</style>