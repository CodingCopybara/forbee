```html
<!-- src/components/ui/PostDetail.vue -->
<template>
  <div class="post-page">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <div class="sidebar-title">COMMUNITY</div>
      <ul class="board-list">
        <li>
          <router-link to="/community/free" active-class="active" exact-active-class="active">
            자유게시판
          </router-link>
        </li>
        <li>
          <router-link to="/community/notice" active-class="active" exact-active-class="active">
            공지사항
          </router-link>
        </li>
        <li>
          <router-link to="/community/qna" active-class="active" exact-active-class="active">
            Q&A
          </router-link>
        </li>
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
              <td>{{ maskId(post.author)}}</td>
              <th>작성일</th>
              <td>{{ formattedDate }}</td>
              <th>조회수</th>
              <td>{{ post.views }}</td>
            </tr>
          </tbody>
        </table>

        <div class="content-body" v-html="post.content"></div>

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

          <!-- 댓글 작성 폼 -->
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

const userRole = 'user'
const route = useRoute()
const postId = route.params.id

const post = ref({ title: '', content: '', author: '', createdAt: '', views: 0 })
const comments = ref([])
const newComment = ref('')

// 날짜 포맷 함수
function formatDate(raw) {
  return new Date(raw).toLocaleString('ko-KR')
}

// 게시글 로드
async function loadPost() {
  try {
    const res = await axios.get(
      import.meta.env.VITE_GW_URL+`/posts/${postId}`,
      { headers: { Role: userRole } }
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
      import.meta.env.VITE_GW_URL+`/comments/post/${postId}`,
      { headers: { Role: userRole } }
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
      import.meta.env.VITE_GW_URL+'/comments/write',
      { postId, content: newComment.value, author: localStorage.getItem("username").split("@")[0] },
      { headers: { Role: userRole } }
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

const formattedDate = computed(() => formatDate(post.value.createdAt))
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
.content-body { line-height: 1.6; white-space: pre-wrap; margin-bottom: 2rem; }
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
```
