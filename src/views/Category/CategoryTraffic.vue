<script setup>
import CategoryAside from './components/CategoryAside.vue';
import TrafficNav from './components/TrafficNav.vue';
import CategorySection from './components/CategorySection.vue'; 
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 " data-aos="fade-up">
                <CategoryAside></CategoryAside>
            </div>
            <div class="col-md-9">
                <TrafficNav></TrafficNav>
                <CategorySection></CategorySection>
            </div>

        </div>
    </div> 
</template>

