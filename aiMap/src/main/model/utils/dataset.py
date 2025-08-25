import os
import torch.utils.data as data
from config import label_mapping, DATA_PATH, ignore_label, NUM_CLASSES, NUM_CHANNELS
import cv2

from os.path import splitext
from os import listdir
import numpy as np
from glob import glob
import torch
from torch.utils.data import Dataset
import logging
from PIL import Image


class BasicDataset(Dataset):
    def __init__(self, imgs_dir, masks_dir, scale=1, mask_suffix=''):
        self.imgs_dir = imgs_dir
        self.masks_dir = masks_dir
        self.scale = scale
        self.mask_suffix = mask_suffix
        assert 0 < scale <= 1, 'Scale must be between 0 and 1'

        self.ids = [splitext(file)[0] for file in listdir(imgs_dir)
                    if not file.startswith('.')]
        logging.info(f'Creating dataset with {len(self.ids)} examples')

    def __len__(self):
        return len(self.ids)

    @classmethod
    def preprocess(cls, pil_img, scale):
        w, h = pil_img.size
        newW, newH = int(scale * w), int(scale * h)
        assert newW > 0 and newH > 0, 'Scale is too small'
        pil_img = pil_img.resize((newW, newH))

        img_nd = np.array(pil_img)

        if len(img_nd.shape) == 2:
            img_nd = np.expand_dims(img_nd, axis=2)

        # HWC to CHW
        img_trans = img_nd.transpose((2, 0, 1))
        if img_trans.max() > 1:
            img_trans = img_trans / 255

        return img_trans

    def __getitem__(self, i):
        idx = self.ids[i]
        mask_file = glob(self.masks_dir + idx + self.mask_suffix + '.*')
        img_file = glob(self.imgs_dir + idx + '.*')

        assert len(mask_file) == 1, \
            f'Either no mask or multiple masks found for the ID {idx}: {mask_file}'
        assert len(img_file) == 1, \
            f'Either no image or multiple images found for the ID {idx}: {img_file}'
        mask = Image.open(mask_file[0])
        img = Image.open(img_file[0])

        assert img.size == mask.size, \
            f'Image and mask {idx} should be the same size, but are {img.size} and {mask.size}'

        img = self.preprocess(img, self.scale)
        mask = self.preprocess(mask, self.scale)

        return {
            'image': torch.from_numpy(img).type(torch.FloatTensor),
            'mask': torch.from_numpy(mask).type(torch.FloatTensor)
        }


class CarvanaDataset(BasicDataset):
    def __init__(self, imgs_dir, masks_dir, scale=1):
        super().__init__(imgs_dir, masks_dir, scale, mask_suffix='_mask')



def map_cmap(N=256, normalized=False):
    dtype = 'float32' if normalized else 'uint8'
    cmap = np.zeros((N, 3), dtype=dtype)
    for k, v in label_mapping.items():
        if v == ignore_label:
            continue
        cmap[v] = np.array([k, k, k])
    # for i in range(9):
    #     cmap[i] = np.array([i*10, i*10, i*10])
    # # for i in range(9,256):
    # #     cmap[i] = np.array([200,i,i])
    # cmap[0] = np.array([100, 100, 100])
    # print(cmap)

    # def bitget(byteval, idx):
    #     return ((byteval & (1 << idx)) != 0)

    # for i in range(N):
    #     r = g = b = 0
    #     c = i
    #     for j in range(8):
    #         r = r | (bitget(c, 0) << 7-j)
    #         g = g | (bitget(c, 1) << 7-j)
    #         b = b | (bitget(c, 2) << 7-j)
    #         c = c >> 3

    #     cmap[i] = np.array([r, g, b])

    cmap = cmap/255 if normalized else cmap
    return cmap


class MapDataset(data.Dataset):
    cmap = map_cmap()
    def __init__(self, root, image_set='train', transform=None):
        self.root = os.path.expanduser(root)
        self.transform = transform

        self.image_set = image_set

        list_file = os.path.join(DATA_PATH, "{}.lst".format(image_set))

        self.images = []
        self.masks = []

        lines = open(list_file, 'rt')
        for line in lines:
            image_file, mask_file = line.strip().split(' ')
            self.images.append(os.path.join(root, image_file))
            self.masks.append(os.path.join(root, mask_file))

        assert (len(self.images) == len(self.masks))


    def encode_target(cls, target):
        # label = torch.tensor(target)
        # label = target.clone().detach()
        # print("target size", target.size())
        for k, v in label_mapping.items():
            target[target == k] = v
        return target


    def __getitem__(self, index):
        """
        Args:
            index (int): Index
        Returns:
            tuple: (image, target) where target is the image segmentation.
        """
        if NUM_CHANNELS == 3:
            img = Image.open(self.images[index]).convert('RGB')
        elif NUM_CHANNELS == 4:
            img = Image.open(self.images[index]).convert('RGBA')
        else:
            print("NUM_CHANNELS is wrong ", NUM_CHANNELS)
        # target = Image.open(self.masks[index])
        target = Image.fromarray(cv2.imread(self.masks[index], cv2.IMREAD_GRAYSCALE))
        if self.transform is not None:
            img, target = self.transform(img, target)
        label = self.encode_target(target)
        label = np.asarray(label, dtype=np.int8)
        label_over = np.where(label >= NUM_CLASSES)
        label[label_over] = ignore_label
        label = np.asarray(label, dtype=np.uint8)

        return img, label


    def __len__(self):
        return len(self.images)

    @classmethod
    def decode_target(cls, mask):
        """decode semantic mask to RGB image"""
        return cls.cmap[mask]