import { createApp, directive } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// 图标库
import './assets/font/aliicon/iconfont.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'	//样式
import ztui from './components/PublicComponent/ztui';
import vClickOutside from 'v-click-outside';
 
const app = createApp(App)

app.directive('highlight', {
    beforeMount(el, binding, vnode) {
        let blocks = el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    }
})

app.use(ztui);

app.use(vClickOutside);

app.use(router).use(store).mount('#app');