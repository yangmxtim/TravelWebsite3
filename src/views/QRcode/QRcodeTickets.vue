<template>
    <!-- 登入 -->
    <div v-if="uid">
        <LayoutHeader />
        <div class="container">
            <div class="row">
                <div class="col-md-3" data-aos="fade-up">
                    <WeatherDate></WeatherDate>
                </div>
                <div class="col-md-9">
                    <MembersNav></MembersNav>
                    <OrderlistWithQR></OrderlistWithQR>
                    <!-- 支付成功訊息 -->
                    <el-alert
                        v-if="paymentSuccess"
                        title="支付成功"
                        type="success"
                        :closable="false"
                        show-icon
                        center
                    />
                </div>
            </div>
        </div>
        <br />
        <LayoutFooter />
    </div>
    <!-- 未登入 -->
    <div v-else="">
        <Login />
    </div>
</template>

<script setup>
import VueQrcode from 'vue-qrcode';
import Login from "../Login/Login.vue";
import { ref, inject, onMounted } from 'vue';
import LayoutHeader from '../Layout/components/LayoutHeader.vue';
import WeatherDate from '../Weather/WeatherDate.vue';
import MembersNav from '../Category/components/MembersNav.vue';
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import OrderlistWithQR from './OrderlistWithQR.vue';
import { ElMessage } from 'element-plus';

// 確認登入否
const uid = inject("id");

// 監聽 URL 參數，顯示支付成功訊息
const paymentSuccess = ref(false);

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') {
        paymentSuccess.value = true;
        ElMessage({
            message: '支付成功',
            type: 'success',
        });
    }
});
</script>

<style scoped>
/* .qrcode {
    border: 1px solid lightgray;
    border-radius: 5px;
    min-height: 90vh;
}

img {
    margin-left: 2rem;
    width: 200px;
}

.qr-title {
    margin-left: 3.5rem;
    font-size: 30px;
} */
</style>
