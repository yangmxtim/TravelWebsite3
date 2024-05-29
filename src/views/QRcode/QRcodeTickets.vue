<template>
    <div class="qrcode">
        <div class="qr-title">name1</div>
        <vue-qrcode value= {{link.value}}></vue-qrcode>
        { 產品名稱 }
        <hr>
        <div class="qr-title">name2</div>
        <vue-qrcode value= {{link.value}}></vue-qrcode>
        { 產品名稱 }
        <hr>
    </div>
</template>

<script setup>
import VueQrcode from 'vue-qrcode'
// import axios from 'axios';
import { ref } from 'vue';
const link = ref();
const ip1 = 'http://10.0.103.138:8080/api/check/3' ;
const ip2 = 'http://10.0.103.138:8080/api/check/4' ;
link.value = ip1;


</script>
<style scoped>
    .qrcode{
        border: 1px solid lightgray;
        border-radius: 5px;
        min-height: 90vh;
    }
    img{
        margin-left: 2rem;
        width: 200px;
    }
    .qr-title{
        margin-left: 3.5rem;
        font-size: 30px;
    }
    
</style>