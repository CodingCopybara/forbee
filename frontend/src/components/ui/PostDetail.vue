<!-- src/components/ui/PostDetail.vue -->
<template>
  <div class="post-page">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <div class="sidebar-title">COMMUNITY</div>
      <ul class="board-list">
        <li><router-link to="/community/free" active-class="active" exact-active-class="active">자유게시판</router-link></li>
        <li><router-link to="/community/notice" active-class="active" exact-active-class="active">공지사항</router-link></li>
        <li><router-link to="/community/qna" active-class="active" exact-active-class="active">Q&A</router-link></li>
      </ul>
    </aside>

    <!-- 상세 컨텐츠 -->
    <section class="detail-content">
      <div class="back-only">
        <button @click="$router.back()" class="back-button">← 뒤로</button>

        <!-- ✅ 액션 버튼: 권한에 따라 노출 -->
        <div class="action-group">
          <button v-if="isOwner" class="btn" @click="goEdit">수정하기</button>
          <button v-if="isOwner || isAdmin" class="btn" @click="toggleRevisions">
            {{ showRevisions ? '이력 닫기' : '이력 보기' }}
          </button>
          <button v-if="isAdmin" class="btn danger" @click="deletePost">삭제하기</button>
        </div>
      </div>

      <div class="content-container">
        <table class="detail-table">
          <tbody>
            <tr>
              <th>제목</th>
              <td colspan="5" class="detail-title"><strong>{{ post.title }}</strong></td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{{ maskId(post.author) }}</td>
              <th>작성일</th>
              <td>{{ formattedDate }}</td>
              <th>조회수</th>
              <td>{{ post.views }}</td>
            </tr>

            <!-- 첨부파일: 상단에만 표시 -->
            <tr class="attach-row">
              <th>첨부파일</th>
              <td colspan="5">
                <template v-if="attachments.length">
                  <ul class="attach-inline">
                    <li v-for="(att, i) in attachments" :key="att.url + i">
                      <span class="clip">📎</span>
                      <a class="attach-link" :href="att.url" :download="att.name" target="_blank" rel="noopener">
                        {{ att.name || att.url }}
                      </a>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <span class="attach-empty">첨부된 파일이 없습니다.</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 본문 -->
        <div class="content-body" v-html="renderedHtml"></div>

        <!-- ✅ 수정 이력 뷰어 (작성자/ADMIN) -->
        <div v-if="showRevisions" class="revisions">
          <h3>수정 이력</h3>
          <ul v-if="revisions.length">
            <li v-for="rev in revisions" :key="rev.id">
              <div class="rev-head">
                <strong>{{ rev.editedAt }}</strong>
                <span>by {{ rev.editedBy }}</span>
              </div>
              <div class="rev-diff">
                <div><b>제목</b>: {{ rev.titleBefore }}</div>
                <details>
                  <summary>본문 보기</summary>
                  <pre>{{ rev.contentBefore }}</pre>
                </details>
              </div>
            </li>
          </ul>
          <div v-else class="no-rev">이력이 없습니다.</div>
        </div>

        <!-- 댓글 섹션 -->
        <div class="comments-section">
          <h3>댓글 ({{ comments.length }})</h3>
          <ul class="comments-list">
            <li v-for="comment in comments" :key="comment.id" class="comment-item">
              <p class="comment-author">
                {{ maskId(comment.author) }}
                <span class="comment-date">{{ formatDate(comment.createdAt) }}</span>
              </p>
              <p class="comment-content">{{ comment.content }}</p>
            </li>
            <li v-if="comments.length === 0" class="no-comments">댓글이 없습니다.</li>
          </ul>

          <div class="comment-form">
            <textarea v-model="newComment" placeholder="댓글을 입력하세요..." @keyup.enter.prevent="writeComment"></textarea>
            <button @click="writeComment">댓글 작성</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { maskId } from '@/utils/mask'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const route = useRoute()
const router = useRouter()
const postId = route.params.id

const post = ref({ title: '', content: '', author: '', createdAt: '', views: 0 })
const comments = ref([])
const newComment = ref('')

// ===== 권한 유틸 =====
function decodeJwt(token) {
  try {
    const base = token.split('.')[1]
    const json = decodeURIComponent(atob(base.replace(/-/g, '+').replace(/_/g, '/')).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))
    return JSON.parse(json)
  } catch { return null }
}
function currentUsername() {
  const local = localStorage.getItem('username')
  if (local) return local.split('@')[0]
  const jwt = decodeJwt(localStorage.getItem('accessToken') || '')
  const claim = jwt?.user_name || jwt?.username
  return claim ? String(claim).split('@')[0] : ''
}
const jwtPayload = decodeJwt(localStorage.getItem('accessToken') || '')
const isAdmin = computed(() => Array.isArray(jwtPayload?.authorities) && jwtPayload.authorities.includes('ROLE_ADMIN'))
const isOwner = computed(() => {
  const me = currentUsername()
  return !!me && me.toLowerCase() === String(post.value?.author || '').toLowerCase()
})
const roleHeader = computed(() => (isAdmin.value ? 'ADMIN' : 'USER'))
const authHeaders = () => ({
  Role: roleHeader.value,
  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
})

// ===== 본문/첨부 렌더링 =====
const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')
const abs = (u) => (!u ? u : /^https?:\/\//i.test(u) ? u : `${base}${u.startsWith('/') ? u : `/${u}`}`)

function safeParseJSON(s, fallback = []) {
  try {
    if (!s) return fallback
    const v = typeof s === 'string' ? JSON.parse(s) : s
    return Array.isArray(v) ? v : fallback
  } catch { return fallback }
}

marked.setOptions({ breaks: true })
const renderedHtml = computed(() => {
  const raw = post.value?.content || ''
  let html = marked.parse(raw || '')
  html = html.replace(/(src|href)="(\/[^"]*)"/g, (_m, attr, path) => `${attr}="${abs(path)}"`)
  return DOMPurify.sanitize(html)
})

const attachments = computed(() => {
  const list = []
  const seen = new Set()
  if (Array.isArray(post.value?.attachments)) {
    for (const a of post.value.attachments) {
      const url = abs(a.url); if (!url || seen.has(url)) continue; seen.add(url)
      list.push({ name: a.name || decodeURIComponent(url.split('/').pop()), url, type: a.type || 'file' })
    }
  }
  const jsonArr = safeParseJSON(post.value?.attachmentsJson)
  if (jsonArr.length) {
    for (const a of jsonArr) {
      const url = abs(a.url); if (!url || seen.has(url)) continue; seen.add(url)
      list.push({ name: a.name || decodeURIComponent(url.split('/').pop()), url, type: a.type || 'file' })
    }
  }
  return list
})

// 날짜 포맷
function formatDate(raw) { return raw ? new Date(raw).toLocaleString('ko-KR') : '' }
const formattedDate = computed(() => formatDate(post.value.createdAt))

// 데이터 로드
async function loadPost() {
  try {
    const res = await axios.get(`${base}/posts/${postId}`, { headers: authHeaders() })
    post.value = res.data
  } catch (err) { console.error('상세 조회 실패', err) }
}
async function loadComments() {
  try {
    const res = await axios.get(`${base}/comments/post/${postId}`, { headers: authHeaders() })
    comments.value = res.data
  } catch (err) { console.error('댓글 조회 실패', err) }
}

// ✅ 수정 페이지로 이동 (/edit)
function goEdit() {
  const basePath = route.fullPath.replace(/\/+$/, '')
  router.push(basePath.endsWith('/edit') ? basePath : `${basePath}/edit`)
}

// ===== 수정 이력 (작성자/ADMIN) =====
const showRevisions = ref(false)
const revisions = ref([])
async function toggleRevisions() {
  if (!showRevisions.value) {
    try {
      const { data } = await axios.get(`${base}/posts/${postId}/revisions`, { headers: authHeaders() })
      revisions.value = (data || []).map(r => ({ ...r, editedAt: formatDate(r.editedAt) }))
    } catch (e) {
      console.error('이력 조회 실패', e); alert('이력을 가져오지 못했습니다.')
      return
    }
  }
  showRevisions.value = !showRevisions.value
}

// ===== 삭제(ADMIN) =====
async function deletePost() {
  if (!isAdmin.value) return
  if (!confirm('정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return
  try {
    await axios.delete(`${base}/posts/${postId}`, { headers: authHeaders() })
    alert('삭제되었습니다.')
    router.back()
  } catch (e) {
    console.error('삭제 실패', e)
    alert('삭제에 실패했습니다.')
  }
}

// 댓글 작성
async function writeComment() {
  if (!newComment.value.trim()) return
  try {
    await axios.post(
      `${base}/comments/write`,
      { postId, content: newComment.value, author: currentUsername() || '익명' },
      { headers: authHeaders() }
    )
    newComment.value = ''
    loadComments()
  } catch (err) { console.error('댓글 작성 실패', err) }
}

onMounted(() => { loadPost(); loadComments() })
</script>

<style scoped>
.post-page { display: flex; min-height: 80vh; background: transparent; }

.sidebar { width: 200px; padding: 2rem 0.01rem; border-right: 1px solid #eee; }
.sidebar-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; }

.board-list { list-style: none; padding: 0; margin: 0; }
.board-list li { margin-bottom: 0.75rem; }
.board-list a { text-decoration: none; color: #555; font-weight: 500; }
.board-list a.active { color: #c99c3c; font-weight: 700; }

.detail-content { flex: 1; padding: 2rem; overflow-y: auto; }

.back-only { display:flex; align-items:center; justify-content: space-between; gap: 1rem; }
.action-group { display:flex; gap:.5rem; }
.btn { padding:6px 10px; border:1px solid #ccc; background:#fff; border-radius:6px; cursor:pointer; }
.btn:hover { background:#f7f7f7; }
.btn.ghost { background:transparent; }
.btn.danger { border-color:#d33; color:#d33; }
.btn.danger:hover { background:#ffecec; }

.back-button { background: none; border: none; color: #000; font-size: 0.95rem; cursor: pointer; }

.content-container { background: #fff; padding: 1.5rem; border: 2px solid #ccc; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }

.detail-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
.detail-table th, .detail-table td { padding: 0.75rem 1rem; border-bottom: 1px solid #eee; }
.detail-title { font-size: 1.5rem; padding-top: 0.5rem; }

.content-body { line-height: 1.7; margin-bottom: 2rem; }
.content-body :deep(img) { width: 90%; max-width: 90%; height: auto; display: block; margin: 0.75rem 0 0.75rem 5%; }

.attach-inline { list-style:none; padding:0; margin:0; display:flex; flex-wrap:wrap; gap:.5rem 1rem; }
.attach-inline li { display:flex; align-items:center; gap:.35rem; }
.attach-inline .attach-link,
.attach-inline .attach-link:visited,
.attach-inline .attach-link:hover,
.attach-inline .attach-link:active,
.attach-inline .attach-link:focus { color:#000; text-decoration:none; }
.attach-inline .attach-link:hover { text-decoration:underline; }
.clip { opacity:.85; }
.attach-empty { color:#999; }

.revisions { border-top:1px dashed #ddd; padding-top:1rem; margin-top:1rem; }
.revisions h3 { margin:0 0 .5rem; }
.revisions ul { list-style:none; padding:0; margin:0; }
.revisions li { padding:.5rem 0; border-bottom:1px solid #f2f2f2; }
.rev-head { display:flex; gap:.5rem; color:#666; font-size:.9rem; }
.rev-diff pre { white-space:pre-wrap; background:#f7f7f7; padding:.5rem; border-radius:6px; }

.comments-section { border-top: 1px solid #ddd; padding-top: 2rem; }
.comments-list { list-style: none; padding: 0; margin: 0; }
.comment-item { margin-bottom: 1rem; }
.no-comments { color: #999; text-align: center; margin: 1rem 0; }
.comment-author { font-weight: 600; }
.comment-date { color: #999; font-size: 0.9rem; margin-left: 0.5rem; }
.comment-content { margin-top: 0.5rem; }
.comment-form { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.5rem; }
.comment-form textarea { resize: vertical; min-height: 80px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.comment-form button { align-self: flex-end; padding: 6px 14px; background-color: #c99c3c; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
</style>
