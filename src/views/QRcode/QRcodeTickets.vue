<template>
    <!-- 登入 -->
    <div v-if="uid">
    <LayoutHeader />
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <WeatherDate></WeatherDate>
            </div>
            <div class="col-md-9">
                <MembersNav></MembersNav>
                <div class="qrcode">
                    <div class="qr-title">name1</div>
                    <vue-qrcode value={{link.value}}></vue-qrcode>
                    { 產品名稱 }
                    <hr>
                    <div class="qr-title">name2</div>
                    <vue-qrcode value={{link.value}}></vue-qrcode>
                    { 產品名稱 }
                    <hr>
                </div>
            </div>

        </div>
    </div>
    <br>
    <LayoutFooter/>
    <!-- 未登入 -->
    </div>
    <div v-else="">
        <Login/>
    </div>



</template>

<script setup>
import VueQrcode from 'vue-qrcode'
// import axios from 'axios';
import Login from "../Login/Login.vue";
import { ref, inject } from 'vue';
import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import WeatherDate from '../Weather/WeatherDate.vue';
import MembersNav from '../Category/components/MembersNav.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
const link = ref();
const ip1 = 'http://10.0.103.138:8080/api/check/3';
const ip2 = 'http://10.0.103.138:8080/api/check/4';
link.value = ip1;
// 確認登入否
const uid = inject("id");


</script>
<style scoped>
.qrcode {
    border: 1px solid lightgray;
    border-radius: 5px;
    min-height: 90vh;
}

img {
    margin-left: 2rem;
    width: 200px;
}

.qr-title {
    margin-left: 3.5rem;
    font-size: 30px;
}
</style>