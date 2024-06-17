<template>
  <div>
    <f-menu></f-menu>
    <div class="content" style="background-color:darkgrey;">
      <f-header></f-header>
      <router-view class=""></router-view>
    </div>
    
  </div>
</template>

<script setup>
import "@/views/Backstage/assets/css/backStyle.css";
import FHeader from "./components/FHeader.vue";
import FMenu from "./components/FMenu.vue";
import { ref, provide, onMounted } from "vue";
import axios from "axios";
import router from '@/router';

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
      console.log(permission.value)
      if(permission.value !== "admin"){
        router.push("/");
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

<style>
/* 載入進度條&轉圈圈 */
#nprogress .bar {
  /* background-color: #f4f4f4 !important; */
  height: 3px !important;
}
</style>