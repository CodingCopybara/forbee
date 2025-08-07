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
      <button class="write-button" @click="openDialog = true">글 작성</button>
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
          <td>{{ post.author }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.views }}</td>
        </tr>
        <tr v-if="filteredPosts.length === 0">
          <td colspan="5" class="no-posts">게시글이 없습니다.</td>
        </tr>
      </tbody>
    </table>

    <!-- 작성 모달 -->
    <div v-if="openDialog" class="modal-overlay">
      <div class="modal">
        <h3 class="modal-title">게시글 작성</h3>
        <input v-model="newPost.title" placeholder="제목" class="modal-input" />
        <textarea v-model="newPost.content" placeholder="내용" class="modal-textarea" />
        <select v-model="newPost.category" class="modal-select">
          <option disabled value="">게시판 선택</option>
          <option v-for="tab in tabs" :key="tab" :value="tab">{{ tab }}</option>
        </select>
        <div class="modal-actions">
          <button @click="submitPost" class="submit-button">등록</button>
          <button @click="openDialog = false" class="cancel-button">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

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

// 모달 & 새 글
const openDialog = ref(false)
const newPost = ref({
  title: '',
  content: '',
  category: '',
  author: '익명',
  date: '',
  views: 0,
})

// URL 파라미터 ↔ 탭 이름 매핑
const mapParamToTab = param => {
  if (param === 'free') return '자유게시판'
  if (param === 'notice') return '공지사항'
  if (param === 'qna') return 'QnA'
  return '자유게시판'
}
const mapTabToParam = tab => {
  if (tab === '자유게시판') return 'free'
  if (tab === '공지사항') return 'notice'
  if (tab === 'QnA') return 'qna'
  return 'free'
}

// 임시 권한
const userRole = 'user'

// 서버에서 글 불러오기
async function loadPosts() {
  try {
    const res = await axios.get(
      `/posts?category=${encodeURIComponent(selectedTab.value)}`,
      { headers: { Role: userRole } }
    )
    posts.value = res.data
  } catch (err) {
    console.error('포스트 불러오기 실패', err)
  }
}

// 상세 보기 이동
function goDetail(id) {
  const cat = mapTabToParam(selectedTab.value)
  router.push({ name: 'PostDetail', params: { category: cat, id } })
}

// 탭 변경
function changeTab(tab) {
  selectedTab.value = tab
  const param = mapTabToParam(tab)
  router.push({ path: `/community/${param}` })
}

// 글 작성
async function submitPost() {
  if (!newPost.value.title || !newPost.value.content || !newPost.value.category) {
    alert('모든 항목을 입력해주세요.')
    return
  }
  try {
    await axios.post(
      '/posts/writepost',
      { ...newPost.value },
      { headers: { Role: userRole } }
    )
    alert('작성 완료!')
    openDialog.value = false
    newPost.value = { title: '', content: '', category: '', author: '익명', date: '', views: 0 }
    await loadPosts()
  } catch (err) {
    console.error('작성 실패', err)
    alert('작성 실패: 권한 없음 또는 서버 오류')
  }
}

// 검색용 (필터만 적용)
function onSearch() {
  // nothing needed: filteredPosts 자동 갱신
}

// 마운트 & 파라미터 변화 시
onMounted(() => {
  selectedTab.value = mapParamToTab(route.params.category)
  loadPosts()
})
watch(() => route.params.category, val => {
  selectedTab.value = mapParamToTab(val)
  loadPosts()
})

// 검색 후 보여줄 목록
const filteredPosts = computed(() =>
  posts.value.filter(p => {
    return !search.value ||
      p[filter.value]?.toLowerCase().includes(search.value.toLowerCase())
  })
)
</script>




<style scoped>
.community-board {
  background-color: transparent;
  padding: 2rem;
  font-family: 'Noto Sans KR', sans-serif;
  color: #3b3b3b;
}

.board-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.tab-list {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  padding: 0.4rem 0.8rem;
  border-bottom: 2px solid transparent;
  color: #888;
  cursor: pointer;
}

.tab-button.active {
  color: #444;
  border-color: #c99c3c;
  font-weight: 700;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
}

.search-select,
.search-input {
  border: 1px solid #ddd;
  padding: 6px 10px;
  border-radius: 6px;
  background-color: #fff;
}

.search-button,
.write-button {
  background-color: #c99c3c;
  color: #fff;
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.post-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}

.post-table th,
.post-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #e6e6e6;
  text-align: left;
}

.post-table th {
  background-color: #f2f2f2;
  font-weight: 600;
  color: #666;
}

.no-posts {
  text-align: center;
  color: #aaa;
  padding: 2rem;
}

/* 모달 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-title {
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 18px;
}

.modal-input,
.modal-textarea,
.modal-select {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.modal-textarea {
  resize: vertical;
  min-height: 100px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.submit-button {
  background-color: #c99c3c;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-button {
  background-color: #e0e0e0;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
