<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="商品名稱..." clearable />
    </el-form-item>
    <el-form-item label="">
      <el-select v-model="formInline.region" placeholder="庫存管理" clearable>
        <el-option label="全部" />
        <el-option label="未達安全庫存" />
        <el-option label="庫存狀態良好" />
      </el-select>
    </el-form-item>
    <el-form-item label="">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="上架開始日期"
        clearable
      />
    </el-form-item>
    <el-form-item class="">
      <div class="pe-3">
        <el-button type="primary" @click="onSubmit">搜尋</el-button>
      </div>
      <router-link to="/newProduct">
        <el-button type="primary" @click="onSubmit">新增商品</el-button>
      </router-link>
    </el-form-item>
  </el-form>

  <el-table
    :data="tableData"
    style="width: 100%; height: calc(100vh - 4rem - 220px)"
  >
    <el-table-column prop="id" label="產品編號" width="100" />
    <el-table-column prop="name" label="產品名稱" width="100" />
    <el-table-column prop="price" label="金額" width="100" />
    <el-table-column prop="address" label="詳細內容" width="300" />
    <el-table-column prop="email" label="庫存數量" width="200" />
    <el-table-column prop="date" label="建立時間" />
    <el-table-column fixed="right" label="" width="150">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          刪除
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
import { ref, reactive } from "vue";
import { ElTable } from "element-plus";

const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const onSubmit = () => {
  console.log("submit!");
};

const tableData = [
  {
    id: "1200453",
    name: "大饅頭",
    price: "563",
    address: "好吃的饅頭",
    email: "12345",
    date: "2020-06-12",
  },
];
</script>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 150px;
}

.demo-form-inline .el-select {
  --el-select-width: 150px;
}
</style>