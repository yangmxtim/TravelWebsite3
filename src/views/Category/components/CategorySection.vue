<template>
    <div class="card my-2 p-0 box-shadow">
        <div class="row">
            <div class="col-md-12 my-2">
                <div class="card-body d-flex">
                    <div class="col-md-4 px-3">
                        <div class="img-container">
                            <img :src="goods.img" class="img-fluid fixed-size">
                        </div>
                    </div>
                    <div class="col-md-8 product-context position-relative"> <!-- 修改这里 -->
                        <h4 class="card-title pb-3">{{goods.name}}</h4>
                        <p class="card-text">{{goods.introduction}}</p><br>
                        <router-link :to="{ name: 'product', params: { id: goods.product_id } }">
                            <p class="card-text text-end position-absolute bottom-0 end-0 mb-2 me-2">
                                <small class="text-muted">了解詳情</small>
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-container {
    width: 100%;
    height: 230px; /* 你可以根据需求调整高度 */
    overflow: hidden;
    border-radius: 10px;
}
img.fixed-size {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.product-context {
    position: relative;
}
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  goods: {
    type: Object,
    required: false
  }
});
</script>
