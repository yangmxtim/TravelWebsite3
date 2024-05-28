<template>
    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel" >
        <div class="carousel-inner container">
            <div class="carousel-item header-carousel-item active bg-cover">
            </div>
        </div>
    </div>
    <hr>
    <section>
        <div class="container py-5">
            <div class="row" >
                <div class="col-md-3 my-2 " data-aos="fade-down">
                    <div class="list-group">
                        <a href="#pane-1" class="list-group-item list-group-item-action active list-group-item list-group-item-warning" aria-current="true"
                            data-bs-toggle="list">
                            認識海島
                        </a>
                        <a href="#pane-2" class="list-group-item list-group-item-action list-group-item list-group-item-warning" data-bs-toggle="list">聯絡我們</a>
                    </div>
                </div>
                <div class="col-md-9 ">

                    <div class="tab-content my-2" data-aos="fade-up" >
                        <!-- 品牌緣起 -->
                        <div class="tab-pane active" id="pane-1">
                            <div class="row">
                
                                <div class="col-md-12  ">
                                    <dl class="row ms-2">
                                        <dt class="col-sm-12 my-3"><h3>歡迎來到海島旅遊</h3></dt>
                                        <dd class="col-sm-12 py-2">我們是一家致力於為您提供獨特、難忘旅行體驗的專業團隊。無論您是尋找豪華度假、冒險之旅還是文化探索，我們的專業團隊都會為您量身定制完美的旅行計劃。我們相信，每一次旅行都是一次重新發現世界的機會，也是創造美好回憶的過程。</dd>
                                        <dd class="col-sm-12 py-2">我們的使命是為每一位顧客提供超越期待的旅行體驗。我們力求通過貼心的服務、精心設計的行程和專業的建議，讓您在旅途中感受到無微不至的關懷和滿足。</dd>
                                        <dd class="col-sm-12 py-2">我們的團隊由一群熱愛旅行且經驗豐富的專業人士組成。他們不僅熟悉全球各地的風土人情和旅遊資源，還擁有豐富的行程策劃和旅遊管理經驗。我們的旅行顧問會根據您的需求和偏好，為您量身定制獨一無二的旅行計劃，讓您享受到真正的私人定制服務。</dd>
                                        <dd class="col-sm-12 py-2">隨時聯繫我們的旅行顧問，開始計劃您的下一次夢幻之旅。我們期待為您創造一段美好的旅行回憶！</dd>
                                        <dd class="col-sm-12 pt-5 text-end"><h3>海島旅遊——帶您探索世界的每一個角落。</h3></dd>
                                        <dd class="col-sm-12 py-2 text-end"><h4>我們期待您的光臨和聯繫，讓我們一起開啟一段難忘的旅程！</h4></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <!-- 聯絡表單 -->
                        <div class="tab-pane " id="pane-2">
                            <div class="row col-12 ">
                                <section class="py-2">
                                    <div class="container">
                                        <div class="row">         
                                            <div class="col-md-12">
                                                <div class="card  my-2 p-0 ">
                                                    <div class="row "> 
                                                        <div class="col-md-12 my-2">
                                                            <div class="card-body contact">
                                                                <div>
                                                                    <h3>聯絡我們</h3>
                                                                </div>
                                                                <div>
                                                                    <p>如果您在訂購商品或收到商品時遇到問題，請聯絡我們的線上客服：
                                                                        請允許我們在24小時內對您的問題作出答覆。在非辦公時間發送的電子郵件將在我們的下一個工作日處理。若未收到回信可能是信箱系統擋信因素導致信件被分至垃圾信件夾，建議可至垃圾信件夾搜尋。
                                                                    </p>
                                                                    <p>我們愛你！</p>
                                                                </div>
                                                                <div>
                                                                    <label for="name">姓名*</label>
                                                                    <input type="text" name="user-name" id="name" required>
                                                                    <br>
                                                                    <label for="phone">電話*</label>
                                                                    <input type="text" name="user-phone" id="phone" required>
                                                                    <br>  
                                                                </div>
                                                                <div>
                                                                    <label for="email">Email*</label>
                                                                    <input type="text" name="user-email" id="email" required>
                                                                    <br>
                                                                    </div>
                                                                <div>
                                                                    <label for="purpose">聯絡目的</label>
                                                                    <select name="purpose" id="purpose">
                                                                        <option disabled selected="true">請選擇項目</option>
                                                                        <option value="1">預定問題</option>
                                                                        <option value="2">支付問題</option>
                                                                        <option value="3">產品詢問</option>
                                                                        <option value="4">投訴與建議</option>
                                                                    </select>
                                                                    <br>
                                                                </div>
                                                                <div>
                                                                    <label for="message">內容</label>
                                                                    <textarea class="mb-2" name="message" id="message" placeholder="請輸入內容" cols="30" rows="15"></textarea>
                                                                    <br>
                                                                </div>
                                                                    <p>
                                                                    <button>送出表單</button>
                                                                    </p>
                                                            </div>
                                                         </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
     #carouselExampleControls{
            height: 80vh;
            background-size: cover;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: url(../Layout/img/taipei.jpg);
        }
    /* contact */
.contact h1{
    margin-top: 30px;
  }
  .contactp{
    margin-top: 20px;
  }
  .contact input{
    width: 100%;
    font-size: 20px;
    border: 1px solid #000;
  }
  option{
    font-size: 20px;
  }
  .contact textarea{
    width: 100%;
    border: 1px solid #000;
  }
  .contact label{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .contact button{
    width: 100%;
    background: gray;
    border: none;
    color: #fff;
    font-size: 25px;
  }
  .card-body .product-context{
    margin-left: 15px;
  }

  .card-body>a{
    color: #000000;
    text-decoration: none;
    padding: 5px;
  }

  .card-body>a:hover{
    text-decoration: underline;
}

</style>