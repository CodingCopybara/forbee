<template>
  <v-container class="py-10 d-flex justify-center">
    <v-card class="pa-8" max-width="700" elevation="3" rounded="xl" style="width:100%">
      <!-- 탭 메뉴 -->
      <v-tabs v-model="tab" color="brown-darken-3" background-color="brown-darken-3" align-tabs="center">
        <v-tab v-for="item in tabs" :key="item.value">{{ item.label }}</v-tab>
      </v-tabs>
      <v-divider class="my-6" />

      <!-- 탭별 컨텐츠 -->
      <v-window v-model="tab">
        <v-window-item :value="0">
          <!-- 첫 번째 탭: 해충/질병 탐지 서비스 -->
          <div class="text-center mb-6">
            <img src="nhchar.png" alt="탐지" style="height: 54px; margin-bottom: 12px;" />
            <h3 class="font-weight-bold mb-2">해충/질병 탐지 서비스</h3>
            <div class="mb-5">
              사진 업로드를 통해 해충/질병을 탐지하고 심각도에 따른 대처 방안을 알려드립니다
            </div>
            <div class="mb-4" style="font-size: 15px; text-align: left; display: inline-block;">
              <b>사용 방법</b>
              <ol style="margin: 0 0 0 16px; padding: 0;">
                <li>사진 업로드</li>
                <li>분석 결과 확인</li>
                <li>대처 방안 안내</li>
              </ol>
            </div>
            <v-btn color="amber-darken-2" rounded large class="mt-5">
              해충/질병 탐지 서비스 사용하기
            </v-btn>
          </div>
        </v-window-item>
        <v-window-item :value="1">
          <!-- 두 번째 탭: 개화시기 예측 서비스 -->
          <div class="text-center mb-6">
            <img src="nhchar.png" alt="개화" style="height: 54px; margin-bottom: 12px;" />
            <h3 class="font-weight-bold mb-2">개화시기 예측 서비스</h3>
            <div class="mb-5">
              최신 기상 데이터와 AI를 활용해 주요 밀원식물의 개화시기를 예측해드립니다.
            </div>
            <div class="mb-4" style="font-size: 15px; text-align: left; display: inline-block;">
              <b>사용 방법</b>
              <ol style="margin: 0 0 0 16px; padding: 0;">
                <li>지역 및 식물 선택</li>
                <li>예측 결과 확인</li>
                <li>알림 설정</li>
              </ol>
            </div>
            <v-btn color="amber-darken-2" rounded large class="mt-5">
              개화시기 예측 서비스 사용하기
            </v-btn>
          </div>
        </v-window-item>
        <v-window-item :value="2">
          <!-- 세 번째 탭: 양봉 환경 분석 서비스 -->
          <div class="text-center mb-6">
            <img src="nhchar.png" alt="환경분석" style="height: 54px; margin-bottom: 12px;" />
            <h3 class="font-weight-bold mb-2">양봉 환경 분석 서비스</h3>
            <div class="mb-5">
              양봉장의 기상, 생태환경 데이터 기반으로 맞춤 분석 리포트를 제공합니다.
            </div>
            <div class="mb-4" style="font-size: 15px; text-align: left; display: inline-block;">
              <b>사용 방법</b>
              <ol style="margin: 0 0 0 16px; padding: 0;">
                <li>환경 데이터 입력/업로드</li>
                <li>분석 리포트 확인</li>
              </ol>
            </div>
            <v-btn color="amber-darken-2" rounded large class="mt-5">
              환경 분석 서비스 사용하기
            </v-btn>
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref(0)
const tabs = [
  { label: '해충/질병 탐지 서비스', value: 0 },
  { label: '개화시기 예측 서비스', value: 1 },
  { label: '양봉 환경 분석 서비스', value: 2 }
]
</script>
