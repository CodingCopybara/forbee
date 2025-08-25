/// <reference lib="webworker" />

type Item = { id: number; x: number; y: number; speed: number };

let canvas: OffscreenCanvas;
let ctx: OffscreenCanvasRenderingContext2D;
let width = 360;
let height = 520;
let dpr = 1;
let basketX = 180;
let items: Item[] = [];
let nextId = 0;
let score = 0;
let miss = 0;
let loopTimer: number | undefined;
let spawnTimer: number | undefined;
let honeyBitmap: ImageBitmap | null = null;

function roundRect(
  ctx: OffscreenCanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function draw() {
  ctx.save();
  ctx.clearRect(0, 0, width, height);

  // 흰색 배경
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);

  // 아이템
  if (honeyBitmap) {
    for (const it of items) {
      ctx.drawImage(honeyBitmap, it.x - 20, it.y - 20, 40, 40);
    }
  }

  // 바구니
  const bw = 96;
  const bh = 18;
  const by = height - 36;
  ctx.fillStyle = "#f59e0b";
  roundRect(ctx, basketX - bw / 2, by - bh / 2, bw, bh, 9);
  ctx.fill();

  // HUD
  ctx.fillStyle = "#111827";
  ctx.font = "bold 14px system-ui, -apple-system, Segoe UI, Roboto";
  ctx.fillText(`점수: ${score}   놓침: ${miss}`, 12, 22);

  ctx.restore();
}

function update() {
  const bw = 96;
  const bh = 18;
  const by = height - 36;

  for (const it of items) it.y += it.speed;

  const remain: Item[] = [];
  for (const it of items) {
    const caught =
      Math.abs(it.x - basketX) < bw / 2 &&
      it.y + 20 >= by - bh &&
      it.y <= by + 10;

    if (caught) {
      score++;
      continue;
    }
    if (it.y > height + 40) {
      miss++;
      continue;
    }
    remain.push(it);
  }
  items = remain;
}

function loop() {
  update();
  draw();
  // 60fps 근사 (메인스레드 영향 최소화)
  loopTimer = setTimeout(loop, 16) as unknown as number;
}

async function loadImageBitmap(url: string) {
  const res = await fetch(url, { cache: "force-cache" });
  const blob = await res.blob();
  return await createImageBitmap(blob);
}

self.onmessage = async (e: MessageEvent) => {
  const { type } = e.data;

  if (type === "init") {
    canvas = e.data.canvas;
    width = e.data.width;
    height = e.data.height;
    dpr = e.data.dpr || 1;
    const imageSrc: string = e.data.imageSrc;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx = canvas.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    honeyBitmap = await loadImageBitmap(imageSrc);

    // 스폰 & 루프 시작
    spawnTimer = setInterval(() => {
      items.push({
        id: nextId++,
        x: Math.random() * (width - 40) + 20,
        y: -40,
        speed: 2.6 + Math.random() * 1.8,
      });
    }, 650) as unknown as number;

    loop();

    // HUD 주기 전송
    setInterval(() => {
      (self as any).postMessage({ type: "hud", score, miss });
    }, 250);
  }

  if (type === "move") {
    basketX = Math.max(0, Math.min(width, e.data.x));
  }

  if (type === "key") {
    const dir = e.data.dir as number; // -1 | +1
    basketX = Math.max(0, Math.min(width, basketX + 24 * dir));
  }

  if (type === "resize") {
    width = e.data.width;
    height = e.data.height;
    dpr = e.data.dpr || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  if (type === "dispose") {
    clearTimeout(loopTimer);
    clearInterval(spawnTimer);
    (self as any).close?.();
  }
};
