<template>
  <v-container class="fill-height" style="background-color: #F8F4E1;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="8" lg="5">
        <v-card 
          class="pa-6"
          elevation="10" 
          rounded="lg"
        >
          <v-card-title class="text-center text-h5 font-weight-bold py-4">
            회원가입
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register" ref="registerForm">
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
                :rules="emailRules"
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
                :rules="passwordRules"
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
                :rules="confirmPasswordRules"
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
              <v-expansion-panels class="mb-3">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    개인정보 활용 동의
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p>1. 개인정보 수집 목적: 서비스 제공 및 회원 관리</p>
                    <p>2. 수집하는 개인정보 항목: 이메일, 비밀번호, 이름</p>
                    <p>3. 개인정보 보유 및 이용 기간: 회원 탈퇴 시까지</p>
                    <p>4. 동의를 거부할 권리가 있으며, 거부 시 회원가입이 제한될 수 있습니다.</p>
                    <p>5. 기타 사항은 개인정보처리방침을 참고해주시기 바랍니다.</p>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-checkbox
                v-model="privacyAgreement"
                label="위 내용에 동의합니다."
                class="mb-3"
                dense
              ></v-checkbox>
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
const privacyAgreement = ref(false)
const router = useRouter()
const registerForm = ref(null);

const emailRules = [
  v => !!v || '이메일을 입력해주세요.',
  v => /.+@.+\..+/.test(v) || '유효한 이메일 형식이 아닙니다.',
];

const passwordRules = [
  v => !!v || '비밀번호를 입력해주세요.',
  v => (v && v.length >= 4 && v.length <= 12) || '비밀번호는 4자 이상 12자 이하로 입력해주세요.',
];

const confirmPasswordRules = [
  v => !!v || '비밀번호 확인을 입력해주세요.',
  v => v === password.value || '비밀번호가 일치하지 않습니다.',
];

const register = async () => {
  const { valid } = await registerForm.value.validate();
  if (!valid) {
    alert('입력한 정보를 다시 확인해주세요.');
    return;
  }

  if (!privacyAgreement.value) {
    alert('개인정보 활용에 동의해야 합니다.')
    return
  }

  try {
    const response = await axios.post(
      import.meta.env.VITE_GW_URL+'/api/users/register',
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
