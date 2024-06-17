<script setup>
import Top from '../Top.vue'
</script>
<template>
    <top></top>
    <div class="wave-container">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
</div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                    <ul class="icon">
                    <li class="item">
                        <a href="#">
                        <i class="fa-brands fa-instagram icon"></i>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#">
                        <i class="fa-brands fa-line icon"></i>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#">
                        <i class="fa-brands fa-youtube icon"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="wrapper">
                        <p>即刻訂閱海島旅遊！搶先獲得用戶限定優惠及最新熱門景點旅遊資訊！<br>
                        訂閱即代表你同意我們的使用者條款和隱私權保護政策</p>
                    </div>
                    
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="wrapper">
                        <input placeholder="請輸入Email" class="input" name="email" type="email">
                        <button class="button">訂閱</button> 
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-3 col-4">
                    <ul>
                        <router-link :to="'/about'">
                        <h6>認識海島</h6>
                        </router-link>
                        <li>關於我們</li>
                        <li>聯絡我們</li>
                        <li>常見問題</li>
                    </ul>  
                </div>
                <div class="col-sm-3 col-4">
                    <ul>
                        <h6>給用戶</h6>
                        <li>旅遊規劃</li>
                        <li>官方部落格</li>
                        <li>(◍•ᴗ•◍)ゝ</li>
                    </ul>  
                </div>
                <div class="col-sm-3 col-4">
                    <ul>
                        <h6>合作夥伴</h6>
                        <router-link :to="'/recruiting'"><li>人才招募</li></router-link>
                        <li>成為廠商</li>
                        <router-link :to="'/'"><li>廠商登入</li></router-link>
                    </ul>  
                </div>
                <div class="col-sm-3">
                    <ul>
                        <h6>付款方式</h6>
                        <ul class="wrapper">
                            <li class="icon"><svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 0.89543 0.895431 0 2 0H40C41.1046 0 42 0.895431 42 2V24C42 25.1046 41.1046 26 40 26H2C0.89543 26 0 25.1046 0 24V2Z" fill="white"/>
                                <g clip-path="url(#clip0_2768_50121)">
                                <path d="M17.3904 8.17187L13.4626 17.5422H10.9001L8.96727 10.0636C8.84992 9.60297 8.74852 9.43437 8.39117 9.24031C7.80852 8.92406 6.84633 8.62766 6.00055 8.44344L6.05727 8.17187H10.1823C10.708 8.17187 11.1807 8.52203 11.3001 9.1275L12.3209 14.5494L14.8435 8.17187H17.3904ZM27.4309 14.4833C27.4412 12.0102 24.0109 11.8739 24.0345 10.7691C24.0418 10.4328 24.3626 10.0753 25.0627 9.98391C25.4101 9.93844 26.3671 9.90375 27.4534 10.4033L27.8791 8.41625C27.2948 8.20312 26.5443 8 25.6106 8C23.2145 8 21.5282 9.27375 21.514 11.0977C21.4984 12.4467 22.7171 13.1995 23.6359 13.6478C24.5807 14.1069 24.8977 14.4019 24.8941 14.8125C24.8874 15.4412 24.1407 15.7187 23.4426 15.7295C22.2238 15.7483 21.5173 15.3998 20.9535 15.1378L20.5141 17.1908C21.0806 17.4506 22.126 17.6773 23.2101 17.6886C25.757 17.6886 27.4227 16.4308 27.4306 14.4825L27.4309 14.4833ZM33.7577 17.5422H35.9998L34.0427 8.17187H31.9734C31.7524 8.17001 31.5359 8.23455 31.3521 8.35713C31.1682 8.47971 31.0254 8.65468 30.9421 8.85937L27.304 17.5422H29.8495L30.3549 16.1423H33.4643L33.7577 17.5422ZM31.0529 14.2217L32.3288 10.7031L33.0632 14.2216L31.0529 14.2217ZM20.8538 8.17187L18.8493 17.5422H16.4252L18.4306 8.17187H20.8538Z" fill="#1434CB"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2768_50121">
                                <rect width="30" height="9.68859" fill="white" transform="translate(6 8)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </li>
                            <li class="icon"><svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 0.89543 0.895431 0 2 0H40C41.1046 0 42 0.895431 42 2V24C42 25.1046 41.1046 26 40 26H2C0.89543 26 0 25.1046 0 24V2Z" fill="white"/>
                                <g clip-path="url(#clip0_2778_46553)">
                                <path d="M23.9754 7.45422H18.0264V18.1454H23.9754V7.45422Z" fill="#FF5F00"/>
                                <path d="M18.4042 12.7989C18.4034 11.7694 18.6367 10.7532 19.0866 9.82727C19.5365 8.90131 20.1911 8.08982 21.001 7.45421C19.998 6.66565 18.7935 6.1752 17.525 6.03891C16.2565 5.90262 14.9752 6.126 13.8277 6.68351C12.6801 7.24102 11.7126 8.11016 11.0357 9.19158C10.3588 10.273 9.99982 11.5231 9.99982 12.7989C9.99982 14.0747 10.3588 15.3247 11.0357 16.4062C11.7126 17.4876 12.6801 18.3567 13.8277 18.9142C14.9752 19.4717 16.2565 19.6951 17.525 19.5588C18.7935 19.4225 19.998 18.9321 21.001 18.1435C20.1909 17.5081 19.5362 16.6967 19.0862 15.7707C18.6363 14.8446 18.4031 13.8284 18.4042 12.7989V12.7989Z" fill="#EB001B"/>
                                <path d="M32 12.7989C31.9997 14.0743 31.6406 15.3239 30.9638 16.405C30.287 17.4861 29.3197 18.3549 28.1726 18.9124C27.0254 19.4698 25.7446 19.6933 24.4764 19.5574C23.2082 19.4214 22.0039 18.9315 21.0009 18.1435C21.8101 17.5073 22.4642 16.6957 22.914 15.7699C23.3638 14.8441 23.5975 13.8282 23.5975 12.7989C23.5975 11.7696 23.3638 10.7537 22.914 9.82786C22.4642 8.90203 21.8101 8.09041 21.0009 7.45421C22.0039 6.66627 23.2082 6.17634 24.4764 6.04039C25.7446 5.90443 27.0254 6.12794 28.1726 6.68538C29.3197 7.24281 30.287 8.11169 30.9638 9.19275C31.6406 10.2738 31.9997 11.5234 32 12.7989V12.7989Z" fill="#F79E1B"/>
                                <path d="M31.3522 17.0123V16.7932H31.441V16.7479H31.2162V16.7932H31.3031V17.0123H31.3522ZM31.7885 17.0123V16.7479H31.7186L31.6412 16.9367L31.5619 16.7479H31.492V17.0123H31.5411V16.814L31.6147 16.9839H31.6657L31.7394 16.8121V17.0123H31.7885Z" fill="#F79E1B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2778_46553">
                                <rect width="22" height="13.5977" fill="white" transform="translate(10 6)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </li>
                            <li class="icon"><svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 0.89543 0.895431 0 2 0H40C41.1046 0 42 0.895431 42 2V24C42 25.1046 41.1046 26 40 26H2C0.89543 26 0 25.1046 0 24V2Z" fill="white"/>
                                <path d="M25.312 15.0279H26.6831C26.7223 15.0279 26.8137 15.0143 26.8529 15.0143C27.1141 14.9599 27.3361 14.7148 27.3361 14.3743C27.3361 14.0475 27.1141 13.8024 26.8529 13.7344C26.8137 13.7207 26.7354 13.7207 26.6831 13.7207H25.312V15.0279Z" fill="url(#paint0_linear_2768_50113)"/>
                                <path d="M26.5265 6C25.2206 6 24.1498 7.10296 24.1498 8.47826V11.0518H27.5059C27.5842 11.0518 27.6756 11.0518 27.7409 11.0655C28.4983 11.1063 29.0598 11.5148 29.0598 12.2229C29.0598 12.7812 28.6811 13.2578 27.976 13.3531V13.3803C28.7464 13.4348 29.334 13.8841 29.334 14.5786C29.334 15.3275 28.6811 15.8177 27.8193 15.8177H24.1368V20.8559H27.6234C28.9292 20.8559 30 19.753 30 18.3777V6L26.5265 6Z" fill="url(#paint1_linear_2768_50113)"/>
                                <path d="M27.1663 12.3863C27.1663 12.0595 26.9443 11.8416 26.6831 11.8008C26.657 11.8008 26.5917 11.7872 26.5526 11.7872H25.312V12.9855H26.5526C26.5917 12.9855 26.6701 12.9855 26.6831 12.9718C26.9443 12.931 27.1663 12.7131 27.1663 12.3863V12.3863Z" fill="url(#paint2_linear_2768_50113)"/>
                                <path d="M13.3897 6C12.0838 6 11.0131 7.10296 11.0131 8.47826V14.5922C11.679 14.9326 12.3711 15.1505 13.0632 15.1505C13.8859 15.1505 14.3299 14.6331 14.3299 13.925V11.0382H16.367V13.9114C16.367 15.028 15.701 15.9403 13.4419 15.9403C12.0708 15.9403 11 15.6271 11 15.6271V20.8423H14.4866C15.7924 20.8423 16.8632 19.7394 16.8632 18.3641V6L13.3897 6Z" fill="url(#paint3_linear_2768_50113)"/>
                                <path d="M19.9581 6C18.6522 6 17.5814 7.10296 17.5814 8.47826V11.7191C18.1821 11.188 19.2268 10.8476 20.9113 10.9293C21.8123 10.9701 22.7787 11.2289 22.7787 11.2289V12.2774C22.2955 12.0186 21.7209 11.7871 20.9766 11.7327C19.6969 11.6374 18.9264 12.291 18.9264 13.4348C18.9264 14.5922 19.6969 15.2458 20.9766 15.1369C21.7209 15.0824 22.2955 14.8373 22.7787 14.5922V15.6407C22.7787 15.6407 21.8254 15.8994 20.9113 15.9403C19.2268 16.022 18.1821 15.6816 17.5814 15.1505V20.8696H21.068C22.3739 20.8696 23.4447 19.7666 23.4447 18.3913V6L19.9581 6Z" fill="url(#paint4_linear_2768_50113)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2768_50113" x1="24.1476" y1="16.2709" x2="30.0157" y2="16.2709" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#007940"/>
                                <stop offset="0.2285" stop-color="#00873F"/>
                                <stop offset="0.7433" stop-color="#40A737"/>
                                <stop offset="1" stop-color="#5CB531"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_2768_50113" x1="24.1475" y1="20.8568" x2="30.016" y2="20.8568" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#007940"/>
                                <stop offset="0.2285" stop-color="#00873F"/>
                                <stop offset="0.7433" stop-color="#40A737"/>
                                <stop offset="1" stop-color="#5CB531"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_2768_50113" x1="24.1475" y1="14.2807" x2="30.0158" y2="14.2807" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#007940"/>
                                <stop offset="0.2285" stop-color="#00873F"/>
                                <stop offset="0.7433" stop-color="#40A737"/>
                                <stop offset="1" stop-color="#5CB531"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_2768_50113" x1="11.0103" y1="20.9644" x2="16.9692" y2="20.9644" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1F286F"/>
                                <stop offset="0.4751" stop-color="#004E94"/>
                                <stop offset="0.8261" stop-color="#0066B1"/>
                                <stop offset="1" stop-color="#006FBC"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_2768_50113" x1="17.5477" y1="20.7608" x2="23.3352" y2="20.7608" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6C2C2F"/>
                                <stop offset="0.1735" stop-color="#882730"/>
                                <stop offset="0.5731" stop-color="#BE1833"/>
                                <stop offset="0.8585" stop-color="#DC0436"/>
                                <stop offset="1" stop-color="#E60039"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </li>
                            <li class="icon">
                                 <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2C0 0.89543 0.895431 0 2 0H40C41.1046 0 42 0.895431 42 2V24C42 25.1046 41.1046 26 40 26H2C0.89543 26 0 25.1046 0 24V2Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1457 10.251H15.0349C15.1003 10.2507 15.1632 10.2765 15.2096 10.3226C15.256 10.3688 15.2822 10.4315 15.2824 10.497V16.0039C15.2824 16.1396 15.1715 16.25 15.0349 16.25H14.1274C14.0591 16.2452 13.9983 16.2118 13.9569 16.1628C13.9466 16.1522 13.937 16.1409 13.9284 16.1289L11.5013 12.676V16.0034C11.5013 16.1391 11.39 16.2495 11.2539 16.2495H10.3642C10.2275 16.2495 10.1167 16.1391 10.1167 16.0034V10.497C10.1169 10.4315 10.143 10.3688 10.1894 10.3226C10.2359 10.2765 10.2987 10.2507 10.3642 10.251H11.2544C11.2591 10.251 11.2638 10.2507 11.2685 10.2505C11.278 10.25 11.2874 10.2495 11.2964 10.251C11.4056 10.251 11.504 10.2779 11.5702 10.3721L13.8983 13.6834V10.497C13.8984 10.4315 13.9246 10.3688 13.971 10.3226C14.0174 10.2765 14.0803 10.2507 14.1457 10.251ZM8.04136 10.251H8.93108C8.99651 10.2507 9.05937 10.2765 9.10579 10.3226C9.15221 10.3688 9.17838 10.4315 9.17852 10.497V16.0034C9.17852 16.1391 9.06771 16.2495 8.93108 16.2495H8.04136C7.90472 16.2495 7.79391 16.1391 7.79391 16.0034V10.497C7.79406 10.4315 7.82022 10.3688 7.86664 10.3226C7.91306 10.2765 7.97592 10.2507 8.04136 10.251ZM4.38353 14.8726H6.78104C6.91689 14.8723 7.02735 14.9822 7.02794 15.1182V16.0033C7.02794 16.139 6.91767 16.2494 6.78157 16.2494H3.24744C3.11081 16.2494 3 16.139 3 16.0033V10.4969C3.00028 10.4315 3.02651 10.3689 3.07292 10.3229C3.11932 10.2768 3.1821 10.2511 3.24744 10.2514H4.13609C4.20152 10.2511 4.26438 10.2769 4.3108 10.3231C4.35722 10.3692 4.38339 10.432 4.38353 10.4975V14.8726ZM20.0026 11.6277C20.1392 11.6277 20.25 11.5179 20.25 11.3822V10.497C20.2499 10.4315 20.2237 10.3688 20.1773 10.3226C20.1309 10.2765 20.068 10.2507 20.0026 10.251H16.4684C16.4031 10.2508 16.3404 10.2767 16.2941 10.3228C16.2478 10.369 16.2217 10.4316 16.2215 10.497V16.0034C16.2215 16.1391 16.3323 16.2495 16.469 16.2495H20.0031C20.1392 16.2495 20.25 16.1391 20.25 16.0034V15.1183C20.2497 15.0529 20.2235 14.9903 20.1771 14.9442C20.1307 14.8982 20.0679 14.8725 20.0026 14.8728H17.6056V13.9381H20.0026C20.1392 13.9381 20.25 13.8282 20.25 13.6925V12.8079C20.2499 12.7424 20.2237 12.6797 20.1773 12.6335C20.1309 12.5874 20.068 12.5616 20.0026 12.5619H17.6056V11.6277H20.0026Z" fill="black"/>
                                <path d="M38.3997 18.5H23.1004C22.9417 18.5006 22.7892 18.4367 22.6766 18.3225C22.564 18.2082 22.5005 18.053 22.5001 17.8909V8.60905C22.5001 8.27306 22.7686 8 23.0999 8H38.3992C38.731 8 39.0001 8.27253 39.0001 8.60905V17.8909C39.0001 18.2269 38.731 18.4995 38.3992 18.4995" fill="#08BF5B"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2222 12.5993C28.2222 13.4853 27.4936 14.1981 26.5543 14.1981H25.8393V15.5073C25.8393 15.5939 25.7674 15.6641 25.679 15.6641H24.9103C24.868 15.6643 24.8273 15.6478 24.7972 15.6184C24.7672 15.589 24.7502 15.5491 24.7501 15.5073V11.1568C24.7501 11.0697 24.8219 11 24.9103 11H26.5543C27.4936 11 28.2222 11.7128 28.2222 12.5988V12.5993ZM27.133 12.5993C27.133 12.2591 26.8879 11.9998 26.5543 11.9998H25.8392V13.1989H26.5543C26.8873 13.1989 27.133 12.9391 27.133 12.5993ZM30.4353 13.1855C30.9053 13.1855 31.2456 13.4986 31.2456 13.9982C31.2456 14.4984 30.9053 14.8114 30.4353 14.8114C29.9659 14.8114 29.6256 14.4984 29.6256 13.9982C29.6256 13.4986 29.9659 13.1855 30.4353 13.1855ZM32.2672 12.4153V15.5816C32.2672 15.6277 32.2292 15.6641 32.1829 15.6641H31.3305C31.3081 15.6642 31.2866 15.6556 31.2707 15.6401C31.2548 15.6247 31.2458 15.6036 31.2456 15.5816V15.351C31.0214 15.6041 30.6878 15.7574 30.2314 15.7574C29.3394 15.7574 28.6041 14.9913 28.6041 13.9982C28.6041 13.0056 29.3394 12.239 30.2314 12.239C30.6878 12.239 31.0214 12.3928 31.2462 12.6459V12.4153C31.2462 12.3692 31.2836 12.3323 31.3305 12.3323H32.1829C32.2297 12.3323 32.2672 12.3697 32.2672 12.4153ZM34.8817 14.3513L35.6654 12.4194C35.6869 12.3668 35.7389 12.3325 35.7965 12.3328H36.6661C36.6939 12.3328 36.7198 12.3463 36.7355 12.3688C36.7511 12.3914 36.7543 12.4201 36.7442 12.4455L34.9321 16.9134C34.9106 16.966 34.8586 17.0003 34.801 17H33.9319C33.9041 17.0002 33.878 16.9868 33.8622 16.9642C33.8465 16.9416 33.8432 16.9128 33.8534 16.8872L34.3462 15.6723L32.9942 12.4466C32.9836 12.421 32.9866 12.392 33.0023 12.3691C33.018 12.3463 33.0442 12.3326 33.0722 12.3328H33.9413C33.9982 12.3326 34.0495 12.3662 34.0714 12.4179L34.8817 14.3513Z" fill="white"/>
                                </svg>
                            </li>    
                        </ul>  
                    </ul>  
                </div>
            </div>
            <div class="row">
                <p>copyright&copy; 2024 All rights reserved. 本網站僅供小組專題使用，不提供商業用途</p>
            </div>
        </div>
    </footer>
    
</template>

<style scoped>
/* 海浪動畫 */
 .wave-container {
    position: relative;
    overflow: hidden;
    height: 150px; /* 調整容器的高度 */
    margin-bottom: -100px; /* 負的 margin 使得 footer 能夠與波浪圖案合併 */
}

.wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: url('../img/wave.png');
            background-size: 1000px 100px;
        }
        .wave1 {
            animation: animate2 30s linear infinite;
            z-index: 1000;
            opacity: 1;
            animation-delay: 0s;
            bottom: 0;
        }
        .wave2 {
            animation: animate 15s linear infinite;
            z-index: 999;
            opacity: 0.5;
            animation-delay: -5s;
            bottom: 10px;
        }
        .wave3 {
            animation: animate 30s linear infinite;
            z-index: 998;
            opacity: 0.2;
            animation-delay: -2s;
            bottom: 15px;
        }
        .wave4 {
            animation: animate2 5s linear infinite;
            z-index: 997;
            opacity: 0.7;
            animation-delay: -5s;
            bottom: 20px;
        }
        @keyframes animate {
            0% { background-position-x: 0; }
            100% { background-position-x: 1000px; }
        }
        @keyframes animate2 {
            0% { background-position-x: 0; }
            100% { background-position-x: -1000px; }
        }
footer {
  background-color:#0f4c81;
  margin-top: 30px;
  color: white;
  width: 100%;
  height: 50%;
  display: flex;
  font-size: 14px;
  margin-top: 100px;
}
/* 訂閱 */
.input {
  max-width: 190px;
  padding: 15px;
  font-size: 15px;
  color: black;
  border-top-left-radius: .5em;
  border-bottom-left-radius: .5em;
  border: 2px solid #fff;
  margin-right: -10px;
  height: 40px;
}

.button {
  border: none;
  background-color:#08213a;
  text-decoration: none;
  text-align: center;
  padding: 15px;
  padding-bottom: 17px;
  font-size: 15px;
  color: #fff;
  border-top-right-radius: .5em;
  border-bottom-right-radius: .5em;
  cursor: pointer;
  height: 40px;
}

/* 聯絡我們icon */
.wrapper {
  display: inline-flex;
  list-style: none;
  height:auto;
  width: 100%;
  padding:30px 15px 0 0;
  font-family: "Poppins", sans-serif;
  justify-content: center;
}

.wrapper .icon {
  position: relative;
  background: #494949;
  border-radius: 50%;
  margin: 10px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
/* 清除超連結預設底線、顏色 */
a{
  text-decoration: none;
  color: white;
}
.router-link-active{
  text-decoration: none;
}
/* copyright置中 */
p{
    text-align: center;
}
/* 清除li點點 */
ul li{
list-style-type:none;
}

.icon {
  display: flex;
  list-style: none;
  gap: 1rem;
  display: flex; 
  justify-content: center;
}

.item a {
  text-decoration: none;
  width: 3rem;
  height: 3rem;
  background-color: #f0f9fe;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 3px solid #f0f9fe;
  overflow: hidden;
  margin-top: 70%;
}

.item a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  z-index: 0;
  scale: 1 0;
  transform-origin: bottom;
  transition: scale 0.5s ease;
}

.item:hover a::before {
  scale: 1 1;
}

.icon {
  font-size: 2rem;
  color: #08213a;
  transition: 0.5s ease;
  z-index: 2;
}

.item a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

.item:nth-child(1) {
  --bg-color: linear-gradient(to bottom right, #f9ce34, #ee2a7b, #6228d7);
}
.item:nth-child(2) {
  --bg-color: #00b900;
}
.item:nth-child(3) {
  --bg-color: #ff0000;
}
</style>