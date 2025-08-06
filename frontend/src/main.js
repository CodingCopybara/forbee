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
import axios from 'axios'
import { Icon } from '@iconify/vue'

// Load custom fonts
loadFonts()

// Create Vue app
const app = createApp(App)

// Axios 기본 설정
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8085'
axios.defaults.headers.common['Content-Type'] = 'application/json'
// 개발용 임시 Role 헤더 추가
axios.interceptors.request.use(
  config => {
    config.headers['Category'] = 'USER'
    return config
  },
  error => Promise.reject(error)
)

// 전역 프로퍼티로 axios 제공
app.config.globalProperties.$axios = axios

// 전역 컴포넌트 등록
app.component('Icon', Icon)

// 플러그인 사용
app.use(vuetify)
app.use(createPinia())
app.use(router)

// 마운트
app.mount('#app')

export default axios
