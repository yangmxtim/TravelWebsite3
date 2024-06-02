<template>
  <div
    class="d-flex text-light fixed-top top-0 start-0 align-items-center"
    style="height: 4rem; background-color: orange"
  >
    <span class="d-flex h-100" style="width: 250px">
      <img class="h-50 m-3" src="@/assets/images/seaIsland_logo.png" />
      <img class="h-50 my-3" src="@/assets/images/seaIsland_word.png" />
    </span>

    <el-icon class="icon-btn"><Fold /></el-icon>
    <el-tooltip effect="dark" content="刷新頁面" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh"><Refresh /></el-icon>
    </el-tooltip>
    <div class="ms-auto d-flex align-items-center">
      <el-tooltip effect="dark" content="全螢幕" placement="bottom">
        <el-icon class="me-3 icon-btn" @click="toggle">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown
        class="dropdown d-flex align-items-center justify-content-center mx-3"
        >
        <!-- @command="handleCommand" -->
        <span class="el-dropdown-link d-flex align-items-center text-dark">
          <!-- <el-avatar class="me-2" :size="25" :src="$store.state.user.avatar" />
          {{ $store.state.user.username }} -->
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密碼</el-dropdown-item>
            <el-dropdown-item command="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <el-drawer
    v-model="showDrawer"
    title="修改密碼"
    size="45%"
    :close-on-click-modal="false"
  >
    <span>
      <el-form
        ref="formRef"
        :rules="rules"
        :model="form"
        style="max-width: 100%"
        label-width="80px"
        size="small"
      >
        <el-form-item prop="oldpassword" class="mt-2 w-100" label="舊密碼">
          <el-input
            class="border-light"
            type="text"
            placeholder="請輸入舊密碼"
            v-model="form.oldpassword"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="mt-2" label="新密碼">
          <el-input
            class="border-light"
            type="password"
            placeholder="請輸入密碼"
            v-model="form.password"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="repassword" class="mt-2" label="確認密碼">
          <el-input
            class="border-light"
            type="repassword"
            placeholder="請輸入確認密碼"
            v-model="form.repassword"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="onSubmit"
            class="my-3 bg-primary text-light border-0"
            :loading="loading"
          >
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </span>
  </el-drawer>
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