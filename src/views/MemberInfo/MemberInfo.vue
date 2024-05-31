<template>
    <LayoutHeader />

    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <WeatherDate></WeatherDate>
            </div>
            <div class="col-md-9">
                <MembersNav></MembersNav>
                <div class="info-container">
                    <h4>姓名：{{ info.name }}</h4>
                    <h4>電話：{{ info.phone }}</h4>
                    <h4>信箱：{{ name }}</h4>
                    <h4>帳號：{{ name }}</h4>
                    <h4></h4>
                </div>
            </div>

        </div>
    </div>
    <br>


    <LayoutFooter />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MembersNav from '../Category/components/MembersNav.vue';


import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import Weather from '../Weather/Weather.vue'
import WeatherDate from '../Weather/WeatherDate.vue'

const info = ref([]);
info.value = {
    "name": "terry",
    "phone": "0953123123"
}
</script>
<style scoped>
.info-container {
    border: 1px solid lightgray;
    border-radius: 3px;
    text-align: start;
    padding: 50px;
    padding-top: 3rem;
    min-height: 80vh;
}

h4 {
    margin: 2rem 0;
    font-size: 25px;
}
</style>