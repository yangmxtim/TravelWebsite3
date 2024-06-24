<template>
    <div class="qrcode">
        <div v-if="orderLists == 0" class="noOrder">目前尚無訂單</div>
        <div class="qr-title container" v-else v-for="orderList in orderLists" :key="orderList.order_item_id">
            <div class="col-4">
                <img :src="orderList.img"
                    @click="ImgQrdisplay"
                    v-show="!showQRCode"
                    class="product_img"
                />
                <vue-qrcode 
                    v-if="showQRCode"    
                    @click="ImgQrdisplay"
                    :value=generateQRCode(orderList.order_item_id)>
                </vue-qrcode>
            </div>
            <div class="col-8">
                <div class="order-title">{{ orderList.name2 }} - {{ orderList.name }}</div>
                <div>價格 : {{ orderList.price }}</div>
                <div>下訂日期 : {{ orderList.order_date }}</div>
                <div>使用狀態 : {{ orderList.status  }}</div>
                http://localhost:8080/api/check/{{ orderList.order_item_id }}
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import VueQrcode from 'vue-qrcode'
import axios from 'axios';


const orderLists = ref();
const uid = inject("id");
// 顯示圖片或qrcode
const showQRCode = ref(false);
const ImgQrdisplay = () => {
    showQRCode.value = !showQRCode.value
}

//產生qr api (注意 ip需換成後端的ip 才能讓手機掃)
const generateQRCode = (orderlistid) =>{
    const ran = Math.floor(Math.random()*100000000);
    return `http://localhost:8080/api/check/${orderlistid}?${ran}`
}


onMounted(() => {
    axios
        .get(`http://localhost:8080/orderlists/${uid.value}`)
        .then(response => {
            orderLists.value = response.data;
            console.log(orderLists.value);
            
        })
})
</script>

<style scoped>
.qrcode {
    border: 1px solid lightgray;
    border-radius: 5px;
    min-height: 90vh;
}

img {

    width: 200px;
}

.qr-title {
    padding: 1.5rem;
    font-size: 15px;
    border-bottom: 1px solid lightgray;
    display: flex;
    min-height: 250px;


}
.noOrder{
    font-size: 30px;
    display: block;
    text-align: center;
    margin-top: 10rem;
}
.order-title{font-size: 20px; font-weight: bold;padding-bottom: 15px;}
.product_img{margin-bottom: 15px}


/* 998 css */
@media screen and (max-width: 995px) {
    .qr-title{
        display: flex;
        flex-direction: column;
        min-height: 400px;
    }
    .col-8{
        margin-top: auto;
        /* margin-left: auto; */
        margin-left: 2.4em;
        width: 90%;
    }
    .col-4{margin: auto; margin-right: 12em;}
    .product_img{
        width: 300px;
        margin-left: -1.8em;
    }
}
</style>