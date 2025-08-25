// redirect-server.js
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.redirect('https://forbee.me'); // ✅ 여기에만 전체 URL 사용 가능
});

app.listen(3000, () => {
  console.log('🔁 개발용 리디렉션 서버 실행 중!');
});
