/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import axios from 'axios';
import { Icon } from '@iconify/vue';

loadFonts()

// Create vue app
const app = createApp(App)

// Setting Config
axios.defaults.baseURL = '';
app.config.globalProperties.$axios = axios;

// Component
app.component('Icon',Icon)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)

// Mount vue app
app.mount('#app')
