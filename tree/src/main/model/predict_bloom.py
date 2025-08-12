import torch
import os
import sys
import numpy as np

import config
from process_temperature_data import get_hourly_temperature_data
from datasets.dataset import Dataset 
from models.nn_chill_operator import NNChillModel

def predict_bloom_date(model: NNChillModel,
                       location_data: dict,
                       temperature_data: list | np.ndarray,
                       ) -> int:
    """
    특정 위치와 온도 데이터를 기반으로 개화일(DOY, 연중 일수)을 예측하는 함수.

    매개변수:
        model: 불러온 NNChillModel 인스턴스
        location_data: 위치 정보를 담은 딕셔너리
                       {'lat': 위도(float), 'lon': 경도(float), 'alt': 고도(float),
                        'location': 위치명(str), 'year': 예측년도(int)}
        temperature_data: 274일치 시간당 온도 데이터 (274일 * 24시간 = 6576개 값)
                          예측년도 전년도 10월 1일부터 시작
        

    반환값:
        예측된 개화일(DOY, 1~365 범위). 개화가 없다고 판단될 경우 -1 반환.
    """
    # 모델 입력으로 사용할 딕셔너리 생성
    # 예측 시에는 'bloom_doy', 'bloom_ix', 'bloom_date'는 포함하지 않음
    input_x = {
        'lat': location_data['lat'],
        'lon': location_data['lon'],
        'alt': location_data['alt'],
        'location': location_data['location'],
        'year': location_data['year'],
                'temperature': np.array(temperature_data, dtype=np.float32).reshape(config.SEASON_LENGTH, 24), # Reshape to (season_length, 24)
        'original': {}, # 비워둬도 무방
    }

    

    # 모델을 평가 모드로 전환
    model.eval()

    # 예측 수행
    # model.predict(x) → (예측된_doy, 개화발생여부, 부가정보딕셔너리)
    predicted_doy, bloom_occurred, _ = model.predict(input_x)

    if bloom_occurred:
        return predicted_doy
    else:
        # print(f"경고: {location_data['year']}년 {location_data['location']}에 대해 개화 없음으로 예측됨.")
        return -1 # 개화 없음 표시

if __name__ == "__main__":
    # print("NNChillModel 불러오는 중...")
    try:
        # 사전 학습된 모델 불러오기. 잘 되면 추후에 인자로 받던가 해서 자동화 라인 만들기 
        model = torch.load(os.path.join(config.PATH_PARAMS_DIR, 'NNChillModel', 'MyCherryModel42.pth'), weights_only=False)
        # print("모델 불러오기 성공.")
    except Exception as e:
        # print(f"모델 불러오기 오류: {e}")
        # print("'model_parameters/NNChillModel/' 경로에 'NNCillModel'이 존재하는지 확인하세요.")
        sys.exit(1)

    # --- 사용 예시 ---

    # 1. 위치 정보 설정
    my_location_data = {
        'lat': 120, 
        'lon': 120,
        'alt': 120,    
        'location': 'South Korea/부산',
        'year': 2025,
    }

    # 2. 온도 데이터 준비
    # process_temperature_data.py 스크립트를 사용하여 일별 데이터를 시간별로 보간합니다.
    temperature_data = get_hourly_temperature_data(my_location_data['year'])

    

    # print(f"\n{my_location_data['year']}년 {my_location_data['location']}의 개화일 예측 중...")
    predicted_doy = predict_bloom_date(model, my_location_data, temperature_data)

    if predicted_doy != -1:
        # print(f"예측된 개화일 (DOY): {predicted_doy}")
        from datetime import datetime, timedelta

        start_of_year = datetime(my_location_data['year'], 1, 1)
        bloom_date_obj = start_of_year + timedelta(days=int(predicted_doy) - 1)
        print(f"예측된 개화일: {bloom_date_obj.strftime('%Y-%m-%d')}")
    else:
        print("예측 불가 또는 개화 없음으로 판단됨.")
