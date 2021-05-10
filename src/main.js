import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amis/lib/themes/default.css';
import 'amis/lib/helper.css';
import 'amis/sdk/sdk.js';

createApp(App).use(store).use(router).mount('#app')
