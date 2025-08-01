<template>
  <v-container class="fill-height" style="background-color: #F8F4E1;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="7" md="5" lg="3">
        <v-card 
          class="pa-6"
          elevation="10" 
          rounded="lg"
        >
          <v-card-title class="text-center text-h5 font-weight-bold py-4">
            회원가입
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="email"
                label="이메일"
                placeholder="이메일"
                variant="solo"
                bg-color="#F5F5F5"
                rounded="lg"
                flat
                class="mb-3"
                dense
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="비밀번호"
                placeholder="비밀번호"
                type="password"
                variant="solo"
                bg-color="#F5F5F5"
                rounded="lg"
                flat
                class="mb-3"
                dense
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                type="password"
                variant="solo"
                bg-color="#F5F5F5"
                rounded="lg"
                flat
                class="mb-3"
                dense
              ></v-text-field>
              <v-text-field
                v-model="name"
                label="이름"
                placeholder="이름"
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
                가입하기
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
import axios from 'axios'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const router = useRouter()

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }

  try {
    const response = await axios.post(
      'https://8088-dlafhr789-forbee-58x0ymk3jqh.ws-us120.gitpod.io/api/users/register',
      {
        email: email.value,
        password: password.value,
        name: name.value,
      }
    )
    console.log('Registration successful:', response.data)
    alert('회원가입이 완료되었습니다. 로그인 해주세요.')
    router.push('/login') // Redirect to login page after successful registration
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message)
    alert('회원가입 실패: ' + (error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message))
  }
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
