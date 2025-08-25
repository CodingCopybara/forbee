<!-- ✅ 파일 경로: src/components/ui/CommunityWrite.vue -->
<template>
  <div class="community-write">
    <h2>{{ tabName }} 글 작성</h2>

    <form @submit.prevent="submitPost">
      <input
        v-model="form.title"
        placeholder="제목"
        required
        @keyup.enter.prevent="submitPost"
      />

      <!-- 본문 입력 -->
      <div
        ref="editorRef"
        class="editor"
        contenteditable="true"
        :placeholder="'내용을 입력하세요...'"
        @input="syncFromEditor"
        @paste="onPaste"
      ></div>

      <!-- 업로드 툴바 -->
      <div class="upload-toolbar">
        <button type="button" class="btn" @click="triggerImagePicker" :disabled="uploading">
          {{ uploading && pendingType === 'image' ? '이미지 업로드 중...' : '이미지 추가(PNG, JPG)' }}
        </button>
        <button type="button" class="btn outline" @click="triggerPdfPicker" :disabled="uploading">
          {{ uploading && pendingType === 'pdf' ? 'PDF 업로드 중...' : '첨부파일 추가(PDF)' }}
        </button>

        <!-- ✅ QnA 전용: 대화내역 보기 -->
        <button
          v-if="isQnA"
          type="button"
          class="btn outline"
          @click="viewChatHistory"
          :disabled="uploading"
        >
          대화내역보기
        </button>

        <!-- 숨겨진 파일 입력 -->
        <input
          ref="imageInput"
          type="file"
          accept="image/png, image/jpeg"
          multiple
          class="hidden-input"
          @change="onPickImages"
        />
        <input
          ref="pdfInput"
          type="file"
          accept="application/pdf"
          class="hidden-input"
          @change="onPickPdf"
        />
      </div>

      <!-- 첨부목록 (PDF) -->
      <div v-if="form.attachments.length" class="attachments">
        <h4>첨부파일</h4>
        <ul>
          <li v-for="(att, idx) in form.attachments" :key="att.url" class="attachment-item">
            <span class="name">📎 {{ att.name }}</span>
            <a v-if="att.url" :href="att.url" target="_blank" rel="noopener" class="link">열기</a>
            <button type="button" class="mini" @click="removeAttachment(idx)">삭제</button>
          </li>
        </ul>
      </div>

      <div class="actions">
        <button type="submit" :disabled="uploading">등록</button>
        <button type="button" @click="goBack">뒤로가기</button>
      </div>
    </form>

    <!-- ✅ 팝업 차단 시 대체: 오른쪽 도킹 패널 -->
    <div v-if="showChatDock && isQnA" class="chat-dock">
      <div class="dock-header">
        <strong>대화내역</strong>
        <div class="dock-actions">
          <button class="mini" @click="popOut">팝업으로</button>
          <button class="mini danger" @click="showChatDock = false">닫기</button>
        </div>
      </div>
      <iframe class="dock-frame" :src="chatUrl" referrerpolicy="no-referrer" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const categoryParam = route.params.category
const mapParamToTab = p => ({ free: '자유게시판', notice: '공지사항', qna: 'QnA' }[p] || '자유게시판')
const tabName = computed(() => mapParamToTab(categoryParam))

// ✅ QnA 여부
const isQnA = computed(() => (route.params.category || '').toLowerCase() === 'qna')

// ✅ 대화내역 URL (원하는 링크를 .env에 설정: VITE_QNA_CHAT_URL)
const chatUrl = computed(() => {
  const v = '/#/history'
  // v가 "http"로 시작하면 그대로 사용, 아니면 현재 origin을 붙여서 완전한 URL 생성
  if (/^https?:\/\//i.test(v)) return v
  const prefix = v.startsWith('/') ? '' : '/'
  return `${window.location.origin}${prefix}${v}`
})

// 작성 폼 상태
const form = ref({
  title: '',
  content: '',
  category: categoryParam,
  author: (localStorage.getItem('username')?.split('@')[0]) || '익명',
  attachments: [] // { name, url, type: 'pdf' }
})

// 업로드 관련
const imageInput = ref(null)
const pdfInput = ref(null)
const editorRef = ref(null)
const uploading = ref(false)
const pendingType = ref('') // 'image' | 'pdf'

// ✅ 팝업/도킹 상태
const chatWin = ref(null)
const showChatDock = ref(false)

// 본문 동기화
function syncFromEditor() {
  form.value.content = (editorRef.value?.innerHTML || '').trim()
}
function onPaste(e) {}

// 커서 위치에 HTML 삽입
async function insertHtmlAtCaret(html) {
  const el = editorRef.value
  if (!el) return
  el.focus()

  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) {
    el.insertAdjacentHTML('beforeend', html)
  } else {
    const range = sel.getRangeAt(0)
    range.deleteContents()
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    const frag = document.createDocumentFragment()
    let node, lastNode
    while ((node = tmp.firstChild)) lastNode = frag.appendChild(node)
    range.insertNode(frag)
    if (lastNode) {
      range.setStartAfter(lastNode)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }
  await nextTick()
  syncFromEditor()
}

function triggerImagePicker() { imageInput.value?.click() }
function triggerPdfPicker() { pdfInput.value?.click() }

// ✅ 팝업 열기 시도 → 차단되면 도킹으로
function viewChatHistory() {
  // 팝업 위치/크기 계산(가운데)
  const W = Math.min(920, window.screen.availWidth - 120)
  const H = Math.min(800, window.screen.availHeight - 120)
  const left = window.screenX + Math.max(0, (window.outerWidth - W) / 2)
  const top  = window.screenY + Math.max(0, (window.outerHeight - H) / 2)

  const features = [
    `popup`,
    `width=${Math.round(W)}`,
    `height=${Math.round(H)}`,
    `left=${Math.round(left)}`,
    `top=${Math.round(top)}`,
    `resizable=yes`,
    `scrollbars=yes`,
    `toolbar=no`,
    `menubar=no`,
    `location=no`,
    `status=no`
  ].join(',')

  const win = window.open(chatUrl.value, 'QnaChatHistory', features)
  if (win && !win.closed) {
    chatWin.value = win
    try { win.focus() } catch {}
    showChatDock.value = false
  } else {
    // 팝업 차단 시 도킹으로 표시
    showChatDock.value = true
  }
}

// ✅ 도킹 상태에서 팝업으로 다시 띄우기
function popOut() {
  showChatDock.value = false
  setTimeout(() => viewChatHistory(), 0)
}

async function onPickImages(e) {
  const files = Array.from(e.target.files || [])
  if (!files.length) return
  try {
    uploading.value = true
    pendingType.value = 'image'
    for (const f of files) {
      if (!/^image\/(png|jpeg)$/.test(f.type)) { alert('PNG 또는 JPG만 업로드'); continue }
      if (f.size > 10 * 1024 * 1024) { alert(`${f.name}이(가) 10MB 초과`); continue }
      const url = await uploadFile(f, 'image')
      if (url) await insertHtmlAtCaret(`<img src="${url}" alt="" />`)
    }
  } catch (err) {
    console.error(err); alert('이미지 업로드에 실패했습니다.')
  } finally {
    uploading.value = false; pendingType.value = ''; e.target.value = ''
  }
}

async function onPickPdf(e) {
  const file = e.target.files?.[0]
  if (!file) return
  if (file.type !== 'application/pdf') { alert('PDF만 첨부 가능'); e.target.value = ''; return }
  try {
    uploading.value = true
    pendingType.value = 'pdf'
    const url = await uploadFile(file, 'pdf')
    if (url) form.value.attachments.push({ name: file.name, url, type: 'pdf' })
  } catch (err) {
    console.error(err); alert('PDF 업로드에 실패했습니다.')
  } finally {
    uploading.value = false; pendingType.value = ''; e.target.value = ''
  }
}

function removeAttachment(index) { form.value.attachments.splice(index, 1) }

async function uploadFile(file, kind) {
  const fd = new FormData()
  fd.append('file', file)
  fd.append('type', kind)

  const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')
  const endpoint = `${base}/files/upload`

  const { data } = await axios.post(endpoint, fd, { headers: {}, withCredentials: false })
  if (!data?.url) throw new Error('업로드 응답에 url이 없습니다.')
  const u = String(data.url)
  return /^https?:\/\//i.test(u) ? u : `${base}${u.startsWith('/') ? u : `/${u}`}`
}

async function submitPost() {
  try {
    syncFromEditor()
    await axios.post(
      import.meta.env.VITE_GW_URL + '/posts/writepost',
      form.value,
      {
        headers: {
          Role: localStorage.getItem('role'),
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      }
    )
    alert('작성 완료!')
    router.push({ name: 'CommunityBoard', params: { category: categoryParam } })
  } catch (err) {
    console.error(err)
    alert('작성에 실패했습니다.')
  }
}

function goBack() { router.back() }
</script>

<style scoped>
.community-write { padding: 2rem; }
input { display: block; width: 100%; margin-bottom: 1rem; padding: 0.6rem; border: 1px solid #ccc; border-radius: 4px; }

/* 에디터 */
.editor {
  display: block;
  width: 100%;
  min-height: 520px;
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  line-height: 1.7;
  outline: none;
  white-space: pre-wrap;
  word-break: break-word;
}
.editor:empty:before { content: attr(placeholder); color: #999; }
.editor img {
  width: 90%;
  max-width: 90%;
  height: auto;
  display: block;
  margin: .75rem auto;
}

/* 툴바/버튼 */
.upload-toolbar { display: flex; align-items: center; gap: 0.5rem; margin: 0.75rem 0 1rem; flex-wrap: wrap; }
.btn { padding: 0.5rem 0.9rem; border-radius: 6px; border: none; background: #c99c3c; color: #fff; cursor: pointer; }
.btn.outline { background: #f5f5f5; color: #333; border: 1px solid #ddd; }
.hidden-input { display: none; }

/* 첨부 목록 */
.attachments { background: #fafafa; border: 1px solid #eee; border-radius: 8px; padding: 0.75rem; margin-bottom: 1rem; }
.attachments h4 { margin: 0 0 0.5rem; font-size: 1rem; }
.attachment-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0; }
.attachment-item .name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.attachment-item .link { text-decoration: underline; }
.attachment-item .mini { padding: 0.3rem 0.6rem; font-size: 0.85rem; background: #e0e0e0; color: #333; border: none; border-radius: 4px; cursor: pointer; }

/* 액션 */
.actions { display: flex; gap: 0.5rem; }
button { padding: 0.6rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; background-color: #c99c3c; color: #fff; }
button[type="button"] { background-color: #e0e0e0; color: #333; }

/* ✅ 도킹 패널 */
.chat-dock {
  position: fixed;
  top: 0; right: 0;
  width: min(42vw, 600px);
  min-width: 360px;
  height: 100vh;
  background: #fff;
  border-left: 1px solid #e6e6e6;
  box-shadow: -8px 0 24px rgba(0,0,0,0.08);
  z-index: 2000;
  display: flex;
  flex-direction: column;
}
.dock-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .6rem .8rem;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
}
.dock-actions { display: flex; gap: .4rem; }
.dock-actions .mini {
  padding: .3rem .6rem; font-size: .85rem; border: 1px solid #ddd;
  background: #fafafa; border-radius: 6px; color: #333; cursor: pointer;
}
.dock-actions .mini.danger { background: #ffecec; border-color: #ffc8c8; color: #c0392b; }
.dock-frame { width: 100%; height: calc(100% - 42px); border: 0; }
@media (max-width: 920px) {
  .chat-dock { width: 100vw; min-width: 0; }
}
</style>