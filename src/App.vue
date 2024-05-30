<template>
  <RouterView />
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import axios from "axios";

const permission = ref(null);
const name = ref(null);

onMounted(() => {
  axios
    .post("http://localhost:8080/authorize", null, {
      withCredentials: true,
    })
    .then((response) => {
      permission.value = response.data;
    })
    .catch((error) => {
      console.error("Error during authorization:", error);
    });
  axios
    .post("http://localhost:8080/member/requestMemberInfo", null, {
      withCredentials: true,
    })
    .then((response) => {
      name.value = response.data.username;
    })
    .catch((error) => {
      console.error("Error during authorization:", error);
    });
});

provide("permission", permission);
provide("name", name);
</script>

<style scoped>
</style>
