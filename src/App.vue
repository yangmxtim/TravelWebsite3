<template>
  <RouterView />
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import axios from "axios";

const permission = ref(null);
const name = ref(null);
const phone = ref(null);
const email = ref(null);

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
      phone.value = response.data.phone;
      email.value = response.data.email;
    })
    .catch((error) => {
      console.error("Error during authorization:", error);
    });
});

provide("permission", permission);
provide("name", name);
provide("phone", phone);
provide("email", email);
</script>

<style scoped>
</style>
