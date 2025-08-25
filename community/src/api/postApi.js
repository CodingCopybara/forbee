import axios from 'axios'


export const writePost = (postData, role = 'user') =>
  axios.post(import.meta.env.VITE_GW_URL+'/posts/writepost', postData, {
    headers: {
      Role: role, // 사용자 역할 (user, member, admin 등)
    },
  })
