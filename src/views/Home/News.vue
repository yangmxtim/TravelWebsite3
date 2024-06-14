<script setup>
import { ref } from 'vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'

// 設定預設值為 'info1' 以顯示按鈕1的資訊
const selectedButton = ref('info1');

const showInfo = (info) => {
  selectedButton.value = info;
}
</script>

<template>
  <LayoutHeader />
  <div class="container">
    <img src="/src/views/Layout/img/fun.png" alt="">
    <hr>
    <div class="row">
      <div class="col-lg-5 col-sm-12">
        <h2>暑假早鳥FUN膽玩｜度假龍暑DAY</h2>
        <p>2024/5/22 至 2024/6/22 期間，於海島旅遊官網預訂住宿或行程，<br>
          可享最高 6.6% 折扣🎉<br>
          國內住宿 滿$3,000 折 $200<br>
          團體旅遊 滿$20,000 折 $500<br>
          指定住宿 週週再抽66折優惠碼！<br>
          趕快規劃暑假出遊，立即享優惠❗️<br>
          讓夏日之旅更加美好，盡在我們的海島旅遊❗️
        </p>
      </div>
      <div class="col-lg-7 col-sm-12">
        <div class="button-group">
          <button class="button" @click="showInfo('info1')">限時優惠</button>
          <button class="button" @click="showInfo('info2')">國內住宿</button>
          <button class="button" @click="showInfo('info3')">團體旅遊</button>
        </div>
        <div class="card" v-if="selectedButton === 'info1'">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">國內住宿超值優惠：<br>消費滿 $3,000 即享 $200 折扣，享受美好假期，體驗舒適住宿，千萬別錯過！</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">團體旅遊限時優惠：<br>消費滿 $20,000 即享 $500 折扣，立即報名，享受超值旅程，體驗精彩假期！</p>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="card" v-if="selectedButton === 'info2'">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n3.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">享受舒適的國內住宿，讓您感受到家的溫暖與便利，無論是旅行還是商務，這裡都是您最佳的選擇。</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">體驗國內頂級住宿，品味奢華與舒適，每個細節都為您量身打造，讓您的每一次入住都成為美好回憶。</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" v-if="selectedButton === 'info3'">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n5.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">讓我們與海島旅遊一起，探索無盡的奇妙之旅，團結共享，美好時刻永久留存。</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="/src/views/Layout/img/n6.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">加入海島旅遊舉辦的團體旅遊行程，結緣新友，共創難忘回憶，旅途更精彩！</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter />
</template>

<style scoped>
img {
  width: 100%;
}
p {
    line-height: 2.5; /* 調整行距，可以根據需要調整數值 */
  }
.button-group {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
}
.button {
  font-size: 1rem;
  background-color: #F2E1C1 !important;
  transform: translateY(-0.10em);
  box-shadow: 3px 3px 0px rgba(55, 22, 22, 0.67);
  border: 1px solid rgba(55, 22, 22, 0.67);
  border-radius: 50px;
  padding: 0.75em 1.5em;
  transition: 0.2s;
  cursor: pointer;
}
button:hover {
  box-shadow: 4px 6px 0px rgba(55, 22, 22, 0.67);
  transform: translateY(-0.4em);
}
button:active {
  box-shadow: none;
  transform: translateY(0);
}
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.card h3 {
  margin-top: 0;
}
</style>
