import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();