import { Client } from '@stomp/stompjs'

class WebSocketService {
  constructor() {
    this.stompClient = null
    this.connected = false
    this.subscriptions = new Map()
    this.reconnectInterval = 5000
    this.maxReconnectAttempts = 5
    this.reconnectAttempts = 0
  }

  connect(userId) {
    return new Promise((resolve, reject) => {
      try {
        // WebSocket 엔드포인트 설정
        // 개발: localhost:8080/ws
        // 프로덕션: 현재 호스트의 /ai/ws
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
        const host = process.env.NODE_ENV === 'production' 
          ? window.location.host 
          : 'localhost:8080'
        const wsUrl = `${protocol}//${host}/ws`
        
        // 네이티브 WebSocket 사용
        this.stompClient = new Client({
          brokerURL: wsUrl,
          debug: process.env.NODE_ENV === 'development' ? console.log : () => {},
          onConnect: (frame) => {
            console.log('WebSocket Connected:', frame)
            this.connected = true
            this.reconnectAttempts = 0
            
            // 사용자별 분석 결과 구독
            this.subscribeToAnalysisResults(userId)
            
            resolve(frame)
          },
          onStompError: (error) => {
            console.error('WebSocket Connection Error:', error)
            this.connected = false
            this.handleReconnect(userId)
            reject(error)
          },
          onWebSocketError: (error) => {
            console.error('WebSocket Error:', error)
            this.connected = false
            reject(error)
          }
        })

        this.stompClient.activate()
      } catch (error) {
        console.error('WebSocket Setup Error:', error)
        reject(error)
      }
    })
  }

  subscribeToAnalysisResults(userId, callback) {
    if (!this.connected || !this.stompClient) {
      console.warn('WebSocket not connected. Cannot subscribe.')
      return null
    }

    const destination = `/topic/analysis/${userId}`
    
    try {
      const subscription = this.stompClient.subscribe(destination, (message) => {
        try {
          const result = JSON.parse(message.body)
          console.log('Analysis result received:', result)
          
          // 기본 콜백 또는 사용자 정의 콜백 실행
          if (callback) {
            callback(result)
          } else {
            this.handleAnalysisResult(result)
          }
        } catch (error) {
          console.error('Error parsing analysis result:', error)
        }
      })

      this.subscriptions.set(destination, subscription)
      console.log(`Subscribed to: ${destination}`)
      
      return subscription
    } catch (error) {
      console.error('Subscription error:', error)
      return null
    }
  }

  handleAnalysisResult(result) {
    // 기본 결과 처리 로직
    console.log('Processing analysis result:', result)
    
    // 브라우저 알림 표시
    if (Notification.permission === 'granted') {
      new Notification('이미지 분석 완료', {
        body: `${result.detectedObjects?.length || 0}개의 객체가 감지되었습니다.`,
        icon: '/bee.png'
      })
    }

    // 커스텀 이벤트 발생 (다른 컴포넌트에서 리스닝 가능)
    window.dispatchEvent(new CustomEvent('analysisResult', {
      detail: result
    }))
  }

  unsubscribe(destination) {
    const subscription = this.subscriptions.get(destination)
    if (subscription) {
      subscription.unsubscribe()
      this.subscriptions.delete(destination)
      console.log(`Unsubscribed from: ${destination}`)
    }
  }

  disconnect() {
    if (this.stompClient && this.connected) {
      // 모든 구독 해제
      this.subscriptions.forEach((subscription, destination) => {
        subscription.unsubscribe()
      })
      this.subscriptions.clear()
      
      this.stompClient.deactivate()
      console.log('WebSocket Disconnected')
      this.connected = false
    }
  }

  handleReconnect(userId) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++
      console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`)
      
      setTimeout(() => {
        this.connect(userId).catch((error) => {
          console.error('Reconnection failed:', error)
        })
      }, this.reconnectInterval)
    } else {
      console.error('Max reconnection attempts reached')
    }
  }

  // 연결 상태 확인
  isConnected() {
    return this.connected && this.stompClient && this.stompClient.connected
  }

  // 분석 진행 상황 전송 (필요시)
  sendAnalysisStatus(userId, status) {
    if (this.isConnected()) {
      this.stompClient.publish({
        destination: `/app/analysis-status/${userId}`,
        body: JSON.stringify(status)
      })
    }
  }
}

// 싱글톤 인스턴스 생성
const webSocketService = new WebSocketService()

export default webSocketService