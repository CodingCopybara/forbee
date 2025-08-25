import argparse
import torch
import os
import sys
import numpy as np

import config
from process_temperature_data import get_hourly_temperature_data
from datasets.dataset import Dataset 
from models.nn_chill_operator import NNChillModel

SPECIES_MODEL_MAP = {
    "개나리": "MyForsythiaModel18.pth",
    "벚꽃": "MyCherryModel88.pth",
    "아카시아": "MyAcaciaModel88.pth",
    "매화": "MyPlumModel88.pth",
}

# 기본값 서울, 예측에 영향 안줌
FIXED_LAT = 37.5665
FIXED_LON = 126.9780
FIXED_ALT = 20.0

def predict_bloom_date(model: NNChillModel,
                       location_data: dict,
                       temperature_data: list | np.ndarray,
                       ) -> int:
    input_x = {
        'lat': location_data['lat'],
        'lon': location_data['lon'],
        'alt': location_data['alt'],
        'location': location_data['location'],
        'year': location_data['year'],
        'temperature': np.array(temperature_data, dtype=np.float32).reshape(config.SEASON_LENGTH, 24),
        'original': {},
    }

    model.eval()
    predicted_doy, bloom_occurred, _ = model.predict(input_x)

    if bloom_occurred:
        return predicted_doy
    else:
        return -1

def main():
    parser = argparse.ArgumentParser(description="NNChillModel 기반 개화일 예측")
    parser.add_argument("--year", type=int, required=True, help="예측할 연도 (예: 2025)")
    parser.add_argument("--location", type=str, required=True, help="위치명 (예: South Korea/부산)")
    parser.add_argument("--species", type=str, required=True, help="종 이름 (예: 벚꽃)")

    args = parser.parse_args()

    if args.species not in SPECIES_MODEL_MAP:
        print(f"Error: 종 '{args.species}'에 해당하는 모델이 없습니다.", file=sys.stderr)
        sys.exit(1)

    model_file = SPECIES_MODEL_MAP[args.species]
    model_path = os.path.join(config.PATH_PARAMS_DIR, 'NNChillModel', model_file)
    if not os.path.exists(model_path):
        print(f"Error: 모델 파일이 존재하지 않습니다: {model_path}", file=sys.stderr)
        sys.exit(1)

    try:
        model = torch.load(model_path, weights_only=False)
    except Exception as e:
        print(f"모델 불러오기 오류: {e}", file=sys.stderr)
        sys.exit(1)

    location_full = "South Korea/" + args.location

    location_data = {
        'lat': FIXED_LAT,
        'lon': FIXED_LON,
        'alt': FIXED_ALT,
        'location': location_full,
        'year': args.year,
    }

    try:
        temperature_data = get_hourly_temperature_data(args.year)
    except Exception as e:
        print(f"온도 데이터 처리 오류: {e}", file=sys.stderr)
        sys.exit(1)

    predicted_doy = predict_bloom_date(model, location_data, temperature_data)

    if predicted_doy != -1:
        from datetime import datetime, timedelta
        start_of_year = datetime(args.year, 1, 1)
        bloom_date_obj = start_of_year + timedelta(days=int(predicted_doy) - 1)
        print(bloom_date_obj.strftime('%Y-%m-%d'))
    else:
        print("예측 불가 또는 개화 없음으로 판단됨.")

if __name__ == "__main__":
    main()
