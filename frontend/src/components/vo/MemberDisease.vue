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
  </div>
  </v-sheet>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = "https://8083-dlafhr789-forbee-zz46g74qo20.ws-us120.gitpod.io"

export default {
  data() {
    return {
      userInput: "",
      isLoading: false,
      userId: "17", // 헤더로 보낼 유저 ID 일단 테스트
      messages: [
        { sender: "bot", type: "text", text: "꿀벌 질병/해충 탐지 서비스에 오신걸 환영합니다~! 분석을 원하는 사진을 올려주세요 🤓✨" }
      ],
      es: null,
    };
  },

  mounted() {
    // 에이전트 결과 실시간 구독
    const streamUrl = `${axios.defaults.baseURL}/ai/stream?userId=${encodeURIComponent(this.userId)}`
    this.es = new EventSource(streamUrl)

    this.es.addEventListener("agent", (evt) => {
      try {
        const payload = JSON.parse(evt.data)
        const text = payload.prescription || payload.response || evt.data
        this.messages.push({ sender: "bot", type: "text", text })
      } catch {
        this.messages.push({ sender: "bot", type: "text", text: evt.data })
      }
    })

    this.es.onerror = () => {
      // 필요하면 재연결 로직 추가 가능 (간단히 콘솔만)
      console.warn("SSE 연결 오류")
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

      try {
        // 1) 업로드용 SAS 발급
        const { data: sas } = await axios.get("/ai/wsas", {
          params: { fileName: file.name },
        })

        const {uploadUrl, blobUrl, fileName } = sas
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

        // 3) 분석용으로 읽기 가능한 URL 확보(컨테이너가 private이면 필요)
        const { data: ro } = await axios.get("/ai/rsas", { params: { fileName } })
        const imageUrl = ro?.readOnlyUrl ?? blobUrl

        // 4) /ai/analysis 로 분석 요청 (헤더에 userId)
        await axios.post(
          "/ai/analysis",
          { userId: this.userId, imageUrl },
        )

        this.messages.push({ sender: "bot", type: "text", text: "분석 요청 접수 완료! 결과가 준비되면 알려드릴게요 🐝" })
      } catch (err) {
        console.error(err)
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 업로드/분석 중 오류가 발생했습니다. 다시 시도해주세요." })
      } finally {
        this.isLoading = false
        // 같은 파일 다시 선택 가능하도록 초기화
        if (this.$refs.fileInput) this.$refs.fileInput.value = ""
      }
    },

    async sendMessage() {
      if (!this.userInput.trim()) return

      const message = this.userInput
      this.messages.push({ sender: "user", type: "text", text: message })
      this.userInput = ""

      try {
        await axios.post(
          "/api/answer",
          { answers: [message] },  // 지금은 단일 답변만 보내도록
          { headers: { userId: this.userId } }
        )
      } catch (err) {
        console.error("답변 전송 오류", err)
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 답변 전송 실패" })
      }
    },

    _setOrAppendProgress(text) {
      const idx = [...this.messages].reverse().findIndex(m => m.sender === "bot" && typeof m.text === "string" && m.text.startsWith("업로드 진행률:"))
      if (idx === -1) {
        this.messages.push({ sender: "bot", type: "text", text })
      } else {
        const realIdx = this.messages.length - 1 - idx
        this.$set(this.messages, realIdx, { ...this.messages[realIdx], text })
      }
    }
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.bot {
  text-align: left;
}

.user {
  text-align: right;
}

.bubble {
  display: inline-block;
  max-width: 70%;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background: #f5f5f5;
}

.user .bubble {
  background: #ffe082;
}

.chat-img {
  max-width: 200px;
  border-radius: 8px;
  margin: 5px;
}

.upload-section, .input-section {
  display: flex;
  justify-content: center;
  padding: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>