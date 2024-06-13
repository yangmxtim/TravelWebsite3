<template>
    <ul class="bubble">
      <li v-for="n in 10" :key="n"></li>
    </ul>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* 將相關樣式放在這裡 */
  .bubble{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  /*z-index defult value=1*/
  z-index:0;
  /*upgrade gpu rendering*/
  transform:translateZ(0);
}

.bubble li{
  position:absolute;
  list-style:none;
  display:block;
  background:rgba(255,255,255,0.2);
  /*make bubble on page bottom*/
   bottom:-100px; 
  animation:bubble-ani 20s linear infinite;
  border-radius:100%;
}

/* glow of the bubbles*/
.bubble li:before {
    position: absolute;
    left: 20%;
    top: 21%;
    width: 25%;
    content: '';
    background: rgba(255,255,255,0.2);
    display: block;
    height: 25%;
    border-radius: 100%;
}

.bubble li:nth-child(1){
  width:20px;
  height:20px;
  left:65%;
}

.bubble li:nth-child(2){
  width:40px;
  height:40px;
  left:30%;
  animation-duration:13s;
  animation-delay:2s;
}

.bubble li:nth-child(3){
  width:25px;
  height:25px;
  left:75%;
  animation-duration:18s;
  animation-delay:3.5s;
}

.bubble li:nth-child(4){
  width:60px;
  height:60px;
  left:10%;
  animation-duration:23s;
  animation-delay:1.5s;
}

.bubble li:nth-child(5){
  width:20px;
  height:20px;
  left:90%;
  animation-duration:16s;
  animation-delay:2s;
}
.bubble li:nth-child(6){
  width:20px;
  height:20px;
  left:20%;
}

.bubble li:nth-child(7){
  width:40px;
  height:40px;
  left:70%;
  animation-duration:13s;
  animation-delay:2s;
}

.bubble li:nth-child(8){
  width:25px;
  height:25px;
  left:5%;
  animation-duration:18s;
  animation-delay:3.5s;
}

.bubble li:nth-child(9){
  width:60px;
  height:60px;
  left:80%;
  animation-duration:23s;
  animation-delay:1.5s;
}

.bubble li:nth-child(10){
  width:20px;
  height:20px;
  left:25%;
  animation-duration:16s;
  animation-delay:2s;
}

@keyframes bubble-ani {
  0%{
    -webkit-transform:translateY(0);
    transform:translateY(0);
  }
  100%{
    -webkit-transform:translateY(-1080px);
    transform:translateY(-1080px);
  }
}
  </style>
  