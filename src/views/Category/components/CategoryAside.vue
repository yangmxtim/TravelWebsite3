<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['city-change']);
const activeCity = ref('');

const handleCityChange = (city) => {
    activeCity.value = activeCity.value === city ? '' : city; // 切换选中状态
    emit('city-change', city, activeCity.value === city);
};
</script>

<template>
    <div class="card my-2 p-0 box-shadow">
        <div class="row">
            <div class="col-md-12 my-2">
                <div class="card-body">
                    <h4 class="card-title pb-2">熱門旅遊縣市</h4>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item nav-link mx-lg-2" :class="{ active: activeCity === '台北市' }">
                                <button @click="handleCityChange('台北市')">台北市</button>
                            </li>
                            <li class="nav-item nav-link mx-lg-2" :class="{ active: activeCity === '新北市' }">
                                <button @click="handleCityChange('新北市')">新北市</button>
                            </li>
                            <li class="nav-item nav-link mx-lg-2" :class="{ active: activeCity === '台中市' }">
                                <button @click="handleCityChange('台中市')">台中市</button>
                            </li>
                            <li class="nav-item nav-link mx-lg-2" :class="{ active: activeCity === '台南市' }">
                                <button @click="handleCityChange('台南市')">台南市</button>
                            </li>
                            <li class="nav-item nav-link mx-lg-2" :class="{ active: activeCity === '高雄市' }">
                                <button @click="handleCityChange('高雄市')">高雄市</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 清除超連結預設底線、顏色 */
a {
    text-decoration: none;
    color: gray;
}

.router-link-active {
    text-decoration: none;
}

button {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    cursor: pointer;
}

button:focus {
    outline: none;
}

.nav-item.nav-link.active button {
    border-bottom: 2px solid yellow;
}

@media (max-width: 767.98px) {
    a {
        padding: 8px;
    }
}
</style>
