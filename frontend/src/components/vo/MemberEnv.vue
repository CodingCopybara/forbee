<template>
  <!-- 메인 콘텐츠 -->
  <v-main class="pa-0 app-main">
    <v-container fluid class="pa-2 app-content">
      <v-row class="fill-height">
        <v-col cols="12" md="8" class="d-flex flex-column" style="min-height: 70vh;">
          <v-card class="square-card">
            <div class="square-inner" ref="mapDiv" id="map"></div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="d-flex flex-column">
          <v-card class="px-2 pt-6 pb-6">
            <v-card-title>환경 분석</v-card-title>
            <v-card-text>
              <p>지도에서 분석을 원하는 위치로 이동하세요.</p>
              <p>현재 중심 좌표를 기준으로 반경 600~800m의 범위를 탐색해 중심 좌표가 양봉에 적합한지 분석합니다.</p>
              <p class="font-weight-bold mt-4">현재 중심 좌표: (<span>{{ coordinates }}</span>)</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-6">
              <v-btn color="primary" @click="captureAndPredict" :loading="isLoading" block size="large">
                <v-icon left>mdi-magnify</v-icon>
                분석
              </v-btn>
            </v-card-actions>
            <v-card-actions class="pa-4 pt-0">
              <v-btn color="blue-grey" @click="showLastPrediction" :disabled="!lastPredictionImage" block size="large">
                <v-icon left>mdi-history</v-icon>
                이전 결과 보기
              </v-btn>
            </v-card-actions>
            <v-card-actions class="pa-4 pt-0">
              <v-btn color="green" @click="showMockPredictionResult" block size="large">
                <v-icon left>mdi-eye</v-icon>
                임시 결과 보기 (개발용)
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- 오버레이 (로딩) -->
      <v-overlay :model-value="isLoading" :z-index="1000" class="align-center justify-center" persistent scrim="black" contained>
        <div class="d-flex flex-column align-center">
          <v-progress-circular indeterminate size="64" color="white" class="mb-4" />
          <div class="text-h6 text-white">분석 중... 잠시만 기다려주세요.</div>
        </div>
      </v-overlay>

      <!-- 결과 다이얼로그 추가 -->
      <v-dialog v-model="showPopup" max-width="60vw" max-height="90vh">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span class="text-h5">분석 결과</span>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-close" variant="text" @click="closePopup"></v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="overflow-y: auto;">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <h3 class="text-h6">추천 지수</h3>
                  <div v-html="recommendationText" class="recommendation-box mt-2 pa-4 border rounded"></div>
                  <v-divider class="my-4"></v-divider>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="8">
                  <h3 class="text-h6">
                    분석 이미지
                    <span style="font-weight: normal; font-size: 0.9rem; color: #555;">
                      ({{ analysisResultCoordinates }})
                    </span>
                  </h3>
                  <v-img
                    :src="resultImageSrc"
                    aspect-ratio="1"
                    contain
                    class="mt-2 border rounded"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="4">
                  <h3 class="text-h6">구성 비율</h3>
                  <v-list dense>
                    <v-list-item v-for="(ratio, label) in pixelRatios" :key="label">
                      <template v-slot:prepend>
                        <v-avatar
                          :color="labelColorMapping[label] || 'grey'"
                          size="20"
                          class="mr-4"
                        ></v-avatar>
                      </template>
                      <v-list-item-title>{{ label }}: {{ (ratio * 100).toFixed(2) }}%</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>


<script setup>
import { ref, onMounted, onUnmounted, onUpdated, nextTick } from 'vue'; 
import proj4 from 'proj4';
import html2canvas from 'html2canvas';
import axios from 'axios';

// Vue 반응형 상태 변수들
const mapDiv = ref(null);
const map = ref(null);
const isLoading = ref(false);
const showPopup = ref(false);
const coordinates = ref('위치 정보를 로드 중...');
const resultImageSrc = ref('');
const pixelRatios = ref({});
const recommendationText = ref('');
const resizeObserver = ref(null);

// 마지막 예측 결과 저장을 위한 변수
const lastPredictionImage = ref(null);
const lastPredictionRatios = ref(null);
const analysisResultCoordinates = ref('');

// 라벨 색상 매핑
const labelColorMapping = {
  '무시': 'rgb(100, 100, 100)',
  '기타': 'rgb(160, 160, 160)',
  '건물': 'rgb(60, 60, 60)',
  '주차장': 'rgb(220, 220, 220)',
  '도로': 'rgb(128, 128, 128)',
  '가로수': 'rgb(173, 255, 47)',
  '논': 'rgb(139, 69, 19)',
  '비닐하우스': 'rgb(135, 206, 235)',
  '밭': 'rgb(144, 238, 144)',
  '활엽수림': 'rgb(50, 205, 50)',
  '침엽수림': 'rgb(165, 65, 65)',
  '나지': 'rgb(255, 140, 0)',
  '수역': 'rgb(0, 0, 255)'
};

// 메소드 정의
const mockPredictionData = {
  image_data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", // 1x1 투명 PNG 이미지 (실제 이미지 데이터로 대체 가능)
  pixel_ratios: {
    "기타": 0.1,
    "건물": 0.2,
    "주차장": 0.05,
    "도로": 0.15,
    "가로수": 0.08,
    "논": 0.02,
    "비닐하우스": 0.01,
    "밭": 0.03,
    "활엽수림": 0.25,
    "침엽수림": 0.05,
    "나지": 0.03,
    "수역": 0.03
  }
};

// 임시 예측 결과 표시 (개발용)
const showMockPredictionResult = () => {
  resultImageSrc.value = mockPredictionData.image_data;
  pixelRatios.value = mockPredictionData.pixel_ratios;
  recommendationText.value = calculateRecommendation(mockPredictionData.pixel_ratios);
  showPopup.value = true;
};
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const closePopup = () => {
  showPopup.value = false;
};

const updateCoordinates = () => {
  if (map.value) {
    const center = map.value.getCenter();
    let lat, lng;

    if (typeof center.getLat === 'function') {
      lat = center.getLat();
      lng = center.getLng();
    } else {
      const utmkX = center.x;
      const utmkY = center.y;
      const latlng = proj4('EPSG:5179', 'EPSG:4326', [utmkX, utmkY]);
      lat = latlng[1];
      lng = latlng[0];
    }
    coordinates.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  }
};

const captureAndPredict = async () => {
  if (!map.value) return;
  console.log("지도 캡처 시작...");
  isLoading.value = true;

  const widgetElements = document.querySelectorAll('.sop-control');
  widgetElements.forEach(el => {
    el.dataset.prevDisplay = el.style.display;
    el.style.display = 'none';
  });

  const originalCenter = map.value.getCenter();
  const originalZoom = map.value.getZoom();
  console.log("현재 위치/줌 저장:", originalCenter, originalZoom);

  const captureZoom = 18;
  map.value.setZoom(captureZoom);
  await wait(2000);

  const mapElement = mapDiv.value;
  const tileWidth = mapElement.offsetWidth;
  const tileHeight = mapElement.offsetHeight;
  const minTargetSize = 3000;
  const tilesPerSide = Math.ceil(minTargetSize / tileWidth);
  const finalWidth = tileWidth * tilesPerSide;
  const finalHeight = tileHeight * tilesPerSide;

  console.log(`최소 목표 크기 ${minTargetSize}px. ${tilesPerSide}x${tilesPerSide} 그리드 캡처 시작. 최종 크기: ${finalWidth}x${finalHeight}`);

  const capturedImages = [];
  const startOffset = -Math.floor(tilesPerSide / 2);
  for (let y = 0; y < tilesPerSide; y++) {
    for (let x = 0; x < tilesPerSide; x++) {
      const dx = (startOffset + x) * tileWidth;
      const dy = (startOffset + y) * tileHeight;

      map.value.setView(originalCenter, map.value.getZoom(), { animate: false });
      map.value.panBy([dx, dy], { animate: false });
      await wait(1000);

      const canvas = await html2canvas(mapElement, {
        logging: false,
        useCORS: true,
        allowTaint: true,
        width: tileWidth,
        height: tileHeight
      });
      capturedImages.push(canvas);
    }
  }

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = finalWidth;
  finalCanvas.height = finalHeight;
  const ctx = finalCanvas.getContext("2d");

  for (let i = 0; i < capturedImages.length; i++) {
    const x = (i % tilesPerSide) * tileWidth;
    const y = Math.floor(i / tilesPerSide) * tileHeight;
    ctx.drawImage(capturedImages[i], x, y, tileWidth, tileHeight);
  }

  const blob = await new Promise(resolve => finalCanvas.toBlob(resolve, "image/png"));
  console.log("PNG Blob 생성 완료. 서버로 전송...");

  try {
    const response = await axios.post(
      import.meta.env.VITE_GW_URL + '/predict-and-get-info',
      blob,
      {
        headers: {
          'Content-Type': 'image/png',
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        },
        responseType: 'json'
      }
    );

    const result = response.data;
    console.log('서버로부터 받은 예측 결과:', result);

    lastPredictionImage.value = result.image_data;
    lastPredictionRatios.value = result.pixel_ratios;

    resultImageSrc.value = result.image_data;
    pixelRatios.value = result.pixel_ratios;
    recommendationText.value = calculateRecommendation(result.pixel_ratios);
    showPopup.value = true;

  } catch (error) {
    console.error('예측 과정에서 오류 발생:', error);
    alert('예측에 실패했습니다. 콘솔을 확인해주세요.');
  } finally {
    map.value.setView(originalCenter, originalZoom);

    // 좌표 얻기
    let lat, lng;
    if (typeof originalCenter.getLat === 'function') {
      lat = originalCenter.getLat();
      lng = originalCenter.getLng();
    } else {
      const utmkX = originalCenter.x;
      const utmkY = originalCenter.y;
      const latlng = proj4('EPSG:5179', 'EPSG:4326', [utmkX, utmkY]);
      lat = latlng[1];
      lng = latlng[0];
    }

    // 문자열로 저장
    analysisResultCoordinates.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;

    widgetElements.forEach(el => {
      el.style.display = el.dataset.prevDisplay || 'block';
    });
    isLoading.value = false;
    console.log("지도 상태 복구 완료.");
  }
};

const showLastPrediction = () => {
  if (!lastPredictionImage.value || !lastPredictionRatios.value) {
    alert("이전 예측 결과가 없습니다.");
    return;
  }

  resultImageSrc.value = lastPredictionImage.value;
  pixelRatios.value = lastPredictionRatios.value;
  recommendationText.value = calculateRecommendation(lastPredictionRatios.value);
  showPopup.value = true;
};

const calculateRecommendation = (ratios) => {
  const weights = {
    '활엽수림': 2, '침엽수림': 0.5, '논': -3, '밭': -3,
    '비닐하우스': -1, '수역': 0.5
  };

  let score = 0;
  for (const [label, ratio] of Object.entries(ratios)) {
    if (weights[label] !== undefined) {
      score += ratio * weights[label];
    }
  }

  let grade;
  if (score >= 0.5) grade = 'A';
  else if (score >= 0.25) grade = 'B';
  else grade = 'C';

  const lines = [
      '예측 결과는 참고용입니다. 실제와 다를 수 있습니다.',
      '- A/B/C 3등급으로 분류되어 있으며, 알파벳 순서대로 등급입니다.',
      '- C 등급은 꿀벌에게 부정적인 환경으로 양봉지로 적합하지 않습니다.',
      '- 꿀벌의 주요 활동기는 3~8월으로, 5월이 가장 활발합니다.',
      '- 벌꿀 등급제는 농약 잔류 여부와 꿀벌이 꽃에서 채취한 자연 꿀인지, 설탕 등을 먹여 만든 꿀인지를 확인하여 등급을 매기는 제도입니다. 풍부한 밀원 주변이 좋고 논, 밭은 피하는게 좋습니다.',
      '- 논은 꿀벌 주요활동기와 겹치는 5월부터 8월까지 농약을 주로 사용하므로, 꿀벌이 이에 노출될 위험이 있습니다.',
      '- 비닐하우스는 꿀벌의 접근이 제한되며, 농약 사용 위험또한 존재합니다.',
      '- 밭은 경작 작물이 다양해 농약 살포 시기를 특정하기 어렵고, 시기와 무관하게 꿀벌이 농약에 노출될 수 있습니다.',
      '- 활엽수림은 꿀벌에게 다양한 먹이를 제공하며, 꿀 생산에 기여할 수 있는 지역입니다.',
      '- 침엽수림은 꿀벌에게 직접적인 도움은 제한적이지만, 일부 나무는 수분이 가능합니다.',
      '- 나지는 황무지로, 꿀벌의 먹이와 꿀이 없으며, 현재는 경작중 일 수 있어 주의가 필요합니다.',
      '- 수역은 물이 있는 지역으로, 바다가 아니라면, 꿀벌에게 수분 공급원이 될 수 있습니다.'
  ];

  let gradeBadgeColor = grade === 'A' ? '#28a745' : grade === 'B' ? '#ffc107' : '#dc3545';
  const badgeHtml = `<div style="background-color: ${gradeBadgeColor}; font-weight: bold; font-size: 18px; color: white; padding: 6px 12px; border-radius: 8px; display: inline-block; margin-bottom: 10px;">예측 등급: ${grade}</div>`;
  const lineHtml = lines.map(line => `<p class="mb-1">${line}</p>`).join('');

  return badgeHtml + lineHtml;
};

onMounted(() => {
  // SGIS API 로드 및 지도 초기화 로직
  if (typeof sop !== 'undefined') {
    initializeMap();
  } else {
    const interval = setInterval(() => {
      if (typeof sop !== 'undefined') {
        clearInterval(interval);
        initializeMap();
        setTimeout(() => {
        }, 200);
      }
    }, 100);
  }
  
  nextTick(() => {
    const parentCol = mapDiv.value?.closest('.v-col');
    if (parentCol) {
      resizeObserver.value = new ResizeObserver(() => {
        if (map.value) map.value.invalidateSize();
      });
      resizeObserver.observe(parentCol);
    }
  });
});

const initializeMap = () => {
  if (typeof sop === 'undefined') {
    console.error("SOP 객체를 찾을 수 없습니다. 지도를 초기화할 수 없습니다.");
    return;
  }

  proj4.defs("EPSG:5179", "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs");

  function createSatelliteCRS() {
    var code = "EPSG:900913";
    var def = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 " +
              "+x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
    var options = {
      resolutions: [
        156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875,
        4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875,
        305.7481130859375, 152.87405654296876, 76.43702827148438,
        38.21851413574219, 19.109257067871095, 9.554628533935547,
        4.777314266967774, 2.388657133483887, 1.1943285667419434,
        0.5971642833709717, 0.29858214168548586, 0.14929107084274293
      ],
      origin: [-20037508.34, 20037508.34]
    };
    var crs = new sop.CRS.Proj(code, def, options);
    crs.projection.bounds = sop.bounds(
      [13232210.28055642, 3584827.864295762],
      [15238748.249933105, 5575460.5658249445]
    );
    return crs;
  }

  function createSatelliteTileLayer() {
    var url = "https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg";
    var options = {
      maxZoom: 18,
      minZoom: 6,
      crossOrigin: 'anonymous'
    };
    return new sop.TileLayer(url, options);
  }

  var satelliteCRS = createSatelliteCRS();
  var satelliteTileLayer = createSatelliteTileLayer();
  
  map.value = sop.map(mapDiv.value, {
    crs: satelliteCRS,
    layers: [satelliteTileLayer]
  });

  map.value.on('moveend', updateCoordinates);
  map.value.on('zoomend', updateCoordinates);
  map.value.on('baselayerchange', updateCoordinates);

  map.value.invalidateSize();
  console.log("지도 크기 갱신 완료.");

  const latlngToUTMK = (lat, lng) => proj4('EPSG:4326', 'EPSG:5179', [lng, lat]);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var utmkCoords = latlngToUTMK(lat, lng);
      var utmkPoint = sop.utmk(utmkCoords[0], utmkCoords[1]);
      map.value.setView(utmkPoint, 15);
      console.log("GPS 위치로 지도 이동 완료.");
      updateCoordinates();
    }, function(error) {
      console.error("GPS 위치를 가져올 수 없습니다. 기본 위치로 이동합니다.", error);
      var defaultPoint = sop.utmk(953820, 1953437);
      map.value.setView(defaultPoint, 15);
      updateCoordinates();
    });
  } else {
    alert("이 브라우저는 GPS 위치를 지원하지 않습니다. 기본 위치로 이동합니다.");
    var defaultPoint = sop.utmk(953820, 1953437);
    map.value.setView(defaultPoint, 15);
    updateCoordinates();
  }
  
};

onUnmounted(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
  }

  if (map.value) {
    map.value.off('moveend', updateCoordinates);
    map.value.off('zoomend', updateCoordinates);
    map.value.off('baselayerchange', updateCoordinates);
    map.value.remove();
  }
});
</script>

<style scoped>
:deep(.v-overlay__scrim) {
  opacity: 1;
}

.recommendation-box {
  background: #fefefe;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 15px;
  line-height: 1.7;
  color: #333;
  max-height: 300px;
  overflow-y: auto;
}

.grade-badge {
  font-weight: bold;
  font-size: 18px;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  display: block; /* Changed from inline-block to block */
  margin-bottom: 10px;
}

.app-main {
  position: relative;
  height: 100%;
}

.square-card {
  position: relative;
  width: 100%;
}

.square-inner {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
}
</style>
