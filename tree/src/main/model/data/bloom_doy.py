
import pandas as pd
import glob




"""

    Code for pre-processing the cherry blossom DOY data 

"""


def _sanitize_location_label(s: str) -> str:
    tokens = s.split('/')

    if len(tokens) < 2:
        raise Exception(f'Could not parse location entry "{s}"')
    country = tokens[0]
    location = ','.join(tokens[1:]).replace(' ', '')
    return f'{country}/{location}'

import os
import glob
from config import PATH_DATA_DIR 

def get_data_by_species(species_name: str) -> pd.DataFrame:
    DATA_PATH_ORIGINAL = os.path.join(PATH_DATA_DIR, 'original')
    file_path = os.path.join(DATA_PATH_ORIGINAL, f'bloom_location_{species_name}.csv')
    
    if not os.path.exists(file_path):
        print(f"Warning: Data file for species '{species_name}' not found at {file_path}")
        return pd.DataFrame() 
        
    df = pd.read_csv(file_path)
    df['location'] = df['location'].apply(lambda x: f"South Korea/{x.replace(' ', '')}")
    
    return df


def get_data(set_index: bool = False, target_species: str = None):
    df = get_data_by_species(target_species)

    df.drop_duplicates(subset=['year', 'location'], inplace=True)

    if set_index:
        df.set_index(['year', 'location'], inplace=True)
    else:
        df.reset_index(inplace=True)

    return df







