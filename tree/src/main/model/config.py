
import os

import numpy as np
import torch

"""
    Some project structure configurations
"""


# Project root dir
CONFIG_DIR = os.path.abspath(os.path.join(__file__, os.pardir))

# Path to folder where data is stored
if 'PYTHON_DATA_DIR' in os.environ:
    PATH_DATA_DIR = os.environ['PYTHON_DATA_DIR']
else:
    # Original calculation for local environment
    PATH_DATA_DIR = os.path.abspath(os.path.join(CONFIG_DIR, '..', 'resources', 'model', 'data'))
os.makedirs(PATH_DATA_DIR, exist_ok=True)

# Path to folder where model parameters are stored
PATH_PARAMS_DIR = os.path.join(CONFIG_DIR, 'model_parameters')
os.makedirs(PATH_PARAMS_DIR, exist_ok=True)



"""
    Other
"""

# Random seed that is used if none is provided explicitly
SEED = np.random.randint(2147483647 + 1)  # Max allowed nr for int32

"""
    PyTorch
"""

# TORCH_DTYPE = torch.double
TORCH_DTYPE = torch.float32

"""
    Dataset related constants and utilities
"""

# Earliest year that will be encountered in the dataset
MIN_YEAR = 1973
# Latest year that will be encountered in the dataset
MAX_YEAR = 2024
YEAR_RANGE = list(range(MIN_YEAR, MAX_YEAR + 1))

# Start date (in the previous year) from which temperature data is included
SEASON_START_DATE = '10-01'
# Number of days of temperature data that will be included
SEASON_LENGTH = 274  # Season end is roughly at the start of July (includes 1st of July in leap years)

# Difference between 1st DOY and start of season
DOY_SHIFT = (np.datetime64(f'1980-12-31') - np.datetime64(f'1980-{SEASON_START_DATE}')) // np.timedelta64(1, 'D')
# All DOYS in the season (incl negatives)
DOYS = (np.arange(SEASON_LENGTH) - DOY_SHIFT).astype(int)
SEASON_END_DOY = DOYS[-1]

SOURCES_TEMPERATURE = ('merra_v2', 'user_data')

def start_date_in_year(year: int) -> np.datetime64:
    """
    Get the start date of the season for the specified year as a np.datetime64 object
    Note: The season starts in the year before
    """
    return np.datetime64(f'{year - 1}-{SEASON_START_DATE}')

def end_date_in_year(year: int) -> np.datetime64:
    """
    Get the end date of the season for the specified year as a np.datetime64 object

    This is the last date at which temperature data is included
    So this date in included in the dataset
    """
    start_date = start_date_in_year(year)
    return start_date + np.timedelta64(SEASON_LENGTH - 1, 'D')

def doy_to_date_in_year(year: int, doy: int) -> np.datetime64:
    assert 0 < doy <= 365
    return np.datetime64(f'{year}-01-01') + np.timedelta64(doy - 1, 'D')

def index_to_doy(index: int) -> int:
    assert 0 <= index < SEASON_LENGTH
    return DOYS[index]

def doy_to_index(doy: int, assert_positive: bool = True) -> int:
    if assert_positive:
        assert 0 < doy <= DOYS[-1], f'invalid DOY ({doy})'
    return doy + DOY_SHIFT

def index_to_date_in_year(year: int, index: int) -> np.datetime64:
    doy = index_to_doy(index)
    year_start = np.datetime64(f'{year}-01-01')
    return year_start + np.timedelta64(doy - 1, 'D')

def dates_in_year(year: int):
    assert year in YEAR_RANGE
    start_date = start_date_in_year(year)
    end_date = end_date_in_year(year)
    return pd.date_range(
        start=start_date,
        end=end_date,
    ).values

# TORCH_SEED = SEED
# torch.manual_seed(TORCH_SEED)
