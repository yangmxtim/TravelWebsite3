<template>
  <LayoutHeader />
  
  
  <Bubble />
  <section>
  </section>
  <Fish />
  <LoginForm />
  <LayoutFooter />
</template>

<script setup>
import LayoutHeader from "../Layout/components/LayoutHeader.vue"
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import Fish from './components/Fish.vue';
import Bubble from './components/Bubble.vue';
import LoginForm from './components/LoginForm.vue';
</script>

<style scoped lang="css" src="./Login.css"></style>


 <!-- <style scoped>

</style> -->
