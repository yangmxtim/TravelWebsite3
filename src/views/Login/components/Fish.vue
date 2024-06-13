<template>
  <div id="particles">
      <img
      v-for="n in 13"
      :key="n"
      :src="`src/views/Login/img/fish${n}.png`"
      :class="`fish fish${n}`"
      @click="speedUp($event, n)"
    />
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

// 初始化每条鱼的速度（初始动画持续时间较短，以便加速效果明显）
 const speed = ref([20, 30, 30, 70, 20, 50, 40, 50, 50, 80, 30, 20, 60]);

const speedUp = (event, index) => {
  speed.value[index - 1] /= 2; // 速度
  const animationDuration = `${speed.value[index - 1]}s`; // new animation duration
  event.target.style.animationDuration = animationDuration; // set
};
</script>
  
<style scoped>
#particles {
  width: 100%;
  height: 100%;
}

.fish {
  position: absolute;
}

.fish1 {
  top: 20%;
  height: 60px;
  animation: animate 20s linear infinite;
}

.fish2 {
  top: 40%;
  height: 80px;
  animation: animate 30s linear infinite;
}

.fish3 {
  top: 70%;
  height: 100px;
  animation: animate 30s linear infinite;
}

.fish4 {
  top: 60%;
  height: 60px;
  animation: animate2 70s linear infinite;
}

.fish5 {
  top: 80%;
  height: 100px;
  animation: animate2 20s linear infinite;
}

.fish6 {
  top: 30%;
  height: 70px;
  animation: animate2 50s linear infinite;
}

.fish7 {
  top: 50%;
  height: 80px;
  animation: animate2 40s linear infinite;
}

.fish8 {
  top: 0%;
  height: 60px;
  animation: animate 50s linear infinite;
}

.fish9 {
  top: 50%;
  height: 110px;
  animation: animate3 50s linear infinite;
}

.fish10 {
  top: 30%;
  height: 150px;
  animation: animate 80s linear infinite;
}

.fish11 {
  top: 50%;
  height: 80px;
  animation: animate4 30s linear infinite;
}

.fish12 {
  top: 70%;
  height: 130px;
  animation: animate4 20s linear infinite;
}

.fish13 {
  top: 20%;
  height: 170px;
  animation: animate4 60s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateY(-20px);
    left: -10%;
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-20px);
    left: 100%;
  }
}

@keyframes animate2 {
  0% {
    transform: translateY(-50px);
    right: -10%;
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-50px);
    right: 100%;
  }
}

@keyframes animate3 {
  0% {
    transform: translateY(-30px);
    left: 5%;
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-30px);
    left: 100%;
  }
}

@keyframes animate4 {
  0% {
    transform: translateY(-40px);
    right: 0%;
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-40px);
    right: 130%;
  }
}
</style>
