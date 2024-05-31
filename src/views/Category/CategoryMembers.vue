<script setup>
import MembersNav from './components/MembersNav.vue';
import NoteList from '../Note/NoteList.vue';
import WeatherDate from '../Weather/WeatherDate.vue';
import QRcodeTickets from '../QRcode/QRcodeTickets.vue';

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <WeatherDate></WeatherDate>
            </div>
            <div class="col-md-9">
                <MembersNav></MembersNav>
                <QRcodeTickets></QRcodeTickets>
            </div>
        </div>
    </div> 
</template>

