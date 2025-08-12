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
            <v-card-title>개화 시기 예측 서비스</v-card-title>
            <v-card-text>
              <p>이곳은 회원들의 개화 현황을 보여주는 지도 화면입니다.</p>
              <p>지도에서 특정 지역을 선택하여 상세 정보를 확인할 수 있습니다.</p>
              <p class="font-weight-bold mt-4">현재 중심 좌표: (<span>{{ coordinates }}</span>)</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-6">
              <v-btn color="primary" block size="large">
                <v-icon left>mdi-information</v-icon>
                상세 정보 보기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import proj4 from 'proj4';

// Vue 반응형 상태 변수들
const mapDiv = ref(null);
const map = ref(null);
const coordinates = ref('위치 정보를 로드 중...');
const resizeObserver = ref(null);

// 메소드 정의
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
    maxZoom: 9
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
      map.value.setView(utmkPoint, 8);
      console.log("GPS 위치로 지도 이동 완료.");
      updateCoordinates();
    }, function(error) {
      console.error("GPS 위치를 가져올 수 없습니다. 기본 위치로 이동합니다.", error);
      var defaultPoint = sop.utmk(953820, 1953437);
      map.value.setView(defaultPoint, 8);
      updateCoordinates();
    });
  } else {
    alert("이 브라우저는 GPS 위치를 지원하지 않습니다. 기본 위치로 이동합니다.");
    var defaultPoint = sop.utmk(953820, 1953437);
    map.value.setView(defaultPoint, 8);
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