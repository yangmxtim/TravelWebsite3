<template>
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"style="border: 2px solid lavender">
    <a
      @click.prevent="this.$router.push('/')"
      class="navbar-brand d-flex d-lg-none me-4"
    >
      <h2 class="text-primary mb-0">
        <img style="height: 1.2em" src="@/assets/images/seaIsland_logo.png" />
      </h2>
    </a>
    <a
      href="#"
      class="sidebar-toggler flex-shrink-0 d-xl-none"
    >
      <i class="fa fa-bars"></i>
    </a>
    <!-- <form class="d-none d-md-flex ms-4">
      <input class="form-control border-0" type="search" placeholder="Search" />
    </form> -->
    <div class="navbar-nav align-items-center ms-auto">
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <!-- <img class="rounded-circle me-lg-2" src="./img/user.jpg" alt="" style="width: 40px; height: 40px;"> -->
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span class="d-none d-lg-inline-flex">{{ name }}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
        >
          <!-- <a @click="getMemberInfo" class="dropdown-item">會員資料</a> -->
          <!-- <a href="#" class="dropdown-item">Settings</a> -->
          <a @click="logout" class="dropdown-item">登出</a>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { inject } from "vue";

const router = useRouter();
const responseStatus = ref("");

const logout = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/logout",
      null,
      {
        withCredentials: true,
      }
    );
    responseStatus.value = response.data;
    alert("登出" + response.data);
    window.location.replace("/");
    window.location.reload();
  } catch (error) {
    console.error("Error during the POST request:", error);
    responseStatus.value = "Request failed";
    alert("登出失敗");
  }
};

const name = inject("name");
const permission = inject("permission");

</script>

<style scoped>
.icon-btn {
  width: 42px;
  height: 64px;
  color: black;
}
.icon-btn:hover {
  background-color: burlywood;
  cursor: pointer;
}
.dropdown {
  cursor: pointer;
  height: 64px;
}
</style>
