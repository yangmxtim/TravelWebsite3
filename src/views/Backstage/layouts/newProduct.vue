<template>
  <div class="row m-4">
    <form>
      <div class="col-lg-12 mx-auto">
        <div class="card">
          <div class="card-header py-3 bg-transparent">
            <div class="d-sm-flex align-items-center">
              <h5 class="mb-2 mb-sm-0">新增商品</h5>
              <!-- <div class="ms-auto">
                <button type="submit" class="btn btn-primary">新增</button>
              </div> -->
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-12 col-lg-8">
                <div class="card shadow-none bg-light border">
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-12">
                        <div class="d-flex">
                          <label class="form-label me-2 " for="name"
                            >產品名稱</label
                          >
                          <!-- <div class="ms-auto d-inline">
                            <button type="button" class="btn btn-warning mb-3">
                              匯入主產品資料
                            </button>
                          </div> -->
                        </div>
                        <input
                          required
                          autofocus
                          class="form-control"
                          type="text"
                          name="name"
                          id="name"
                          v-model="formData.name"
                          placeholder="允許字母、數字和空格，且長度在 1 到 20 個字之間"
                        />
                      </div>

                      <div class="col-12 col-lg-4">
                        <label class="form-label" for="stock">庫存</label>
                        <input
                          required
                          class="form-control"
                          id="stock"
                          type="text"
                          name="stock"
                          v-model="formData.stock"
                        />
                      </div>
                      <div class="col-12 col-lg-4">
                        <label class="form-label" for="type">商品類型</label>
                        <select
                          class="form-select"
                          v-model="formData.type"
                          id="type"
                          name="type"
                        >
                          <option value="transport">交通</option>
                          <option value="stay">住宿</option>
                          <option value="tourist">景點門票</option>
                        </select>
                      </div>
                      <div class="col-12 col-lg-4">
                        <label class="form-label" for="phone">電話</label>
                        <input
                          required
                          class="form-control"
                          id="phone"
                          type="text"
                          name="phone"
                          v-model="formData.phone"
                        />
                      </div>
                      <div class="col-12 col-lg-4">
                        <label class="form-label" for="tag">標籤</label>
                        <input
                          class="form-control"
                          id="tag"
                          type="text"
                          name="tag"
                          v-model="formData.tag"
                        />
                      </div>
                      <div class="col-12 col-lg-8">
                        <label class="form-label" for="addr">地址</label>
                        <input
                          required
                          class="form-control"
                          id="addr"
                          type="text"
                          name="addr"
                          v-model="formData.addr"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="facility">設施</label
                        ><input
                          class="form-control"
                          id="facility"
                          type="text"
                          name="facility"
                          v-model="formData.facility"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="image">主要圖片</label>
                        <input
                          required
                          type="file"
                          class="form-control"
                          id="image"
                          accept="image/*"
                          @change="(event) => handleFileUpload(event, 1)"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="intro">介紹</label>
                        <textarea
                          required
                          class="form-control"
                          id="intro"
                          style="min-height: 100px"
                          name="intro"
                          v-model="formData.intro"
                          placeholder="允許字母、數字和空格，且長度在 5 到 200 個字之間"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        @click.prevent="handleSubmit"
                      >
                        新增
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="card shadow-none bg-light border">
                  <div class="card-body">
                    <div class="row g-3">
                      <div class="col-12">
                        <label class="form-label" for="detailName"
                          >方案名稱</label
                        >
                        <input
                          required
                          class="form-control"
                          id="detailName"
                          type="text"
                          name="detailName"
                          v-model="formData.detailName"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="price">價格</label>
                        <input
                          class="form-control"
                          id="price"
                          type="text"
                          name="price"
                          v-model="formData.price"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="specification"
                          >規格</label
                        >
                        <input
                          class="form-control"
                          id="specification"
                          type="text"
                          name="specification"
                          v-model="formData.specification"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="detailImg"
                          >方案圖片</label
                        >
                        <input
                          type="file"
                          class="form-control"
                          id="detailImg"
                          accept="image/*"
                          @change="(event) => handleFileUpload(event, 2)"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label" for="detailIntro">介紹</label>
                        <textarea
                          class="form-control"
                          id="detailIntro"
                          style="min-height: 100px"
                          name="detailIntro"
                          v-model="formData.detailIntro"
                          placeholder="允許字母、數字和空格，且長度在 5 到 200 個字之間"
                        ></textarea>
                      </div>
                    </div>
                    <!--end row-->
                  </div>
                </div>
                <!-- 預覽圖片 -->
                <div class="d-flex">
                  <div
                    v-for="(image, index) in imagePreviews"
                    :key="index"
                    class="mt-3 me-4"
                    style="
                      border: 2px solid lightgray;
                      height: 150px;
                      width: 150px;
                      position: relative;
                    "
                  >
                    <p class="m-0 text-center" v-if="index == 0">主圖片</p>
                    <p class="m-0 text-center" v-if="index == 1">方案圖片</p>
                    <img
                      :src="image"
                      alt="圖片預覽"
                      class="product-img"
                      style="max-width: 150px"
                    />
                    <!-- <button @click="removeImage" class="close-button">
                      &times;
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
            <!--end row-->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const formData = ref({
  name: "預設產品名稱",
  stock: "10",
  type: "transport",
  phone: "0910123456",
  tag: "預設標籤",
  addr: "預設地址",
  facility: "預設設施",
  images: [],
  intro: "預設介紹文字",

  detailName: "方案一",
  price: "100",
  specification: "可以空白",
  detailImg: [],
  detailIntro: "預設細節介紹文字",
});

const imagePreviews = ref([]);
// let validFiles = []; // 用於儲存符合大小限制的檔案

const handleFileUpload = (event, position) => {
  const file = event.target.files[0];
  const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

  if (file && file.size <= maxSizeInBytes) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imagePreviews.value[position - 1] = reader.result;
    };

    if (position === 1) {
      formData.value.images = file;
    } else if (position === 2) {
      formData.value.detailImg = file;
    }
  } else {
    alert(`檔案 "${file.name}" 超出了大小限制 (最大 5MB)，請選擇較小的檔案。`);
  }
};

const handleSubmit = async () => {
  // 驗證產品名稱
  if (!validateProductName(formData.value.name)) {
    alert("請輸入有效的產品名稱");
    return;
  }
  // 驗證價格和庫存
  if (
    !validateNum(formData.value.price) ||
    !validateNum(formData.value.stock)
  ) {
    alert("請輸入有效的價格和庫存");
    return;
  }
  // 驗證介紹
  if (!validateIntro(formData.value.intro)) {
    alert("請輸入有效的介紹");
    return;
  }
  if (
    formData.value.images.length === 0 ||
    formData.value.detailImg.length === 0
  ) {
    alert("請上傳至少一張圖片");
    return;
  }
  try {
    const formDataToSend = new FormData();
    for (const key in formData.value) {
      if (key !== "images" && key !== "detailImg") {
        formDataToSend.append(key, formData.value[key]);
      }
    }
    formDataToSend.append("images", formData.value.images);
    formDataToSend.append("detailImg", formData.value.detailImg);

    const response = await axios.post(
      "http://localhost:8080/upload",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert(response.data);
  } catch (error) {
    console.error("錯誤:", error);
  }
};

const validateProductName = (name) => {
  const regex = /^[\u4e00-\u9fa5a-zA-Z0-9\s]{1,20}$/;
  return regex.test(name);
};

const validateIntro = (intro) => {
  const regex = /^[\u4e00-\u9fa5a-zA-Z0-9\s]{5,200}$/;
  return regex.test(intro);
};

const validateNum = (num) => {
  const regex = /^(100000|[0-9]{1,5})$/;
  return regex.test(num);
};
</script>

<style scoped>
.close-button {
  position: absolute;
  z-index: 1050;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  line-height: 24px;
  padding: 0;
}

.product-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
