import { defineStore } from 'pinia'
import axios from 'axios'
import jwt_decode from 'jwt-decode' // jwt-decode 라이브러리 import

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
    userIdentifier: localStorage.getItem('userIdentifier') || null,
    username: localStorage.getItem('username') || null,
    name: localStorage.getItem('name') || null,
    role: localStorage.getItem('role') || null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(
          import.meta.env.VITE_GW_URL+'/oauth/token',
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

        // JWT 디코딩하여 사용자 정보 추출
        const decodedToken = jwt_decode(response.data.access_token);
        this.userIdentifier = decodedToken.userIdentifier;
        this.username = decodedToken.username;
        this.name = decodedToken.name;
        this.role = decodedToken.role;

        localStorage.setItem('userIdentifier', decodedToken.userIdentifier);
        localStorage.setItem('username', decodedToken.username);


        const response2 = await axios.get(
          import.meta.env.VITE_GW_URL+`/users/${decodedToken.userIdentifier}`,
          {
            headers: {
              Authorization: `Bearer ${response.data.access_token}`, // Authorization 헤더에 JWT 추가
            },
          }
        );
        localStorage.setItem('name', response2.data.name);
        localStorage.setItem('role', response2.data.role);

        return true
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message)
        alert('로그인 실패: ' + (error.response && error.response.data && error.response.data.error_description ? error.response.data.error_description : error.message))
        return false
      }
    },
    logout() {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userIdentifier')
      localStorage.removeItem('username')
      localStorage.removeItem('name')
      localStorage.removeItem('role')
      this.accessToken = null
      this.userIdentifier = null
      this.username = null
      this.name = null
      this.role = null
    },
  },
})