<template>
    <a href="#" id="pagetop">
        <img src="./img/character_fish_ika.png" class="top-image">
        <p class="top-text">TOP</p>
    </a>
</template>

<style scoped>
#pagetop {
    position: fixed; /* 固定定位 */
    right: 20px; /* 右邊界 */
    bottom: 20px; /* 下邊界 */
    display: block; /* 顯示為塊級元素 */
    width: 80px; /* 寬度 */
    height: 80px; /* 高度 */
    z-index: 9999; /* 確保圖片在最上層 */
}

.top-image {
    width: 100%; /* 圖片寬度為容器寬度 */
    height: 100%; /* 圖片高度為容器高度 */
    position: absolute; /* 絕對定位 */
    top: 0;
    left: 0;
}

.top-text {
    position: absolute; /* 絕對定位 */
    top: 40%; /* 垂直居中 */
    left: 50%; /* 水平居中 */
    transform: translate(-50%, -50%); /* 將元素移動到完全居中 */
    color: black; /* 文字顏色 */
    z-index: 10000; /* 確保文字在圖片上方 */
}
</style>
