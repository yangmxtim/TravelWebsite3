<template>
  <RouterView />
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import axios from "axios";
import router from './router';
import { ElMessage } from "element-plus";

const permission = ref(null);
const name = ref(null);
const phone = ref(null);
const email = ref(null);
const id = ref(null);

onMounted(() => {
  axios
    .post("http://localhost:8080/authorize", null, {
      withCredentials: true,
    })
    .then((response) => {
      permission.value = response.data;
      if(permission.value === "admin"){
        router.push("/backMain");
      }
      if(permission.value == "member"){
        ElMessage.success("登入成功");
      }
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
      id.value = response.data.id;
      
    })
    .catch((error) => {
      console.error("Error during authorization:", error);
    });
});

provide("permission", permission);
provide("name", name);
provide("phone", phone);
provide("email", email);
provide("id", id);
</script>

<style scoped>
</style>
