<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';
</script>

<template>
  <LayoutHeader></LayoutHeader>
  <section>
        <div id="particles">
          <img src="./img/fish1.png" class="fish fish1">
          <img src="./img/fish2.png" class="fish fish2">
          <img src="./img/fish3.png" class="fish fish3">
          <img src="./img/fish4.png" class="fish fish4">
          <img src="./img/fish5.png" class="fish fish5">
          <img src="./img/fish6.png" class="fish fish6">
          <img src="./img/fish7.png" class="fish fish7">
          <img src="./img/fish8.png" class="fish fish8">
          <img src="./img/fish9.png" class="fish fish9">
          <img src="./img/fish10.png" class="fish fish10">
          <img src="./img/fish11.png" class="fish fish11">
          <img src="./img/fish12.png" class="fish fish12">
          <img src="./img/fish13.png" class="fish fish13">
        </div>
      </section>
      <ul class="bubble">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

  <div class="login">
      <div class="wrapperr">
        <div class="card-switch">
          <label class="switch">
            <input class="toggle" type="checkbox" v-model="isLogin" />
            <span class="slider"></span>
            <span class="card-side"></span>
            <div class="flip-card__inner">
              <div class="flip-card__front">
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col"><img src="/src/views/Layout/img/logo.png" style="width: 60%;" /></div>
                </div>
                <form @submit.prevent="handleRegister" class="flip-card__form">
                  <input
                    type="text"
                    placeholder="請輸入姓名"
                    v-model="registerName"
                    class="flip-card__input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="請輸入信箱"
                    v-model="registerAccount"
                    class="flip-card__input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="請輸入密碼"
                    v-model="registerPassword"
                    class="flip-card__input"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="請輸入電話"
                    v-model="registerPhone"
                    class="flip-card__input"
                    required
                  />
                  <button class="flip-card__btn">註冊</button>
                </form>
              </div>
              <div class="flip-card__back">
               
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col"><img src="/src/views/Layout/img/logo.png" style="width: 60%;" /></div>
                </div>               
                <form @submit.prevent="handleLogin" class="flip-card__form">
                  <input
                    type="text"
                    placeholder="請輸入姓名"
                    v-model="loginAccount"
                    class="flip-card__input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="請輸入密碼"
                    v-model="loginPassword"
                    class="flip-card__input"
                    required
                  />
                  <button class="flip-card__btn">登入</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>

<script>
import axios from "axios";
//test pinia
import { mapStores } from "pinia";
import {useAuthenticationStore} from '@/stores/authentication'


export default {
  data() {
    return {
      isLogin: true,
      loginAccount: "",
      loginPassword: "",
      registerName: "",
      registerAccount: "",
      registerPassword: "",
    };
  },
  computed: {
    ...mapStores(useAuthenticationStore)
  },
  methods: {
    handleLogin() {
      axios
        .post("http://localhost:8080/auth/login", null, {
          params: { username: this.loginAccount, password: this.loginPassword },
          withCredentials: true,
        })
        .then((response) => {
          alert("登入"+ response.data);
          response.data === "Success!"
            ? window.location.replace("/")
            : window.location.reload();
        });
      console.log("Login with", this.loginAccount, this.loginPassword);
      this.authenticationStore.credCredentials = 20;
      console.log(this.authenticationStore);
      console.log(this.authenticationStore.credCredentials);
    },
    handleRegister() {
      // Handle register logic here
      axios
        .post("http://localhost:8080/member/register", null, {
          params: {
            username: this.registerName,
            email: this.registerAccount,
            password: this.registerPassword,
            phone: this.registerPhone,
          },
          withCredentials: true,
        })
        .then((response) => {
          alert(response.data);
          response.data === "Success!"
            ? window.location.replace("/Login")
            : window.location.reload();
        });
      console.log(
        "Register with",
        this.registerName,
        this.registerAccount,
        this.registerPassword
      );
    },
  },
};
</script>


<style scoped lang="css" src="./Login.css"></style>
