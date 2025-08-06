from ultralytics import YOLO

model = YOLO("bee_yolov8_detection.pt")
print(model.names)
