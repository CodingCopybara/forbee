<!-- ✅ 파일: src/components/ui/CommunityGrid.vue -->
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

      <!-- 우측 액션 -->
      <div style="display:flex; gap:.5rem; align-items:center;">
        <!-- 글 작성 -->
        <button
          v-if="canWrite"
          class="write-button"
          @click="goWritePage"
        >
          게시글 작성
        </button>

        <!-- ADMIN만 보이는 선택 삭제 버튼 -->
        <button
          v-if="isAdmin"
          class="delete-button"
          :disabled="selectedIds.length === 0"
          @click="confirmBulkDelete"
          title="ADMIN만 사용 가능"
        >
          선택 삭제 ({{ selectedIds.length }})
        </button>
      </div>
    </div>

    <!-- 게시글 테이블 -->
    <table class="post-table">
      <thead>
        <tr>
          <!-- 선택 체크박스(ADMIN 전용) -->
          <th v-if="isAdmin">
            <input
              type="checkbox"
              :checked="allSelected"
              @change="toggleSelectAll"
              @click.stop
              aria-label="전체 선택"
            />
          </th>
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
          :class="{ locked: isLockedRow(post), clickable: !isLockedRow(post) }"
          :style="{ cursor: isLockedRow(post) ? 'not-allowed' : 'pointer' }"
          @click="onRowClick(post)"
        >
          <!-- 행 개별 선택(ADMIN 전용) -->
          <td v-if="isAdmin" @click.stop>
            <input
              type="checkbox"
              v-model="selectedIds"
              :value="post.id"
              @click.stop
              aria-label="항목 선택"
            />
          </td>
          <td>{{ index + 1 }}</td>

          <!-- 🔒 잠금 표시/노출 -->
          <td>
            <template v-if="isLockedRow(post)">
              🔒 잠긴 글입니다.
            </template>
            <template v-else>
              {{ post.title }}
            </template>
          </td>

          <td>{{ maskId(post.author) }}</td>
          <td>{{ formatDate(post.createdAt) }}</td>
          <td>{{ post.views }}</td>
        </tr>

        <tr v-if="filteredPosts.length === 0">
          <!-- ADMIN일 때는 컬럼 수가 +1 -->
          <td :colspan="isAdmin ? 6 : 5" class="no-posts">게시글이 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { maskId } from '@/utils/mask'

/* ------------------------------------
 * 상태
 * ------------------------------------ */
const tabs = ['자유게시판', '공지사항', 'QnA']
const route = useRoute()
const router = useRouter()

const selectedTab = ref('자유게시판')
const filter = ref('title')
const search = ref('')
const posts = ref([])

// ADMIN만: 행 선택 삭제
const selectedIds = ref([])

// 로그인/권한
const userRole = ref(localStorage.getItem('role') || '')
const accessToken = ref(localStorage.getItem('accessToken') || '')

function refreshAuth() {
  userRole.value   = localStorage.getItem('role') || ''
  accessToken.value = localStorage.getItem('accessToken') || ''
}

const role = computed(() => (userRole.value || '').toUpperCase())
const loggedIn = computed(() => !!accessToken.value)
const isAdmin = computed(() => role.value === 'ADMIN')

function authHeaders() {
  const r = (localStorage.getItem('role') || '').toUpperCase()
  const t = localStorage.getItem('accessToken') || ''
  return {
    Role: r,
    'X-Role': r,
    ...(t ? { Authorization: 'Bearer ' + t } : {})
  }
}

// storage 이벤트로 로그인/로그아웃 반영
function onStorage(e) {
  if (e.key === 'role' || e.key === 'accessToken') refreshAuth()
}
window.addEventListener('storage', onStorage)

/* ------------------------------------
 * 탭별 쓰기 권한
 * ------------------------------------ */
const canWrite = computed(() => {
  switch (selectedTab.value) {
    case '자유게시판':
      return ['USER','MEMBER','VETERINARIAN','ADMIN'].includes(role.value)
    case 'QnA':
      return role.value === 'MEMBER'
    case '공지사항':
      return role.value === 'ADMIN'
    default:
      return false
  }
})

/* ------------------------------------
 * 탭 ↔ 라우트 매핑
 * ------------------------------------ */
const mapParamToTab = param => ({ free: '자유게시판', notice: '공지사항', qna: 'QnA' }[param] || '자유게시판')
const mapTabToParam = tab   => ({ '자유게시판': 'free', '공지사항': 'notice', 'QnA': 'qna' }[tab] || 'free')

/* ------------------------------------
 * 데이터 로드
 * ------------------------------------ */
async function loadPosts() {
  try {
    refreshAuth()
    const param = mapTabToParam(selectedTab.value)
    const res = await axios.get(
      import.meta.env.VITE_GW_URL + `/posts?category=${encodeURIComponent(param)}`,
      { headers: authHeaders() }
    )
    posts.value = res.data
    selectedIds.value = []
  } catch (err) {
    console.error('포스트 불러오기 실패', err)
  }
}

/* ------------------------------------
 * 접근 권한 규칙
 * 1) 자유게시판: 누구나 열람 가능
 * 2) QnA: MEMBER, ADMIN, VETERINARIAN만 열람 가능
 * 3) 공지사항: "로그인 사용자"만 열람 가능
 * ------------------------------------ */
const QNA_ALLOWED = new Set(['MEMBER', 'ADMIN', 'VETERINARIAN'])

function isLockedRow(_post) {
  if (selectedTab.value === '자유게시판') return false
  if (selectedTab.value === 'QnA') {
    return !QNA_ALLOWED.has(role.value) // USER 또는 비로그인 → 잠김
  }
  if (selectedTab.value === '공지사항') {
    return !loggedIn.value // 비로그인 → 잠김
  }
  return false
}

async function onRowClick(post) {
  if (isLockedRow(post)) {
    // 잠금 안내만
    if (selectedTab.value === 'QnA') {
      alert('해당 글은 권한이 있는 회원만 볼 수 있어요. (MEMBER / VETERINARIAN / ADMIN)')
    } else if (selectedTab.value === '공지사항') {
      alert('로그인 후 확인하실 수 있어요.')
    }
    return
  }
  await goDetail(post.id)
}

/* ------------------------------------
 * 상세 이동 + 조회수 증가(가능한 경우)
 * ------------------------------------ */
async function goDetail(id) {
  const cat = mapTabToParam(selectedTab.value)
  try {
    await axios.post(
      import.meta.env.VITE_GW_URL + `/posts/${id}/view`,
      null,
      { headers: authHeaders() }
    )
  } catch {}
  router.push({ name: 'PostDetail', params: { category: cat, id } })
}

/* ------------------------------------
 * 기타 UI 핸들러
 * ------------------------------------ */
function changeTab(tab) {
  selectedTab.value = tab
  router.push({ path: `/community/${mapTabToParam(tab)}` })
}
function goWritePage() {
  router.push({ name: 'CommunityWrite', params: { category: mapTabToParam(selectedTab.value) } })
}
function onSearch() { /* TODO: 서버 검색 붙이면 여기에서 호출 */ }

/* ------------------------------------
 * 생명주기
 * ------------------------------------ */
onMounted(() => {
  refreshAuth()
  selectedTab.value = mapParamToTab(route.params.category)
  loadPosts()
})
onBeforeUnmount(() => {
  window.removeEventListener('storage', onStorage)
})
watch(() => route.params.category, val => {
  selectedTab.value = mapParamToTab(val)
  loadPosts()
})

/* ------------------------------------
 * 파생값
 * ------------------------------------ */
const filteredPosts = computed(() =>
  posts.value.filter(p => !search.value || p[filter.value]?.toLowerCase().includes(search.value.toLowerCase()))
)

const allSelected = computed(() =>
  filteredPosts.value.length > 0 &&
  selectedIds.value.length === filteredPosts.value.map(p => p.id).filter(Boolean).length
)

function toggleSelectAll(e) {
  if (e.target.checked) {
    selectedIds.value = filteredPosts.value.map(p => p.id).filter(Boolean)
  } else {
    selectedIds.value = []
  }
}

/* ------------------------------------
 * ADMIN: 선택 삭제
 * ------------------------------------ */
async function confirmBulkDelete() {
  if (!isAdmin.value || selectedIds.value.length === 0) return
  const yes = confirm(`선택한 ${selectedIds.value.length}건을 삭제할까요?`)
  if (!yes) return

  const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')

  try {
    await Promise.all(
      selectedIds.value.map(id =>
        axios.delete(`${base}/posts/${id}`, { headers: authHeaders() })
      )
    )
    alert('삭제가 완료되었습니다.')
    await loadPosts()
  } catch (err) {
    console.error(err)
    alert('삭제 중 오류가 발생했습니다. 일부 항목이 삭제되지 않았을 수 있습니다.')
    await loadPosts()
  }
}

function formatDate(raw) {
  return raw ? new Date(raw).toISOString().slice(0,10) : ''
}
</script>

<style scoped>
.community-board { background-color: transparent; padding: 2rem; font-family: 'Noto Sans KR', sans-serif; color: #3b3b3b; }
.board-title { font-size: 24px; font-weight: bold; margin-bottom: 1.5rem; }
.tab-list { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.tab-button { background: none; border: none; font-weight: 500; font-size: 16px; padding: 0.4rem 0.8rem; border-bottom: 2px solid transparent; color: #888; cursor: pointer; }
.tab-button.active { color: #444; border-color: #c99c3c; font-weight: 700; }
.toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; }
.search-bar { display: flex; gap: 0.5rem; }
.search-select, .search-input { border: 1px solid #ddd; padding: 6px 10px; border-radius: 6px; background-color: #fff; }
.search-button, .write-button { background-color: #c99c3c; color: #fff; padding: 6px 14px; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; }

.delete-button { background-color: #e14b4b; color: #fff; padding: 6px 14px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; }
.delete-button:disabled { opacity: .45; cursor: not-allowed; }

.post-table { width: 100%; border-collapse: collapse; background-color: #fff; border-radius: 6px; overflow: hidden; }
.post-table th, .post-table td { padding: 10px 12px; border-bottom: 1px solid #e6e6e6; text-align: left; }
.post-table th { background-color: #f2f2f2; font-weight: 600; color: #666; }
.no-posts { text-align: center; color: #aaa; padding: 2rem; }

/* 행 상태 시그널 */
.post-row.locked { opacity: 0.85; }
.post-row.clickable:hover { background: #fffaf0; }
</style>
