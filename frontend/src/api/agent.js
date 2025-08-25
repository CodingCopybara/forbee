import axios from 'axios'

// API 서버 주소
const AGENT_API_URL = 'https://8000-dlafhr789-forbee-o89zkhw5v8c.ws-us120.gitpod.io'

// YOLO 분석 호출 함수 (엔드포인트 맞춰 수정)
export function analyzeYolo(file) {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post(`${AGENT_API_URL}/yolo/analyze`, formData)
}

// Agent 진단 호출 함수
export function sendDiagnose(yolo_result) {
  return axios.post(`${AGENT_API_URL}/diagnose`, { yolo_result })
}

// Agent 답변 호출 함수
export function sendAnswer(message) {
  return axios.post(`${AGENT_API_URL}/answer`, { message })
}
