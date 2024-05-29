<template>
  <div class="flex gap-4 mb-4 items-center">
    <el-input
      v-model="input1"
      style="width: 120px"
      placeholder="搜尋"
      :suffix-icon="Search"
    />
    <el-input
      class="ms-2"
      v-model="input2"
      style="width: 150px"
      placeholder="姓名"
      :suffix-icon="Search"
    />
    <el-input
      class="ms-2"
      v-model="input3"
      style="width: 240px"
      placeholder="信箱"
      :suffix-icon="Search"
    />
  </div>

  <el-table
    :data="tableData"
    style="width: 100%; height: calc(100vh - 4rem - 220px)"
  >
    <el-table-column prop="id" label="會員編號" width="100" />
    <el-table-column prop="name" label="姓名" width="100" />
    <el-table-column prop="address" label="地址" width="300" />
    <el-table-column prop="email" label="Email" width="200" />
    <el-table-column prop="date" label="建立時間" />
    <el-table-column fixed="right" label="" width="150">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          細項
        </el-button>
        <el-button link type="primary" size="small">編輯</el-button>
      </template>
    </el-table-column>
  </el-table>

  <nav class="mt-3" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const tableData = [
  {
    id: "1200453",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    email: "aokik@gmail.com",
    date: "2023-06-12",
  },
];
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
</script>
<style>
</style>