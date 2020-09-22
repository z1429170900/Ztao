import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// 图标库
import './assets/font/aliicon/iconfont.css';

createApp(App).use(router).use(store).mount('#app')
