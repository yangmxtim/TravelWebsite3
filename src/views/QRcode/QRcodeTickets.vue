<template>
    <div>
        <vue-qrcode :value= link></vue-qrcode>
    </div>
</template>
<script setup>
import VueQrcode from 'vue-qrcode'
import axios from 'axios';
import { ref } from 'vue';
const link = ref();
// const ip = 'http://192.168.0.2:5173/qrdone/?i=' ;
const ip = 'http://10.0.103.138:8080/api/check/3';
 
const random = Math.floor(Math.random() * 1000000);
link.value = ip;
console.log(link.value);


</script>