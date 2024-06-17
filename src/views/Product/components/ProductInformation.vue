<template>
    <div class="container">
        <h4>設施</h4>
        <p>{{ product.facility }}</p><br>
        <h4>資訊</h4>
        <div class="row">
            <div class="col-3">
                <div class="map"><br><br><br><br>
                    <button type="button" class="btn btn-outline-primary" @click="openMap">查看地圖</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const openMap = () => {
  const address = props.product.address;
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  window.open(url, '_blank');
};
</script>

<style scoped>
/* 地圖 */
.map {
    height: 25vh;
    background-image: url("/src/views/Layout/img/map.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
</style>
