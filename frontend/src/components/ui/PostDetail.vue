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

            <!-- ✅ 첨부파일 표시: attachmentsJson 파싱 포함 -->
            <tr class="attach-row">
              <th>첨부파일</th>
              <td colspan="5">
                <template v-if="attachments.length">
                  <ul class="attach-inline">
                    <li v-for="(att, i) in attachments" :key="att.url + i">
                      <span class="clip">📎</span>
                      <a
                        class="attach-link"            
                        :href="att.url"
                        :download="att.name"
                        target="_blank"
                        rel="noopener"
                      >
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
import { useRoute } from 'vue-router'
import axios from 'axios'
import { maskId } from '@/utils/mask'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const userRole = 'USER' // ✅ 서버 요구값에 맞춤(대문자)
const route = useRoute()
const postId = route.params.id

const post = ref({ title: '', content: '', author: '', createdAt: '', views: 0 })
const comments = ref([])
const newComment = ref('')

// 절대 URL 보정
const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')
const abs = (u) => {
  if (!u) return u
  return /^https?:\/\//i.test(u) ? u : `${base}${u.startsWith('/') ? u : `/${u}`}`
}

// 안전 JSON 파서(attachmentsJson 처리용)
function safeParseJSON(s, fallback = []) {
  try {
    if (!s) return fallback
    const v = typeof s === 'string' ? JSON.parse(s) : s
    return Array.isArray(v) ? v : fallback
  } catch {
    return fallback
  }
}

// 본문 마크다운 → HTML(+상대경로 보정)
marked.setOptions({ breaks: true })
const renderedHtml = computed(() => {
  const raw = post.value?.content || ''
  let html = marked.parse(raw || '')
  html = html.replace(/(src|href)="(\/[^"]*)"/g, (_m, attr, path) => `${attr}="${abs(path)}"`)
  return DOMPurify.sanitize(html)
})

// ✅ 첨부파일(attachments, attachmentsJson, 본문 내 PDF 링크까지 모두 수집)
const attachments = computed(() => {
  const list = []
  const seen = new Set()

  // 1) 배열 형태로 온 경우
  if (Array.isArray(post.value?.attachments)) {
    for (const a of post.value.attachments) {
      const url = abs(a.url)
      if (!url || seen.has(url)) continue
      seen.add(url)
      list.push({
        name: a.name || (url ? decodeURIComponent(url.split('/').pop()) : '첨부'),
        url,
        type: a.type || (url?.toLowerCase().endsWith('.pdf') ? 'pdf' : 'file')
      })
    }
  }

  // 2) 문자열(JSON)로 온 경우(현재 백엔드 응답)
  const jsonArr = safeParseJSON(post.value?.attachmentsJson)
  if (jsonArr.length) {
    for (const a of jsonArr) {
      const url = abs(a.url)
      if (!url || seen.has(url)) continue
      seen.add(url)
      list.push({
        name: a.name || (url ? decodeURIComponent(url.split('/').pop()) : '첨부'),
        url,
        type: a.type || (url?.toLowerCase().endsWith('.pdf') ? 'pdf' : 'file')
      })
    }
  }

  // 3) 본문 안의 PDF 링크 추출(백업)
  if (!list.length) {
    const content = post.value?.content || ''
    for (const m of content.matchAll(/\((https?:\/\/[^\s)]+\.pdf)\)/ig)) {
      const url = abs(m[1])
      if (!url || seen.has(url)) continue
      seen.add(url)
      list.push({ name: decodeURIComponent(url.split('/').pop() || '첨부.pdf'), url, type: 'pdf' })
    }
  }

  return list
})

// 날짜 포맷
function formatDate(raw) { return raw ? new Date(raw).toLocaleString('ko-KR') : '' }
const formattedDate = computed(() => formatDate(post.value.createdAt))

// 게시글 로드
async function loadPost() {
  try {
    const res = await axios.get(
      import.meta.env.VITE_GW_URL + `/posts/${postId}`,
      { headers: { Role: userRole, Authorization: 'Bearer ' + localStorage.getItem('accessToken') } }
    )
    post.value = res.data
  } catch (err) {
    console.error('상세 조회 실패', err)
  }
}

// 댓글 목록 로드
async function loadComments() {
  try {
    const res = await axios.get(
      import.meta.env.VITE_GW_URL + `/comments/post/${postId}`,
      { headers: { Role: userRole, Authorization: 'Bearer ' + localStorage.getItem('accessToken') } }
    )
    comments.value = res.data
  } catch (err) {
    console.error('댓글 조회 실패', err)
  }
}

// 댓글 작성
async function writeComment() {
  if (!newComment.value.trim()) return
  try {
    await axios.post(
      import.meta.env.VITE_GW_URL + '/comments/write',
      {
        postId,
        content: newComment.value,
        author: (localStorage.getItem('username')?.split('@')[0]) || '익명'
      },
      { headers: { Role: userRole, Authorization: 'Bearer ' + localStorage.getItem('accessToken') } }
    )
    newComment.value = ''
    loadComments()
  } catch (err) {
    console.error('댓글 작성 실패', err)
  }
}

onMounted(() => {
  loadPost()
  loadComments()
})
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

.back-button { background: none; border: none; color: #000; font-size: 0.95rem; margin-bottom: 1rem; cursor: pointer; }

.content-container { background: #fff; padding: 1.5rem; border: 2px solid #ccc; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }

.detail-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
.detail-table th, .detail-table td { padding: 0.75rem 1rem; border-bottom: 1px solid #eee; }
.detail-title { font-size: 1.5rem; padding-top: 0.5rem; }

.content-body { line-height: 1.7; margin-bottom: 2rem; }
.content-body :deep(img) { width: 90%; max-width: 90%; height: auto; display: block; margin: 0.75rem 0 0.75rem 5%; }

.attach-inline .attach-link {
  color: #000; /* 글씨 검은색 */
  text-decoration: none; /* 밑줄 제거(선택 사항) */
}

.attach-inline .attach-link:hover {
  text-decoration: underline; /* 마우스 올렸을 때만 밑줄 */
}
.attach-inline { list-style:none; padding:0; margin:0; display:flex; flex-wrap:wrap; gap:.5rem 1rem; }
.attach-inline li { display:flex; align-items:center; gap:.35rem; }
.clip { opacity:.85; }
.attach-empty { color:#999; }
.attachments-view { margin-bottom: 2rem; }
.attachments-view h3 { margin: 0 0 0.5rem; }
.attachments-view ul { list-style: none; padding: 0; margin: 0; }
.attachments-view li { display: flex; gap: .5rem; align-items: center; padding: .35rem 0; }
.attachments-view a { text-decoration: underline; }


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
