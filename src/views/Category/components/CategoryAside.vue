<!-- CategoryAside.vue -->
<template>
    <div class="card my-2 p-0 box-shadow">
        <div class="row">
            <div class="col-md-12 my-2">
                <div class="card-body">
                    <h4 class="card-title pb-2">熱門旅遊縣市</h4>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item nav-link mx-lg-2">
                                <input type="checkbox" id="taipei" name="台北市" @change="handleCityChange('台北市', $event)">
                                <label for="taipei">台北市</label>
                            </li>
                            <li class="nav-item nav-link mx-lg-2">
                                <input type="checkbox" id="newtaipei" name="新北市" @change="handleCityChange('新北市', $event)">
                                <label for="newtaipei">新北市</label>
                            </li>
                            <li class="nav-item nav-link mx-lg-2">
                                <input type="checkbox" id="taichung" name="台中市" @change="handleCityChange('台中市', $event)">
                                <label for="taichung">台中市</label>
                            </li>
                            <li class="nav-item nav-link mx-lg-2">
                                <input type="checkbox" id="tainan" name="台南市" @change="handleCityChange('台南市', $event)">
                                <label for="tainan">台南市</label>
                            </li>
                            <li class="nav-item nav-link mx-lg-2">
                                <input type="checkbox" id="kaohsiung" name="高雄市" @change="handleCityChange('高雄市', $event)">
                                <label for="kaohsiung">高雄市</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleCityChange(city, event) {
            console.log(`City: ${city}, Checked: ${event.target.checked}`); // 添加调试信息
            this.$emit('city-change', city, event.target.checked);
        }
    }
};
</script>

<style scoped>
/* 清除超連結預設底線、顏色 */
a {
    text-decoration: none;
    color: gray;
}

.router-link-active {
    text-decoration: none;
}

@media (max-width: 767.98px) {
    a {
        padding: 8px;
    }
}
</style>
