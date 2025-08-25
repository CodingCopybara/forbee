<template>
  <div class="image-analysis-page">
    <!-- Header -->
    <div class="page-header">
      <h2>이미지 분석</h2>
    </div>
    
    <!-- Main Content -->
    <div class="page-content">
      <!-- Upload Section -->
      <div class="upload-section">
        <div v-if="!selectedImage" class="upload-area">
          <button 
            class="upload-btn" 
            @click="triggerFileInput"
            :disabled="isUploading"
          >
            <i class="upload-icon">📁</i>
            <span>{{ isUploading ? '업로드 중...' : '이미지 업로드' }}</span>
          </button>
        </div>
        
        <!-- File input - always present in DOM -->
        <input 
          ref="fileInput" 
          type="file" 
          accept="image/*" 
          @change="onFileSelected" 
          style="display: none;"
        />
      
        <!-- Image Preview & Controls -->
        <div v-if="selectedImage" class="image-container">
          <img :src="selectedImage" alt="선택된 이미지" class="preview-img" />
          <div class="image-info">
            <div class="info-item">
              <span class="label">파일명:</span>
              <span class="value">{{ fileName }}</span>
            </div>
            <div class="info-item">
              <span class="label">크기:</span>
              <span class="value">{{ fileSize }}</span>
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div v-if="selectedImage" class="action-buttons">
          <button 
            class="btn btn-secondary" 
            @click="triggerFileInput"
          >
            이미지 업로드
          </button>
          <button 
            class="btn btn-primary" 
            @click="confirmAnalysis"
            :disabled="isAnalyzing"
          >
            {{ isAnalyzing ? '분석 중...' : '분석 시작' }}
          </button>
        </div>
      </div>
      
      <!-- Analysis History Section -->
      <div v-if="analysisHistory.length > 0" class="history-section">
        <h3>분석 이력</h3>
        
        <div class="history-list">
          <div 
            v-for="item in sortedAnalysisHistory" 
            :key="item.analysisId" 
            class="history-item"
          >
            <div class="history-image">
              <img :src="item.originalImage" alt="분석한 이미지" />
            </div>
            
            <div class="history-info">
              <h4>{{ item.fileName }}</h4>
              <p class="analysis-time">{{ formatTimestamp(item.createdAt) }}</p>
              
              <div class="analysis-summary" v-if="item.status === 'completed' && item.result">
                <span class="summary-text">
                  객체 {{ item.result.detectedObjects?.length || 0 }}개 감지
                </span>
              </div>
              
              <div class="analysis-summary" v-else-if="item.status === 'analyzing'">
                <span class="summary-text analyzing-text">
                  분석 진행 중...
                </span>
              </div>
              
              <div class="analysis-summary" v-else-if="item.status === 'error'">
                <span class="summary-text error-text">
                  분석 실패: {{ item.error }}
                </span>
              </div>
            </div>
            
            <div class="history-actions">
              <button 
                class="btn btn-delete" 
                @click.stop="deleteAnalysisItem(item.analysisId)"
              >
                기록 삭제
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import webSocketService from '../../services/WebSocketService'

export default {
  name: 'ImageAnalysis',
  data() {
    return {
      selectedImage: null,
      selectedFile: null,
      fileName: '',
      fileSize: '',
      isUploading: false,
      isAnalyzing: false,
      analysisResult: null,
      userId: 'user123', // 실제로는 로그인된 사용자 ID
      analysisId: null,
      analysisHistory: [] // 분석 이력
    }
  },
  computed: {
    sortedAnalysisHistory() {
      return [...this.analysisHistory].sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      )
    }
  },
  async mounted() {
    this.loadAnalysisHistory()
    try {
      await webSocketService.connect()
      this.subscribeToAnalysisResults()
    } catch (error) {
      console.error('WebSocket 연결 실패:', error)
    }
  },
  beforeUnmount() {
    if (webSocketService.isConnected()) {
      webSocketService.disconnect()
    }
  },
  methods: {
    triggerFileInput() {
      console.log('triggerFileInput called')
      // 파일 입력 초기화
      if (this.$refs.fileInput) {
        console.log('fileInput ref found, clicking...')
        this.$refs.fileInput.value = ''
        this.$refs.fileInput.click()
      } else {
        console.error('fileInput ref not found')
      }
    },
    
    onFileSelected(event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.fileName = file.name
        this.fileSize = this.formatFileSize(file.size)
        
        // 새 이미지 선택 시 분석 상태 초기화
        this.isAnalyzing = false
        
        const reader = new FileReader()
        reader.onload = (e) => {
          this.selectedImage = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    
    resetImage() {
      this.selectedImage = null
      this.selectedFile = null
      this.fileName = ''
      this.fileSize = ''
      this.analysisResult = null
      this.analysisId = null
      this.$refs.fileInput.value = ''
    },
    
    async confirmAnalysis() {
      if (!this.selectedFile) return
      
      try {
        this.isAnalyzing = true
        this.analysisId = Date.now().toString()
        
        // 분석 이력에 추가 (분석 중 상태)
        const analysisItem = {
          analysisId: this.analysisId,
          fileName: this.fileName,
          originalImage: this.selectedImage,
          status: 'analyzing',
          createdAt: new Date().toISOString(),
          result: null,
          error: null
        }
        
        this.analysisHistory.unshift(analysisItem)
        this.saveAnalysisHistory()
        
        // 1. Azure Blob Storage에 이미지 업로드
        const blobUrl = await this.uploadToAzureBlob(this.selectedFile)
        
        // 2. 분석 요청
        const response = await fetch('/ai/analysis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: this.userId,
            imageUrl: blobUrl,
            analysisId: this.analysisId
          })
        })
        
        if (!response.ok) {
          throw new Error(`분석 요청 실패: ${response.status}`)
        }
        
        console.log('분석 요청이 성공적으로 전송되었습니다.')
        
        // 이미지 초기화하고 업로드 화면으로 돌아가기
        this.resetImage()
        this.isAnalyzing = false
        
      } catch (error) {
        console.error('분석 오류:', error)
        
        // 오류 상태로 업데이트
        const item = this.analysisHistory.find(item => item.analysisId === this.analysisId)
        if (item) {
          item.status = 'error'
          item.error = error.message
          this.saveAnalysisHistory()
        }
        
        alert(`분석 중 오류가 발생했습니다: ${error.message}`)
        this.isAnalyzing = false
      }
    },
    
    async uploadToAzureBlob(file) {
      try {
        console.log('SAS 토큰 요청 중...')
        const sasResponse = await fetch(`/ai/wsas?fileName=${encodeURIComponent(file.name)}`)
        
        if (!sasResponse.ok) {
          let errorMessage = 'SAS 토큰 요청 실패'
          try {
            // Response body를 한 번만 읽기 위해 text()로 읽은 후 JSON 파싱 시도
            const responseText = await sasResponse.text()
            try {
              const errorData = JSON.parse(responseText)
              errorMessage = errorData.message || errorData.details || errorMessage
              console.error('SAS 응답 오류 (JSON):', errorData)
            } catch (jsonError) {
              console.error('SAS 응답 오류 (텍스트):', responseText)
              errorMessage = responseText || errorMessage
            }
          } catch (e) {
            console.error('SAS 응답 읽기 실패:', e)
          }
          throw new Error(errorMessage)
        }
        
        const sasData = await sasResponse.json()
        console.log('SAS 토큰 수신:', sasData)
        
        const { uploadUrl, blobUrl, mode } = sasData
        
        // Mock 환경 감지 (로컬 개발용)
        if (mode === 'mock' || uploadUrl.includes('mock-storage')) {
          console.log('로컬 개발 환경 감지 - Mock 모드로 실행')
          // Base64로 변환된 이미지를 blobUrl로 사용 (로컬 개발용)
          return this.selectedImage
        }
        
        console.log('Azure Blob Storage에 업로드 중...')
        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'x-ms-blob-type': 'BlockBlob',
            'Content-Type': file.type
          }
        })
        
        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text()
          console.error('업로드 응답 오류:', errorText)
          throw new Error(`이미지 업로드 실패: ${uploadResponse.status} ${uploadResponse.statusText}`)
        }
        
        console.log('이미지 업로드 완료:', blobUrl)
        return blobUrl
        
      } catch (error) {
        console.error('Azure Blob 업로드 오류:', error)
        throw error
      }
    },
    
    subscribeToAnalysisResults() {
      webSocketService.subscribeToAnalysisResults(this.userId, this.handleAnalysisResult)
    },
    
    handleAnalysisResult(result) {
      console.log('분석 결과 수신:', result)
      
      // 분석 이력에서 해당 항목 찾아서 업데이트
      const item = this.analysisHistory.find(item => item.analysisId === result.analysisId)
      if (item) {
        item.status = 'completed'
        item.result = result
        this.saveAnalysisHistory()
        console.log('분석 이력 업데이트 완료')
      }
      
      // 현재 분석 중인 항목이면 결과 표시
      if (result.analysisId === this.analysisId) {
        this.analysisResult = result
        this.isAnalyzing = false
      }
    },
    
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    
    formatTimestamp(timestamp) {
      if (!timestamp) return ''
      return new Date(timestamp).toLocaleString('ko-KR')
    },
    
    // 분석 이력 관리
    loadAnalysisHistory() {
      try {
        const saved = localStorage.getItem('analysisHistory')
        if (saved) {
          this.analysisHistory = JSON.parse(saved)
        }
      } catch (error) {
        console.error('분석 이력 로드 실패:', error)
        this.analysisHistory = []
      }
    },
    
    saveAnalysisHistory() {
      try {
        localStorage.setItem('analysisHistory', JSON.stringify(this.analysisHistory))
      } catch (error) {
        console.error('분석 이력 저장 실패:', error)
      }
    },
    
    deleteAnalysisItem(analysisId) {
      this.analysisHistory = this.analysisHistory.filter(item => item.analysisId !== analysisId)
      this.saveAnalysisHistory()
    }
  }
}
</script>

<style scoped>
.image-analysis-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.page-header h2 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.subtitle {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.page-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Upload Section */
.upload-section {
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #e9ecef;
}

.upload-area {
  border: 3px dashed #ddd;
  border-radius: 12px;
  padding: 60px 20px;
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: #667eea;
  background-color: #f8f9ff;
}

.upload-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 auto 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.upload-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.upload-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.upload-icon {
  font-size: 1.5rem;
}

.upload-hint {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

/* Image Section */
.image-container {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.preview-img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image-info {
  flex: 1;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-item {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.label {
  font-weight: 600;
  color: #495057;
}

.value {
  color: #6c757d;
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.6);
}

.btn-secondary {
  background: #6c757d;
  color: white;
  box-shadow: 0 4px 15px rgba(108, 117, 125, 0.4);
}

.btn-secondary:hover {
  background: #5a6268;
  transform: translateY(-2px);
}

.btn-delete {
  background: #dc3545;
  color: white;
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.4);
  font-size: 0.9rem;
  padding: 8px 16px;
}

.btn-delete:hover {
  background: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 53, 69, 0.6);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Analysis Result */
.analysis-result {
  margin-top: 40px;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
}

.analysis-result h3 {
  margin: 0 0 30px 0;
  color: #495057;
  text-align: center;
  font-size: 1.8rem;
}

.result-summary {
  margin-bottom: 30px;
}

.summary-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.summary-item {
  text-align: center;
}

.summary-label {
  display: block;
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 8px;
}

.summary-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #495057;
}

/* Detected Objects */
.detected-objects h4 {
  margin: 30px 0 20px 0;
  color: #495057;
}

.object-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.object-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.object-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.object-label {
  font-weight: 600;
  font-size: 1.1rem;
  color: #495057;
}

.confidence-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.confidence-badge.high {
  background: #d4edda;
  color: #155724;
}

.confidence-badge.medium {
  background: #fff3cd;
  color: #856404;
}

.confidence-badge.low {
  background: #f8d7da;
  color: #721c24;
}

.object-details {
  border-top: 1px solid #e9ecef;
  padding-top: 15px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.detail-row span:first-child {
  color: #6c757d;
  font-weight: 500;
}

/* Result Image */
.result-image {
  margin-top: 30px;
  text-align: center;
}

.result-image h4 {
  margin-bottom: 20px;
  color: #495057;
}

.result-img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* No Objects */
.no-objects {
  text-align: center;
  padding: 40px;
  color: #6c757d;
}

.no-objects p {
  margin: 10px 0;
  font-size: 1.1rem;
}

/* History Section */
.history-section {
  margin-top: 40px;
}

.history-section h3 {
  margin: 0 0 30px 0;
  color: #495057;
  font-size: 1.5rem;
  padding-bottom: 15px;
  border-bottom: 2px solid #e9ecef;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.history-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.history-image {
  position: relative;
  width: 100px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.history-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.history-info {
  flex: 1;
}

.history-info h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #495057;
}

.analysis-time {
  margin: 0 0 10px 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.analysis-summary {
  margin: 0;
}

.summary-text {
  font-size: 0.9rem;
  padding: 4px 8px;
  border-radius: 12px;
  background: #e9ecef;
  color: #495057;
}

.analyzing-text {
  background: #fff3cd;
  color: #856404;
}

.error-text {
  background: #f8d7da;
  color: #721c24;
}

.history-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .image-analysis-page {
    padding: 10px;
  }
  
  .page-content {
    padding: 20px;
  }
  

  
  .image-container {
    flex-direction: column;
  }
  
  .preview-img {
    width: 100%;
    height: 250px;
  }
  
  .summary-card {
    flex-direction: column;
    gap: 20px;
  }
  
  .object-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .history-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .history-image {
    width: 100%;
    height: 150px;
  }
  
  .history-actions {
    align-self: flex-end;
  }
}
</style>