<template>
  <v-container class="fill-height" style="background-color: #F8F4E1;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="7" lg="4">
        <v-card 
          class="pa-6"
          elevation="10" 
          rounded="lg"
        >
          <v-card-title class="text-center text-h5 font-weight-bold py-4">
            로그인
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                placeholder="Email"
                variant="solo"
                bg-color="#F5F5F5"
                rounded="lg"
                flat
                class="mb-3"
                dense
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                placeholder="Password"
                type="password"
                variant="solo"
                bg-color="#F5F5F5"
                rounded="lg"
                flat
                class="mb-6"
                dense
              ></v-text-field>
              <v-btn
                type="submit"
                color="#FEBA17"
                block
                rounded="lg"
                class="py-5 font-weight-bold"
                elevation="2"
              >
                로그인
              </v-btn>
              <v-btn
                @click="goToRegister"
                color="#F8F4E1"
                block
                rounded="lg"
                class="mt-3 py-5 font-weight-bold"
                elevation="2"
              >
                회원가입
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth' // Pinia 스토어 import

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore() // 스토어 인스턴스 생성

const login = async () => {
  const success = await authStore.login(email.value, password.value) // 스토어의 login 액션 호출
  if (success) {
    router.push('/') // 로그인 성공 시 리다이렉트
  }
}

const goToRegister = () => {
  router.push('/register') // Assuming /register is the registration page path
}
</script>

<style scoped>
.v-card-title {
  font-family: 'Inter', sans-serif;
}
.v-btn {
  font-family: 'Inter', sans-serif;
}
</style>
