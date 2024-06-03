<template>
  <div class="info-container">
    <h4>姓名：{{ name }}</h4>
    <h4>電話：{{ phone }}</h4>
    <h4>信箱：{{ email }}</h4>
    <h4>帳號：{{ name }}</h4>
    <h4>改密碼</h4>
    <h4>
      <input
        type="password"
        name="old_passwd"
        id="c_passwd"
        placeholder="old password"
        required
      />
    </h4>
    <h4>
      <input
        type="password"
        name="change1_passwd"
        id="c_passwd1"
        placeholder="new password"
        required
      />
    </h4>
    <h4>
      <input
        type="password"
        name="change2_passwd"
        id="c_passwd2"
        placeholder="repeat new password"
        required
      />
    </h4>
    <el-button size="large" type="primary" @click="sendChangePasswordRequest"
      >Change</el-button
    >
    <h4></h4>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { inject } from "vue";
import axios from "axios";
import MembersNav from "../Category/components/MembersNav.vue";

import LayoutHeader from "../Layout/components/LayoutHeader.vue";
import LayoutFooter from "../Layout/components/LayoutFooter.vue";
import Weather from "../Weather/Weather.vue";
import WeatherDate from "../Weather/WeatherDate.vue";

const email = inject("email");
const phone = inject("phone");
const name = inject("name");

const sendChangePasswordRequest = () => {
  const old_passwd = document.getElementById("c_passwd").value;
  const change1_passwd = document.getElementById("c_passwd1").value;
  const change2_passwd = document.getElementById("c_passwd2").value;
  if (change1_passwd != change2_passwd) {
    alert("密碼不一致");
    return;
  } else {
    axios
      .post("http://localhost:8080/member/updateMemberInfo", null, {
        params: {
          newUsername: name.value,
          newEmail: email.value,
          password: old_passwd,
          newPassword: change1_passwd,
        },
        withCredentials: true,
      })
      .then((response) => {
        axios.post("http://localhost:8080/auth/logout", null, {
          withCredentials: true,
        });
        alert("更改" + response.data + "請重新登入");
        window.location.replace("http://localhost:5173/Login");
        // window.location.reload();
      });
  }
};

// const info = ref([]);
// info.value = {
//     "name": "terry",
//     "phone": "0953123123"
// }
</script>
<style scoped>
.info-container {
  border: 1px solid lightgray;
  border-radius: 3px;
  text-align: start;
  padding: 50px;
  padding-top: 3rem;
  min-height: 80vh;
}

h4 {
  margin: 2rem 0;
  font-size: 25px;
}
</style>