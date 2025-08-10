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

    <div class="manual-diagnose-section">
      <input v-model="diagnoseForm.disease_name" placeholder="병명(예: 응애)">
      <input v-model="diagnoseForm.confidence" type="number" placeholder="신뢰도(0~1)">
      <input v-model="diagnoseForm.userId" placeholder="userId">
      <v-btn color="#74512D" @click="onSendDiagnose">진단 시작</v-btn>
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
import axios from 'axios'
import { analyzeYolo, sendDiagnose, sendAnswer } from '@/api/agent'
// import { sendDiagnose, sendAnswer } from '@/api/agent'

export default {
  data() {
    return {
      // userInput: "",
      messages: [
        { sender: "bot", type: "text", text: "꿀벌 질병/해충 탐지 서비스에 오신걸 환영합니다~! 분석을 원하는 사진을 올려주세요 🤓✨" }
      ],
      // uploadedFile: null,
      // isLoading: false,
      diagnoseForm: {
      disease_name: '',
      confidence: 0.9,
      userId: ''
      }
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // 사용자 업로드 메시지
      const imgUrl = URL.createObjectURL(file)
      this.messages.push({ sender: "user", type: "image", url: imgUrl })
      this.isLoading = true

      try {
        // YOLO 분석
        // const yoloRes = await analyzeYolo(file)
        // this.messages.push({ sender: "bot", type: "text", text: `YOLO 분석결과: ${yoloRes.data.result}` })
        const base = import.meta.env.VITE_GW_URL || window.location.origin
        // 1) 업로드 SAS 발급
        const wsasRes = await fetch(`${base}/ai/wsas?fileName=${encodeURIComponent(file.name)}`)
        if (!wsasRes.ok) throw new Error(`SAS 발급 실패: ${wsasRes.status}`)
        const { uploadUrl, fileName } = await wsasRes.json()

        // 2) Blob 업로드
        const putRes = await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'x-ms-blob-type': 'BlockBlob',
            'Content-Type': file.type,
          },
        })
        if (!putRes.ok) throw new Error(`이미지 업로드 실패: ${putRes.status}`)

        // 3) 읽기 SAS 발급
        const rsasRes = await fetch(`${base}/ai/rsas?fileName=${encodeURIComponent(fileName)}`)
        if (!rsasRes.ok) throw new Error(`읽기 SAS 발급 실패: ${rsasRes.status}`)
        const { readOnlyUrl } = await rsasRes.json()

        // 4) 분석 요청
        const analysisRes = await fetch(`${base}/ai/analysis`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, imageUrl: readOnlyUrl })
        })
        if (!analysisRes.ok) throw new Error(`분석 요청 실패: ${analysisRes.status}`)

        // Agent 진단
        const agentRes = await sendDiagnose(yoloRes.data.result)
        this.messages.push({ sender: "bot", type: "text", text: agentRes.data.prescription })

      } catch (err) {
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 분석 중 오류가 발생했습니다. 다시 시도해주세요." })
      } finally {
        this.isLoading = false
      }
    },

    async sendMessage() {
      if (!this.userInput.trim()) return

      const message = this.userInput
      this.messages.push({ sender: "user", type: "text", text: message })
      this.userInput = ""

      try {
        const res = await sendAnswer(message)
        this.messages.push({ sender: "bot", type: "text", text: res.data.reply })
      } catch (err) {
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 답변 중 오류가 발생했습니다." })
      }
    },

    async onSendDiagnose() {
      console.log("진단 버튼 눌림!");
      const { disease_name, confidence, userId } = this.diagnoseForm
      if (!disease_name || !userId) {
        alert('병명, userId 모두 입력해 주세요!')
        return
      }
      try {
        const accessToken = localStorage.getItem('accessToken');
        // Agent API 호출 (엔드포인트 맞춰서)
        const res = await axios.post('https://8088-dlafhr789-forbee-gahotnesjfz.ws-us120.gitpod.io/api/diagnose', {
          disease_name,
          confidence: Number(confidence),
          //userId
         },
         {
          headers: { 
            userId,
            Authorization: `Bearer ${accessToken}`
          }
          }
        );

        const { prescription, questions, response } = res.data;
        if (questions && questions.length > 0) {
            this.messages.push({
            sender: "bot",
            type: "text",
            text: `📝 추가 질문: ${questions.join('\n')}`
        });
      } else if (prescription) {
          this.messages.push({
          sender: "bot",
          type: "text",
          text: `🏥🐝 ${prescription}`
      });
      }
        // 결과 표시 (메시지 추가)
        //this.messages.push({ sender: "bot", type: "text", text: `처방 결과: ${res.data.prescription || JSON.stringify(res.data)}` })
      } catch (err) {
        this.messages.push({ sender: "bot", type: "text", text: "⚠️ 에이전트 호출 오류!" })
      }
    },
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
