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
      <v-btn color="warning" @click="$refs.fileInput.click()">사진업로드</v-btn>
    </div>

    <div class="input-section">
      <input type="text" v-model="userInput" placeholder="답변을 입력해주세요" @keyup.enter="sendMessage" />
      <v-btn @click="sendMessage">보내기</v-btn>
    </div>
  </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      messages: [
        { sender: "bot", type: "text", text: "꿀벌 질병/해충 탐지 서비스에 오신걸 환영합니다~! 분석을 원하는 사진을 올려주세요 🤓✨" }
      ],
      uploadedFile: null,
      isLoading: false,
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // 1. 사용자 업로드 메시지 표시
      const imgUrl = URL.createObjectURL(file);
      this.messages.push({ sender: "user", type: "image", url: imgUrl });

      this.isLoading = true;

      try {
        // 2. YOLO 분석 API 호출
        const formData = new FormData();
        formData.append("file", file);

        const yoloRes = await fetch("/api/yolo/analyze", {
          method: "POST",
          body: formData,
        }).then(res => res.json());

        // YOLO 결과 표시
        this.messages.push({ sender: "bot", type: "text", text: `YOLO 분석결과: ${yoloRes.result}` });

        // 3. Agent API 호출 (YOLO 결과 전달)
        const agentRes = await fetch("/api/agent/diagnose", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ yolo_result: yoloRes.result })
        }).then(res => res.json());

        // Agent 처방전 응답 추가
        this.messages.push({ sender: "bot", type: "text", text: agentRes.prescription });

      } catch (err) {
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 분석 중 오류가 발생했습니다. 다시 시도해주세요." });
      } finally {
        this.isLoading = false;
      }
    },

    async sendMessage() {
      if (!this.userInput.trim()) return;

      // 사용자 메시지 추가
      this.messages.push({ sender: "user", type: "text", text: this.userInput });

      // Agent에게 추가 질문 전달
      const res = await fetch("/api/agent/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: this.userInput })
      }).then(res => res.json());

      // Agent 응답 추가
      this.messages.push({ sender: "bot", type: "text", text: res.reply });

      this.userInput = "";
    }
  }
};
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
