<template>
  <div class="m-4">
    <!-- addProduct start -->
    <!-- <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-lg-3 col-xl-2 d-flex">
            <button
              @click.prevent="this.$router.push('newProduct')"
              class="btn btn-success"
            >
              新增商品
            </button>
          </div>
          <div class="col-lg-9 col-xl-10">
            <form class="float-lg-end">
              <div class="row row-cols-lg-auto g-2">
                <div class="col-12">
                  <a href="javascript:;" class="btn btn-light mb-3 mb-lg-0"
                    ><i class="fa-solid fa-file-export"></i>匯出</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
    <!-- addProduct end -->
  
    <!-- grid start -->
    <div class="card mt-4">
      <div class="card-header py-3">
        <div class="row g-3 align-items-center">
          <div class="col-lg-3 col-md-6 me-auto">
            <div class="ms-auto position-relative">
              <div
                class="position-absolute top-50 translate-middle-y search-icon px-3"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                @keypress.enter="searchByMultiStr(currentPage)"
                v-model="searchText"
                class="form-control ps-5"
                type="text"
                placeholder="搜尋商品"
              />
            </div>
          </div>
          <div class="col-lg-2 col-6 col-md-3">
            <select class="form-select" v-model="category">
              <option>所有類別</option>
              <option>住宿</option>
              <option>交通</option>
              <option>景點門票</option>
            </select>
          </div>
          <div class="col-lg-2 col-6 col-md-3">
            <select class="form-select" v-model="orderBy">
              <option>近期新增</option>
              <option>價格最低</option>
              <option>評分最高</option>
              <!-- <option>最多查看</option> -->
            </select>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="product-grid">
          <div
            class="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3"
          >
          <!-- 商品 start -->
          <div class="col" v-for="(product, index) in products" :key="index">
            <div class="card border shadow-none mb-0">
              <div class="card-body text-center">
                <img :src="product.img" class="product-img img-fluid mb-3" alt="" />
                <div style="height: 50px;">
                  <h6 class="product-title pt-1">{{ product.name }}</h6>
                </div>
                <p class="product-price fs-5 mb-1">
                  <div v-if="product.minPrice !== product.maxPrice">
                    <span>NT$ {{ product.minPrice }}</span> ~
                    <span>{{ product.maxPrice }}</span><br>
                  </div>
                  <div v-else>
                    <span>${{ product.minPrice }}</span>
                  </div>
                </p>
                <div class="rating mb-0">
                  <i v-for="star in 5" :key="star" class="fa-star" 
                              :class="getStarClass(product.avgRate, star)"></i>
                </div>
                <small>{{ product.commentCount }} Reviews</small>
                <div
                  class="actions d-flex align-items-center justify-content-center gap-2 mt-3"
                >
                  <button @click="openEditModal(product, product.id)" class="btn btn-sm btn-outline-primary">
                    <i class="fa-solid fa-pencil"></i>查看細項
                  </button>
                  <a @click="deleteByClick(product.id)" class="btn btn-sm btn-outline-danger"
                    ><i class="fa-solid fa-trash"></i>刪除</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
          <!-- 商品 end -->
          <!--end row-->
        </div>
        <nav class="float-end mt-4" aria-label="Page navigation">
          <ul class="pagination">
            <li :class="['page-item', { disabled: currentPage <= 1 }]">
              <a class="page-link" @click="currentPage>1?currentPage--:''">上一頁</a>
            </li>
            <li class="page-item" v-for="page in totalPages">
              <button :class="['page-link', page === currentPage?'bg-primary text-light': '']" @click="searchByMultiStr(page);" >{{ page }}</button>
            </li>
            <li :class="['page-item', { disabled: totalPages === currentPage }]">
              <a class="page-link" @click="currentPage<totalPages?currentPage++:''">下一頁</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- grid end -->
  </div>
   <!-- Edit Modal -->
   <div class="modal" v-if="showEditModal" @click.self="closeEditModal">
      <div class="modal-dialog" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">查看細項</h5>
            <button type="button" class="btn-close" @click="closeEditModal"></button>
          </div>
          <div class="modal-body">
            <!-- Display product details -->
            <h5>{{ selectedProduct.name }}</h5>
            <div class="row g-3">
              <div v-for="(detail, idx) in selectedProduct.product_detail" :key="idx" class="col-6">
                <div class="card">
                  <img :src="detail.img" class="card-img-top product-img img-fluid" alt="Product Image">
                  <div class="card-body">
                    <h6 class="card-title">{{ detail.name }}</h6>
                    <p class="card-text">{{ detail.introduction }}</p>
                    <p class="card-text">Price: NT$ {{ detail.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditModal">Close</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
  
  <Spinner></Spinner>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Spinner from '@/views/Backstage/layouts/components/spinner.vue';
import axios from "axios";

const totalPages = ref(0)
const currentPage = ref(0);
const products = ref([]);
const searchText = ref('');
const category = ref('所有類別');
const orderBy = ref('近期新增');

let selectedProduct = ref(null);
let showEditModal = ref(false);

onMounted(()=>{
  document.body.style.overflow = '';
  currentPage.value = 1
})

watch([ currentPage, category, orderBy ], () => {
  searchByMultiStr(currentPage.value);
});

const getDetailFromProductId = (id) =>{
  console.log(id)
  axios.get(`http://localhost:8080/getDetailFromProductId/${id}`)
  .then((response) => {
    console.log(response.data);
    selectedProduct.value = response.data;
    console.log(selectedProduct.value)
    // products.value = response.data[1];
    // totalPages.value = Math.ceil(response.data[0] / 10);
    // currentPage.value = page;
  })
  .catch((err) => {
    alert(err);
  });
}

const searchByMultiStr = (page) => {
  axios.post(`http://localhost:8080/productManage/${page}`, null, {
    params: {
      searchText: searchText.value,
      category: category.value,
      orderBy: orderBy.value == "近期新增" ? "x.id" : orderBy.value
    }
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log(response.data);
    products.value = response.data[1];
    totalPages.value = Math.ceil(response.data[0] / 10);
    currentPage.value = page;
  })
  .catch((err) => {
    alert(err);
  });
};

const deleteByClick = (id) => {
  axios
    .delete(`http://localhost:8080/productManage/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      searchByMultiStr(currentPage.value);
    });
}

const getStarClass = (avgRate, star) => {
  return {
    'fa-solid': star <= Math.floor(avgRate),
    'text-warning': star <= Math.floor(avgRate),
    'fa-regular': star > Math.floor(avgRate),
    'text-dark': star > Math.floor(avgRate)
  };
};

const openEditModal = (product, id) => {
  getDetailFromProductId(id);
  showEditModal.value = true;
  document.body.style.overflow = 'hidden'; // 鎖定卷軸
};

const closeEditModal = () => {
  selectedProduct.value = null;
  showEditModal.value = false;
  document.body.style.overflow = ''; // 解除卷軸鎖定
}

</script>
<style scoped>
.product-img {
  width: 300px;
  height: 150px;
  object-fit: cover;
}

.product-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050; /* Ensure modal is above other elements */
  overflow-y: auto; /* Allow modal content to be scrolled */
}

.modal-dialog {
  max-width: 800px;
  background-color: #fff;
  border-radius: 0.3rem;
}

.modal-content {
  padding: 15px;
}

.modal-header {
  padding: 10px 15px;
  border-bottom: 1px solid #dee2e6;
}

.modal-body {
  padding: 15px;
}

.modal-footer {
  padding: 10px 15px;
  border-top: 1px solid #dee2e6;
}

.btn-close {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
  color: #000;
}
</style>