<template>
  <el-form
    ref="formRef"
    :model="form"
    label-width="auto"
    style="max-width: 900px"
  >
    <el-form-item label="商品名稱">
      <el-input v-model="form.name" />
    </el-form-item>

    <div class="d-flex">
      <el-form-item class="col" label="價格">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item class="col" label="價格">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item class="col" label="庫存">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item class="col ps-4" label="商品類型">
        <el-select v-model="form.region1" placeholder="請選擇類型">
          <el-option label="交通" value="交通" />
          <el-option label="住宿" value="住宿" />
          <el-option label="其他" value="其他" />
        </el-select>
      </el-form-item>
    </div>

    <div v-if="form.region1 && form.region1 === '交通'" class="d-flex">
      <el-form-item class="col" label="出發地" :rules="require">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item class="col" label="到達地">
        <el-input v-model="form.name" />
      </el-form-item>
    </div>
    <div v-if="form.region1 && form.region1 === '住宿'" class="d-flex">
      <el-form-item class="col" label="住宿地址">
        <el-input v-model="form.name" />
      </el-form-item>
    </div>

    <el-form-item label="商品說明">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item label="商品圖片">
      <el-upload
        :file-list="fileList"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :before-upload="handleBeforeUpload"
        :http-request="uploadToServer"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img class="full-width" :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">新增</el-button>
      <router-link to="/productManage">
        <el-button>取消</el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>

<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
import { Plus } from "@element-plus/icons-vue";

const require = {
  required: true,
  message: "domain can not be null",
  trigger: "blur",
};

// do not use same name with ref
const form = reactive({
  name: "",
  region1: "",
  region2: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const formRef = ref(null);
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 表单验证通过，可以提交表单
      console.log("表单验证通过，提交表单");
    } else {
      // 表单验证失败，不提交表单
      console.log("表单验证失败，不提交表单");
    }
  });
};

// 圖片
const fileList = ref([]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};

const handleRemove = (file, fileList) => {
  console.log("移除文件:", file, fileList);
};

const handleBeforeUpload = (file) => {
  file.url = URL.createObjectURL(file);
  fileList.value.push(file);
  return false; // 阻止自動上傳，手動處理上傳
};

const uploadToServer = async ({ file }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "https://your-api-endpoint.com/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data && response.data.url) {
      // 將返回的URL更新到文件對象
      file.url = response.data.url;
      console.log("上傳成功:", response.data.url);
    }
  } catch (error) {
    console.error("上傳失敗:", error);
  }
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>