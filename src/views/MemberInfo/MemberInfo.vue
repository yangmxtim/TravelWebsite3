<template>
  <div class="info-container">
    <el-upload
    class="upload-avatar"
    action="http://localhost:8080/member/uploadImage"
    :data="{memberID:uid}"
    :on-success="handleUploadSuccess"
    :on-error="handleUploadError"
    :show-file-list="false"
    :before-upload="beforeUpload"
    accept=".jpg, .png, .jpeg"
    >
    <img v-if="imageUrl" :src="imageUrl" width="200px" height="200px">
    <img v-else src="/src/views/Layout/img/cat.png" >
    </el-upload>
    <h4>姓名：{{ name }}</h4>
    <h4>帳號：{{ name }}</h4> 
    <h4>電話：{{ phone }}</h4>
    <h4>信箱：{{ email }}</h4>
    <br><br>
    <el-button v-show="!showChangePWD" size="large" @click="changePWDdisplay">修改密碼</el-button>
    <div v-show="showChangePWD">
    <h4>修改密碼</h4>
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
    <el-button size="large" @click="sendChangePasswordRequest"
      >確認</el-button
    >
    <el-button size="large" @click="changePWDdisplay"
      >取消</el-button
    >
    </div>
    <h4></h4>
  </div>
  
</template>
<script setup>
import { ref, onMounted, warn } from "vue";
import { inject } from "vue";
import axios from "axios";

const email = inject("email");
const phone = inject("phone");
const name = inject("name");
const uid = inject("id");
const imageUrl = ref('');
const showChangePWD = ref(false);
const changePWDdisplay = () => {
  showChangePWD.value = !showChangePWD.value
}

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
  showChangePWD.value = !showChangePWD.value
};

const loadImage = async() => {
  try {
    const response = await axios.get(`http://localhost:8080/member/loadImage/${uid.value}`, { responseType: 'blob' });
    if (imageUrl.value) {
      URL.revokeObjectURL(imageUrl.value);
    }
    const url = URL.createObjectURL(response.data);
    imageUrl.value = url
  } catch (error) {
    console.error('Error fetching photo:', error);

  }
};
const beforeUpload = (file) => {
  const fileName = file.name.substring(file.name.lastIndexOf('.')+1).toLowerCase();
  const size = file.size/1024/1024;
  if(fileName === "jpg" || fileName === "jpeg" || fileName === "png"){
    console.log('file : '+ file);
  }else{
    window.alert('圖片格式只能為jpg, jpeg, png');
    return false;
  }
  console.log(size);
  if(size > 1){
    window.alert('圖片大小請小於3.5MB')
    return false;
  }

}

const handleUploadSuccess =  async (response) => {
  console.log('Upload success:', response);

  await loadImage();
};
const handleUploadError =  async (response) => {
  window.alert('請選擇jpg或png檔案的圖片')
};
onMounted(async () => {
  await loadImage();
});





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

/* 
avatar css
 */
.upload-avatar{
  width: 200px;
  height: 200px; 
  border-radius: 50%; 
  overflow: hidden; 
  margin-bottom: 30px; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border: 1px solid lightgrey;

  
}
.upload-avatar:hover{
  background-color: beige;
}

</style>