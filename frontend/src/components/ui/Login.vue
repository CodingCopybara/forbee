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
import axios from 'axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await axios.post(
      'https://8088-dlafhr789-forbee-58x0ymk3jqh.ws-us120.gitpod.io/oauth/token',
      new URLSearchParams({
        grant_type: 'password',
        username: email.value,
        password: password.value,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic dWVuZ2luZS1jbGllbnQ6dWVuZ2luZS1zZWNyZXQ=', // Base64 encoded uengine-client:uengine-secret
        },
      }
    )
    console.log('Login successful:', response.data)
    // Save token and redirect
    localStorage.setItem('accessToken', response.data.access_token)
    localStorage.setItem('refreshToken', response.data.refresh_token)
    router.push('/') // Redirect to home page or dashboard
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message)
    alert('로그인 실패: ' + (error.response && error.response.data && error.response.data.error_description ? error.response.data.error_description : error.message))
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
