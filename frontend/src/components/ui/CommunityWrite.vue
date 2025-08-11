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

      <!-- ✅ 본문 입력: contenteditable 에디터 -->
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
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
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

// 작성 폼 상태 (content는 HTML로 전송)
const form = ref({
  title: '',
  content: '',
  category: categoryParam,
  author: (localStorage.getItem('username')?.split('@')[0]) || '익명',
  attachments: [] // { name, url, type: 'pdf' }
})

// 업로드 관련 ref & state
const imageInput = ref(null)
const pdfInput = ref(null)
const editorRef = ref(null)
const uploading = ref(false)
const pendingType = ref('') // 'image' | 'pdf'

// 에디터 동기화: div.innerHTML -> form.content
function syncFromEditor() {
  form.value.content = (editorRef.value?.innerHTML || '').trim()
}

// 붙여넣기 시, 이미지/파일이 클립보드에 있으면 브라우저가 dataURL로 넣는 걸 막고 텍스트만 허용(선택)
function onPaste(e) {
  // 필요 시 정제 로직 추가 가능
}

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
    while ((node = tmp.firstChild)) {
      lastNode = frag.appendChild(node)
    }
    range.insertNode(frag)
    // 커서를 삽입된 마지막 노드 뒤로
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
      if (url) {
        // ✅ URL 텍스트가 아니라 실제 이미지 요소 삽입
        await insertHtmlAtCaret(`<img src="${url}" alt="" />`)
      }
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

// 업로드 호출(프리플라이트 최소화)
async function uploadFile(file, kind) {
  const fd = new FormData()
  fd.append('file', file)
  fd.append('type', kind)

  const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')
  const endpoint = `${base}/files/upload`

  const { data } = await axios.post(endpoint, fd, {
    headers: {}, // 인증 헤더 없으면 대부분 프리플라이트 회피
    withCredentials: false
  })

  if (!data?.url) throw new Error('업로드 응답에 url이 없습니다.')
  const u = String(data.url)
  return /^https?:\/\//i.test(u) ? u : `${base}${u.startsWith('/') ? u : `/${u}`}`
}

// ⚠️ submitPost는 그대로 유지
async function submitPost() {
  try {
    // 전송 직전 한번 더 동기화(안전)
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

/* ✅ 내용 박스 더 길게 + WYSIWYG 스타일 */
.editor {
  display: block;
  width: 100%;
  min-height: 520px;   /* ← 길게 */
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  line-height: 1.7;
  outline: none;
  white-space: pre-wrap;
  word-break: break-word;
}
.editor:empty:before {
  content: attr(placeholder);
  color: #999;
}

/* 본문 내 이미지: 박스 기준 90% (좌측 정렬 원하면 margin-left만 조절) */
.editor img {
  width: 90%;
  max-width: 90%;
  height: auto;
  display: block;
  margin: .75rem auto; /* 가운데 정렬 → 왼쪽 정렬 원하면 .75rem 0; 로 */
}

/* 업로드 툴바 */
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

.actions { display: flex; gap: 0.5rem; }
button { padding: 0.6rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; background-color: #c99c3c; color: #fff; }
button[type="button"] { background-color: #e0e0e0; color: #333; }
</style>
