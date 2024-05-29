<script setup>
import MembersNav from './components/MembersNav.vue';
import NoteList from '../Note/NoteList.vue';
import Weather from '../Weather/Weather.vue';
import QRcodeTickets from '../QRcode/QRcodeTickets.vue';

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <MembersNav></MembersNav>
                <!-- <router-link to="qr">1</router-link> -->
                <QRcodeTickets></QRcodeTickets>
                <!-- <NoteList></NoteList> -->
            </div>
        </div>
    </div> 
</template>

