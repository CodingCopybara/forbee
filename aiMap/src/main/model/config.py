TARGET_DATA_TYPE = "AERIAL_22"             # 토지피복 고도화 항공25
#TARGET_DATA_TYPE = "SN_22"             # 토지피복 satelite

#DATA_PATH = "../dataset/AP25_1024"
DATA_PATH = "/data/LS_22/100%data/AP25_1024"
WEIGHT_PATH = "20230403_0204"   # AP25_512, AP25_1024


BATCH_SIZE = 4

MAX_EPOCHS = 500
EPOCHS = 200
#ACC_CUT_TH = 0.8
ACC_CUT_TH = 0.95
CGT_EPOCHS = 0

GPUS = "0,1"

ignore_label = 255

if TARGET_DATA_TYPE == "AERIAL_22":
      ###### 2022 Aerial 고도화 ###############
  label_mapping = {-1: ignore_label, 0: ignore_label,
                              10: 1,
                              20: 2,
                              30: 3,
                              40: 4,
                              50: 5,                              
                              55: 6,
                              60: 7,
                              71: 8,
                              75: 9,
                              80: 10,
                              95: 11,
                              100: 0, 255: ignore_label}

  visible_mapping = {
      -1: [100, 100, 100],  # 무시(회색)
      0: [160, 160, 160],   # 기타 (회색)
      1: [60, 60, 60],      # 건물 (짙은 회색)
      2: [220, 220, 220],   # 주차장 (밝은 회색)
      3: [128, 128, 128],   # 도로 (중간 회색)
      4: [173, 255, 47],    # 가로수 (라임 그린)
      5: [139, 69, 19],     # 논 (갈색)
      6: [135, 206, 235],   # 비닐하우스 (하늘색)
      7: [144, 238, 144],   # 밭 (연녹색)
      8: [50, 205, 50],     # 활엽수림 (초록색)
      9: [165, 65, 65],     # 침엽수림 (적갈색)
      10: [255, 140, 0],    # 나지 (주황색)
      11: [0, 0, 255],      # 수역 (파랑색)
  }

  NUM_CLASSES = 12
  NUM_CHANNELS = 3
  image_endfix_len = 4
  label_endfix = "" #"_FGT"

elif TARGET_DATA_TYPE == "SN_22":
      ###### 2022 Aerial 고도화 ###############
  label_mapping = {-1: ignore_label, 0: ignore_label,
                              10: 1,
                              30: 2,                              
                              50: 3,
                              60: 4,
                              71: 5,
                              75: 6,
                              100: 0, 255: ignore_label}

  visible_mapping = {-1:100,
    1: [184, 131, 237],
    2: [42, 65, 247],
    3: [191, 255, 255],
    4: [102, 249, 247],
    5: [44, 160, 51],
    6: [64, 79, 10],
  }

  NUM_CLASSES = 7
  NUM_CHANNELS = 3
  image_endfix_len = 4
  label_endfix = "" #"_FGT"


# else:
#   print("TARGET_DATA_TYPE is wrong !!!!", TARGET_DATA_TYPE)
#   print("TARGET_DATA_TYPE is wrong !!!!", TARGET_DATA_TYPE)
#   print("TARGET_DATA_TYPE is wrong !!!!", TARGET_DATA_TYPE)

# print(label_mapping)
