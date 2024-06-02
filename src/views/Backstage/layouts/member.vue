<template>
  <div class="mb-3 items-center input-group">
    <span class="input-group-text"
      ><el-icon><Search /></el-icon
    ></span>
    <input
      type="text"
      class="myInput"
      v-model="input1"
      id=""
      style="width: 240px"
      placeholder="搜尋"
      @keydown.enter="search"
    />
  </div>
  <div class="d-flex scrollable" style="max-height: calc(100vh - 4rem - 220px)">
    <table class="w-100" id="myTable">
      <thead>
        <tr class="header">
          <th>id</th>
          <th>name</th>
          <th>address</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style="background-color: powderblue"
              @click="saveUserId(user.id)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex align-items-center justify-content-center pt-3">
    <button
      class="btn"
      style="background-color: khaki"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>

  <!-- 會員資料編輯 -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">會員資料編輯</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- 編輯表單 -->
        <div class="modal-body">
          <div class="d-flex pb-3">
            <label class="px-2 col-3">會員編號</label>
            <input class="col" type="text" :value="editUserId" />
          </div>
          <div class="d-flex pb-3">
            <label class="px-2 col-3">姓名</label>
            <input id="name" class="col" type="text" :value="editName" />
          </div>
          <div class="d-flex pb-3">
            <label class="px-2 col-3">地址</label>
            <input class="col" type="text" :value="editAdress" />
          </div>
          <!-- <div class="d-flex pb-3">
            <label class="px-2 col-3">電子郵件</label>
            <input class="col" type="text" />
          </div> -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary" @click="validate">
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const totalPages = ref(0);
const users = ref([]);
const input1 = ref("");
const editUserId = ref(0);
const editName = ref("");
const editAdress = ref("");

const getAddress = ref("")

// 編輯驗證
const validate = () => {
  console.log(getAddress.value)
  const getName = document.getElementById("name");
  if (!getName.value) {
    getName.insertAdjacentHTML("afterend", `<p class="text-warning">名稱不能空白</p>`);
  }
  if (!getAddress.value) {

  }
};

// 編輯會員，按下按鈕收集那列id
const saveUserId = (id) => {
  // console.log(id);
  editUserId.value = id;
  editName.value = users.value[id - 1].name;
  editAdress.value = users.value[id - 1].address;
};

const search = () => {
  axios
    .get(`http://localhost:8080/hibernateExercise/test`)
    // .get(`http://localhost:8080/web/test?cid=${input1.value}`)
    .then((response) => {
      // console.log(response.data);
      users.value = response.data;
      totalPages.value = Math.ceil(users.value.length / 10);
      console.log(users.value);
    })
    .catch((err) => console.log(err));
};
</script>
  
  <style scoped>
* {
  box-sizing: border-box;
}

.scrollable {
  width: 100%;
  /* height: 100%; */
  overflow-y: auto;
  overflow-x: auto;
}

.myInput {
  font-size: 20px;
  border: 2px solid lightgray;
}

#myTable {
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 18px;
}

#myTable th,
#myTable td {
  text-align: left;
  padding: 12px;
}

#myTable tr {
  border-bottom: 1px solid #ddd;
}

#myTable tr.header,
#myTable tr:hover {
  background-color: #f1f1f1;
}
</style>
  