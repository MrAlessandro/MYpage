import './assets/styles/style.scss'

import { createApp } from 'vue'
import App from './MYapp.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#MY\\:app-root')
