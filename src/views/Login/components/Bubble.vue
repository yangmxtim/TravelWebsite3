<template>
  <ul class="bubble">
    <li v-for="n in bubbles" :key="n.id" :style="n.style"></li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const bubbles = ref([]);
let lastBubbleTime = 0;

// 生成隨機泡泡的函數
function createBubble() {
  const id = Date.now();
  const size = Math.random() * 60 + 10; // 泡泡的隨機大小
  const left = Math.random() * 100; // 泡泡的隨機水平位置
  const duration = Math.random() * 20 + 10; // 泡泡的隨機動畫時長
  const delay = Math.random() * 5; // 泡泡的隨機動畫延遲

  return {
    id,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }
  };
}

// 滑鼠移動事件處理器
function onMouseMove() {
  const currentTime = Date.now();
  if (currentTime - lastBubbleTime > 200) { // 控制每200毫秒生成一個泡泡
    bubbles.value.push(createBubble());
    lastBubbleTime = currentTime;
  }
}

window.addEventListener('mousemove', onMouseMove);
</script>

<style scoped>
.bubble {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translateZ(0);
}

.bubble li {
  position: absolute;
  list-style: none;
  display: block;
  background: rgba(255, 255, 255, 0.2);
  bottom: -100px;
  animation: bubble-ani 20s linear infinite;
  border-radius: 100%;
}

/* glow of the bubbles */
.bubble li:before {
  position: absolute;
  left: 20%;
  top: 21%;
  width: 25%;
  content: '';
  background: rgba(255, 255, 255, 0.2);
  display: block;
  height: 25%;
  border-radius: 100%;
}

@keyframes bubble-ani {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1080px);
  }
}
</style>
