<template>
  <div class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <div class="popup-header">
        <h3>이미지 분석</h3>
        <button class="close-btn" @click="closePopup">&times;</button>
      </div>
      
      <div class="popup-body">
        <div v-if="!selectedImage" class="upload-section">
          <button 
            class="upload-btn" 
            @click="triggerFileInput"
            :disabled="isUploading"
          >
            {{ isUploading ? '업로드 중...' : '이미지 업로드' }}
          </button>
          <input 
            ref="fileInput" 
            type="file" 
            accept="image/*" 
            @change="onFileSelected" 
            style="display: none;"
          />
        </div>
        
        <div v-if="selectedImage" class="image-preview">
          <img :src="selectedImage" alt="선택된 이미지" class="preview-img" />
          <div class="image-info">
            <p>파일명: {{ fileName }}</p>
            <p>크기: {{ fileSize }}</p>
          </div>
        </div>
        
        <!-- 분석 결과 표시 -->
        <div v-if="analysisResult" class="analysis-result">
          <h4>🎯 분석 결과</h4>
          <div class="result-summary">
            <p><strong>감지된 객체:</strong> {{ analysisResult.detectedObjects?.length || 0 }}개</p>
            <p><strong>분석 시간:</strong> {{ analysisResult.timestamp }}</p>
          </div>
          
          <div v-if="analysisResult.detectedObjects && analysisResult.detectedObjects.length > 0" class="detected-objects">
            <h5>감지된 객체 목록:</h5>
            <div class="object-list">
              <div 
                v-for="(obj, index) in analysisResult.detectedObjects" 
                :key="index" 
                class="object-item"
              >
                <span class="object-label">{{ obj.label }}</span>
                <span class="object-confidence">{{ (obj.confidence * 100).toFixed(1) }}%</span>
                <span class="object-position">
                  위치: ({{ obj.boundingBox.x }}, {{ obj.boundingBox.y }})
                  크기: {{ obj.boundingBox.width }}×{{ obj.boundingBox.height }}
                </span>
              </div>
            </div>
          </div>
          
          <div v-if="analysisResult.resultImagePath" class="result-image">
            <h5>분석 결과 이미지:</h5>
            <img :src="analysisResult.resultImagePath" alt="분석 결과" class="result-img" />
          </div>
        </div>
      </div>
      
      <div class="popup-footer">
        <button 
          class="confirm-btn" 
          @click="confirmAnalysis"
          :disabled="!selectedImage || isAnalyzing"
        >
          {{ isAnalyzing ? '분석 중...' : '확인' }}
        </button>
        <button class="cancel-btn" @click="closePopup">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import webSocketService from '@/services/WebSocketService'

export default {
  name: 'ImageAnalysisPopup',
  data() {
    return {
      selectedImage: null,
      selectedFile: null,
      fileName: '',
      fileSize: '',
      isUploading: false,
      isAnalyzing: false,
      userId: 'user123', // TODO: 실제 로그인된 사용자 ID로 변경
      analysisResult: null,
      analysisId: null
    }
  },
  async mounted() {
    // 팝업이 열렸을 때 body 스크롤 방지
    document.body.style.overflow = 'hidden'
    
    // WebSocket 연결 및 구독
    try {
      await webSocketService.connect(this.userId)
      webSocketService.subscribeToAnalysisResults(this.userId, this.handleAnalysisResult)
      
      // 브라우저 알림 권한 요청
      if (Notification.permission === 'default') {
        await Notification.requestPermission()
      }
    } catch (error) {
      console.error('WebSocket connection failed:', error)
    }
  },
  beforeUnmount() {
    // 컴포넌트가 제거될 때 body 스크롤 복원
    document.body.style.overflow = 'auto'
    
    // WebSocket 구독 해제 (연결은 유지)
    webSocketService.unsubscribe(`/topic/analysis/${this.userId}`)
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    
    onFileSelected(event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.fileName = file.name
        this.fileSize = this.formatFileSize(file.size)
        
        // 이미지 미리보기 생성
        const reader = new FileReader()
        reader.onload = (e) => {
          this.selectedImage = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    
    async uploadToAzureBlob(file) {
      try {
        console.log('Requesting SAS token for file:', file.name)
        
        // 1. 백엔드에서 SAS 토큰 요청
        const sasResponse = await fetch(`/ai/blob-sas?fileName=${file.name}`)
        console.log('SAS response status:', sasResponse.status, sasResponse.statusText)
        
        if (!sasResponse.ok) {
          const errorText = await sasResponse.text()
          console.error('SAS 토큰 요청 실패 응답:', errorText)
          throw new Error(`SAS 토큰 요청 실패: ${sasResponse.status} ${sasResponse.statusText}\n응답: ${errorText}`)
        }
        
        const sasData = await sasResponse.json()
        console.log('SAS token received:', sasData)
        const { uploadUrl, blobUrl } = sasData
        
        // 2. SAS URL을 사용하여 직접 Azure Blob Storage에 업로드
        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'x-ms-blob-type': 'BlockBlob',
            'Content-Type': file.type
          }
        })
        
        if (!uploadResponse.ok) {
          throw new Error(`Azure 업로드 실패: ${uploadResponse.status} ${uploadResponse.statusText}`)
        }
        
        return blobUrl // 분석 API에 전달할 공개 URL 반환
        
      } catch (error) {
        console.error('Azure 업로드 오류:', error)
        throw error
      }
    },
    
    async confirmAnalysis() {
      if (!this.selectedFile) return
      
      this.isAnalyzing = true
      
      try {
        // 1. Azure Blob Storage에 이미지 업로드
        const imageUrl = await this.uploadToAzureBlob(this.selectedFile)
        
        // 2. 분석 ID 생성
        this.analysisId = `analysis_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        
        // 3. 분석 API 호출
        const response = await fetch('/ai/request-analysis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: this.userId,
            imageUrl: imageUrl,
            analysisId: this.analysisId
          })
        })
        
        if (response.ok) {
          alert('이미지 분석이 요청되었습니다. 결과는 실시간으로 전달됩니다.')
          // 팝업은 열어두고 결과를 기다림
        } else {
          throw new Error('분석 요청 실패')
        }
      } catch (error) {
        console.error('분석 오류:', error)
        alert('이미지 분석 중 오류가 발생했습니다: ' + error.message)
      } finally {
        this.isAnalyzing = false
      }
    },
    
    handleAnalysisResult(result) {
      console.log('Analysis result received:', result)
      
      // 해당 분석 ID의 결과인지 확인
      if (result.analysisId === this.analysisId || !this.analysisId) {
        this.analysisResult = result
        this.isAnalyzing = false
        
        // 성공 알림
        if (result.detectedObjects && result.detectedObjects.length > 0) {
          alert(`분석 완료! ${result.detectedObjects.length}개의 객체가 감지되었습니다.`)
        } else {
          alert('분석 완료! 감지된 객체가 없습니다.')
        }
      }
    },
    
    closePopup() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.popup-header h3 {
  margin: 0;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #333;
}

.popup-body {
  padding: 20px;
  min-height: 200px;
}

.upload-section {
  text-align: center;
  padding: 40px 20px;
}

.upload-btn {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.upload-btn:hover:not(:disabled) {
  background-color: #1565c0;
}

.upload-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.image-preview {
  text-align: center;
}

.preview-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-info {
  margin-top: 15px;
  text-align: left;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.image-info p {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

.popup-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;
}

.confirm-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.confirm-btn:hover:not(:disabled) {
  background-color: #45a049;
}

.confirm-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.cancel-btn:hover {
  background-color: #da190b;
}

/* 분석 결과 스타일 */
.analysis-result {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
}

.analysis-result h4 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
}

.analysis-result h5 {
  margin: 15px 0 10px 0;
  color: #555;
  font-size: 14px;
}

.result-summary {
  margin-bottom: 15px;
}

.result-summary p {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

.object-list {
  max-height: 200px;
  overflow-y: auto;
}

.object-item {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.object-label {
  font-weight: bold;
  color: #2196f3;
  font-size: 14px;
}

.object-confidence {
  color: #4caf50;
  font-weight: 500;
  font-size: 13px;
  margin-top: 2px;
}

.object-position {
  color: #666;
  font-size: 12px;
  margin-top: 2px;
}

.result-image {
  margin-top: 15px;
}

.result-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style> 