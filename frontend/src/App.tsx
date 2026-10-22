import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('요청 전')

  useEffect(() => {
    fetch('http://localhost:8080/api/test')
      .then((response) => response.text())
      .then((data) => {
        setMessage(data)
      })
      .catch((error) => {
        console.error('API 요청 실패:', error)
        setMessage('API 요청 실패')
      })
  }, [])

  return (
    <div>
      <h1>React → Spring Boot API Test</h1>
      <p>백엔드 응답: {message}</p>
    </div>
  )
}

export default App