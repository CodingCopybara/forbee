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
            마이페이지
          </v-card-title>
          <v-card-text>
            <v-form>
              <div class="text-center mb-6">
                <v-avatar size="140">
                  <v-img src="https://picsum.photos/140" alt="User Avatar"></v-img>
                </v-avatar>
              </div>

              <v-row class="mb-3">
                <v-col cols="4" class="text-right font-weight-bold">이메일:</v-col>
                <v-col cols="8">{{ user.email }}</v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="4" class="text-right font-weight-bold">이름:</v-col>
                <v-col cols="8">{{ user.name }}</v-col>
              </v-row>
              <v-row class="mb-6">
                <v-col cols="4" class="text-right font-weight-bold">역할:</v-col>
                <v-col cols="8">{{ user.role }}</v-col>
              </v-row>

              <v-btn
                color="#FEBA17"
                block
                rounded="lg"
                class="py-5 font-weight-bold"
                elevation="2"
                @click="changePassword"
              >
                비밀번호 변경
              </v-btn>
              <v-btn
                color="#F8F4E1"
                block
                rounded="lg"
                class="mt-3 py-5 font-weight-bold"
                elevation="2"
                @click="requestMemberUpgrade"
              >
                조합원 신청
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios' // axios import 추가

const authStore = useAuthStore()
const user = ref({
  email: '',
  name: '',
  role: '',
  userIdentifier: null,
})

onMounted(async () => {
  user.value.email = authStore.username || 'N/A'
  user.value.userIdentifier = authStore.userIdentifier

  if (authStore.userIdentifier) {
    const accessToken = localStorage.getItem('accessToken'); // localStorage에서 accessToken 가져오기
    try {
      const response = await axios.get(
        `https://8088-dlafhr789-forbee-hagbxtfzmyl.ws-us120.gitpod.io/users/${authStore.userIdentifier}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 JWT 추가
          },
        }
      );
      user.value.name = response.data.name || 'N/A'
      user.value.role = response.data.role || '일반회원'
    } catch (error) {
      console.error('Failed to fetch user info:', error)
      user.value.name = '정보 없음'
      user.value.role = '정보 없음'
    }
  } else {
    user.value.name = '로그인 필요'
    user.value.role = '로그인 필요'
  }
})

const changePassword = () => {
  alert('비밀번호 변경 기능은 아직 구현되지 않았습니다.')
}

const requestMemberUpgrade = () => {
  alert('조합원 신청 기능은 아직 구현되지 않았습니다.')
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