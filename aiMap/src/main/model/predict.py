import argparse
import logging
import os
import sys
import io
import base64
import json

import numpy as np
import torch
import torch.nn.functional as F
from PIL import Image
from torchvision import transforms

from unet import UNet
from utils.data_vis import plot_img_and_mask

from config import NUM_CLASSES, NUM_CHANNELS, visible_mapping 

import warnings
warnings.filterwarnings("ignore", category=UserWarning)

# 클래스 이름 매핑
class_names = [
    "기타",        # 0
    "건물",        # 1
    "주차장",      # 2
    "도로",        # 3
    "가로수",      # 4
    "논",          # 5
    "비닐하우스", # 6
    "밭",          # 7
    "활엽수림",    # 8
    "침엽수림",    # 9
    "나지",        # 10
    "수역"         # 11
]

def predict_img(net,
                full_img,
                device,
                scale_factor=1,
                out_threshold=0.5):
    net.eval()

    if NUM_CHANNELS == 4:
        mean_value = [0.485, 0.456, 0.406, 0.400]
        std_value = [0.229, 0.224, 0.225, 0.225]
    else:
        mean_value = [0.485, 0.456, 0.406]
        std_value = [0.229, 0.224, 0.225]

    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize(mean=mean_value, std=std_value),
    ])

    if scale_factor != 1:
        img_w, img_h = full_img.size
        new_w, new_h = int(img_w * scale_factor), int(img_h * scale_factor)
        full_img = full_img.resize((new_w, new_h), resample=Image.BICUBIC)

    img = transform(full_img)
    img = img.unsqueeze(0)
    img = img.to(device=device, dtype=torch.float32)

    with torch.no_grad():
        output = net(img)

        if net.n_classes > 1:
            probs = F.softmax(output, dim=1)
            mask = probs.argmax(dim=1).squeeze(0).cpu().numpy()
        else:
            probs = torch.sigmoid(output)
            mask = (probs.squeeze(0) > out_threshold).cpu().numpy().astype(np.uint8)
    
    if scale_factor != 1:
        mask = Image.fromarray(mask.astype(np.uint8))
        mask = mask.resize(full_img.size[::-1], resample=Image.NEAREST)
        mask = np.array(mask)

    return mask


def mask_circle(mask, center=None, radius=None):
    """
    원형 영역만 남기고 나머지는 -1로 처리
    """
    h, w = mask.shape
    if center is None:
        center = (w // 2, h // 2)
    if radius is None:
        radius = min(h, w) // 2

    Y, X = np.ogrid[:h, :w]
    dist_from_center = np.sqrt((X - center[0])**2 + (Y - center[1])**2)
    circular_mask = dist_from_center <= radius

    masked_mask = mask.copy()
    masked_mask[~circular_mask] = -1
    return masked_mask


def mask_to_image_with_transparency(mask):
    """
    -1인 영역은 투명, 나머지는 클래스별 색상 적용
    """
    h, w = mask.shape
    color_mask = np.zeros((h, w, 4), dtype=np.uint8)  # RGBA
    for class_idx, color in visible_mapping.items():
        if class_idx == -1:
            continue
        color_mask[mask == class_idx, :3] = color
        color_mask[mask == class_idx, 3] = 255  # 불투명
    return Image.fromarray(color_mask)


if __name__ == "__main__":
    original_stderr = sys.stderr
    sys.stderr = io.StringIO()

    args = argparse.ArgumentParser(description='Predict masks from input images',
                                   formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    args.add_argument('--model', '-m', default='MODEL.pth', metavar='FILE', help="Model file")
    args.add_argument('--input', '-i', metavar='INPUT', nargs='+', required=True, help='Input images')
    args.add_argument('--gpu_id', type=str, default='0', help='GPU ID')
    args = args.parse_args()

    net = UNet(n_channels=NUM_CHANNELS, n_classes=NUM_CLASSES)

    os.environ['CUDA_VISIBLE_DEVICES'] = args.gpu_id
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    net.to(device=device)
    net.load_state_dict(torch.load(args.model, map_location=device))

    for i, fn in enumerate(args.input):
        if NUM_CHANNELS == 3:
            img = Image.open(fn).convert('RGB')
        elif NUM_CHANNELS == 4:
            img = Image.open(fn).convert('RGBA')
        else:
            sys.exit(1)

        # 예측 + 원형 마스크
        mask = predict_img(net=net, full_img=img, scale_factor=1, out_threshold=0.5, device=device)
        mask = mask_circle(mask)

        # 이미지 변환 (투명 처리)
        result_image = mask_to_image_with_transparency(mask)

        # 픽셀 비율 계산 (원 밖 제외)
        total_pixels = np.sum(mask != -1)
        class_ratios = {}
        for class_idx in range(NUM_CLASSES):
            count = np.sum(mask == class_idx)
            name = class_names[class_idx] if class_idx < len(class_names) else f"Unknown Class {class_idx}"
            class_ratios[name] = float(count / total_pixels)

        # 이미지 Base64 변환
        buffered = io.BytesIO()
        result_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

        result_data = {
            "image_data": f"data:image/png;base64,{img_str}",
            "pixel_ratios": class_ratios
        }

        print(json.dumps(result_data, ensure_ascii=False))
