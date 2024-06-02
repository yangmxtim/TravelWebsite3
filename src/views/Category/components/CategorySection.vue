<!-- 產品列表 -->
<template>
    <div class="card  my-2 p-0 box-shadow">
                        <div class="row">
                            <div class="col-md-12 my-2">
                                <div class="card-body d-flex">
                                    <div class="col-md-4 px-3">
                                        <img :src="goods.img" class="img-fluid">
                                    </div>
                                    <div class="col-md-8 product-context">
                                        <h4 class="card-title pb-3">{{goods.name}}</h4>
                                        <p class="card-text">{{goods.introduction}}</p><br>
                                        <router-link :to="{ name: 'product', params: { id: goods.product_id } }">
                                                <p class="card-text text-end"><small class="text-muted">了解詳情</small></p>
                                        </router-link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<style scoped>
    img{
        border-radius: 10px;
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