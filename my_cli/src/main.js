import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(store).use(router);

app.mount('#app');

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$router = router;

axios.defaults.baseURL = 'http://localhost:8001'