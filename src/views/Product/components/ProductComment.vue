<template>
  <div class="container mt-5 message-container">
    <h4 class="mt-5">評論</h4>
    <div v-if="comments.length > 0">
      <div v-for="(comment, index) in comments" :key="index" class="card mt-3 message-card">
        <div class="card-body">
          <div class="card-title">
            <span>{{ comment.name }}</span>
            <div class="message-rating">
              <template v-for="n in 5">
                <span v-if="n <= comment.rate" class="star-filled">★</span>
                <span v-else class="star-empty">★</span>
              </template>
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
                <input id="name" v-model="form.name" class="form-control" required>
              </div>
              <div class="form-group">
                <label>評分:</label>
                <div class="row">
                  <div class="col-3"></div>
                  <div class="col-5">
                    <div class="rating">
                      <input type="radio" name="rate" id="star1" value="1" @click="updateRate(1)" :checked="form.rate === 1" required><label for="star1"></label>
                      <input type="radio" name="rate" id="star2" value="2" @click="updateRate(2)" :checked="form.rate === 2"><label for="star2"></label>
                      <input type="radio" name="rate" id="star3" value="3" @click="updateRate(3)" :checked="form.rate === 3"><label for="star3"></label>
                      <input type="radio" name="rate" id="star4" value="4" @click="updateRate(4)" :checked="form.rate === 4"><label for="star4"></label>
                      <input type="radio" name="rate" id="star5" value="5" @click="updateRate(5)" :checked="form.rate === 5"><label for="star5"></label>
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
import axios from 'axios';
import { inject } from "vue";
import { ref } from 'vue';

// 定義一個響應狀態的變量以處理請求響應
const responseStatus = ref(null);

const name = inject("name");

export default {
  data() {
    return {
      comments: [],
      showModal: false,
      form: {
        name: '',
        rate: null, // 初始化为 null
        content: ''
      }
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      axios.get('http://localhost:3000/comments')
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    submitForm() {
      axios.post('http://localhost:3000/comments', this.form)
        .then(response => {
          this.showModal = false;
          this.fetchComments(); // 重新获取评论以更新列表
          this.form = { name: '', rate: null, content: '' }; // 重置表单
        })
        .catch(error => {
          console.error('Error submitting comment:', error);
        });
    },
    // 更新评分值
    updateRate(value) {
      this.form.rate = value;
    },
  },
  computed: {
    // 根据评分字段计算星星数量
    computedRating() {
      return (rate) => {
        switch (rate) {
          case 1:
            return 5;
          case 2:
            return 4;
          case 3:
            return 3;
          case 4:
            return 2;
          case 5:
            return 1;
          default:
            return 0;
        }
      };
    }
  }
};
</script>
  

  <style scoped>
  .star-filled {
  color: gold;
}
.star-empty {
  color: grey;
}

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
