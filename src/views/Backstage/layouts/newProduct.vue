<template>
  <div class="d-flex p-4">
    <div class="col-7">
      <form @submit.prevent="handleSubmit">
        <div class="d-inlineblock">
          <div class="pb-3 input-group">
            <label class="input-group-text" for="name">產品名稱</label>
            <input class="form-control" type="text" name="name" id="name" 
              v-model="formData.name" placeholder="允許字母、數字和空格，且長度在 1 到 20 個字之間">
          </div>
    
          <div class="pb-3 input-group">
            <label class="input-group-text" for="price">價格</label>
            <input class="form-control" id="price" type="text" name="price" 
              v-model="formData.price" />
            <label class="input-group-text" for="stock">庫存</label>
            <input class="form-control" id="stock" type="text" name="stock" 
              v-model="formData.stock" />
          </div>
    
          <div class="pb-3 input-group">
            <label class="input-group-text" for="type">商品類型</label>
            <select class="form-select" v-model="formData.type" name="type">
              <option value="transport">交通</option>
              <option value="stay">住宿</option>
            </select>
            <label class="input-group-text" for="tag">標籤</label>
            <input class="form-control" v-model="formData.tag" id="tag" type="text" name="tag" />
          </div>
    
          <div v-if="formData.type === 'transport'" class="pb-3 input-group">
            <label class="input-group-text" for="fromTime">出發時間</label>
            <input class="form-control" v-model="formData.fromTime" id="fromTime" type="date" name="fromTome" />
            <label class="input-group-text" for="toTime">到達時間</label>
            <input class="form-control" v-model="formData.toTime" id="toTime" type="date" name="toTime" />
          </div>
          <div v-if="formData.type === 'transport'" class="pb-3 input-group">
            <label class="input-group-text" for="fromPlace">出發地點</label>
            <input class="form-control" v-model="formData.fromPlace" id="fromPlace" type="text" name="fromPlace" />
            <label class="input-group-text" for="toPlace">到達地點</label>
            <input class="form-control" v-model="formData.toPlace" id="toPlace" type="text" name="toPlace" />
          </div>
          <div v-if="formData.type === 'stay'" class="pb-3 input-group">
            <label class="input-group-text" for="addr">住宿地址</label>
            <input class="form-control" v-model="formData.addr" id="addr" type="text" name="addr" />
          </div>
    
          <div class="input-group mb-3">
            <label class="input-group-text" for="image">圖片</label>
            <input type="file" class="form-control" id="image" multiple @change="handleFileUpload">
          </div>
          
          <div class="pb-3 input-group">
            <label class="input-group-text" for="intro">介紹</label>
            <textarea class="form-control" id="intro" style="min-height: 100px;" name="intro"
            v-model="formData.intro" placeholder="允許字母、數字和空格，且長度在 5 到 200 個字之間"></textarea>
          </div>
          <div class="input-group">
            <button class="btn btn-primary form-control" style="max-width: 80px" type="submit">
              新增
            </button>
          </div>
        </div>
      </form>
    </div>
    
    <div class="pe-3" width="20px"></div>
    <!-- 預覽圖片 -->
    <div class="col" style="border: 2px solid lightgray;">
      <div v-for="(image, index) in imagePreviews" :key="index">
        <img :src="image" alt="圖片預覽" style="max-width: 300px;">
      </div>
    </div>
  </div>

  <div class="row">
          <div class="col-lg-12 mx-auto">
            <div class="card">
              <div class="card-header py-3 bg-transparent">
                <div class="d-sm-flex align-items-center">
                  <h5 class="mb-2 mb-sm-0">Add New Product</h5>
                  <div class="ms-auto">
                    <button type="button" class="btn btn-secondary">
                      Save to Draft</button
                    ><button type="button" class="btn btn-primary">
                      Publish Now
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-12 col-lg-8">
                    <div class="card shadow-none bg-light border">
                      <div class="card-body">
                        <form class="row g-3">
                          <div class="col-12">
                            <label class="form-label">Product title</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Product title"
                            />
                          </div>
                          <div class="col-12 col-lg-4">
                            <label class="form-label">SKU</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="SKU"
                            />
                          </div>
                          <div class="col-12 col-lg-4">
                            <label class="form-label">Color</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Color"
                            />
                          </div>
                          <div class="col-12 col-lg-4">
                            <label class="form-label">Size</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Size"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Brand</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Brand"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Images</label
                            ><input class="form-control" type="file" />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Full description</label
                            ><textarea
                              class="form-control"
                              placeholder="Full description"
                              rows="4"
                              cols="4"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none bg-light border">
                      <div class="card-body">
                        <div class="row g-3">
                          <div class="col-12">
                            <label class="form-label">Price</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Price"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Status</label
                            ><select class="form-select">
                              <option>Published</option>
                              <option>Draft</option>
                            </select>
                          </div>
                          <div class="col-12">
                            <label class="form-label">Tags</label
                            ><input
                              type="text"
                              class="form-control"
                              placeholder="Tags"
                            />
                          </div>
                          <div class="col-12">
                            <div class="d-flex align-items-center gap-2">
                              <a
                                href="javascript:;"
                                class="btn btn-sm btn-light border shadow-sm bg-white"
                                >Woman <i class="bi bi-x"></i></a
                              ><a
                                href="javascript:;"
                                class="btn btn-sm btn-light border shadow-sm bg-white"
                                >Fashion <i class="bi bi-x"></i></a
                              ><a
                                href="javascript:;"
                                class="btn btn-sm btn-light border shadow-sm bg-white"
                                >Furniture <i class="bi bi-x"></i
                              ></a>
                            </div>
                          </div>
                          <div class="col-12">
                            <h5>Categories</h5>
                            <div class="category-list">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="Jeans"
                                /><label class="form-check-label" for="Jeans"
                                  >Jeans
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="FormalShirts"
                                /><label
                                  class="form-check-label"
                                  for="FormalShirts"
                                  >Formal Shirts
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="WomenShirts"
                                /><label
                                  class="form-check-label"
                                  for="WomenShirts"
                                  >Women Shirts
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="Electronics"
                                /><label
                                  class="form-check-label"
                                  for="Electronics"
                                  >Electronics
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="SportsShoes"
                                /><label
                                  class="form-check-label"
                                  for="SportsShoes"
                                  >Sports Shoes
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="Mobiles"
                                /><label class="form-check-label" for="Mobiles"
                                  >Mobiles
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--end row-->
                      </div>
                    </div>
                  </div>
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
        </div>

</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'

const formData = ref({
  name: '預設產品名稱',
  intro: '預設介紹文字',
  price: '100',
  stock: '10',
  type: 'transport',
  tag: '預設標籤',
  fromTime: '',
  toTime: '',
  fromPlace: '預設出發地點',
  toPlace: '預設到達地點',
  addr: '預設地址',
  images: [],
});

const imagePreviews = ref([])

const handleFileUpload = (event) => { 
  const files = event.target.files;
  formData.value.images = files; // 儲存選中的檔案

  imagePreviews.value = []; // 清空舊的預覽
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // 檢查檔案大小，這裡假設上限為 5MB
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSizeInBytes) {
        alert(`檔案 "${file.name}" 超出了大小限制 (最大 5MB)，請選擇較小的檔案。`);
        continue; // 跳過處理這個檔案
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        imagePreviews.value.push(reader.result);
      }
    }
  }
}

const handleSubmit = async () => {
  // 驗證產品名稱
  if (!validateProductName(formData.value.name)) {
    alert('請輸入有效的產品名稱');
    return;
  }
  // 驗證價格和庫存
  if (!validateNum(formData.value.price) || !validateNum(formData.value.stock)) {
    alert('請輸入有效的價格和庫存');
    return;
  }
  // 驗證介紹
  if (!validateIntro(formData.value.intro)) {
    alert('請輸入有效的介紹');
    return;
  }

  try {
    const formDataToSend = new FormData();
    for (const key in formData.value) {
      if (key !== 'images') {
        formDataToSend.append(key, formData.value[key]);
      }
    }
    
    // 將圖片添加到formDataToSend中
    for (let i = 0; i < formData.value.images.length; i++) {
      formDataToSend.append('images', formData.value.images[i]);
    }

    const response = await axios.post('http://localhost:8080/upload', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('成功:', response.data);
  } catch (error) {
    console.error('錯誤:', error);
  }
}

const validateProductName = (name) => {
  const regex = /^[a-zA-Z0-9\s]{1,20}$/;
  return regex.test(name);
}

const validateIntro = (intro) => {
  const regex = /^[a-zA-Z0-9\s]{5,200}$/;
  return regex.test(intro);
}

const validateNum = (num) => {
  const regex = /^(100000|[0-9]{1,5})$/;
  return regex.test(num);
}
</script>

<style scoped>
</style>