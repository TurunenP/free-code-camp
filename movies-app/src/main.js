import { createApp } from 'vue'
import 'flowbite';
import store from '@/store'
import App from '@/App.vue'
import Notifications from 'notiwind'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'

createApp(App)
.use(store)
.use(router)
.use(Notifications)
.mount('#app')
