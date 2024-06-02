//引入初始化樣式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//導入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
//導入FontAwsome 5
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//導入vue-datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

//導入字型
import '@/assets/font/font.css';

// elemetmPlus 引入插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//bootstrap
library.add(faPhone)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}; // element-plus icon
app.use(ElementPlus);
app.mount('#app')
app.component('VueDatePicker', VueDatePicker);
