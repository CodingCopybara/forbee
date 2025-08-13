<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo and Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10 8 11 7 11V13C8 13 9 14 9 15V19C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19V15C15 14 16 13 17 13V11C16 11 15 10 15 9Z"/>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">양봉 AI 서비스</h1>
        <p class="text-gray-600">양봉농협과 함께하는 스마트 양봉 솔루션</p>
      </div>

      <!-- Login/Register Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <!-- Tab Navigation -->
        <div class="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            @click="activeTab = 'login'"
            :class="[
              'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all',
              activeTab === 'login' 
                ? 'bg-white text-amber-600 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            로그인
          </button>
          <button
            @click="activeTab = 'register'"
            :class="[
              'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all',
              activeTab === 'register' 
                ? 'bg-white text-amber-600 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            회원가입
          </button>
        </div>

        <!-- Login Form -->
        <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">이메일</label>
            <input
              v-model="loginForm.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
            <input
              v-model="loginForm.password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                v-model="loginForm.remember"
                type="checkbox"
                class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
              />
              <span class="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
            </label>
            <a href="#" class="text-sm text-amber-600 hover:text-amber-700">비밀번호 찾기</a>
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">로그인</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              로그인 중...
            </span>
          </button>
        </form>

        <!-- Register Form -->
        <form v-if="activeTab === 'register'" @submit.prevent="handleRegister" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">이름</label>
              <input
                v-model="registerForm.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="이름"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">연락처</label>
              <input
                v-model="registerForm.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="010-0000-0000"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">이메일</label>
            <input
              v-model="registerForm.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="이���일을 입력하세요"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
            <input
              v-model="registerForm.password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
            <input
              v-model="registerForm.confirmPassword"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">양봉장 위치</label>
            <input
              v-model="registerForm.location"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="양봉장이 위치한 지역을 입력하세요"
            />
          </div>
          <div class="flex items-start">
            <input
              v-model="registerForm.agreeTerms"
              type="checkbox"
              required
              class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 mt-1"
            />
            <span class="ml-2 text-sm text-gray-600">
              <a href="#" class="text-amber-600 hover:text-amber-700">서비스 이용약관</a> 및 
              <a href="#" class="text-amber-600 hover:text-amber-700">개인정보처리방침</a>에 동의합니다.
            </span>
          </div>
          <button
            type="submit"
            :disabled="isLoading || registerForm.password !== registerForm.confirmPassword"
            class="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">회원가입</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              가입 중...
            </span>
          </button>
        </form>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-500">
            양봉농협과 함께하는 스마트 양봉 솔루션
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('login')
const isLoading = ref(false)

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const registerForm = ref({
  name: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: '',
  agreeTerms: false
})

const handleLogin = async () => {
  isLoading.value = true
  try {
    // 로그인 API 호출 로직
    console.log('로그인 시도:', loginForm.value)
    // 실제 구현에서는 API 호출
    await new Promise(resolve => setTimeout(resolve, 1500)) // 시뮬레이션
    alert('로그인 성공!')
  } catch (error) {
    console.error('로그인 실패:', error)
    alert('로그인에 실패했습니다.')
  } finally {
    isLoading.value = false
  }
}

const handleRegister = async () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }
  
  isLoading.value = true
  try {
    // 회원가입 API 호출 로직
    console.log('회원가입 시도:', registerForm.value)
    // 실제 구현에서는 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000)) // 시뮬레이션
    alert('회원가입이 완료되었습니다!')
    activeTab.value = 'login'
  } catch (error) {
    console.error('회원가입 실패:', error)
    alert('회원가입에 실패했습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>
