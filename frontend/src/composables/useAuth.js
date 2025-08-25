import { ref, computed } from 'vue'

const tokenKey = 'jwt_token'

const isLoggedIn = computed(() => !!localStorage.getItem(tokenKey))

function login(token) {
  localStorage.setItem(tokenKey, token)
}

function logout() {
  localStorage.removeItem(tokenKey)
  window.location.href = '/login'
}

export function useAuth() {
  return { isLoggedIn, login, logout }
}