<template>
  <v-sheet
    class="pa-6 mx-auto"
    color="white"
    elevation="3"
    rounded="lg"
    max-width="800"
  >
    <div class="chat-container">
      <div class="chat-box">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
          <div v-if="msg.type === 'text'" class="bubble">{{ msg.text }}</div>

          <!-- 로딩 말풍선 -->
          <div v-else-if="msg.type === 'loading'" class="bubble loading-bubble">
            <div class="loading-dots"><span></span><span></span><span></span></div>
          </div>

          <img v-else-if="msg.type === 'image'" :src="msg.url" class="chat-img" />
        </div>
      </div>

      <div class="upload-section">
        <input type="file" ref="fileInput" @change="handleFileUpload" hidden />
        <v-btn color="warning" @click="$refs.fileInput.click()" :loading="isLoading">사진업로드</v-btn>
      </div>

      <div class="input-section">
        <input type="text" v-model="userInput" placeholder="답변을 입력해주세요" @keyup.enter="sendMessage" />
        <v-btn @click="sendMessage">보내기</v-btn>
      </div>
      <div class="qna-section" v-if="showQnaBtn">
        <v-btn color="primary" @click="goQnA" :loading="isSaving">QnA로 이어서 질문하기</v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userInput: "",
      isLoading: false,     // 파일 업로드 버튼 로딩
      userId: "",
      showQnaBtn: false,
      isSaving: false,
      lastSessionId: null,
      isBotLoading: false,
      messages: [
        { sender: "bot", type: "text", text: "꿀벌 질병/해충 탐지 서비스에 오신걸 환영합니다~! 분석을 원하는 사진을 올려주세요 🤓✨" }
      ],
      es: null,
    };
  },

  mounted() {
    // 에이전트 결과 실시간 구독
    const email = localStorage.getItem('username') || '';
    this.userId = email.includes('@') ? email.split('@')[0] : email;

    const streamUrl = `${import.meta.env.VITE_GW_URL}/ai/stream?userId=${encodeURIComponent(this.userId)}`
    this.es = new EventSource(streamUrl)

    this.es.addEventListener("agent", (evt) => {
      this.isBotLoading = false;
      this._removeBotLoadingMessage()

      try {
        const payload = JSON.parse(evt.data)

        // 1) 처방문/응답 우선 표시
        const mainText = payload.prescription || payload.response
        if (mainText) {
          this.messages.push({ sender: "bot", type: "text", text: mainText })
        }

        // 2) 추가 질문이 있으면 별도로 렌더
        if (Array.isArray(payload.questions) && payload.questions.length > 0) {
          this.messages.push({
            sender: "bot",
            type: "text",
            text: "추가 질문이 있어요. 아래에 답변해 주세요🤗\n답변 형식은 1. \"1번 답입니다 2. 2번 답입니다 3. 3번 답입니다\"처럼\n한 번에 보내주세요:"
          })
          payload.questions.forEach((q, idx) => {
            this.messages.push({ sender: "bot", type: "text", text: `${idx + 1}. ${q}` })
          })
        }

        // 종료 조건(처방문 있고 추가질문 없음) → QnA 버튼 ON
        if (mainText && (!payload.questions || payload.questions.length === 0)) {
          this._removeBotLoadingMessage()
          this.isBotLoading = false
          this.showQnaBtn = true;
        }

        // 3) 혹시 아무 키도 못 찾으면 raw 데이터
        if (!mainText && !(payload.questions?.length)) {
          this.messages.push({ sender: "bot", type: "text", text: evt.data })
        }
      } catch {
        this.messages.push({ sender: "bot", type: "text", text: evt.data })
      }
    })

    this.es.onerror = () => {
      console.warn("SSE 연결 오류")
      this._removeBotLoadingMessage()
    }
  },

  beforeUnmount() {
    if (this.es) this.es.close()
  },

  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // 사용자 업로드 메시지
      const localPreview = URL.createObjectURL(file)
      this.messages.push({ sender: "user", type: "image", url: localPreview })
      this.isLoading = true
      this.isBotLoading = true;
      this._addBotLoadingMessage()

      try {     
        // 1) 업로드용 SAS 발급
        const { data: sas } = await axios.get(import.meta.env.VITE_GW_URL + "/ai/wsas", {
          params: { fileName: file.name },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        })
        const { uploadUrl, blobUrl, fileName } = sas
        if (!uploadUrl || !fileName) throw new Error("업로드용 SAS 또는 파일명이 없습니다.")

        // 2) Azure Blob에 파일 PUT 업로드
        await axios.put(uploadUrl, file, {
          headers: {
            "x-ms-blob-type": "BlockBlob",
            "Content-Type": file.type || "application/octet-stream",
          },
          onUploadProgress: (evt) => {
            const percent = Math.round((evt.loaded * 100) / (evt.total ?? 1))
            this._setOrAppendProgress(`업로드 진행률: ${percent}%`)
          },
        })
        this.messages.push({ sender: "bot", type: "text", text: "업로드 완료! 분석을 시작할게요 🔎" })

        // 3) 읽기 URL 확보
        const { data: ro } = await axios.get( import.meta.env.VITE_GW_URL + "/ai/rsas", { 
          params: { fileName },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          } 
        })
        const imageUrl = ro?.readOnlyUrl ?? blobUrl

        // 4) 분석 요청
        await axios.post( import.meta.env.VITE_GW_URL + "/ai/analysis", { userId: this.userId, imageUrl },{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken")
          }}
        )

        this.messages.push({ sender: "bot", type: "text", text: "분석 요청 접수 완료! 결과가 준비되면 알려드릴게요 🐝" })
      } catch (err) {
        console.error(err)
        this._removeBotLoadingMessage()
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 업로드/분석 중 오류가 발생했습니다. 다시 시도해주세요." })
      } finally {
        this.isLoading = false
        if (this.$refs.fileInput) this.$refs.fileInput.value = ""
      }
    },

    async sendMessage() {
      if (!this.userInput.trim()) return

      const message = this.userInput
      this.messages.push({ sender: "user", type: "text", text: message })
      this.userInput = ""
      this.isBotLoading = true;
      this._addBotLoadingMessage();

      try {
        await axios.post(
          import.meta.env.VITE_GW_URL + "/api/answer",
          { answers: [message] },
          { headers: { userId: this.userId, Authorization: "Bearer " + localStorage.getItem("accessToken") } }
        )
      } catch (err) {
        console.error("답변 전송 오류", err)
        this._removeBotLoadingMessage()
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 답변 전송 실패" })
      }
    },

    _addBotLoadingMessage() {
      if (!this.messages.some(m => m.type === 'loading')) {
        this.messages.push({ sender: 'bot', type: 'loading' })
      }
    },
    _removeBotLoadingMessage() {
      const i = this.messages.findIndex(m => m.type === 'loading')
      if (i !== -1) this.messages.splice(i, 1)
    },

    _setOrAppendProgress(text) {
      const idx = [...this.messages].reverse().findIndex(
        m => m.sender === "bot" && typeof m.text === "string" && m.text.startsWith("업로드 진행률:")
      )
      if (idx === -1) {
        this.messages.push({ sender: "bot", type: "text", text })
      } else {
        const realIdx = this.messages.length - 1 - idx
        this.$set ? this.$set(this.messages, realIdx, { ...this.messages[realIdx], text }) :
          (this.messages[realIdx] = { ...this.messages[realIdx], text })
      }
    },

    async goQnA() {
      if (this.isBotLoading) return
      this._removeBotLoadingMessage()
      this.isSaving = true;
      try {
        // 서버에 저장 (Spring 예시: /api/chat-sessions)
        const payload = {
          userId: this.userId,
          messages: this.messages
            .filter(m => m.type !== 'loading')
            .map((m, i) => ({
              sender: m.sender,
              type: m.type,
              text: m.text || null,
              url: m.url || null,
              ts: Date.now() + i
            }))
        }
        await axios.post( import.meta.env.VITE_GW_URL + '/api/chat-sessions', payload, { headers: { userId: this.userId, Authorization: "Bearer " + localStorage.getItem("accessToken") } })
        this.$router.push({ path: '/community/qna/write' });

      } catch (e) {
        console.warn('서버 저장 실패 → localStorage fallback', e);
        const fallbackId = `local-${Date.now()}`;
        localStorage.setItem(`chat:${fallbackId}`, JSON.stringify({
          userId: this.userId,
          messages: this.messages
        }));
        this.$router.push({ path: '/community/qna/write' });
      } finally {
        this.isSaving = false;
      }
    }
  }
}
</script>

<style scoped>
.chat-container { display: flex; flex-direction: column; height: 100%; }
.chat-box { flex: 1; overflow-y: auto; padding: 1rem; }
.bot { text-align: left; }
.user { text-align: right; }

.bubble {
  display: inline-block;
  max-width: 70%;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background: #f5f5f5;
  white-space: pre-wrap;      /* \n 줄바꿈 표시 */
  word-break: break-word;
  line-height: 1.6;
}
.user .bubble { background: #ffe082; }

.chat-img { max-width: 200px; border-radius: 8px; margin: 5px; }

.upload-section, .input-section { display: flex; justify-content: center; padding: 10px; }
input[type="text"] { flex: 1; padding: 8px; border-radius: 5px; border: 1px solid #ccc; }

/* 로딩 말풍선 */
.loading-bubble { padding: 10px; margin: 5px; border-radius: 10px; background: #f5f5f5; }
.loading-dots { display: flex; gap: 4px; }
.loading-dots span {
  width: 6px; height: 6px; background: #999; border-radius: 50%;
  animation: blink 1.4s infinite both;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
</style>