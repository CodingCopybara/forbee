<template>
  <div class="community-write">
    <h2>{{ tabName }} 글 작성</h2>
    <form @submit.prevent="submitPost">
      <input v-model="form.title" placeholder="제목" required @keyup.enter.prevent="submitPost"/>
      <textarea v-model="form.content" placeholder="내용" required @keyup.enter.prevent="submitPost"></textarea>
      <div class="actions">
        <button type="submit">등록</button>
        <button type="button" @click="goBack">뒤로가기</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const categoryParam = route.params.category
const mapParamToTab = p => ({
  free: '자유게시판',
  notice: '공지사항',
  qna: 'QnA'
}[p] || '자유게시판')

const tabName = computed(() => mapParamToTab(categoryParam))

const form = ref({  
  title: '',
  content: '',
  category: categoryParam,
  author: localStorage.getItem("username").split("@")[0]
})

async function submitPost() {
  try {
    await axios.post(
      import.meta.env.VITE_GW_URL+'/posts/writepost',
      form.value,
      { headers: { Role: localStorage.getItem("role"), Authorization:"Bearer " + localStorage.getItem("accessToken") } }
    )
    alert('작성 완료!')
    router.push({ name: 'CommunityBoard', params: { category: categoryParam } })
  } catch (err) {
    console.error(err)
    alert('작성에 실패했습니다.')
  }
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.community-write { padding: 2rem; }
input, textarea { display: block; width: 100%; margin-bottom: 1rem; padding: 0.6rem; border: 1px solid #ccc; border-radius: 4px; }
.actions { display: flex; gap: 0.5rem; }
button { padding: 0.6rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; background-color: #c99c3c; color: #fff; }
button[type="button"] { background-color: #e0e0e0; color: #333; }
</style>
