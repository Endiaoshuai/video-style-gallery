/* ==========================================================================
   AI 短视频视觉风格选片与盲测台 · Interactive Gallery, A/B Curtain & 60fps Canvas Engine
   ========================================================================== */

const STYLES_CATALOG = [
  {
    id: 'style-01-firefly-bokeh',
    code: 'STYLE-01',
    liveId: 1,
    name: '星萤焦外散点 · 纯血《信息论》呼吸光斑风',
    enName: 'Firefly Bokeh & Stardust Wave',
    category: 'soft_poetic',
    unusedSoft: true,
    tone: 'dark',
    statusText: '待用存档 · 极空灵',
    statusClass: 'unused',
    img: './images/style-01-firefly-bokeh.jpg',
    png: './images/style-01-firefly-bokeh.png',
    swatches: ['#060914', '#6EEAFC', '#FFE298', '#EE86A6'],
    desc: '零硬边几何柱体，完全依靠天鹅绒深空上的焦外大光斑（Bokeh）与三千颗呼吸萤火粒子自然堆叠出概率曲线，最还原《信息论》原片的宇宙呼吸感。',
    tags: ['无硬边柱体', '焦外呼吸光斑', '概率/数学/宇宙', '神曲卡点绝配'],
    prompt: '视觉风格使用「STYLE-01 星萤焦外散点（纯血《信息论》呼吸光斑风）」，无硬边柱体，参考 https://endiaoshuai.github.io/video-style-gallery/#style-01-firefly-bokeh',
  },
  {
    id: 'style-02-pearl-ripples',
    code: 'STYLE-02',
    liveId: 2,
    name: '温润琉璃玉珠与镜湖涟漪 ·《折叠》水波风',
    enName: 'Pearlescent Dewdrops & Mirror Ripples',
    category: 'soft_poetic',
    unusedSoft: true,
    tone: 'dark',
    statusText: '待用存档 · 静谧克制',
    statusClass: 'unused',
    img: './images/style-02-pearl-ripples.jpg',
    png: './images/style-02-pearl-ripples.png',
    swatches: ['#08162E', '#64E3F6', '#F4C568', '#CBD8EE'],
    desc: '以次表面散射质感的温润琉璃圆珠取代柱状图，配合深蓝镜湖水面反射与一滴金光坠湖荡开的同心金色水波纹，静谧高级、充满禅意。',
    tags: ['柔光球体', '镜湖水波纹', '博弈/心理/决策', '克制留白'],
    prompt: '视觉风格使用「STYLE-02 温润琉璃玉珠与镜湖涟漪（《折叠》柔光球体水波风）」，参考 https://endiaoshuai.github.io/video-style-gallery/#style-02-pearl-ripples',
  },
  {
    id: 'style-04-sky-lanterns',
    code: 'STYLE-04',
    liveId: 4,
    name: '暖夜千灯与纸雕云海 · 柔光孔明灯灯箱风',
    enName: 'Floating Sky Lanterns & Paper Clouds',
    category: 'soft_poetic',
    unusedSoft: true,
    tone: 'dark',
    statusText: '待用存档 · 东方温情',
    statusClass: 'unused',
    img: './images/style-04-sky-lanterns.jpg',
    png: './images/style-04-sky-lanterns.png',
    swatches: ['#151C3D', '#B5F3FF', '#FFD884', '#E6843A'],
    desc: '层叠圆润剪纸云海搭配暖金背光灯箱，将枯燥样本化作千百盏袅袅升空的月白与暖金孔明灯，满月高悬，兼具数据直观度与东方浪漫温度。',
    tags: ['孔明灯海', '剪纸云海视差', '人文/哲学/经济', '温暖治愈'],
    prompt: '视觉风格使用「STYLE-04 暖夜千灯与纸雕云海（柔光孔明灯灯箱风）」，参考 https://endiaoshuai.github.io/video-style-gallery/#style-04-sky-lanterns',
  },
  {
    id: 'style-05-cotton-watercolor',
    code: 'STYLE-05',
    liveId: 5,
    name: '棉浆水彩与丝绸流场 · 明亮治愈东方纸本风',
    enName: 'Warm Cotton Watercolor & Silk Flow-Field',
    category: 'soft_poetic',
    unusedSoft: true,
    tone: 'light',
    statusText: '待用存档 · 明亮纸本',
    statusClass: 'unused',
    img: './images/style-05-cotton-watercolor.jpg',
    png: './images/style-05-cotton-watercolor.png',
    swatches: ['#FAF6EE', '#76B6C4', '#EBAC58', '#B83B2A'],
    desc: '柔和系列中唯一的温暖米白手工棉浆水彩纸本风：青瓷蓝、藤黄与珊瑚红湿画法自然晕染，260 根春水丝绸流线汇聚成朱砂圆相与闲章。',
    tags: ['暖白棉浆纸本', '水彩湿画晕染', '心理学/文学/生活百科', '护眼明亮'],
    prompt: '视觉风格使用「STYLE-05 棉浆水彩与丝绸流场（明亮治愈东方纸本风）」，参考 https://endiaoshuai.github.io/video-style-gallery/#style-05-cotton-watercolor',
  },
  {
    id: 'style-03-journey-dunes',
    code: 'STYLE-03',
    liveId: 3,
    name: '暮色丝绸沙丘与圆月拱门 ·《风之旅人 × 光·遇》风',
    enName: 'Pastel Dusk Silk Dunes & Moon Arch',
    category: 'soft_poetic',
    unusedSoft: false,
    tone: 'dark',
    statusText: '已投产 ·《37% 定律》主视觉',
    statusClass: 'selected',
    img: './images/style-03-journey-dunes.jpg',
    png: './images/style-03-journey-dunes.png',
    swatches: ['#362657', '#874D72', '#F0B596', '#FFE3AD'],
    desc: '莫兰迪粉紫暮色天空下如丝绸般顺滑起伏的沙丘山脊，白袍旅人拖着金色流光丝带攀上峰顶圆月拱门，逆风花瓣飞舞，唯美灵动毫无硬角。',
    tags: ['丝绸沙丘曲线', '流光丝带旅人', '《37% 定律》在用', '唯美艺术电影感'],
    prompt: '视觉风格使用「STYLE-03 暮色丝绸沙丘与圆月拱门（风之旅人 × 光·遇风）」，参考 https://endiaoshuai.github.io/video-style-gallery/#style-03-journey-dunes',
  },
  {
    id: 'style-06-monument-iso',
    code: 'STYLE-06',
    liveId: 0,
    name: '星夜纪念碑谷等轴圣殿 · 几何建筑风',
    enName: 'Monument Valley Isometric Nocturne',
    category: 'production',
    unusedSoft: false,
    tone: 'dark',
    statusText: '对比存档 · 等轴建筑',
    statusClass: 'engine',
    img: './images/style-06-monument-iso.jpg',
    png: './images/style-06-monument-iso.jpg',
    swatches: ['#090F24', '#48A6C4', '#DDA94E', '#C25270'],
    desc: '30° 精确等轴测三面体明暗石阶与拱门圣殿，适合需要明确阶梯落差、方阵棋盘或空间建筑隐喻的数理逻辑选题。',
    tags: ['30° 等轴测建筑', '三面体光影', '算法方阵/阶梯博弈'],
    prompt: '视觉风格使用「STYLE-06 星夜纪念碑谷等轴圣殿风」，参考 https://endiaoshuai.github.io/video-style-gallery/#style-06-monument-iso',
  },
  {
    id: 'style-07-cinema-investigative',
    code: 'STYLE-07',
    liveId: 0,
    name: '财经暗黑调查纪录片风 · Bloomberg × FT (003 风格)',
    enName: 'Dark-Cinema Investigative Documentary',
    category: 'production',
    unusedSoft: false,
    tone: 'dark',
    statusText: '量产主力 · 商业/AI纪实',
    statusClass: 'engine',
    img: './images/style-07-cinema-investigative.jpg',
    png: './images/style-07-cinema-investigative.jpg',
    swatches: ['#080E1E', '#F59E0B', '#38BDF8', '#EF4444'],
    desc: '深邃暗蓝径向暗房底色 + 真实历史纪实摄影 Ken Burns 推镜 + 章节时间码导轨 + 渐进式 SVG 架构图，搭配云野磁性男声口播。',
    tags: ['科技巨头博弈', '芯片地缘/商业史', '真实影像考据', '云野男声绝配'],
    prompt: '视觉风格使用「STYLE-07 财经暗黑调查纪录片风（003 调查纪录片风格）」，配音用云野 HD Flash',
  },
  {
    id: 'style-08-ref-mg-cutaway',
    code: 'STYLE-08',
    liveId: 0,
    name: '精致插画拆层 MG 科普风 · DK 博物百科图鉴',
    enName: 'Editorial Cutaway Illustrated MG',
    category: 'production',
    unusedSoft: false,
    tone: 'light',
    statusText: '量产主力 ·《人体出厂说明书》',
    statusClass: 'engine',
    img: './images/style-08-ref-mg-cutaway.jpg',
    png: './images/style-08-ref-mg-cutaway.jpg',
    swatches: ['#F4EFE6', '#D9483B', '#1F9D73', '#D99B26'],
    desc: '锁定统一博物插画画风生成高精度无字器官/机械组件，透明抠图分层后在 Remotion 中驱动呼吸搏动、能量路径与红绿双极诊察动效。',
    tags: ['人体医学科普', '机械剖面拆解', '晓晓2代配音绝配', '竖屏高完播率'],
    prompt: '视觉风格使用「STYLE-08 精致插画拆层 MG 科普风（DK 博物百科图鉴）」，配音用晓晓2代 HD Flash',
  },
  {
    id: 'style-09-atlas-cel',
    code: 'STYLE-09',
    liveId: 0,
    name: '赛璐珞墨线机械图谱风 · AtlasCel 渐开线齿轮',
    enName: '2-Tone Cel Shading + Own-Hue Ink Atlas',
    category: 'production',
    unusedSoft: false,
    tone: 'light',
    statusText: '量产引擎 · 硬核机械',
    statusClass: 'engine',
    img: './images/style-09-atlas-cel.jpg',
    png: './images/style-09-atlas-cel.jpg',
    swatches: ['#F3F0EA', '#E6B94F', '#79B09F', '#E8472A'],
    desc: '暖米色图谱纸本 + 零高光双阶赛璐珞平涂 + 本色墨线轮廓与真实数学渐开线齿轮啮合，彻底告别廉价 3D 塑料积木感。',
    tags: ['变速箱/发动机', '物理传动机构', '零塑料感赛璐珞'],
    prompt: '视觉风格使用「STYLE-09 赛璐珞墨线机械图谱风（AtlasCelEngine）」',
  },
  {
    id: 'style-10-blueprint-patent',
    code: 'STYLE-10',
    liveId: 0,
    name: '普鲁士蓝专利工程蓝图风 · Cyanotype 剖面制图',
    enName: 'Prussian Cyanotype Patent Blueprint',
    category: 'production',
    unusedSoft: false,
    tone: 'dark',
    statusText: '量产引擎 · 工程制图',
    statusClass: 'engine',
    img: './images/style-10-blueprint-patent.jpg',
    png: './images/style-10-blueprint-patent.jpg',
    swatches: ['#122B59', '#E8F4FF', '#FFD882', '#63B3ED'],
    desc: '经典 #122B59 普鲁士晒图纸底色 + 双重粉笔白框线 + 45° 剖面斜线与精密尺寸引线，适合硬核工程原理与专利拆解。',
    tags: ['工程专利制图', '正交剖面线', '硬核工业风'],
    prompt: '视觉风格使用「STYLE-10 普鲁士蓝专利工程蓝图风（BlueprintEngine）」',
  },
];

// State
let activeTab = 'all';
let activeTone = 'all';
let liveOnly = false;
let searchQuery = '';
let pinnedAId = 'style-03-journey-dunes';
let currentModalStyle = STYLES_CATALOG[0];
let modalMode = 'live'; // 'live' | 'still' | 'ab'
let abSplitRatio = 0.5;
let rafId = null;

// DOM Elements
const gridEl = document.getElementById('style-cards-grid');
const countTextEl = document.getElementById('results-count-text');
const pinnedTitleEl = document.getElementById('deck-pinned-title');
const lightboxEl = document.getElementById('cinema-lightbox');
const lbTitleEl = document.getElementById('lb-title');
const lbSubEl = document.getElementById('lb-subtitle');
const lbStillImg = document.getElementById('lb-still-img');
const lbCanvas = document.getElementById('lb-live-canvas');
const lbAbLayer = document.getElementById('lb-ab-layer');
const lbAbImg = document.getElementById('lb-ab-img');
const lbAbDivider = document.getElementById('lb-ab-divider');
const lbAbTag = document.getElementById('lb-ab-tag');
const lbPromptBox = document.getElementById('lb-prompt-box');
const lbDownloadBtn = document.getElementById('lb-download-btn');
const lbModeLiveBtn = document.getElementById('lb-mode-live-btn');
const lbModeStillBtn = document.getElementById('lb-mode-still-btn');
const lbModeAbBtn = document.getElementById('lb-mode-ab-btn');

// Helpers
function copyTextWithFeedback(text, btn, originalLabel) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.textContent = '已复制口令 ✓';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = originalLabel;
    }, 1600);
  });
}

function getFilteredStyles() {
  return STYLES_CATALOG.filter((item) => {
    if (activeTab === 'unused_soft' && !item.unusedSoft) return false;
    if (activeTab === 'soft_poetic' && item.category !== 'soft_poetic') return false;
    if (activeTab === 'production' && item.category !== 'production') return false;
    if (activeTone !== 'all' && item.tone !== activeTone) return false;
    if (liveOnly && !item.liveId) return false;
    if (searchQuery) {
      const hay = `${item.code} ${item.name} ${item.enName} ${item.desc} ${item.tags.join(' ')}`.toLowerCase();
      if (!hay.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });
}

function updateDeckUI() {
  const pinned = STYLES_CATALOG.find((s) => s.id === pinnedAId) || STYLES_CATALOG[0];
  pinnedTitleEl.textContent = `${pinned.code} · ${pinned.name}`;
}

function renderGrid() {
  const list = getFilteredStyles();
  countTextEl.textContent = `当前展示 ${list.length} / ${STYLES_CATALOG.length} 款视觉风格档案`;
  gridEl.innerHTML = '';

  list.forEach((item) => {
    const isPinned = item.id === pinnedAId;
    const card = document.createElement('article');
    card.className = 'style-card';
    card.id = item.id;

    const swatchesHtml = item.swatches
      .map((c) => `<span class="swatch-dot" style="background:${c}" title="${c}"></span>`)
      .join('');
    const tagsHtml = item.tags.map((t) => `<span class="meta-pill">${t}</span>`).join('');
    const playLabel = item.liveId ? '▶ 60fps 动态演播' : '🔍 1080P 大图检视';

    card.innerHTML = `
      <div class="card-stage" data-open="${item.id}">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="stage-badges">
          <span class="code-tag">${item.code}</span>
          <span class="status-tag ${item.statusClass}">${item.statusText}</span>
        </div>
        <span class="stage-play-hint">${playLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h2 class="card-title">${item.name}</h2>
          <div class="swatches">${swatchesHtml}</div>
        </div>
        <div class="card-subtitle">${item.enName}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-meta-tags">${tagsHtml}</div>
        <div class="card-actions">
          <button type="button" class="card-btn primary" data-open="${item.id}">${item.liveId ? '▶ 动态预览' : '放大检视'}</button>
          <button type="button" class="card-btn ${isPinned ? 'pinned' : ''}" data-pin="${item.id}">${isPinned ? '★ 已锁为 A' : '锁为 A 对比'}</button>
          <button type="button" class="card-btn" data-copy="${item.id}">复制选片口令</button>
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

// ============================================================================
// Real-Time 60fps Procedural Canvas Animator for Soft Styles 01–05
// ============================================================================
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function optRate(r) {
  if (r <= 0.001 || r >= 0.999) return 0;
  return -r * Math.log(r);
}

function drawOrb(ctx, x, y, rad, r, g, b, a0, a1) {
  const gr = ctx.createRadialGradient(x, y, 0, x, y, rad);
  gr.addColorStop(0, `rgba(${r},${g},${b},${a0})`);
  gr.addColorStop(0.32, `rgba(${r},${g},${b},${a1})`);
  gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = gr;
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.fill();
}

// Precompute deterministic particles for smooth 60fps playback
const LIVE_CACHE = (() => {
  const rng = mulberry32(20261115);
  const fireflies = Array.from({ length: 650 }, () => {
    const r = 0.02 + rng() * 0.96;
    const u = 1 - Math.pow(rng(), 2.1);
    return { r, u, phase: rng() * 6.28, speed: 0.8 + rng() * 1.8, size: 3 + rng() * 9, jx: (rng() - 0.5) * 22 };
  });
  const pearls = Array.from({ length: 100 }, (_, i) => {
    let sc = Math.floor(14 + rng() * 80);
    if (i === 30) sc = 96;
    if (i < 37 && i !== 30) sc = Math.min(sc, 88);
    if (i >= 37 && i < 61) sc = Math.min(sc, 91);
    if (i === 61) sc = 100;
    return { sc, phase: rng() * 6.28 };
  });
  const lanterns = Array.from({ length: 84 }, (_, i) => {
    const r = (i + 0.5) / 84;
    return { r, jitter: (rng() - 0.4) * 85, scale: 0.48 + rng() * 0.55, phase: rng() * 6.28 };
  });
  const petals = Array.from({ length: 75 }, () => ({
    x: rng(),
    y: rng(),
    s: 0.6 + rng() * 0.9,
    p: rng() * 6.28,
  }));
  return { fireflies, pearls, lanterns, petals };
})();

function renderLiveStyleFrame(ctx, liveId, t) {
  ctx.clearRect(0, 0, 1920, 1080);
  const x0 = 170, x1 = 1750, yBase = 815, hScale = 1160;
  const peakX = x0 + (1 / Math.E) * (x1 - x0);
  const peakY = yBase - (1 / Math.E) * hScale;

  if (liveId === 1) {
    // STYLE 01: Firefly Bokeh & Stardust Wave (Live 60fps!)
    const bg = ctx.createRadialGradient(820, 480, 60, 960, 540, 1180);
    bg.addColorStop(0, '#0E1528');
    bg.addColorStop(0.5, '#060914');
    bg.addColorStop(1, '#020308');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1920, 1080);

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    drawOrb(ctx, peakX, peakY + 55, 420, 248, 206, 130, 0.11, 0.04);

    LIVE_CACHE.fireflies.forEach((f) => {
      const breathe = 0.55 + 0.45 * Math.sin(t * f.speed + f.phase);
      const driftX = Math.sin(t * 0.7 + f.phase) * 9;
      const driftY = Math.cos(t * 0.9 + f.phase) * 8 - ((t * 12 + f.phase * 20) % 26) * 0.4;
      const px = x0 + f.r * (x1 - x0) + f.jx + driftX;
      const py = yBase - f.u * optRate(f.r) * hScale + driftY;
      const gBoost = Math.exp(-Math.pow((f.r - 0.368) / 0.09, 2));
      const cr = Math.round(115 + 140 * Math.min(1, f.r * 1.4 + gBoost));
      const cg = Math.round(230 - 85 * Math.max(0, f.r - 0.55) + 20 * gBoost);
      const cb = Math.round(248 - 95 * gBoost);
      drawOrb(ctx, px, py, f.size * 2.4, cr, cg, cb, 0.55 * breathe, 0.16 * breathe);
    });

    // Expanding starlight rings at 37%
    for (let k = 0; k < 3; k++) {
      const prog = ((t * 0.42 + k / 3) % 1);
      ctx.strokeStyle = `rgba(255, 230, 172, ${(1 - prog) * 0.55})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(peakX, peakY, 18 + prog * 145, 0, Math.PI * 2);
      ctx.stroke();
    }
    drawOrb(ctx, peakX, peakY, 92, 255, 222, 145, 0.62, 0.18);
    drawOrb(ctx, peakX, peakY, 22, 255, 252, 240, 1.0, 0.7);
    ctx.restore();

    ctx.fillStyle = '#FFF4D4';
    ctx.textAlign = 'center';
    ctx.font = '38px "Noto Sans SC", serif';
    ctx.fillText('STYLE 01 · 星萤焦外散点（60fps 实时呼吸粒子演播）', 960, 118);
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillStyle = '#9FB2CC';
    ctx.fillText('1 / e ≈ 36.79%  ·  Zero Hard Edges, Pure Bokeh Light', 960, 995);
  } else if (liveId === 2) {
    // STYLE 02: Pearlescent Dewdrops & Mirror Ripples (Live 60fps!)
    const waterY = 695;
    const sky = ctx.createLinearGradient(0, 0, 0, waterY);
    sky.addColorStop(0, '#040B1A');
    sky.addColorStop(1, '#122B50');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 1920, waterY);
    const lake = ctx.createLinearGradient(0, waterY, 0, 1080);
    lake.addColorStop(0, '#0F2546');
    lake.addColorStop(1, '#030712');
    ctx.fillStyle = lake;
    ctx.fillRect(0, waterY, 1920, 385);

    const winX = 140 + (61 / 99) * 1640;
    const benchY = 635 - 0.96 * 330;

    // Animated concentric ripples expanding continuously!
    for (let k = 0; k < 7; k++) {
      const p = ((t * 0.38 + k / 7) % 1);
      ctx.strokeStyle = `rgba(248, 214, 140, ${(1 - p) * 0.68})`;
      ctx.lineWidth = 2.2 * (1 - p * 0.6);
      ctx.beginPath();
      ctx.ellipse(winX, waterY + 46, 20 + p * 430, 5 + p * 96, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(248, 216, 147, 0.5)';
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(140, benchY);
    ctx.lineTo(1780, benchY);
    ctx.stroke();
    ctx.setLineDash([]);

    LIVE_CACHE.pearls.forEach((p, i) => {
      const px = 140 + (i / 99) * 1640;
      const bob = Math.sin(t * 1.8 + p.phase) * 4.5;
      const py = 635 - (p.sc / 100) * 330 + bob;
      const isGold = i === 30 || i === 61;
      const rad = i === 61 ? 18 : i === 30 ? 13 : 5.5 + (p.sc / 100) * 4.5;
      drawOrb(ctx, px, py, rad * 2.8, isGold ? 255 : 100, isGold ? 212 : 225, isGold ? 125 : 248, isGold ? 0.42 : 0.18, 0.04);
      ctx.fillStyle = isGold ? '#FFE59E' : i < 37 ? '#B5F6FF' : '#8BA1C7';
      ctx.beginPath();
      ctx.arc(px, py, rad, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = '#F8F9FA';
    ctx.textAlign = 'center';
    ctx.font = '38px "Noto Sans SC", serif';
    ctx.fillText('STYLE 02 · 温润琉璃玉珠与镜湖涟漪（60fps 实时水波演播）', 960, 118);
  } else if (liveId === 3) {
    // STYLE 03: Journey × Sky Dusk Silk Dunes & Flowing Scarf (Live 60fps!)
    const sky = ctx.createLinearGradient(0, 0, 0, 920);
    sky.addColorStop(0, '#161330');
    sky.addColorStop(0.35, '#362657');
    sky.addColorStop(0.68, '#874D72');
    sky.addColorStop(1, '#F5CBA7');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 1920, 1080);

    const heroY = (x) => {
      const r = Math.max(0.002, Math.min(0.998, (x + 60) / 2040));
      return 895 - optRate(r) * 1340 + Math.sin(x * 0.005) * 4;
    };
    const pX = (1 / Math.E) * 2040 - 60;
    const sY = heroY(pX);

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    drawOrb(ctx, pX, sY + 15, 380 + Math.sin(t * 1.6) * 22, 255, 205, 150, 0.36, 0.11);
    ctx.restore();

    // Streaming Aurora Silk Ribbons!
    for (let k = -3; k <= 3; k++) {
      if (k === 0) continue;
      ctx.beginPath();
      for (let x = 0; x <= 1920; x += 16) {
        const r = (x + 60) / 2040;
        const taper = Math.sin(Math.min(1, Math.max(0, r)) * Math.PI);
        const wave = Math.sin(x * 0.008 - t * 2.4 + k * 1.2) * 14 * taper;
        const py = heroY(x) - 15 + k * 5.5 + wave;
        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.strokeStyle = k < 0 ? 'rgba(165, 235, 250, 0.28)' : 'rgba(255, 216, 158, 0.30)';
      ctx.lineWidth = 1.8;
      ctx.stroke();
    }

    // Velvety Silk Dune
    ctx.beginPath();
    ctx.moveTo(0, 1080);
    for (let x = 0; x <= 1920; x += 12) ctx.lineTo(x, heroY(x));
    ctx.lineTo(1920, 1080);
    ctx.closePath();
    const dg = ctx.createLinearGradient(0, 360, 0, 1080);
    dg.addColorStop(0, '#5E3968');
    dg.addColorStop(1, '#120D24');
    ctx.fillStyle = dg;
    ctx.fill();
    ctx.strokeStyle = '#FFE3AD';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Moon Arch + Traveler + Fluttering Golden Scarf!
    ctx.save();
    ctx.strokeStyle = '#FFF3D4';
    ctx.lineWidth = 4.5;
    ctx.shadowColor = '#FFD88A';
    ctx.shadowBlur = 22;
    ctx.beginPath();
    ctx.arc(pX, sY - 38, 42, Math.PI * 0.82, Math.PI * 0.18, false);
    ctx.stroke();

    ctx.fillStyle = '#FFFDF9';
    ctx.beginPath();
    ctx.moveTo(pX, sY - 30);
    ctx.lineTo(pX - 8, sY - 2);
    ctx.lineTo(pX + 8, sY - 2);
    ctx.closePath();
    ctx.fill();

    // Animated fluttering scarf
    ctx.beginPath();
    ctx.moveTo(pX - 4, sY - 24);
    for (let s = 1; s <= 24; s++) {
      const u = s / 24;
      const sx = pX - 4 - u * 310;
      const sy = heroY(sx) - 22 + Math.sin(u * 7 - t * 4.5) * 11 * u;
      ctx.lineTo(sx, sy);
    }
    ctx.strokeStyle = 'rgba(255, 236, 175, 0.85)';
    ctx.lineWidth = 3.2;
    ctx.stroke();
    ctx.restore();

    // Drifting wind petals
    LIVE_CACHE.petals.forEach((pt) => {
      const px = ((pt.x * 1800 + t * 55 * pt.s) % 1800) + 60;
      const py = heroY(px) - 14 - ((pt.y * 110 + Math.sin(t * 2 + pt.p) * 18) % 110);
      ctx.fillStyle = 'rgba(255, 232, 182, 0.65)';
      ctx.beginPath();
      ctx.ellipse(px, py, 4.5, 1.8, -0.35, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = '#FFFDF9';
    ctx.textAlign = 'center';
    ctx.font = '38px "Noto Sans SC", serif';
    ctx.fillText('STYLE 03 · 风之旅人 × 光·遇 暮色沙丘（60fps 实时丝带演播）', 960, 118);
  } else if (liveId === 4) {
    // STYLE 04: Floating Sky Lanterns & Paper Clouds (Live 60fps!)
    const sky = ctx.createRadialGradient(780, 410, 40, 960, 520, 1150);
    sky.addColorStop(0, '#2E3668');
    sky.addColorStop(0.5, '#151C3D');
    sky.addColorStop(1, '#080B1C');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 1920, 1080);

    const pX = 150 + (1 / Math.E) * 1620;
    const pY = 325 + Math.sin(t * 1.2) * 7;
    drawOrb(ctx, pX, pY + 20, 250, 255, 220, 148, 0.26, 0.08);

    LIVE_CACHE.lanterns.forEach((lt) => {
      const env = optRate(lt.r) / (1 / Math.E);
      const floatY = Math.sin(t * 1.4 + lt.phase) * 11;
      const swayX = Math.cos(t * 0.9 + lt.phase) * 7;
      const lx = 150 + lt.r * 1620 + swayX;
      const ly = 770 - env * 430 + lt.jitter * (1 - env * 0.45) + floatY;
      const isBlue = lt.r < 0.368;
      const w = 17 * lt.scale, h = 23 * lt.scale;
      drawOrb(ctx, lx, ly, w * 2.8, isBlue ? 115 : 255, isBlue ? 215 : 186, isBlue ? 250 : 92, 0.28, 0.07);
      ctx.fillStyle = isBlue ? '#BCEFFF' : '#FFD685';
      ctx.beginPath();
      ctx.roundRect(lx - w * 0.65, ly - h * 0.5, w * 1.3, h, 7);
      ctx.fill();
    });

    // Hero Lantern at 37%
    drawOrb(ctx, pX, pY, 130, 255, 192, 95, 0.55, 0.14);
    ctx.fillStyle = '#FFF6DC';
    ctx.beginPath();
    ctx.roundRect(pX - 22, pY - 28, 44, 56, 12);
    ctx.fill();

    // Foreground Paper Clouds gently swaying
    [860, 930].forEach((by, idx) => {
      ctx.fillStyle = idx === 0 ? '#121938' : '#080B1C';
      ctx.beginPath();
      ctx.moveTo(-40, 1080);
      for (let i = 0; i <= 11; i++) {
        const cx0 = -40 + i * 185 + Math.sin(t * 0.6 + idx) * 16;
        ctx.quadraticCurveTo(cx0 + 92, by - 58, cx0 + 185, by);
      }
      ctx.lineTo(1960, 1080);
      ctx.fill();
    });

    ctx.fillStyle = '#FFFDF8';
    ctx.textAlign = 'center';
    ctx.font = '38px "Noto Sans SC", serif';
    ctx.fillText('STYLE 04 · 暖夜千灯与纸雕云海（60fps 实时升灯演播）', 960, 118);
  } else if (liveId === 5) {
    // STYLE 05: Warm Cotton Watercolor & Silk Flow-Field (Live 60fps!)
    ctx.fillStyle = '#F7F1E5';
    ctx.fillRect(0, 0, 1920, 1080);
    drawOrb(ctx, peakX, peakY + 50, 320, 235, 172, 88, 0.22, 0.08);
    drawOrb(ctx, 460, 610, 280, 118, 182, 196, 0.18, 0.06);

    for (let line = 0; line < 95; line++) {
      const frac = line / 94;
      ctx.beginPath();
      for (let s = 0; s <= 120; s++) {
        const r = s / 120;
        const px = 160 + r * 1600;
        const env = optRate(r) * 1150;
        const taper = Math.sin(r * Math.PI);
        const wave = Math.sin(r * 9.5 - t * 2.1 + frac * 5.2) * 13 * (1 - frac * 0.55) * taper;
        const py = 795 - env * (0.12 + 0.88 * Math.pow(frac, 0.78)) + wave;
        if (s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = frac > 0.86 ? 'rgba(198, 92, 62, 0.45)' : frac > 0.5 ? 'rgba(196, 138, 48, 0.25)' : 'rgba(62, 122, 142, 0.18)';
      ctx.lineWidth = frac > 0.86 ? 1.8 : 1.1;
      ctx.stroke();
    }

    ctx.strokeStyle = '#C44B32';
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.arc(peakX, peakY - 18, 24 + Math.sin(t * 2) * 3, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#222831';
    ctx.textAlign = 'center';
    ctx.font = '38px "Noto Sans SC", serif';
    ctx.fillText('STYLE 05 · 棉浆水彩与丝绸流场（60fps 实时春水演播）', 960, 118);
  }
}

function stopLiveLoop() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function syncLightboxView() {
  stopLiveLoop();
  const pinned = STYLES_CATALOG.find((s) => s.id === pinnedAId) || STYLES_CATALOG[0];
  lbTitleEl.textContent = `${currentModalStyle.code} · ${currentModalStyle.name}`;
  lbSubEl.textContent = `${currentModalStyle.enName} · 1920×1080`;
  lbStillImg.src = currentModalStyle.png || currentModalStyle.img;
  lbDownloadBtn.href = currentModalStyle.png || currentModalStyle.img;
  lbPromptBox.textContent = currentModalStyle.prompt;

  // Toggle button visibility & active state
  lbModeLiveBtn.style.display = currentModalStyle.liveId ? 'inline-flex' : 'none';
  [lbModeLiveBtn, lbModeStillBtn, lbModeAbBtn].forEach((b) => b.classList.remove('accent'));

  if (modalMode === 'live' && currentModalStyle.liveId) {
    lbModeLiveBtn.classList.add('accent');
    lbCanvas.style.display = 'block';
    lbStillImg.style.display = 'none';
    lbAbLayer.classList.remove('active');
    lbAbDivider.classList.remove('active');
    const ctx = lbCanvas.getContext('2d');
    const t0 = performance.now();
    const tick = (now) => {
      renderLiveStyleFrame(ctx, currentModalStyle.liveId, (now - t0) / 1000);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
  } else if (modalMode === 'ab') {
    lbModeAbBtn.classList.add('accent');
    lbCanvas.style.display = 'none';
    lbStillImg.style.display = 'block';
    lbAbImg.src = pinned.png || pinned.img;
    lbAbLayer.classList.add('active');
    lbAbDivider.classList.add('active');
    updateAbCurtain(abSplitRatio);
  } else {
    lbModeStillBtn.classList.add('accent');
    lbCanvas.style.display = 'none';
    lbStillImg.style.display = 'block';
    lbAbLayer.classList.remove('active');
    lbAbDivider.classList.remove('active');
  }
}

function updateAbCurtain(ratio) {
  abSplitRatio = Math.max(0.05, Math.min(0.95, ratio));
  const pct = (abSplitRatio * 100).toFixed(1);
  lbAbLayer.style.clipPath = `inset(0 ${100 - abSplitRatio * 100}% 0 0)`;
  lbAbDivider.style.left = `${pct}%`;
  const pinned = STYLES_CATALOG.find((s) => s.id === pinnedAId) || STYLES_CATALOG[0];
  lbAbTag.textContent = `◀ A: ${pinned.code} | 当前: ${currentModalStyle.code} ▶`;
}

function openLightbox(styleId, initialMode) {
  const found = STYLES_CATALOG.find((s) => s.id === styleId) || STYLES_CATALOG[0];
  currentModalStyle = found;
  modalMode = initialMode || (found.liveId ? 'live' : 'still');
  lightboxEl.classList.add('open');
  syncLightboxView();
}

function closeLightbox() {
  stopLiveLoop();
  lightboxEl.classList.remove('open');
}

// Event Listeners
document.getElementById('category-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  activeTab = btn.dataset.tab;
  renderGrid();
});

document.getElementById('subfilter-chips').addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  if (chip.dataset.tone) {
    document.querySelectorAll('[data-tone]').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    activeTone = chip.dataset.tone;
  } else if (chip.dataset.live) {
    liveOnly = !liveOnly;
    chip.classList.toggle('active', liveOnly);
  }
  renderGrid();
});

document.getElementById('style-search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderGrid();
});

document.querySelectorAll('.verdict-pill-card').forEach((btn) => {
  btn.addEventListener('click', () => openLightbox(btn.dataset.id, 'live'));
});

gridEl.addEventListener('click', (e) => {
  const openTrigger = e.target.closest('[data-open]');
  if (openTrigger) {
    openLightbox(openTrigger.dataset.open);
    return;
  }
  const pinTrigger = e.target.closest('[data-pin]');
  if (pinTrigger) {
    pinnedAId = pinTrigger.dataset.pin;
    updateDeckUI();
    renderGrid();
    return;
  }
  const copyTrigger = e.target.closest('[data-copy]');
  if (copyTrigger) {
    const item = STYLES_CATALOG.find((s) => s.id === copyTrigger.dataset.copy);
    if (item) copyTextWithFeedback(item.prompt, copyTrigger, '复制选片口令');
  }
});

// Lightbox Controls
lbModeLiveBtn.addEventListener('click', () => { modalMode = 'live'; syncLightboxView(); });
lbModeStillBtn.addEventListener('click', () => { modalMode = 'still'; syncLightboxView(); });
lbModeAbBtn.addEventListener('click', () => { modalMode = 'ab'; syncLightboxView(); });
document.getElementById('lb-close-btn').addEventListener('click', closeLightbox);
lightboxEl.addEventListener('click', (e) => { if (e.target === lightboxEl) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

const viewportEl = document.getElementById('lb-viewport');
let draggingAb = false;
viewportEl.addEventListener('pointerdown', (e) => {
  if (modalMode !== 'ab') return;
  draggingAb = true;
  const rect = viewportEl.getBoundingClientRect();
  updateAbCurtain((e.clientX - rect.left) / rect.width);
});
window.addEventListener('pointermove', (e) => {
  if (!draggingAb || modalMode !== 'ab') return;
  const rect = viewportEl.getBoundingClientRect();
  updateAbCurtain((e.clientX - rect.left) / rect.width);
});
window.addEventListener('pointerup', () => { draggingAb = false; });

document.getElementById('lb-copy-prompt-btn').addEventListener('click', (e) => {
  copyTextWithFeedback(currentModalStyle.prompt, e.currentTarget, '一键复制选片口令');
});

document.getElementById('deck-open-ab-btn').addEventListener('click', () => {
  const other = STYLES_CATALOG.find((s) => s.id !== pinnedAId) || STYLES_CATALOG[0];
  openLightbox(other.id, 'ab');
});

document.getElementById('deck-copy-pinned-btn').addEventListener('click', (e) => {
  const pinned = STYLES_CATALOG.find((s) => s.id === pinnedAId) || STYLES_CATALOG[0];
  copyTextWithFeedback(pinned.prompt, e.currentTarget, '复制当前 A 选片口令');
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle-btn');
const themeLabel = document.getElementById('theme-toggle-label');
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeLabel.textContent = next === 'dark' ? '浅色画廊' : '深色暗房';
});

// Init
updateDeckUI();
renderGrid();
if (window.location.hash) {
  const hid = window.location.hash.slice(1);
  if (STYLES_CATALOG.some((s) => s.id === hid)) openLightbox(hid);
}
