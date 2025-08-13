<template>
  <!-- 외부 스크롤은 잠그되, 푸터가 보이도록 iframe 높이는 "헤더+푸터 뺀 높이"로 계산 -->
  <v-container
    ref="wrap"
    class="pa-0 ma-0 d-flex justify-center align-start"
    style="overflow:hidden; background:transparent; width:100%;"
  >
    <iframe
      ref="chatFrame"
      :src="iframeSrc"
      width="100%"
      :height="iframeHeight"
      frameborder="0"
      scrolling="no"
      style="border:none; display:block; max-width:1000px; width:100%;"
      referrerpolicy="no-referrer"
    ></iframe>
  </v-container>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const iframeSrc = computed(() => `${import.meta.env.VITE_GW_URL}/chatbot_ai/`)

const wrap = ref(null)
const iframeHeight = ref(600)

/** 헤더(#site-header)와 푸터(#site-footer)를 뺀 가용 높이 계산 */
function getAvailableHeight () {
  const vpH = window.innerHeight || document.documentElement.clientHeight

  // 헤더/푸터에 id가 없으면 선택자 보강하세요.
  const headerEl = document.querySelector('#site-header, .v-app-bar, .v-toolbar')
  const footerEl = document.querySelector('#site-footer, footer')

  const headerH = headerEl?.getBoundingClientRect?.().height ?? 64
  const footerH = footerEl?.getBoundingClientRect?.().height ?? 160
  const gap = 8 // 약간의 여백

  return Math.max(420, vpH - headerH - footerH - gap)
}

function applyHeight () {
  iframeHeight.value = getAvailableHeight()
}

function onMessage (e) {
  const data = e?.data
  if (data && data.type === 'CHATBOT_HEIGHT' && typeof data.height === 'number') {
    // 자식이 보낸 컨텐츠 높이와, 우리가 계산한 가용 높이 중 "더 작은 값"을 사용
    const cap = getAvailableHeight()
    iframeHeight.value = Math.max(420, Math.min(data.height, cap))
  }
}

function lockScroll () {
  document.documentElement.dataset._prevOverflow = document.documentElement.style.overflow || ''
  document.body.dataset._prevOverflow = document.body.style.overflow || ''
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}
function unlockScroll () {
  document.documentElement.style.overflow = document.documentElement.dataset._prevOverflow || ''
  document.body.style.overflow = document.body.dataset._prevOverflow || ''
}

onMounted(async () => {
  await nextTick()
  lockScroll()
  applyHeight()
  window.addEventListener('resize', applyHeight)
  window.addEventListener('message', onMessage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', applyHeight)
  window.removeEventListener('message', onMessage)
  unlockScroll()
})
</script>
