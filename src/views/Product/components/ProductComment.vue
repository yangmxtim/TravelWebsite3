<template>
    <div class="container mt-5 message-container">
      <h4 class="mt-5">評論</h4>
      <div v-if="comments.length > 0">
        <div v-for="(comment, index) in comments" :key="index" class="card mt-3 message-card">
          <div class="card-body">
            <div class="card-title">
              <span>{{ comment.name }}</span>
              <div class="message-rating">
                <label v-for="star in comment.rate" :key="star"></label>
              </div>
            </div>
            <p class="card-text">{{ comment.content }}</p>
            <div class="card-subtitle mb-2 text-muted text-right">{{ comment.date }}</div>
          </div>
        </div>
      </div>
      <p v-else class="mt-3">没有評論</p>
    
      <button type="button" class="btn btn-primary" @click="showModal = true">
        我要評論
      </button>
    
      <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 500px;">
          <div class="modal-content">
            <div class="card">
              <span class="title">留下評論</span>
              <form class="form" @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name">姓名:</label>
                  <h3 style="text-align: center;">{{ name }}</h3>
                </div>
                <div class="form-group">
                  <label>評分:</label>
                  <div class="row">
                    <div class="col-3"></div>
                    <div class="col-5">
                      <div class="rating">
                        <input type="radio" name="rate" id="star1" value="1" v-model="form.rate" required><label for="star1"></label>
                        <input type="radio" name="rate" id="star2" value="2" v-model="form.rate"><label for="star2"></label>
                        <input type="radio" name="rate" id="star3" value="3" v-model="form.rate"><label for="star3"></label>
                        <input type="radio" name="rate" id="star4" value="4" v-model="form.rate"><label for="star4"></label>
                        <input type="radio" name="rate" id="star5" value="5" v-model="form.rate"><label for="star5"></label>
                      </div>
                    </div>
                    <div class="col-4"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="content">評論:</label>
                  <textarea id="content" v-model="form.content" class="form-control" rows="3" required></textarea>
                </div>
                <div class="row">
                  <div class="col-8"></div>
                  <div class="col-2"><button type="button" @click="showModal = false">取消</button></div>
                  <div class="col-2"><button type="submit">送出</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, inject } from 'vue';
  import axios from 'axios';
  
  const comments = ref([]);
  const showModal = ref(false);
  const form = ref({
    name: '',
    rate: '',
    content: '',
    product_id: null // 新增 product_id 屬性
  });
  const productId = 1; // 假設這裡是從路由或其他地方獲得的 product_id
  const error = ref(null);
  
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/comments?product_id=${productId}`);
      comments.value = response.data;
      console.log('Fetched comments:', comments.value); // 檢查獲取的資料
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };
  
  const submitForm = async () => {
    try {
      form.value.product_id = productId; // 在提交表單前設置 product_id
      const response = await axios.post('http://localhost:8080/api/submit', form.value);
      comments.value.unshift(response.data);
      showModal.value = false;
      form.value.name = '';
      form.value.rate = '';
      form.value.content = '';
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };
  
  onMounted(() => {
    fetchComments();
  });
  </script>

<script setup>

import { inject } from "vue";

import axios from 'axios';
import { ref } from 'vue';

// 定義一個響應狀態的變量以處理請求響應
const responseStatus = ref(null);



const address = inject("email");
const phone = inject("phone");
const name = inject("name");

</script>
  

  <style scoped>
  .message-card .card-body .card-title {
    display: flex;
    justify-content: space-between;
  }
  .message-card .card-body .card-text {
    margin-top: 0.5rem;
  }
  .message-rating>label:before {
    content: '★';
    color: #ff9e0b;
    font-size: 20px;
  }
  .card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .form .form-group label {
    font-size: 14px;
    color: rgb(99, 102, 102);
  }
  .form .form-group input,
  .form .form-group textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    outline: 0;
    width: 100%;
    background-color: transparent;
  }
  .form .form-group input:focus,
  .form .form-group textarea:focus {
    border-color: #3366cc;
  }
  .form .form-group textarea {
    resize: none;
    height: 100px;
  }
  .form button {
    background-color: #3366cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .form button:hover {
    background-color: #27408b;
  }
  .rating>input {
    display: none;
  }
  .rating:not(:checked)>label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #666;
  }
  .rating:not(:checked)>label:before {
    content: '★';
  }
  .rating>input:checked~label {
    color: #ff9e0b;
  }
  .rating:not(:checked)>label:hover,
  .rating:not(:checked)>label:hover~label {
    color: #ff9e0b;
  }
  </style>