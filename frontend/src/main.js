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
import './assets/style.css';


// Load custom fonts
loadFonts()



// Axios 기본 설정 (한 번만 지정)
axios.defaults.baseURL = ''
axios.defaults.headers.common['Content-Type'] = 'application/json'

// Axios 인터셉터 설정
axios.interceptors.request.use(req => {
  console.log('➡️ Request:', {
    url: req.url,
    method: req.method,
    headers: req.headers,
    data: req.data
  })
  return req
})

axios.interceptors.response.use(
  res => {
    console.log('✅ Response:', res.status, res.headers)
    return res
  },
  err => {
    console.error('❌ Error response:', err.response?.status, err.response?.data, err.response?.headers)
    return Promise.reject(err)
  }
)


// Vue 앱 생성
const app = createApp(App)

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
