<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="訂單名稱..." clearable />
    </el-form-item>
    <el-form-item label="">
      <el-select v-model="formInline.region" placeholder="狀態管理" clearable>
        <el-option label="全部" />
        <el-option label="未達安全庫存" />
        <el-option label="庫存狀態良好" />
      </el-select>
    </el-form-item>
    <el-form-item label="">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="訂單開始日期"
        clearable
      />
    </el-form-item>
    <el-form-item label="">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="訂單結束日期"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜尋</el-button>
      <!-- <el-button type="primary" @click="onSubmit">新增商品</el-button> -->
    </el-form-item>
  </el-form>

  <el-table
    :data="tableData"
    style="width: 100%; height: calc(100vh - 4rem - 220px)"
  >
    <el-table-column prop="id" label="訂單編號" width="100" />
    <el-table-column prop="date" label="訂單日期" width="150" />
    <el-table-column prop="ostatus" label="訂單狀態" width="250" />
    <el-table-column prop="tstatus" label="交易狀態" width="200" />
    <el-table-column prop="account" label="訂購帳號" />
    <el-table-column prop="sum" label="合計" />
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
    date: "2020-06-12",
    ostatus: "已完成",
    tstatus: "已付款",
    account: "JOK00317",
    sum: "12345",
  },
];

const handleClick = ()=>{
  
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 150px;
}

.demo-form-inline .el-select {
  --el-select-width: 150px;
}
</style>