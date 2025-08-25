<template>
    <!-- ✅ Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <img :src="NHLogo" class="overlay-logo" style="align-self:flex-start; margin-left:5%;"/>
      </div>
    </section>

    <!-- ✅ 메인 콘텐츠 -->
    <v-main>
      <v-container>
        <v-sheet
          elevation="2"
          class="menu-group pa-4 mx-auto"
          max-width="1200"
          height="200"
        >
        <!-- 메뉴 카드 -->
        <v-row justify="space-around" class="text-center align-center">
          <v-col class="align-center" cols="auto" v-for="menu in menus" :key="menu.text">
            <v-btn
              class="menu-btn"
              rounded="circle"
              height="80"
              width="80"
              v-if="menu.external"
              :href="menu.url"
              target="_blank"
            >
              <v-icon size="28">{{ menu.icon }}</v-icon>
            </v-btn>

            <v-btn
              class="menu-btn"
              rounded="circle"
              height="80"
              width="80"
              v-else 
              :to="menu.path"
            >
              <v-icon size="28" class="mb-1">{{ menu.icon }}</v-icon>
            </v-btn>
              <div class="mt-1">{{ menu.text }}</div>
          </v-col>
        </v-row>
        </v-sheet>

        <!-- 오른쪽 홍보 배너 -->
        <v-row class="mt-6" justify="space-between">
          <v-col cols="12" md="4" v-for="(banner, i) in banners" :key="i">
            <v-card class="promo-card" :color="banner.color" dark>
              <v-card-text>
                <p>{{ banner.desc }}</p>
                <h3>{{ banner.title }}</h3>
                <v-btn outlined class="mt-2" :href="banner.link" target="_blank">바로가기</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>

</template>

<script setup>
import flower from '@/assets/background2.jpg'
import NHLogo from '@/assets/Group.png'

const menus = [
  { text: "서비스 소개", icon: "mdi-account", path: "/mypage" },
  { text: "조합원 페이지", icon: "mdi-file-document", path: "/member" },
  { text: "조합원 신청", icon: "mdi-cash" },
  { text: "한국양봉농협", icon: "mdi-credit-card", url: "https://yangbongnh.com/", external: true},
  { text: "커뮤니티", icon: "mdi-swap-horizontal", path: "/community" },
];

const banners = [
  { title: "어쩌구 모두 보장! 가축재해보험", desc: "지금 내 꿀벌은 안전할까?", link: "#" , color: "#74512D"},
  { title: "양봉장 인증 마크 신청하기", desc: "꿀벌계의 세스코", link: "#", color: "white"},
  { title: "달콤과 건강이 가득입니다", desc: "허니몰을 알아보세요", link: "https://yangbongnh.com/product/list.html?cate_no=29" , color: "#FEBA17"}
];

</script>

<style scoped>
/* ✅ Hero Section 스타일 */
.hero {
  background: url("@/assets/background2.jpg") center/cover no-repeat;
  top: -16px;
  width: 100vw;
  height: 400px;
  margin: 0;
  margin-top: 0 !important;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #5c2e2e;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.hero::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
}
.hero-content {
  position: relative;
  z-index: 2;
}
.overlay-logo {
  position: absolute;   /* Hero 섹션 안에서 절대 위치 */
  top: 50%;             /* 세로 중앙 */
  right: 5%;             /* 왼쪽에서 5% */
  transform: translateY(-50%); /* 세로 중앙 정렬 보정 */
  width: 500px;         /* 크기 조정 */
  z-index: 10;          /* 텍스트 위에 표시 */
}

/* ✅ 카드 hover 효과 */
.hover-card {
  transition: transform 0.2s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
}

.menu-group {
  margin-top: -140px;
  background: rgba(255, 255, 255);
  border-radius: 16px;
  z-index: 5;
  position: relative;

  display: flex;            /* flex 컨테이너 */
  align-items: center;      /* 세로 중앙 */
  justify-content: center;  /* 가로 중앙 */
  height: 200px;            /* 고정 높이 */
}

.menu-btn {
  border: 1px solid #feba17;   /* 테두리 */
  background: white;        /* 배경색 */
  color: #333;
  transition: transform 0.2s ease;
}
.menu-btn:hover {
  transform: scale(1);
  background: #feba17;
}
</style>