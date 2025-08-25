import pandas as pd
import numpy as np
import os
import sys

project_root = os.path.abspath(os.path.join(__file__, os.pardir))
if project_root not in sys.path:
    sys.path.append(project_root)

import config
import logging

logging.basicConfig(level=logging.WARNING)

def interpolate_hourly_temperatures(min_temp: float, max_temp: float, avg_temp: float) -> list:
    """
    Interpolates 24 hourly temperatures using a sine function based on min/max/avg daily temperatures.
    The sum of the 24 hourly temperatures is adjusted to match avg_temp * 24.
    Assumes min_temp occurs around 4 AM and max_temp around 4 PM (16:00).
    """
    hourly_temps = []
    # Simple sine wave interpolation
    # Assuming min_temp at hour 4 and max_temp at hour 16
    # Period is 24 hours
    # Phase shift to align max_temp at hour 16 (cos(0) = 1)
    # cos((2 * pi / 24) * (h - 16))

    amplitude = (max_temp - min_temp) / 2
    midpoint = (max_temp + min_temp) / 2

    for h in range(24):
        # Angle for sine wave, adjusted for phase and period
        # Using cosine to have peak at 16 and trough at 4
        angle = (2 * np.pi / 24) * (h - 16)
        temp = midpoint + amplitude * np.cos(angle)
        hourly_temps.append(temp)

    # Adjust sum to match avg_temp * 24
    current_sum = sum(hourly_temps)
    target_sum = avg_temp * 24
    difference = target_sum - current_sum
    adjustment_per_hour = difference / 24

    adjusted_hourly_temps = [t + adjustment_per_hour for t in hourly_temps]

    return adjusted_hourly_temps

def get_hourly_temperature_data(prediction_year: int) -> list:
    """
    Reads daily temperature data, interpolates to hourly, and returns a flat list
    for the required season length.
    """
    daily_temp_path = os.path.join(config.PATH_DATA_DIR, 'temperature.csv')

    if not os.path.exists(daily_temp_path):
        raise FileNotFoundError(f"Daily temperature data not found at: {daily_temp_path}")

    # Read the daily temperature data
    # Use low_memory=False to avoid DtypeWarning for large files
    df = pd.read_csv(daily_temp_path, low_memory=False)

    # Convert 'date' column to datetime objects
    df['date'] = pd.to_datetime(df['date'])

    # Handle duplicate dates by grouping and taking the mean
    # This is crucial if the CSV contains multiple entries for the same date
    df = df.groupby('date')[['avg_temp', 'min_temp', 'max_temp']].mean().reset_index()

    # Define the required date range for the season
    start_date_season = config.start_date_in_year(prediction_year)
    end_date_season = config.end_date_in_year(prediction_year)

    # Create a complete date range for the season
    full_date_range = pd.date_range(start=start_date_season, end=end_date_season, freq='D')

    # Set 'date' as index and reindex to fill missing dates with NaN
    df = df.set_index('date')
    df_season = df.reindex(full_date_range)

    # Interpolate missing values (NaNs)
    # First, forward fill to handle NaNs at the beginning if possible
    df_season['avg_temp'] = df_season['avg_temp'].interpolate(method='linear', limit_direction='forward')
    df_season['min_temp'] = df_season['min_temp'].interpolate(method='linear', limit_direction='forward')
    df_season['max_temp'] = df_season['max_temp'].interpolate(method='linear', limit_direction='forward')

    # Then, backward fill to handle NaNs at the end or remaining NaNs
    df_season['avg_temp'] = df_season['avg_temp'].interpolate(method='linear', limit_direction='backward')
    df_season['min_temp'] = df_season['min_temp'].interpolate(method='linear', limit_direction='backward')
    df_season['max_temp'] = df_season['max_temp'].interpolate(method='linear', limit_direction='backward')

    # If there are still NaNs (e.g., all NaNs for a column), fill with a reasonable default or raise error
    # For now, we'll fill with the mean of the column, but a more robust solution might be needed
    df_season['avg_temp'] = df_season['avg_temp'].fillna(df_season['avg_temp'].mean())
    df_season['min_temp'] = df_season['min_temp'].fillna(df_season['min_temp'].mean())
    df_season['max_temp'] = df_season['max_temp'].fillna(df_season['max_temp'].mean())

    if len(df_season) != config.SEASON_LENGTH:
        print(f"Error: After interpolation, the season data still does not have {config.SEASON_LENGTH} days. Found {len(df_season)} days.")
        # This should ideally not happen if full_date_range is correct and interpolation handles all NaNs
        # But it's a safeguard.

    all_hourly_temps = []
    for index, row in df_season.iterrows():
        min_t = row['min_temp']
        max_t = row['max_temp']
        avg_t = row['avg_temp']

        hourly_data = interpolate_hourly_temperatures(min_t, max_t, avg_t)
        all_hourly_temps.extend(hourly_data)

    # Ensure the final list has the exact required length
    expected_length = config.SEASON_LENGTH * 24
    if len(all_hourly_temps) != expected_length:
        print(f"Error: Generated {len(all_hourly_temps)} hourly temperatures, but expected {expected_length}.")
        # This could happen if df_season didn't have exactly SEASON_LENGTH days
        # For now, we'll return what we have, but this needs careful handling in a real scenario.

    return all_hourly_temps

if __name__ == "__main__":
    # Example usage:
    # This will process the temperature data for the season relevant to prediction year 2024
    # (i.e., Oct 1, 2023 to June 30, 2024)
    try:
        hourly_data_for_prediction = get_hourly_temperature_data(2024)
        # print(f"Successfully generated {len(hourly_data_for_prediction)} hourly temperature values.")
        # print(hourly_data_for_prediction[:24]) # Print first 24 hours for inspection
    except FileNotFoundError as e:
        logging.error(e)
    except Exception as e:
        logging.error(e)
