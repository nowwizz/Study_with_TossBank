// node 코어모듈에 있는 http 모듈을 사용한 간단한 웹서버
const http = require('node:http')

// 요청 발생시 해야할 일을 콜백 함수에 등록한다.
const server = http.createServer((req, res) => {
  console.log('HTTP 요청 발생')
})

//3000번 포트에서 서버 실행
server.listen(3000, () => {
  console.log('3천번 포트에서 서버 실행중')
})
