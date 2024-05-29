<template>
    <LayoutHeader />
    <div class="container">
        <div class="row">
            <div class="col">
                <MembersNav></MembersNav>
                <br>
                <h4>姓名：{{ name }}</h4>
                <h4>電話：{{ name }}</h4>
                <h4>信箱：{{ name }}</h4>
                <h4>帳號：{{ name }}</h4>
            </div>
        </div>
    </div> 
    <LayoutFooter />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MembersNav from '../Category/components/MembersNav.vue';

import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import Weather from '../Weather/Weather.vue'

const name=ref('names');
</script>