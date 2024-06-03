<template>
  <div class="video-container">
    <video autoplay muted loop>
      <source src="/src/views/Layout/img/The_Woods_4K_Living_Background.mp4" type="video/mp4">
    </video>
    <div class="overlay-text">
      精心策劃的旅程</div>
      <div class="overlay-text1">
        讓每一刻都成為美好回憶</div>
      </div>
  
</template>

<style scoped>
  .video-container {
    position: relative;
    width: 100%;
    height: 600px; /* Height of the video container */
    overflow: hidden;
  }

  .video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-text {
    position: absolute;
    top: 40%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 3vw; 
    color: #fff;
    animation: moveText 5s linear infinite;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .overlay-text1 {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    font-size: 3vw;
    color: #fff;
    animation: moveText 5s linear infinite;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @keyframes moveText {
    0% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px);
    }
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
  }

  @media (max-width: 767.98px){
    .overlay-text {
    position: absolute;
    top: 45%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 4vw; 
    color: #fff;
    animation: moveText 5s linear infinite;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .overlay-text1 {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    font-size: 4vw;
    color: #fff;
    animation: moveText 5s linear infinite;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  }
</style>
