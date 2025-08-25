<template>
  <v-container class="fill-height" style="background-color: #F8F4E1;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10" lg="6">
        <div v-if="!passwordVerified">
          <v-dialog v-model="dialog" persistent max-width="400px">
            <v-card>
              <v-card-title>
                <span class="headline">비밀번호 확인</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="password"
                  label="비밀번호"
                  type="password"
                  required
                  @keyup.enter="verifyPassword"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="verifyPassword">확인</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <v-card 
          v-if="passwordVerified"
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
import axios from 'axios'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const user = ref({
  email: '',
  name: '',
  role: '',
  userIdentifier: null,
})
const password = ref('')
const passwordVerified = ref(false)
const dialog = ref(true)

onMounted(() => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    router.push('/login');
  }
})

const verifyPassword = async () => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_GW_URL + '/oauth/token',
      new URLSearchParams({
        grant_type: 'password',
        username: authStore.username,
        password: password.value,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa('uengine-client:uengine-secret'),
        },
      }
    );

    if (response.data.access_token) {
      passwordVerified.value = true;
      dialog.value = false;
      fetchUserData();
    }
  } catch (error) {
    console.error('Password verification failed:', error);
    alert('비밀번호가 일치하지 않습니다.');
  }
};

const fetchUserData = async () => {
  const accessToken = localStorage.getItem('accessToken');
  user.value.email = authStore.username || 'N/A'
  user.value.userIdentifier = authStore.userIdentifier

  if (authStore.userIdentifier) {
    try {
      const response = await axios.get(
        import.meta.env.VITE_GW_URL+`/users/${authStore.userIdentifier}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
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
}

const changePassword = () => {
  alert('비밀번호 변경 기능은 아직 구현되지 않았습니다.')
}

const requestMemberUpgrade = () => {
  router.push('/member-upgrade');
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