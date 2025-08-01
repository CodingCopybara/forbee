<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-img
          src="src/assets/honeybear.png"
          alt="logo"
          max-width="40"
          class="me-4"
        ></v-img>

        <v-btn
          v-for="link in links"
          :key="link.label"
          :to="link.path"
          variant="text"
          color="text-black"
        >
          {{  link.label }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn 
          text
          color="text-black"
          :to="isLoggedIn ? '/mypage' : '/login'">
          {{ isLoggedIn ? '마이페이지' : '로그인' }}
        </v-btn>

      </v-container>
    </v-app-bar>

    <v-main class="bg-amber-lighten-1">
      <v-container style="background: transparent;">
        <v-row>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="mt-5"
            >

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer class="footer" height="auto">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center">
            <!-- <v-img
              src="/nh-logo.png"
              max-width="120"
              class="mb-2"
            ></v-img> -->
          </v-col>
          <v-col cols="12" class="text-center text-body-2">
            <div>사업자등록번호 203-82-32164(본사) | 139-82-01832(경제사업부) | 558-82-00295(구매사업단)</div>
            <div>사업장 소재지[본점] 서울특별시 중구 다산로 178 한국양봉농협 본점</div>
            <div>대표전화 02-2231-9856(본점) | 031-671-5000(경제사업부) | 팩스 031-671-6880</div>
            <div class="mt-2">&copy; 한국양봉농협</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <router-link to="/chatbot" class="chatbot-btn">
      <img src="bee.png" alt="chatbot" class="chatbot-img" />
    </router-link>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const isLoggedIn = ref(false)
// import { useAuth } from "@/composables/useAuth"

  const links = [
    { label: '조합원', path: '/member'},
    { label: '커뮤니티', path: '/community'},
    { label: '농협은행', path: 'bank'},
    { label: '허니몰', path: '/honeymall'}
  ]
</script>

<style scoped>
.chatbot-btn {
  position: fixed;
  bottom: 96px;
  right: 32px;
  z-index: 3000;
  padding: 0;
}
.chatbot-img {
  width: 64px;
  height: 64px;
  object-fit: contain; /* 비율 유지 */
  display: block;
  cursor: pointer;
}
.footer {
  background-color: #F8F4E1; /* 원하는 베이지 톤 */
  color: #333;               /* 글씨색 */
}
</style>