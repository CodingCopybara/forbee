
import pandas as pd
import numpy as np
import os
from config import PATH_DATA_DIR, MIN_YEAR, MAX_YEAR, SEASON_START_DATE, SEASON_LENGTH, end_date_in_year, start_date_in_year, YEAR_RANGE

def get_user_temperature_data(temperature_csv_path, unit='C'):
    """
    사용자의 일일 최저/최고/평균 온도 CSV를 읽어,
    시간별 온도 데이터를 생성하고 MERRA-2와 동일한 형식의 DataFrame으로 반환합니다.

    가정:
    - CSV 파일은 'date', 'location', 'min_temp', 'max_temp' 컬럼을 포함해야 합니다.
    - 'date' 컬럼은 'YYYY-MM-DD' 형식입니다.
    - 온도는 섭씨(Celsius) 단위라고 가정합니다.
    """
    # 사용자 온도 데이터 읽기
    try:
        df_temp = pd.read_csv(temperature_csv_path)
    except FileNotFoundError:
        raise FileNotFoundError(f"온도 데이터 파일을 찾을 수 없습니다: {temperature_csv_path}")

    df_temp['date'] = pd.to_datetime(df_temp['date'])
    df_temp['location'] = df_temp['location'].apply(lambda x: f"South Korea/{x.replace(' ', '')}")

    # 중복된 날짜-위치 조합에 대해 평균값을 취하여 중복 제거
    df_temp = df_temp.groupby(['date', 'location']).mean().reset_index()

    # location을 컬럼으로, date를 인덱스로 하는 피벗 테이블 생성
    df_pivot = df_temp.pivot(index='date', columns='location')

    # 시간별 온도 데이터를 저장할 새로운 DataFrame 생성
    all_locations = df_temp['location'].unique()
    
    # Generate all_dates based on Dataset's full year range and season length
    all_dates = pd.DatetimeIndex([])
    for year in YEAR_RANGE:
        start_date = start_date_in_year(year)
        end_date = end_date_in_year(year)
        all_dates = all_dates.append(pd.date_range(start=start_date, end=end_date))
    all_dates = all_dates.unique().sort_values() # Ensure unique and sorted dates

    hourly_temp_data = {loc: [] for loc in all_locations}

    # Create DataFrames for min_temp and max_temp with all expected dates and locations
    min_temp_df = pd.DataFrame(index=all_dates, columns=all_locations, dtype=float)
    max_temp_df = pd.DataFrame(index=all_dates, columns=all_locations, dtype=float)

    # Populate min_temp_df and max_temp_df from df_pivot
    for loc in all_locations:
        if ('min_temp', loc) in df_pivot.columns:
            min_temp_df[loc] = df_pivot[('min_temp', loc)]
        if ('max_temp', loc) in df_pivot.columns:
            max_temp_df[loc] = df_pivot[('max_temp', loc)]

    # Impute missing values using linear interpolation
    for loc in all_locations:
        min_temp_df[loc] = min_temp_df[loc].interpolate(method='linear', limit_direction='both', limit_area=None)
        max_temp_df[loc] = max_temp_df[loc].interpolate(method='linear', limit_direction='both', limit_area=None)

        # Fill any remaining NaNs (e.g., if entire series was NaN or leading/trailing NaNs couldn't be interpolated)
        min_temp_df[loc] = min_temp_df[loc].fillna(0)
        max_temp_df[loc] = max_temp_df[loc].fillna(0)

    for date in all_dates:
        for loc in all_locations:
            min_t = min_temp_df.loc[date, loc]
            max_t = max_temp_df.loc[date, loc]

            # 사인 함수를 이용한 시간별 온도 추정
            # 최고 온도는 오후 2시(14시), 최저 온도는 오전 5시(5시)로 가정
            t_avg = (min_t + max_t) / 2
            t_amp = (max_t - min_t) / 2
            
            # 24시간 생성
            hours = np.arange(24)
            # 14시(최고)에 sin이 1, 5시(최저)에 -1이 되도록 조정
            hourly_temps = t_avg + t_amp * np.sin((hours - 14 + 6.75) / 12 * np.pi)

            if unit == 'K':
                hourly_temps += 273.15

            hourly_temp_data[loc].append(hourly_temps)

    # 최종 DataFrame 생성
    df_final = pd.DataFrame(index=all_dates)
    for loc in all_locations:
        # 각 리스트의 배열들을 올바른 형태로 변환
        df_final[loc] = hourly_temp_data[loc]

    return df_final

if __name__ == '__main__':
    # 테스트용 코드
    # 실제 사용 시에는 이 부분을 주석 처리하거나 삭제하세요.
    # 예시: 'my_temperature.csv' 파일이 data 폴더에 있다고 가정
    test_csv_path = os.path.join(PATH_DATA_DIR, 'my_temperature.csv')
    
    # 테스트용 CSV 파일 생성
    if not os.path.exists(test_csv_path):
        dummy_data = {
            'date': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02'],
            'location': ['MyPlant/SiteA', 'MyPlant/SiteB', 'MyPlant/SiteA', 'MyPlant/SiteB'],
            'min_temp': [0, 2, -1, 1],
            'max_temp': [10, 12, 9, 11],
            'avg_temp': [5, 7, 4, 6]
        }
        pd.DataFrame(dummy_data).to_csv(test_csv_path, index=False)

    df = get_user_temperature_data(test_csv_path)
    print(df.head())
    print(df.info())
    print(df.iloc[0, 0].shape)
    