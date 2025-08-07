import axios from 'axios'

// 백엔드 주소 설정 (Gitpod나 로컬 등 환경에 맞게)
const api = axios.create({
  baseURL: 'http://localhost:8085', // Gitpod이면 포트 포워딩 주소로 바꾸세요
})

export const writePost = (postData, role = 'user') =>
  api.post('/posts/writepost', postData, {
    headers: {
      Role: role, // 사용자 역할 (user, member, admin 등)
    },
  })
