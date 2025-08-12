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
          <v-card class="square-card">
            <v-card-title>개화 시기 예측 서비스</v-card-title>
            <v-card-text>
              <p>관측소를 선택하여 예상 개화 시기를 확인해 보세요.</p>
              <p>개나리, 매화, 벚꽃, 아카시아</p>
              <!-- <p class="font-weight-bold mt-4">현재 중심 좌표: (<span>{{ coordinates }}</span>)</p> -->
            </v-card-text>
            <v-divider></v-divider>
          <v-card-text class="overflow-y-auto" style="max-height: 400px;">
              <v-list dense>
                <v-list-item
                  v-for="(location, index) in locations"
                  :key="index"
                  @click="focusOnMarker(location)"
                >
                  <v-list-item-title>{{ location.name }}</v-list-item-title>
                  <v-list-item-subtitle>위도: {{ location.lat }}, 경도: {{ location.lng }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

  <v-dialog v-model="dialog" max-width="500">
    <v-card v-if="selectedLocation">
      <v-card-title class="headline">{{ selectedLocation.name }} 상세 정보</v-card-title>
      <v-card-text>
        <p><strong>위도:</strong> {{ selectedLocation.lat }} <strong>경도:</strong> {{ selectedLocation.lng }}</p>
        
        <v-card-title class="pa-0 pt-6">개화 시기 선택</v-card-title>
        <v-btn-toggle v-model="selectedFlower" class="mt-2" mandatory>
          <v-btn :color="selectedFlower === '개나리' ? 'primary' : ''" value="개나리" @click="selectFlower('개나리')">개나리</v-btn>
          <v-btn :color="selectedFlower === '매화' ? 'primary' : ''" value="매화" @click="selectFlower('매화')">매화</v-btn>
          <v-btn :color="selectedFlower === '벚꽃' ? 'primary' : ''" value="벚꽃" @click="selectFlower('벚꽃')">벚꽃</v-btn>
          <v-btn :color="selectedFlower === '아카시아' ? 'primary' : ''" value="아카시아" @click="selectFlower('아카시아')">아카시아</v-btn>
        </v-btn-toggle>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block size="large" @click="predictFlowering">예측</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import proj4 from 'proj4';
import axios from 'axios';

// Vue 반응형 상태 변수들
const mapDiv = ref(null);
const map = ref(null);
const coordinates = ref('위치 정보를 로드 중...');
const resizeObserver = ref(null);

// 팝업 변수
const dialog = ref(false);
const selectedLocation = ref(null);
const selectedFlower = ref(null);

// 관측소 위치
const locations = [
  { name: "강릉", lat: 37.7515, lng: 128.891, alt: 27.12 },
  { name: "강화", lat: 37.7074, lng: 126.4463, alt: 47.84 },
  { name: "강진군", lat: 34.6446, lng: 126.7841, alt: 16.0 },
  { name: "거제", lat: 34.8882, lng: 128.6046, alt: 44.83 },
  { name: "거창", lat: 35.6674, lng: 127.9099, alt: 228.45 },
  { name: "고산", lat: 33.2938, lng: 126.1628, alt: 71.39 },
  { name: "고창", lat: 35.3482, lng: 126.599, alt: 52.42 },
  { name: "고창군", lat: 35.4266, lng: 126.697, alt: 58.84 },
  { name: "고흥", lat: 34.6183, lng: 127.2757, alt: 51.91 },
  { name: "광양시", lat: 34.9434, lng: 127.6914, alt: 88.21 },
  { name: "광주", lat: 35.1729, lng: 126.8916, alt: 70.28 },
  { name: "구미", lat: 36.1306, lng: 128.3206, alt: 49.17 },
  { name: "군산", lat: 36.0053, lng: 126.7614, alt: 27.85 },
  { name: "금산", lat: 36.1056, lng: 127.4818, alt: 172.69 },
  { name: "김해시", lat: 35.2298, lng: 128.8908, alt: 54.59 },
  { name: "남원", lat: 35.4213, lng: 127.3965, alt: 133.49 },
  { name: "남해", lat: 34.8166, lng: 127.9264, alt: 45.71 },
  { name: "대관령", lat: 37.6771, lng: 128.7183, alt: 772.43 },
  { name: "대구", lat: 35.878, lng: 128.653, alt: 54.27 },
  { name: "대전", lat: 36.372, lng: 127.3721, alt: 67.79 },
  { name: "동두천", lat: 37.9019, lng: 127.0607, alt: 115.62 },
  { name: "동해", lat: 37.5071, lng: 129.1243, alt: 40.46 },
  { name: "목포", lat: 34.8173, lng: 126.3815, alt: 44.7 },
  { name: "문경", lat: 36.6273, lng: 128.1488, alt: 173.01 },
  { name: "밀양", lat: 35.4915, lng: 128.7441, alt: 8.31 },
  { name: "북강릉", lat: 37.8046, lng: 128.8554, alt: 75.24 },
  { name: "북부산", lat: 35.2178, lng: 128.9602, alt: 3.0 },
  { name: "북창원", lat: 35.2266, lng: 128.6726, alt: 50.95 },
  { name: "북춘천", lat: 37.9474, lng: 127.7544, alt: 95.78 },
  { name: "부산", lat: 35.1047, lng: 129.032, alt: 69.56 },
  { name: "부여", lat: 36.2724, lng: 126.9208, alt: 13.42 },
  { name: "부안", lat: 35.7296, lng: 126.7166, alt: 12.2 },
  { name: "봉화", lat: 36.9436, lng: 128.9145, alt: 324.67 },
  { name: "보령", lat: 36.3272, lng: 126.5574, alt: 9.98 },
  { name: "보성군", lat: 34.7634, lng: 127.2123, alt: 1.41 },
  { name: "보은", lat: 36.4876, lng: 127.7342, alt: 171.31 },
  { name: "서귀포", lat: 33.2462, lng: 126.5653, alt: 51.86 },
  { name: "서산", lat: 36.7766, lng: 126.4939, alt: 25.25 },
  { name: "서울", lat: 37.5714, lng: 126.9658, alt: 85.67 },
  { name: "서청주", lat: 36.6399, lng: 127.3846, alt: 33.55 },
  { name: "성산", lat: 33.3868, lng: 126.8802, alt: 20.34 },
  { name: "세종", lat: 36.4852, lng: 127.2444, alt: 89.5 },
  { name: "속초", lat: 38.2509, lng: 128.5647, alt: 17.53 },
  { name: "순창군", lat: 35.3713, lng: 127.1286, alt: 129.38 },
  { name: "순천", lat: 35.0204, lng: 127.3694, alt: 165.0 },
  { name: "수원", lat: 37.2575, lng: 126.983, alt: 39.81 },
  { name: "순천", lat: 35.0204, lng: 127.3694, alt: 165.0 },
  { name: "영광군", lat: 35.2837, lng: 126.4778, alt: 37.2 },
  { name: "영덕", lat: 36.5334, lng: 129.4093, alt: 40.71 },
  { name: "영월", lat: 37.1813, lng: 128.4574, alt: 240.54 },
  { name: "영주", lat: 36.8718, lng: 128.5169, alt: 211.32 },
  { name: "영천", lat: 35.9774, lng: 128.9514, alt: 96.12 },
  { name: "완도", lat: 34.3959, lng: 126.7018, alt: 35.37 },
  { name: "울릉도", lat: 37.4813, lng: 130.8986, alt: 221.14 },
  { name: "울산", lat: 35.5824, lng: 129.3347, alt: 81.14 },
  { name: "울진", lat: 36.9918, lng: 129.4128, alt: 48.98 },
  { name: "원주", lat: 37.3375, lng: 127.9466, alt: 150.11 },
  { name: "의령군", lat: 35.3226, lng: 128.2881, alt: 14.1 },
  { name: "의성", lat: 36.3561, lng: 128.6886, alt: 81.44 },
  { name: "이천", lat: 37.264, lng: 127.4842, alt: 80.09 },
  { name: "인제", lat: 38.0599, lng: 128.1681, alt: 202.0 },
  { name: "인천", lat: 37.4777, lng: 126.6249, alt: 68.99 },
  { name: "임실", lat: 35.612, lng: 127.2856, alt: 247.04 },
  { name: "장수", lat: 35.657, lng: 127.5203, alt: 406.87 },
  { name: "장흥", lat: 34.6889, lng: 126.9195, alt: 43.99 },
  { name: "전주", lat: 35.8409, lng: 127.1172, alt: 60.44 },
  { name: "제천", lat: 37.1593, lng: 128.1943, alt: 264.62 },
  { name: "제주", lat: 33.5141, lng: 126.5297, alt: 20.79 },
  { name: "정선군", lat: 37.3773, lng: 128.6735, alt: 312.0 },
  { name: "정읍", lat: 35.5634, lng: 126.839, alt: 68.7 },
  { name: "진도군", lat: 34.473, lng: 126.2585, alt: 9.82 },
  { name: "진주", lat: 35.1638, lng: 128.04, alt: 29.35 },
  { name: "천안", lat: 36.7622, lng: 127.2928, alt: 84.78 },
  { name: "청송군", lat: 36.4351, lng: 129.0401, alt: 208.65 },
  { name: "청주", lat: 36.6392, lng: 127.4407, alt: 58.7 },
  { name: "춘천", lat: 37.9026, lng: 127.7357, alt: 75.82 },
  { name: "추풍령", lat: 36.2203, lng: 127.9946, alt: 244.98 },
  { name: "충주", lat: 36.9705, lng: 127.9525, alt: 114.85 },
  { name: "통영", lat: 34.8454, lng: 128.4356, alt: 31.24 },
  { name: "파주", lat: 37.8859, lng: 126.7665, alt: 30.59 },
  { name: "포항", lat: 36.032, lng: 129.38, alt: 3.94 },
  { name: "함양군", lat: 35.5114, lng: 127.7454, alt: 152.07 },
  { name: "합천", lat: 35.5651, lng: 128.1699, alt: 26.72 },
  { name: "해남", lat: 34.5538, lng: 126.5691, alt: 16.36 },
  { name: "홍성", lat: 36.6576, lng: 126.6877, alt: 27.74 },
  { name: "홍천", lat: 37.6836, lng: 127.8804, alt: 140.2 },
  { name: "흑산도", lat: 34.6872, lng: 125.4511, alt: 75.12 },
];

// 마커로 이동
const focusOnMarker = (location) => {
  if (map.value) {
    const utmkCoords = proj4('EPSG:4326', 'EPSG:5179', [location.lng, location.lat]);
    const utmkPoint = sop.utmk(utmkCoords[0], utmkCoords[1]);
    
    // 지도의 중심을 해당 위치로 이동
    map.value.setView(utmkPoint, 9);

    // 예측 조회 팝업
    selectedLocation.value = location;
    dialog.value = true;
  }
};

// 예측 식물 선택
const selectFlower = (flowerName) => {
  if (selectedLocation.value) {
    console.log(`${selectedLocation.value.name}에서 ${flowerName}을(를) 선택했습니다.`); 
  }
};

// 위치 변경
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

const predictFlowering = () => {
  if (selectedLocation.value && selectedFlower.value) {
    const apiUrl = 'https://8087-dlafhr789-forbee-cholfcdvkfe.ws-us121.gitpod.io/plants/predict-Bloom';
    // const apiUrl = import.meta.env.VITE_GW_URL + '/predict-bloom';

    const params = {
      year: 2025,
      species: selectedFlower.value,
      location: selectedLocation.value.name,
    };

    axios.post(apiUrl, null, { params: params })
      .then(response => {
        alert('예측 결과: ' + response.data);
        dialog.value = false; 
      })
      .catch(error => {
        console.error('데이터 전송 실패:', error);
        alert('예측 요청에 실패했습니다. 네트워크 상태를 확인해주세요.');
      });
  } else {
    alert('위치와 꽃 종류를 모두 선택해주세요.');
  }
};

onMounted(() => {
  const checkSopReady = () => {
    // sop 객체와 sop.map이 모두 사용 가능한지 확인
    if (typeof sop !== 'undefined' && sop.map) {
      clearInterval(interval);
      initializeMap();
      nextTick(() => {
        const parentCol = mapDiv.value?.closest('.v-col');
        if (parentCol) {
          resizeObserver.value = new ResizeObserver(() => {
            if (map.value) map.value.invalidateSize();
          });
          resizeObserver.value.observe(parentCol);
        }
      });
    }
  };

  // sop 객체가 로드될 때까지 기다림 (0.5초마다 확인)
  const interval = setInterval(checkSopReady, 500);

  // 최대 대기 시간 설정 (예: 10초)
  setTimeout(() => {
    if (typeof sop === 'undefined' || !sop.map) {
      clearInterval(interval);
      console.error("SOP 객체 또는 sop.map을 로드하는 데 실패했습니다. SGIS API 스크립트 로드 상태를 확인해주세요.");
    }
  }, 10000); // 10초 후 타임아웃
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
    var url = "https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png"; // 기본 지도로 변경
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
    layers: [satelliteTileLayer],
    minZoom: 8,
    maxZoom: 10
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
      map.value.setView(utmkPoint, 10);
      console.log("GPS 위치로 지도 이동 완료.");
      updateCoordinates();
    }, function(error) {
      console.error("GPS 위치를 가져올 수 없습니다. 기본 위치로 이동합니다.", error);
      var defaultPoint = sop.utmk(953820, 1953437);
      map.value.setView(defaultPoint, 10);
      updateCoordinates();
    });
  } else {
    alert("이 브라우저는 GPS 위치를 지원하지 않습니다. 기본 위치로 이동합니다.");
    var defaultPoint = sop.utmk(953820, 1953437);
    map.value.setView(defaultPoint, 10);
    updateCoordinates();
  }

  // 관측소 마커 찍기 
  locations.forEach(location => {
      const utmkCoords = proj4('EPSG:4326', 'EPSG:5179', [location.lng, location.lat]);
      
      // UTMK 좌표를 사용하여 SOP 마커 객체 생성
      const marker = sop.marker([utmkCoords[0], utmkCoords[1]]);
      marker.addTo(map.value);

      // 마커 클릭 시 예측 조회를 위한 팝업
      marker.on('click', () => {
        selectedLocation.value = location;
        dialog.value = true;
      });
  });
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