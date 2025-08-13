<!-- src/components/ui/PostEdit.vue -->
<template>
  <div class="edit-page">
    <div class="head">
      <button class="back" @click="goBack">← 뒤로</button>
      <h2>글 수정</h2>
      <div class="spacer"></div>
    </div>

    <div v-if="loading" class="loading">불러오는 중…</div>

    <form v-show="!loading" class="form" @submit.prevent="save">
      <label>제목
        <input v-model="form.title" type="text" required />
      </label>

      <label>본문</label>
      <!-- 본문: contenteditable, 이미지마다 X 버튼 1개씩 → 그 이미지 1장만 삭제 -->
      <div
        ref="editorRef"
        class="editor"
        contenteditable="true"
        :placeholder="'내용을 입력하세요...'"
        @input="syncFromEditor"
        @click="onEditorClick"
      ></div>

      <!-- 업로드 툴바 -->
      <div class="toolbar">
        <button type="button" class="btn" @click="imagePicker?.click()" :disabled="uploading">
          {{ uploading && pending==='image' ? '이미지 업로드 중...' : '이미지 추가(PNG, JPG 등)' }}
        </button>
        <button type="button" class="btn outline" @click="pdfPicker?.click()" :disabled="uploading">
          {{ uploading && pending==='pdf' ? 'PDF 업로드 중...' : '첨부파일 추가(PDF)' }}
        </button>

        <input ref="imagePicker" type="file" accept="image/*" multiple class="hidden" @change="onPickImages" />
        <input ref="pdfPicker" type="file" accept="application/pdf" class="hidden" @change="onPickPdf" />
      </div>

      <!-- ✅ 첨부: 파일류만(이미지는 본문에만, 첨부에는 포함하지 않음) -->
      <div v-if="fileAttachments.length" class="attach">
        <h4>첨부</h4>
        <div class="grid">
          <div
            v-for="(att,i) in fileAttachments"
            :key="att.url + i"
            class="cell file-tile"
            :title="att.name"
          >
            <a class="tile-body" :href="att.url" target="_blank" rel="noopener">
              <div class="tile-ico">📄</div>
              <div class="tile-name">{{ att.name }}</div>
              <div class="tile-open">열기</div>
            </a>
            <button type="button" class="tile-del" @click="removeAttachment(i)" title="삭제">×</button>
          </div>
        </div>
      </div>

      <div class="actions">
        <button type="submit" class="btn primary" :disabled="saving">{{ saving ? '저장 중…' : '저장' }}</button>
        <button type="button" class="btn" @click="goBack">취소</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const base = (import.meta.env.VITE_GW_URL || '').replace(/\/+$/, '')
const abs = (u) => (!u ? u : /^https?:\/\//i.test(u) ? u : `${base}${u.startsWith('/') ? u : `/${u}`}`)

const loading = ref(true)
const saving = ref(false)
const uploading = ref(false)
const pending = ref('') // 'image' | 'pdf'

const form = ref({ title: '', content: '' })     // HTML 본문 저장
const attachments = ref([])                       // 파일류만 [{name,url,type:'pdf'|'file'}]
const editorRef = ref(null)

/* --------- 권한/헤더 --------- */
function decodeJwt(token) {
  try {
    const b = token?.split?.('.')[1]; if (!b) return null
    return JSON.parse(atob(b.replace(/-/g, '+').replace(/_/g, '/')))
  } catch { return null }
}
const jwt = decodeJwt(localStorage.getItem('accessToken') || '')
const me = (localStorage.getItem('username')?.split('@')[0]) || (jwt?.user_name || jwt?.username || '')
const authorities = jwt?.authorities || []
const isAdmin = Array.isArray(authorities) && authorities.includes('ROLE_ADMIN')
function authHeaders() {
  return { Role: isAdmin ? 'ADMIN' : 'USER', Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
}

/* --------- 이미지/파일 판별 --------- */
function looksLikeImage(nameOrType = '') {
  const s = String(nameOrType).toLowerCase()
  return s.startsWith('image') || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(s)
}

/* --------- 초기 로드 --------- */
async function load() {
  loading.value = true
  try {
    const { data } = await axios.get(`${base}/posts/${id}`, { headers: authHeaders() })

    // 권한: 본인 또는 ADMIN
    const author = data?.author || ''
    if (!isAdmin && String(author).toLowerCase() !== String(me).toLowerCase()) {
      alert('수정 권한이 없습니다.')
      return goBack()
    }

    form.value.title = data.title || ''
    // 본문(마크다운 가능) → HTML로 렌더링 후 에디터에 주입
    const initialHtml = DOMPurify.sanitize(marked.parse(data.content || ''))

    // 첨부 수집: ✅ 이미지 제외하고 파일만 저장
    const collected = []
    const pushIfFile = (a) => {
      const url = abs(a.url || '')
      if (!url) return
      const name = a.name || decodeURIComponent(url.split('/').pop())
      const typeRaw = a.type || name
      if (!looksLikeImage(typeRaw)) {
        collected.push({ name, url, type: /\.pdf$/i.test(name) || /pdf$/i.test(String(a.type)) ? 'pdf' : 'file' })
      }
    }
    if (Array.isArray(data.attachments)) data.attachments.forEach(pushIfFile)
    if (data.attachmentsJson) {
      try { const arr = JSON.parse(data.attachmentsJson); if (Array.isArray(arr)) arr.forEach(pushIfFile) } catch {}
    }
    attachments.value = collected

    loading.value = false
    await nextTick()
    if (editorRef.value) {
      editorRef.value.innerHTML = initialHtml
      wrapAllImages()  // 로드된 본문 전체 이미지에 X 버튼
      syncFromEditor()
    }
  } catch (e) {
    loading.value = false
    console.error(e)
  }
}

/* --------- 에디터 유틸 --------- */
function syncFromEditor() {
  // 사용자가 img를 붙여넣었을 때도 래핑 보장
  wrapAllImages()
  form.value.content = editorRef.value?.innerHTML?.trim() || ''
}

// 커서 위치에 노드 삽입
async function insertNodeAtCaret(node) {
  const el = editorRef.value; if (!el) return
  el.focus()
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) {
    el.appendChild(node)
    el.appendChild(document.createElement('p'))
  } else {
    const range = sel.getRangeAt(0)
    range.deleteContents()
    range.insertNode(node)
    range.setStartAfter(node)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
  }
  await nextTick()
  syncFromEditor()
}

// 단일 이미지 래핑(+X) — 이미 래핑된 경우는 건너뜀
function wrapImgInPlace(img) {
  if (!img || img.closest('.img-wrap')) return
  const wrap = document.createElement('span')
  wrap.className = 'img-wrap'
  wrap.dataset.src = img.src

  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'img-del'
  btn.dataset.src = img.src
  btn.title = '이미지 제거'
  btn.textContent = '×'

  const parent = img.parentNode
  parent.insertBefore(wrap, img)
  wrap.appendChild(img)
  wrap.appendChild(btn)
}

// 본문 내 모든 <img> 래핑
function wrapAllImages() {
  const el = editorRef.value
  if (!el) return
  el.querySelectorAll('img').forEach(wrapImgInPlace)
}

// 새 이미지 삽입(+X 버튼)
async function insertImageNode(url, alt='') {
  const wrap = document.createElement('span')
  wrap.className = 'img-wrap'
  wrap.dataset.src = url

  const img = document.createElement('img')
  img.src = url
  img.alt = alt
  img.style.maxWidth = '100%'
  img.style.height = 'auto'

  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'img-del'
  btn.dataset.src = url
  btn.title = '이미지 제거'
  btn.textContent = '×'

  wrap.appendChild(img)
  wrap.appendChild(btn)
  await insertNodeAtCaret(wrap)
}

// 본문 클릭 → X버튼 처리(눌린 그 사진만 제거)
function onEditorClick(e) {
  const t = e.target
  if (t && t.classList.contains('img-del')) {
    e.preventDefault()
    e.stopPropagation()
    const wrap = t.closest('.img-wrap')
    if (wrap && wrap.parentNode) {
      wrap.parentNode.removeChild(wrap) // 해당 이미지 1개만 삭제
      syncFromEditor()
    }
  }
}

/* --------- 이미지 자동 감지(MutationObserver) --------- */
let imgObserver = null
onMounted(async () => {
  await load()
  if (editorRef.value) {
    imgObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.tagName === 'IMG') wrapImgInPlace(node)
          node.querySelectorAll?.('img')?.forEach(wrapImgInPlace)
        })
        if (m.type === 'attributes' && m.target?.tagName === 'IMG') {
          wrapImgInPlace(m.target)
        }
      }
    })
    imgObserver.observe(editorRef.value, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    })
  }
})
onBeforeUnmount(() => { imgObserver?.disconnect() })

/* --------- 업로드 --------- */
const imagePicker = ref(null)
const pdfPicker = ref(null)

async function upload(file, kind) {
  const tryOnce = async (typeParam) => {
    const fd = new FormData()
    fd.append('file', file)
    fd.append('type', typeParam)
    const { data } = await axios.post(`${base}/files/upload`, fd, { headers: authHeaders() })
    const u = data?.url || data?.location || data?.path
    if (!u) throw new Error('업로드 응답에 url 없음')
    return abs(String(u))
  }
  if (kind === 'pdf') {
    // 백엔드마다 기대값이 다를 수 있어 pdf → document 순서로 시도
    try { return await tryOnce('pdf') } catch { return await tryOnce('document') }
  }
  return await tryOnce('image')
}

async function onPickImages(e) {
  const files = Array.from(e.target.files || []); e.target.value = ''
  if (!files.length) return
  uploading.value = true; pending.value = 'image'
  try {
    for (const f of files) {
      if (!/^image\//i.test(f.type)) { alert('이미지 파일만 업로드'); continue }
      if (f.size > 10*1024*1024) { alert(`${f.name}이(가) 10MB 초과`); continue }
      const url = await upload(f, 'image')
      await insertImageNode(url, f.name)   // 본문에만 삽입 (첨부엔 넣지 않음)
    }
  } catch(e){ console.error(e); alert('이미지 업로드 실패') }
  finally { uploading.value = false; pending.value=''; }
}

async function onPickPdf(e) {
  const f = e.target.files?.[0]; e.target.value = ''
  if (!f) return
  if (f.type !== 'application/pdf') { alert('PDF만 업로드'); return }
  uploading.value = true; pending.value = 'pdf'
  try {
    const url = await upload(f, 'pdf')
    // 본문에는 넣지 않고 첨부 목록(파일 전용)에만 추가
    attachments.value.push({ name: f.name, url, type: 'pdf' })
  } catch(e){ console.error(e); alert('PDF 업로드 실패') }
  finally { uploading.value = false; pending.value=''; }
}

/* --------- 저장 --------- */
function cleanHtmlForSave() {
  const el = editorRef.value
  if (!el) return form.value.content || ''
  const clone = el.cloneNode(true)
  // X 버튼 제거 & 래퍼 해제
  clone.querySelectorAll('.img-del').forEach(b => b.remove())
  clone.querySelectorAll('.img-wrap').forEach(w => {
    const img = w.querySelector('img')
    if (img && w.parentNode) w.parentNode.insertBefore(img, w)
    w.remove()
  })
  return (clone.innerHTML || '').trim()
}

const fileAttachments = computed(() => attachments.value) // 파일만 유지 중
function removeAttachment(i){ attachments.value.splice(i, 1) }

async function save() {
  try {
    saving.value = true
    syncFromEditor()
    const cleaned = cleanHtmlForSave()
    const payload = {
      author: me || 'unknown',
      title: form.value.title,
      content: cleaned,               // 본문(이미지 포함)
      attachments: attachments.value  // 파일류만
    }
    await axios.put(`${base}/posts/${id}`, payload, { headers: authHeaders() })
    alert('저장되었습니다.')
    goBackToDetail()
  } catch(e){ console.error(e); alert('저장 실패') }
  finally { saving.value = false }
}

function goBack(){ router.back() }
function goBackToDetail(){ router.push(route.fullPath.replace(/\/edit\/?$/, '')) }
</script>

<style scoped>
.edit-page { padding: 1.25rem; }
.head { display:flex; align-items:center; gap:.75rem; margin-bottom:.75rem; }
.head .spacer { flex:1; }
.back { background:none; border:none; cursor:pointer; }
.loading { padding:1rem; }
.form label { display:block; margin:.6rem 0; }
.form input { width:100%; padding:.6rem; border:1px solid #ccc; border-radius:6px; }

/* 에디터 */
.editor {
  width:100%;
  min-height:520px;
  padding:.9rem;
  border:1px solid #ccc;
  border-radius:6px;
  background:#fff;
  line-height:1.7;
  outline:none;
  white-space:pre-wrap;
  word-break:break-word;
}
.editor:empty:before { content: attr(placeholder); color:#999; }

/* 본문 이미지 + X 버튼 (scoped 대응 :deep) */
.editor :deep(.img-wrap){ position:relative; display:inline-block; max-width:100%; }
.editor :deep(.img-wrap img){ display:block; max-width:100%; height:auto; border-radius:4px; }
.editor :deep(.img-wrap .img-del){
  position:absolute; top:8px; right:8px;
  width:48px; height:48px; font-size:28px;
  border:none; border-radius:50%;
  background:#000000D9; color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center; line-height:1;
  box-shadow:0 3px 8px rgba(0,0,0,.35); z-index:10;
}
.editor :deep(.img-wrap .img-del:hover){ background:#000; }

/* 업로드 툴바 */
.toolbar { display:flex; gap:.5rem; align-items:center; margin:.75rem 0 1rem; flex-wrap:wrap; }
.btn { padding:.6rem 1rem; border-radius:8px; border:1px solid #ddd; background:#fff; cursor:pointer; }
.btn.primary { background:#c99c3c; border-color:#c99c3c; color:#fff; }
.btn.outline { background:#f5f5f5; }
.hidden { display:none; }

/* 첨부 그리드(파일류만) */
.attach { background:#fafafa; border:1px solid #eee; border-radius:12px; padding:1rem; }
.attach h4 { margin:.1rem 0 .8rem; }
.grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(140px,1fr)); gap:.9rem; }
.cell { position:relative; border:1px solid #e5e5e5; border-radius:10px; padding:10px; background:#fff; min-height:120px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.file-tile .tile-body{ text-decoration:none; color:#222; display:flex; flex-direction:column; align-items:center; gap:.4rem; width:100%; height:100%; justify-content:center; }
.file-tile .tile-ico{ font-size:42px; }
.file-tile .tile-name{ max-width:100%; text-align:center; font-size:.95rem; line-height:1.2; word-break:break-all; max-height:2.6em; overflow:hidden; }
.file-tile .tile-open{ font-size:.85rem; text-decoration:underline; color:#6a5acd; }
.tile-del{
  position:absolute; top:6px; right:6px; width:28px; height:28px;
  border:none; border-radius:50%; background:#00000099; color:#fff; cursor:pointer; line-height:28px;
}
.tile-del:hover{ background:#000; }

/* 버튼 영역 */
.actions { display:flex; gap:.6rem; margin-top:1rem; }
</style>
