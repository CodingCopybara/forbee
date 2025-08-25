<template>
    <v-sheet
    class="pa-4 mx-auto"
    color="white"
    elevation="3"
    rounded="lg"
    max-width="720"
  >
        <div class="qna-history">
            <div class="header">
            <strong>대화내역</strong>
            <button class="mini" @click="reload" :disabled="loading">새로고침</button>
            </div>

            <div v-if="error" class="error">⚠️ {{ error }}</div>
            <div v-else-if="loading" class="loading">불러오는 중...</div>
            <div v-else-if="!messages.length" class="empty">최근 대화가 없어요.</div>
            <div v-else class="chat">
            <div v-for="(m, i) in messages" :key="i" :class="['row', m.sender]">
                <div class="bubble">
                <template v-if="m.type === 'text'">
                    {{ m.text }}
                </template>
                <template v-else-if="m.type === 'image'">
                    <img :src="m.url" alt="" />
                </template>
                </div>
            </div>
            </div>
        </div>
    </v-sheet>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const loading = ref(false)
const error = ref('')
const messages = ref([])

function currentUserId() {
  const email = localStorage.getItem('username') || ''
  return email.includes('@') ? email.split('@')[0] : email
}

async function loadLatest() {
  loading.value = true
  error.value = ''
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_GW_URL}/api/chat-sessions/latest`, {
      headers: { userId: currentUserId(), Authorization: "Bearer " + localStorage.getItem("accessToken")},
      withCredentials: false
    })
    messages.value = Array.isArray(data?.messages) ? data.messages : []
  } catch (e) {
    console.error(e)
    error.value = '대화내역을 불러오지 못했습니다.'
  } finally {
    loading.value = false
  }
}

function reload(){ loadLatest() }

onMounted(loadLatest)
</script>

<style scoped>
.qna-history { padding: .75rem; font-size: 14px; }
.header { display:flex; align-items:center; justify-content:space-between; margin-bottom:.5rem; }
.header .mini { padding:.3rem .6rem; border:1px solid #ddd; background:#fafafa; border-radius:6px; cursor:pointer; }
.error { color:#c0392b; background:#ffecec; border:1px solid #ffc8c8; padding:.6rem; border-radius:6px; }
.loading, .empty { color:#666; padding:.6rem; }
.chat { display:flex; flex-direction:column; gap:.5rem; }
.row { display:flex; }
.row.user { justify-content:flex-end; }
.row.bot { justify-content:flex-start; }
.bubble { max-width:70%; padding:.6rem .8rem; border-radius:12px; background:#f1f1f1; white-space:pre-wrap; word-break:break-word; }
.row.user .bubble { background:#ffe082; }
.bubble img { max-width:240px; height:auto; display:block; border-radius:8px; }
</style>
