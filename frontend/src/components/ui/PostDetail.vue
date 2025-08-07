<!-- src/components/ui/PostDetail.vue -->
<template>
  <div class="post-page">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <div class="sidebar-title">COMMUNITY</div>
      <ul class="board-list">
        <li>
          <router-link
            to="/community/free"
            active-class="active"
            exact-active-class="active"
          >
            자유게시판
          </router-link>
        </li>
        <li>
          <router-link
            to="/community/notice"
            active-class="active"
            exact-active-class="active"
          >
            공지사항
          </router-link>
        </li>
        <li>
          <router-link
            to="/community/qna"
            active-class="active"
            exact-active-class="active"
          >
            Q&A
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- 상세 컨텐츠 -->
    <section class="detail-content">
      <button @click="$router.back()" class="back-button">← 뒤로</button>

      <div class="content-container">
        <table class="detail-table">
          <tbody>
            <tr>
              <th>제목</th>
              <td colspan="5" class="detail-title">
                <strong>{{ post.title }}</strong>
              </td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{{ post.author }}</td>
              <th>작성일</th>
              <td>{{ formattedDate }}</td>
              <th>조회수</th>
              <td>{{ post.views }}</td>
            </tr>
          </tbody>
        </table>

        <div class="content-body" v-html="post.content"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const userRole = 'user'
const route = useRoute()
const postId = route.params.id
const post = ref({
  title: '',
  content: '',
  author: '',
  createdAt: '',
  views: 0
})

onMounted(async () => {
  try {
    const res = await axios.get(
      `/posts/${postId}`,
      { headers: { Role: userRole } }
    )
    post.value = res.data
  } catch (err) {
    console.error('상세 조회 실패', err)
  }
})

const formattedDate = computed(() =>
  new Date(post.value.createdAt).toLocaleString()
)
</script>

<style scoped>
.post-page {
  display: flex;
  min-height: 80vh;
  background: transparent; /* 페이지 바탕 유지 */
}

/* --- 사이드바 --- */
.sidebar {
  width: 200px;
  padding: 2rem 0.01rem;
  border-right: 1px solid #eee;
}
.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  text-transform: uppercase;
}
.board-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.board-list li {
  margin-bottom: 0.75rem;
}
.board-list a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
}
.board-list a.active {
  color: #c99c3c;
  font-weight: 700;
}

/* --- 상세 컨텐츠 --- */
.detail-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
.back-button {
  background: none;
  border: none;
  color: #000;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

/* 본문 박스 */
.content-container {
  background: #fff;
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* 테이블 레이아웃 */
.detail-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}
.detail-table th,
.detail-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  color: #000;
}
.detail-table th {
  width: 80px;
  text-align: left;
  font-weight: 500;
}
.detail-title {
  font-size: 1.5rem;
  padding-top: 0.5rem;
  color: #000;
}

/* 본문 */
.content-body {
  line-height: 1.6;
  white-space: pre-wrap;
  color: #000;
}
</style>
