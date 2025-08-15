
"use client"

import { useEffect, useRef, useState } from "react"
import proj4 from "proj4"

declare global {
  interface Window {
    sop: any
  }
}

interface Location {
  id: string
  name: string
  coordinates: [number, number]
  station: string
  
}

interface bloomMapProps {
  locations: Location[]
  onMarkerClick: (location: Location) => void
  selectedLocation: Location | null
}

export function BloomMap({ locations, onMarkerClick, selectedLocation }: bloomMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // 지도 초기화 (최초 1회만 실행)
  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || typeof window.sop === "undefined") return;

      try {
        proj4.defs(
          "EPSG:5179",
          "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs"
        );

        const map = new window.sop.map(mapRef.current, {
          scale: false,
          panControl: false,
          zoomSliderControl: true,
          minZoom: 2,
          maxZoom: 4,
          zoomSliderControlOptions: {
            position: "TOP_RIGHT",
            step: 1,
            range: [2, 4],
          },
        });
        mapInstance.current = map;

        // GPS 기반 위치 설정
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const utmkCoords = proj4("EPSG:4326", "EPSG:5179", [longitude, latitude]);
              const utmkPoint = window.sop.utmk(utmkCoords[0], utmkCoords[1]);
              map.setView(utmkPoint, 10);
            },
            (error) => {
              console.error("Geolocation error:", error);
              const defaultPoint = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5]);
              map.setView(window.sop.utmk(defaultPoint[0], defaultPoint[1]), 9);
            }
          );
        } else {
          console.log("Geolocation is not supported by this browser.");
          const defaultPoint = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5]);
          map.setView(window.sop.utmk(defaultPoint[0], defaultPoint[1]), 9);
        }

        map.invalidateSize();
        setIsMapInitialized(true); // 지도 초기화 완료 상태 업데이트
      } catch (error) {
        console.error("Error initializing SGIS map:", error);
      }
    };

    const interval = setInterval(() => {
      if (typeof window.sop !== "undefined") {
        clearInterval(interval);
        initializeMap();
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []); // 의존성 배열을 비워서 최초 1회만 실행

  // 마커 관리
  useEffect(() => {
    if (!isMapInitialized || !mapInstance.current) return; // 지도가 초기화되었을 때만 실행

    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // 새 마커 추가
    locations.forEach(location => {
      const [lat, lng] = location.coordinates;
      const utmkCoords = proj4("EPSG:4326", "EPSG:5179", [lng, lat]);

      const flowerMarker = new window.sop.icon({
        iconUrl: '/markers/flower2.png',
        iconSize: [48, 48],                
        iconAnchor: [16, 32],             
      })

      const marker = new window.sop.marker(utmkCoords, { icon: flowerMarker });
      marker.addTo(mapInstance.current);
      marker.on("click", () => onMarkerClick(location));
      markersRef.current.push(marker);
    });
  }, [isMapInitialized, locations, onMarkerClick]);

  // 선택된 위치로 중심 이동
  useEffect(() => {
    if (selectedLocation && mapInstance.current) {
      const [lat, lng] = selectedLocation.coordinates;
      const utmkCoords = proj4("EPSG:4326", "EPSG:5179", [lng, lat]);
      const utmkPoint = window.sop.utmk(utmkCoords[0], utmkCoords[1]);
      mapInstance.current.setView(utmkPoint, 10);
    }
  }, [selectedLocation]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%", zIndex: 0 }} />;
}
