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


def mask_to_image(mask):
    h, w = mask.shape
    color_mask = np.zeros((h, w, 3), dtype=np.uint8)
    for class_idx, color in visible_mapping.items():
        if class_idx == -1:
            continue
        color_mask[mask == class_idx] = color
    return Image.fromarray(color_mask)


if __name__ == "__main__":
    original_stderr = sys.stderr
    sys.stderr = io.StringIO()
    # logging.basicConfig(stream=sys.stderr, level=logging.INFO, format='%(levelname)s: %(message)s')

    args = argparse.ArgumentParser(description='Predict masks from input images',
                                   formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    args.add_argument('--model', '-m', default='MODEL.pth', metavar='FILE', help="Model file")
    args.add_argument('--input', '-i', metavar='INPUT', nargs='+', required=True, help='Input images')
    args.add_argument('--gpu_id', type=str, default='0', help='GPU ID')
    args = args.parse_args()

    net = UNet(n_channels=NUM_CHANNELS, n_classes=NUM_CLASSES)

    # logging.info(f"Loading model {args.model}")
    os.environ['CUDA_VISIBLE_DEVICES'] = args.gpu_id
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    # logging.info(f'Using device {device}')
    net.to(device=device)
    net.load_state_dict(torch.load(args.model, map_location=device))
    # logging.info("Model loaded!")

    for i, fn in enumerate(args.input):
        # logging.info(f"Predicting image {fn} ...")

        if NUM_CHANNELS == 3:
            img = Image.open(fn).convert('RGB')
        elif NUM_CHANNELS == 4:
            img = Image.open(fn).convert('RGBA')
        else:
            # logging.error(f"NUM_CHANNELS is wrong: {NUM_CHANNELS}. Only 3 or 4 are supported.")
            sys.exit(1)

        mask = predict_img(net=net, full_img=img, scale_factor=1, out_threshold=0.5, device=device)

        total_pixels = mask.size
        class_ratios = {}
        # logging.info("Class pixel ratios:")
        for class_idx in range(NUM_CLASSES):
            count = np.sum(mask == class_idx)
            name = class_names[class_idx] if class_idx < len(class_names) else f"Unknown Class {class_idx}"
            class_ratios[name] = float(count / total_pixels)

        result_image = mask_to_image(mask)
        buffered = io.BytesIO()
        result_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

        result_data = {
            "image_data": f"data:image/png;base64,{img_str}",
            "pixel_ratios": class_ratios
        }

        print(json.dumps(result_data, ensure_ascii=False))
