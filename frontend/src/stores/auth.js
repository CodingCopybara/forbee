import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(
          'https://8088-dlafhr789-forbee-hagbxtfzmyl.ws-us120.gitpod.io/oauth/token',
          new URLSearchParams({
            grant_type: 'password',
            username: email,
            password: password,
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Basic ' + btoa('uengine-client:uengine-secret'),
            },
          }
        )
        this.accessToken = response.data.access_token
        localStorage.setItem('accessToken', response.data.access_token)
        return true
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message)
        alert('로그인 실패: ' + (error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message))
        return false
      }
    },
    logout() {
      this.accessToken = null
      localStorage.removeItem('accessToken')
    },
  },
})