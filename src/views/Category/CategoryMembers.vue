<script setup>
import MembersNav from './components/MembersNav.vue';
import WeatherDate from '../Weather/WeatherDate.vue';
import QRcodeTickets from '../QRcode/QRcodeTickets.vue';
import MemberInfo from '../MemberInfo/MemberInfo.vue';

</script>

<template>
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
</template>

