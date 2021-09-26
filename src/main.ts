import './assets/styles/style.scss'

import { createApp } from 'vue'
import router from './router'
import store from './store'

import MYApplication from './MY-Application.vue'

createApp(MYApplication).use(store).use(router).mount('#MY\\:application-root')
