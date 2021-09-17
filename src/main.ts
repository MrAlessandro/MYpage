import './assets/styles/style.scss'

import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './MY-Application.vue'

createApp(App).use(store).use(router).mount('#MY\\:application-root')
