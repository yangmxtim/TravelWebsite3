<template>
  <div class="col-12 p-4">
    <div class="bg-light rounded h-100 p-4">
      <div class="btn-group pb-3" role="group">
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          
        />
        <label
          class="btn btn-outline-primary"
          for="btnradio1"
          @click="searchAll"
          >全部會員</label
        >

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label
          class="btn btn-outline-primary"
          for="btnradio2"
          @click="searchAdmin(true)"
          >管理員</label
        >

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label
          class="btn btn-outline-primary"
          for="btnradio3"
          @click="searchAdmin(false)"
          >一般用戶</label
        >
      </div>
      <p v-if="users.length == 0">沒有資料</p>
      <p v-else>共 {{ users.length }} 筆資料</p>
      <table
        class="table table-hover align-items-center justify-content-center text-center"
      >
        <thead>
          <tr>
            <th scope="col">會員ID</th>
            <th scope="col">名稱</th>
            <th scope="col">權限</th>
            <th scope="col">Email</th>
            <th scope="col">完成訂單數量</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :style="{ backgroundColor: index == 0 ? 'lightblue' : 'lightcoral'}" 
            v-for="(user, index) in paginatedUsers" :key="index">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.admin === "admin" ? "admin" : "normal" }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.permission }}</td>
            <td>
              <button type="button" style="" class="btn btn-outline-primary me-2 p-1 my-0" 
                @click="openModal(user.id)">
                查看
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="handlePageClick(pageNumber)"
          :class="{ active: pageNumber === currentPage }"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>

    <!-- alert start -->
    <div v-if="visible" class="alert-container">
      <div class="alert alert-success d-flex align-items-center" role="alert">
        <i class="fa-regular fa-circle-check fs-3 me-3"></i>
        <div>
          修改成功
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
    <!-- alert end -->

    <!-- modal start -->
    <div v-if="showModal" class="modal" >
      <div class="modal-content">
        <span @click="closeModal" class="close" title="Close Modal">&times;</span>
        <div class="container">
          <h1>會員詳細資料</h1>
          <p v-if="choosedMember">
            <div class="mb-1">
              <strong>會員ID:</strong> {{ choosedMember.id }}<br>
            </div>
            <div class="mb-1">
              <strong>名稱:</strong>
              <input v-if="isEdit" v-model="choosedMember.username" class="form-control">
              <p class="d-inline" v-else>{{ choosedMember.username }}</p>
            </div>
            <div class="mb-1">
              <strong>權限:</strong>
              <div class="mb-1" style="height: 20px;" v-if="isEdit">
                <button class="btn btn-light me-2" ref="normalButton" 
                  :class="{ active: chooseButton === 'normal' }" @click="choosePermission('normal')">一般用戶</button>
                <button class="btn btn-light" ref="adminButton" 
                  :class="{ active: chooseButton === 'admin' }" @click="choosePermission('admin')">管理員</button>
              </div>
              <p class="d-inline" v-else>{{ choosedMember.admin?'管理員':'一般用戶' }}</p>
              <br>
            </div>
            <div class="mb-1">
              <strong>Email:</strong>
              <input v-if="isEdit" v-model="choosedMember.email" class="form-control">
              <p class="d-inline" v-else>{{ choosedMember.email }}</p>
            </div>
            <div class="mb-1">
              <strong>電話:</strong>
              <input v-if="isEdit" v-model="choosedMember.phone" class="form-control">
              <p class="d-inline" v-else>{{ choosedMember.phone }}</p>
            </div>
            <div class="mb-1">
              <strong>註冊日期:</strong> {{ choosedMember.date }}<br>
            </div>
            <div class="mb-1">
              <strong>完成訂單數量:</strong> {{ choosedMember.orders }}<br>
            </div>
            <!-- <hr> -->
            <!-- <h2>使用者行為</h2> -->
          </p>
          <div class="button-group">
            <button type="button" class="btn btn-save" @click="closeAndSaveModal">儲存並關閉</button>
            <button type="button" :disabled="isButtonDisabled" class="btn btn-edit" 
              @click="toggleEdit">編輯</button>
          </div>
        </div>
      </div>
    </div>
     <!-- modal end -->
    <spinner></spinner>

</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Spinner from '@/views/Backstage/layouts/components/spinner.vue';

let users = [];
let currentPage = ref(1);
let paginatedUsers = ref([]);
let pageSize = 10;
let totalPages = 0;
let isEdit = ref(false);
let isButtonDisabled = ref(false);
const normalButton = ref(null);
const adminButton = ref(null);
const chooseButton = ref('');
const visible = ref(false);
const progress = ref(0);
const choosedMember = ref({});
const showModal = ref(false);

onMounted(()=>{
  searchAll();
})

const handlePageClick = (pageNumber) => {
  if (pageNumber !== currentPage) {
    currentPage.value = pageNumber;
    }
  setPaginatedUsers();
};

const setTotalPages = () => {
  totalPages = Math.ceil(users.length / pageSize);
};

const setPaginatedUsers = () => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = currentPage.value * pageSize;
  paginatedUsers.value = users.slice(startIndex, endIndex);
};

const searchAll = () => {
  users = [];
  axios
    .get("http://localhost:8080/memberManage")
    .then((response) => {
      console.log(response.data);
      for (const user of response.data) {
        users.push(user);
      }
      setPaginatedUsers();
      setTotalPages();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      console.log(paginatedUsers);
    });
};

const searchAdmin = (isAdmin) => {
  users = [];
  axios
    .get(`http://localhost:8080/memberManage/permission/${isAdmin}`)
    .then((response) => {
      console.log(response.data);
      for (const user of response.data) {
        users.push(user);
      }
      setPaginatedUsers();
      setTotalPages();
    });
};

const updateMember = async (id, name, email, phone, isAdmin) => {
  try {
    const response = await axios.put(`http://localhost:8080/memberManage/${id}`, {
      id: id,
      username: name,
      email: email,
      phone: phone,
      admin: isAdmin,
    });
    console.log(response.data);
    showAlert();
  } catch (err) {
    alert(err);
  }
};

const searchById = (id) => {
  users = [];
  axios
    .get(`http://localhost:8080/memberManage/${id}`)
    .then((response) => {
      console.log(response.data);
      choosedMember.value = response.data;
      console.log(choosedMember.value)
    });
};

// modal
const initialModal = () => {
  chooseButton.value = '';
  isEdit.value = false;
  isButtonDisabled.value = false;
}

const openModal = (memberId) => {
  searchById(memberId);
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  initialModal();
};

const closeAndSaveModal = async () => {
  showModal.value = false;
  choosedMember.value.admin = 
    (adminButton.value.style.backgroundColor =='chocolate') ? true  :
    ((normalButton.value.style.backgroundColor =='chocolate') ? false : null );
  // 抓編輯後資料
  if (isEdit.value === true) {
    await updateMember(choosedMember.value.id, choosedMember.value.username,
                        choosedMember.value.email, choosedMember.value.phone, 
                        choosedMember.value.admin);
  }
  initialModal();
  searchAll();
};

const toggleEdit = () => {
  isEdit.value = !isEdit.value;
  isButtonDisabled.value = !isButtonDisabled.value;
}

const choosePermission = (whichButton) => {
  chooseButton.value = whichButton;
  adminButton.value.style.backgroundColor = 'bisque';
  normalButton.value.style.backgroundColor = 'bisque';
  if(chooseButton.value === 'admin'){
    adminButton.value.style.backgroundColor ='chocolate';
  }else if(chooseButton.value === 'normal'){
    normalButton.value.style.backgroundColor ='chocolate';
  }
}

// alert & progress

const showAlert = () => {
  progress.value = 0;
  visible.value = true;
  let width = 0;
  const interval = setInterval(() => {
    // console.log(progress.value)
    width += 4;
    progress.value = width;
    if (progress.value >= 450) {
      clearInterval(interval);
      visible.value = false;
    }
  }, 30);
}

// onMounted(() => {
//   showAlert();
// });
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  animation-name: animatetop;
  animation-duration: 0.4s;
}

@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}

.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

.cancelbtn, .btn-save, .btn-edit {
  color: white;
  padding: 10px 18px;
  border: none;
  cursor: pointer;
  width: 45%;
  margin: 5px 2%;
  text-align: center;
}

.btn-save {
  background-color: forestgreen;
}

.btn-save:hover {
  background-color: darkgreen;
}

.btn-edit {
  background-color: blue;
}

.btn-edit:hover {
  background-color: darkblue;
}

div input {
  margin: 0px 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button.active {
  background-color: chocolate;
}

button {
  margin: 5px 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
}

button:hover {
  opacity: 0.8;
}

/* alert start */
.alert-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 300px;
  z-index: 1050;
}
.progress {
  height: 5px;
  margin-top: 0.5rem;
}
</style>

