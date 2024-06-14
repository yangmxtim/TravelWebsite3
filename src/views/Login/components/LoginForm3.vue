<template>
  <div class="login">
    <div class="wrapperr">
      <div class="card-switch">
        <label class="switch">
          <input class="toggle" type="checkbox" v-model="isLogin" />
          <span class="slider"></span>
          <span class="card-side"></span>
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <FormHeader />
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
              <FormHeader />
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
                <div>
                  <input
                    type="text"
                    class="flip-card__input"
                    v-model="dynamicValidateForm.code"
                  />
                  <img
                    src="captchaImage"
                    alt="圖片無法載入"
                    @click="changeVerify()"
                  />
                </div>
                <button class="flip-card__btn">登入</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { validEmail } from "@/utils/validate";
import axios from "axios";
import FormHeader from "./FormHeader.vue";
import { useAuthenticationStore } from "@/stores/authentication";
import { mapStores } from "pinia";

const isLogin = ref(true);
const loginAccount = ref("");
const loginPassword = ref("");
const registerName = ref("");
const registerAccount = ref("");
const registerPassword = ref("");
const registerPhone = ref("");
const dynamicValidateForm = ref({
  code: "",
});

const authenticationStore = mapStores(useAuthenticationStore);

const changeVerify = () => {
  axios.get("http://localhost:8080/code/verify",{
    responseType: "arraybuffer",
  })
  .then((response) => {
    console.log(response);
    const imageBase64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    this.captchaImage = `data:image/jpeg;base64,${imageBase64}`;
  })
  .catch((error) => {
    console.log(error);
  });
};

const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      null,
      {
        params: { username: loginAccount.value, password: loginPassword.value },
        withCredentials: true,
      }
    );
    alert("登入" + response.data);
    response.data === "Success!"
      ? window.location.replace("/")
      : window.location.reload();
  } catch (error) {
    console.error("Login error", error);
  }
};

const handleRegister = async () => {
  if (!validEmail(registerAccount.value)) {
    alert("信箱格式錯誤");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/member/register",
      null,
      {
        params: {
          username: registerName.value,
          email: registerAccount.value,
          password: registerPassword.value,
          phone: registerPhone.value,
        },
        withCredentials: true,
      }
    );
    alert(response.data);
    response.data === "Success!"
      ? window.location.replace("/Login")
      : window.location.reload();
  } catch (error) {
    console.error("Register error", error);
  }
};

</script>
  
  <style scoped>
/* 將相關樣式放在這裡 */
.login {
  margin-top: 35vh;
  margin-bottom: 60vh;
  z-index: 1;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  font-family: inherit;
}

.wrapperr {
  --input-focus: #7191ce;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #ffffff;
  --bg-color-alt: #666;
  --main-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* switch card */
.switch {
  transform: translateY(-200px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 50px;
  height: 20px;
}

.card-side::before {
  position: absolute;
  content: "註冊";
  left: -70px;
  top: 0;
  width: 100px;
  text-decoration: underline;
  color: var(--font-color);
  font-weight: 600;
}

.card-side::after {
  position: absolute;
  content: "登入";
  left: 70px;
  top: 0;
  width: 100px;
  text-decoration: none;
  color: var(--font-color);
  font-weight: 600;
}

.toggle {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-colorcolor);
  transition: 0.3s;
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  left: -2px;
  bottom: 2px;
  background-color: var(--bg-color);
  box-shadow: 0 3px 0 var(--main-color);
  transition: 0.3s;
}

.toggle:checked + .slider {
  background-color: var(--input-focus);
}

.toggle:checked + .slider:before {
  transform: translateX(30px);
}

.toggle:checked ~ .card-side:before {
  text-decoration: none;
}

.toggle:checked ~ .card-side:after {
  text-decoration: underline;
}

/* card */
.flip-card__inner {
  width: 300px;
  height: 350px;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.toggle:checked ~ .flip-card__inner {
  transform: rotateY(180deg);
}

.toggle:checked ~ .flip-card__front {
  box-shadow: none;
}

.flip-card__front,
.flip-card__back {
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.564);
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}

.flip-card__back {
  width: 100%;
  transform: rotateY(180deg);
}

.flip-card__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  margin: 20px 0 20px 0;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: var(--main-color);
}

.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
  background-color: #ffffffb4;
}

.flip-card__input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid var(--input-focus);
}

.flip-card__btn:active,
.button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.flip-card__btn {
  margin: 20px 0 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
  background-color: #ffffffb4;
}
</style>
  