<template>
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0" type="search" placeholder="Search">
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="./img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="./img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="./img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="./img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">My Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="#" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar End -->
</template>
  
<script setup>
import { ref, reactive } from "vue";
// import { logout, updatapassword } from "@/views/Backstage/api/manager";
import { useRouter } from "vue-router";
import { useFullscreen } from "@vueuse/core";

const {
  // 是否全螢幕狀態
  isFullscreen,
  // 切換全螢幕
  toggle,
} = useFullscreen();

const router = useRouter();


// 修改密碼
const showDrawer = ref(false);

const form = reactive({
  oldpassword: "",
  password: "",
  repassword: "",
});

const rules = {
  oldpassword: [{ required: true, message: "舊密碼不能空白", trigger: "blur" }],
  password: [{ required: true, message: "新密碼不能空白", trigger: "blur" }],
  repassword: [
    { required: true, message: "確認密碼不能空白", trigger: "blur" },
  ],
};

const formRef = ref(null);

const loading = ref(false);

// const onSubmit = () => {
//   formRef.value.validate((valid) => {
//     if (!valid) {
//       return false;
//     }
//     loading.value = true;
//     updatapassword(form)
//       .then((res) => {
//         toast("修改密碼成功，請重新登入");
//         store.dispatch("logout");
//         // 跳轉回登入頁面
//         router.push("/login");
//       })
//       .finally(() => {
//         loading.value = false;
//       });
//   });
// };

// const handleCommand = (c) => {
//   switch (c) {
//     case "logout":
//       handleLogout();
//       break;
//     case "rePassword":
//       showDrawer.value = true;
//       break;
//   }
// };

const handleRefresh = () => location.reload();

// function handleLogout() {
//   showModal("是否登出?").then((res) => {
//     logout().finally(() => {
//       store.dispatch("logout");

//       // 跳轉回登入頁面
//       router.push("/login");

//       // 提示登出成功
//       toast("登出成功");
//     });
//   });
// }
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