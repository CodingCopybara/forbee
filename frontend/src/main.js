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

// Axios 기본 설정 (한 번만 지정)
axios.defaults.baseURL = ''
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.interceptors.request.use(cfg => { cfg.headers['Role'] = 'USER'; return cfg })

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
