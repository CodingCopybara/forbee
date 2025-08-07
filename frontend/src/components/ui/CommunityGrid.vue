```html
<!-- src/components/ui/CommunityGrid.vue -->
<template>
  <div class="community-board">
    <h2 class="board-title">커뮤니티</h2>

    <!-- 탭 -->
    <div class="tab-list">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="changeTab(tab)"
        :class="['tab-button', selectedTab === tab && 'active']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 상단 툴바 -->
    <div class="toolbar">
      <div class="search-bar">
        <select v-model="filter" class="search-select">
          <option value="title">제목</option>
          <option value="author">작성자</option>
        </select>
        <input v-model="search" placeholder="검색어 입력" class="search-input" />
        <button @click="onSearch" class="search-button">검색</button>
      </div>
      <!-- 글 작성 페이지로 이동 -->
      <button
        v-if="canWrite"
        class="write-button"
        @click="goWritePage"
      >
        게시글 작성
      </button>
    </div>

    <!-- 게시글 테이블 -->
    <table class="post-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          class="post-row"
          @click="goDetail(post.id)"
          style="cursor: pointer;"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ maskId(post.author) }}</td>
          <td>{{ formatDate(post.createdAt) }}</td>
          <td>{{ post.views }}</td>
        </tr>
        <tr v-if="filteredPosts.length === 0">
          <td colspan="5" class="no-posts">게시글이 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { maskId } from '@/utils/mask'

// 탭 리스트
const tabs = ['자유게시판', '공지사항', 'QnA']
const route = useRoute()
const router = useRouter()

// 선택된 탭
const selectedTab = ref('자유게시판')
// 검색/필터
const filter = ref('title')
const search = ref('')
// 글 목록
const posts = ref([])

// 임시 권한
const userRole = ref('user')

// 쓰기 권한 계산
const canWrite = computed(() => {
  switch (selectedTab.value) {
    case '자유게시판': return ['user', 'member', 'veterinarian', 'admin'].includes(userRole.value)
    case 'QnA':      return userRole.value === 'member'
    case '공지사항':   return userRole.value === 'admin'
    default:          return false
  }
})

// URL 파라미터 ↔ 탭 매핑
const mapParamToTab = param => ({ free: '자유게시판', notice: '공지사항', qna: 'QnA' }[param] || '자유게시판')
const mapTabToParam = tab   => ({ '자유게시판': 'free', '공지사항': 'notice', 'QnA': 'qna' }[tab] || 'free')

// 데이터 로드
async function loadPosts() {
  try {
    const param = mapTabToParam(selectedTab.value)
    const res = await axios.get(
      `/posts?category=${encodeURIComponent(param)}`,
      { headers: { Role: userRole.value } }
    )
    posts.value = res.data
  } catch (err) {
    console.error('포스트 불러오기 실패', err)
  }
}

// 상세 이동 + 조회수 증가
async function goDetail(id) {
  const cat = mapTabToParam(selectedTab.value)
  try {
    await axios.post(`/posts/${id}/view`, null, { headers: { Role: userRole.value } })
  } catch {}
  router.push({ name: 'PostDetail', params: { category: cat, id } })
}

function changeTab(tab) {
  selectedTab.value = tab
  router.push({ path: `/community/${mapTabToParam(tab)}` })
}
function goWritePage() {
  router.push({ name: 'CommunityWrite', params: { category: mapTabToParam(selectedTab.value) } })
}
function onSearch() {}

onMounted(() => {
  selectedTab.value = mapParamToTab(route.params.category)
  loadPosts()
})
watch(() => route.params.category, val => {
  selectedTab.value = mapParamToTab(val)
  loadPosts()
})

const filteredPosts = computed(() =>
  posts.value.filter(p => !search.value || p[filter.value]?.toLowerCase().includes(search.value.toLowerCase()))
)

function formatDate(raw) {
  return raw ? new Date(raw).toISOString().slice(0,10) : ''
}
</script>

<style scoped>
/* 기존 CSS 유지 */
.community-board { background-color: transparent; padding: 2rem; font-family: 'Noto Sans KR', sans-serif; color: #3b3b3b; }
.board-title { font-size: 24px; font-weight: bold; margin-bottom: 1.5rem; }
.tab-list { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.tab-button { background: none; border: none; font-weight: 500; font-size: 16px; padding: 0.4rem 0.8rem; border-bottom: 2px solid transparent; color: #888; cursor: pointer; }
.tab-button.active { color: #444; border-color: #c99c3c; font-weight: 700; }
.toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; }
.search-bar { display: flex; gap: 0.5rem; }
.search-select, .search-input { border: 1px solid #ddd; padding: 6px 10px; border-radius: 6px; background-color: #fff; }
.search-button, .write-button { background-color: #c99c3c; color: #fff; padding: 6px 14px; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; }
.post-table { width: 100%; border-collapse: collapse; background-color: #fff; border-radius: 6px; overflow: hidden; }
.post-table th, .post-table td { padding: 10px 12px; border-bottom: 1px solid #e6e6e6; text-align: left; }
.post-table th { background-color: #f2f2f2; font-weight: 600; color: #666; }
.no-posts { text-align: center; color: #aaa; padding: 2rem; }
</style>