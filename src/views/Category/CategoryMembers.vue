<script setup>
import MembersNav from './components/MembersNav.vue';
import WeatherDate from '../Weather/WeatherDate.vue';
import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import Login from '../Login/Login.vue';
import QRcodeTickets from '../QRcode/QRcodeTickets.vue';
import MemberInfo from '../MemberInfo/MemberInfo.vue';
import { inject } from 'vue';
const uid = inject("id");
</script>

<template>
    <!-- 登入驗證 -->
    <div v-if="uid">   
    <LayoutHeader /> 
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <WeatherDate></WeatherDate>
            </div>
            <div class="col-md-9">
                <MembersNav></MembersNav>
                <MemberInfo></MemberInfo>
            </div>
        </div>
    </div> 
    <LayoutFooter/>
    </div>
     <!-- 登入驗證 -->
    <div v-else>
        <Login/>
    </div>
</template>

