<template>
  <div class="row m-3">
    <div class="col-12 col-lg-12 d-flex">
      <div class="card w-100">
        <!-- searchRow start -->
        <div class="card-header py-3">
          <div class="row g-3">
            <div class="col-lg-4 col-md-6 me-auto">
              <div class="ms-auto position-relative">
                <div
                  class="position-absolute top-50 translate-middle-y search-icon px-3"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                  class="form-control ps-5"
                  type="text"
                  placeholder="搜尋訂單"
                  @keydown.enter="searchAll"
                />
              </div>
            </div>
            <div class="col-lg-2 col-6 col-md-3">
              <select class="form-select">
                <option>狀態</option>
                <option>處理中訂單</option>
                <option>已完成訂單</option>
                <option>取消訂單</option>
                <option>顯示全部</option>
              </select>
            </div>
            <div class="col-lg-2 col-6 col-md-3">
              <select class="form-select" @change="changeRowPerPage">
                <option ref="s1">顯示 10 筆</option>
                <option ref="s2">顯示 30 筆</option>
                <option ref="s3">顯示 50 筆</option>
              </select>
            </div>
          </div>
        </div>
        <!-- searchRow end -->
        <div class="card-body">
          <!-- table start -->
          <div class="table-responsive">
            <table class="table align-middle">
              <thead class="table-light">
                <tr>
                  <th>訂單ID</th>
                  <th>客戶名稱</th>
                  <th>金額</th>
                  <th>狀態</th>
                  <th>下訂日期</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in ordersOfPage" :key="index">
                  <td>{{ order.orderId }}</td>
                  <td>{{ order.member.username }}</td>
                  <td>{{ order.totalAmount }}</td>
                  <td>
                    <span class="badge rounded-pill bg-success">Received</span>
                  </td>
                  <td></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="訂單細項"
                        aria-label="Views"
                        ><i class="fa-regular fa-eye"></i></a
                      ><a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="編輯內容"
                        data-bs-original-title="Edit info"
                        aria-label="Edit"
                        ><i class="fa-solid fa-pen"></i></a
                      ><a
                        href="javascript:;"
                        class="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="刪除"
                        data-bs-original-title="Delete"
                        aria-label="Delete"
                        ><i class="fa-solid fa-trash"></i
                      ></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- table end -->

          <!-- pagination start -->
          <nav class="float-end" aria-label="Page navigation">
            <ul class="pagination">
              <li :class="['page-item', { disabled: currentPage <= 1 }]">
                <a
                  @click="
                    currentPage--;
                    changePage(currentPage);
                  "
                  class="page-link"
                  href="#"
                  >上一頁</a
                >
              </li>
              <li
                v-for="page in totalPages"
                :class="['page-item', { active: page === currentPage }]"
                :key="page"
              >
                <a @click="changePage(page)" class="page-link" href="#">{{
                  page
                }}</a>
              </li>
              <li
                :class="['page-item', { disabled: totalPages === currentPage }]"
              >
                <a
                  @click="
                    currentPage++;
                    changePage(currentPage);
                  "
                  class="page-link"
                  href="#"
                  >下一頁</a
                >
              </li>
            </ul>
          </nav>
          <!-- pagination end -->
        </div>
        <!-- table end -->
      </div>
    </div>

    <!-- filter start -->
    <!-- <div class="col-12 col-lg-3 d-flex">
      <div class="card w-100">
        <div class="card-header py-3">
          <h5 class="mb-0">篩選從</h5>
        </div>
        <div class="card-body">
          <form class="row g-3">
            <div class="col-12">
              <label class="form-label">訂單 ID</label
              ><input type="text" class="form-control" placeholder="訂單 ID" />
            </div>
            <div class="col-12">
              <label class="form-label">客戶</label
              ><input
                type="text"
                class="form-control"
                placeholder="客戶 名稱"
              />
            </div>
            <div class="col-12">
              <label class="form-label">訂單 狀態</label
              ><select class="form-select">
                <option>訂單完成</option>
                <option>訂單未完成</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label">總額大於</label
              ><input type="text" class="form-control" />
            </div>
            <div class="col-12">
              <label class="form-label">訂單下訂日期</label
              ><input type="date" class="form-control" />
            </div>
            <div class="col-12">
              <div class="d-grid">
                <button @click.prevent="test" class="btn btn-primary">
                  篩選
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> -->
    <!-- filter end -->

  </div>

  <spinner></spinner>
</template>

<script setup>
import Spinner from "@/views/Backstage/layouts/components/spinner.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const orders = ref([]);
const ordersOfPage = ref([]);
let totalPages = ref(0);
const rowPerPage = ref(1);
const currentPage = ref(1);
const s1 = ref("");
const s2 = ref("");
const s3 = ref("");

onMounted(() => {
  searchAll();
  changeRowPerPage();
});

const changeRowPerPage = () => {
  if (s1.value.selected === true) {
    rowPerPage.value = 10;
  } else if (s2.value.selected === true) {
    rowPerPage.value = 30;
  } else if (s3.value.selected === true) {
    rowPerPage.value = 50;
  }
  // console.log(rowPerPage.value);
};

const searchAll = () => {
  axios.get("http://localhost:8080/orderManage").then((response) => {
    orders.value = response.data;
    pagination();
  });
};

const pagination = () => {
  // 計算總頁數
  totalPages = Math.ceil(orders.value.length / rowPerPage.value);
  // 取得目前這頁的資料
  ordersOfPage.value = orders.value.slice(
    rowPerPage.value * (currentPage.value * 1 - 1),
    currentPage.value * rowPerPage.value
  );
};

const changePage = (page) => {
  currentPage.value = page;
  pagination();
};


</script>

<style></style>
