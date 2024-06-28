import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from './components/Header.vue'
import MainArea from './components/MainArea.vue'

const app = createApp(App);
app.use(store).use(router);

// 注册全局组件
app.component('hungry-header', Header); //标题栏
app.component('hungry-main', MainArea); //主页框

app.mount('#app');

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;

axios.defaults.baseURL = 'http://localhost:8001'