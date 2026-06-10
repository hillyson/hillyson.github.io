/* ============================================================
   SITE CONFIG  —  edit everything here.
   No real name / address / phone is used anywhere on the site.
   Contact only goes through the support email below.
   ============================================================ */
const SITE = {
  brand: "Ivor.C Studio",            // 显示用品牌名
  brandMark: "IC",                    // 导航左上角的小图标字母
  tagline: "用心打造的 iOS 小工具",
  // 不提供邮件反馈入口，避免邮箱被骚扰。
  // 用户如需联系，请通过 App Store 商店页面联系开发者。
  // App Store 开发者主页（可留空）
  developerUrl:
    "https://apps.apple.com/cn/developer/%E6%98%8A%E5%AE%87-%E8%94%A1/id1806230418",
  copyrightName: "Ivor.C Studio",    // 版权署名
  year: new Date().getFullYear(),
};

/* ============================================================
   PRODUCTS  —  来源于 App Store 开发者主页
   icon: 可用 emoji 占位；要换成真实图标，把 img 字段填上图片路径即可
   ============================================================ */
const PRODUCTS = [
  {
    id: "today-income",
    name: "今日收入",
    en: "Today Income",
    tagline: "每日到手工资收入秒级实时计算显示，牛马必备，正能量满满。",
    img: "assets/icons/today-income.jpg", // 官方 App Store 图标
    gradient: "linear-gradient(135deg,#f7b733,#fc4a1a)", // 图片加载前的占位底色
    platforms: ["iPhone", "iPad"],
    status: "live",
    appStoreUrl: "https://apps.apple.com/cn/app/id6744528278",
    privacy: "today-income.html",
    features: [
      "按秒实时累计当日收入，工作越久数字越好看",
      "支持月薪 / 时薪等多种计薪方式",
      "简洁仪表盘，数据本地存储不上传",
    ],
  },
  {
    id: "woodenfish",
    name: "电子木鱼",
    en: "WoodenFish",
    tagline: "随时随地敲一敲，积攒功德，平静身心的电子木鱼。",
    img: "assets/icons/woodenfish.jpg", // 官方 App Store 图标
    gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
    platforms: ["iPhone", "iPad"],
    status: "live",
    appStoreUrl: "https://apps.apple.com/cn/app/id6448083607",
    privacy: "woodenfish.html",
    features: [
      "轻点屏幕即可敲击，伴随音效与“功德 +1”",
      "可累计功德计数，记录你的专注时刻",
      "纯本地运行，无需账号、无需联网",
    ],
  },
  {
    id: "crs-tax-calc",
    name: "境外证券收益个税计算器",
    en: "CRS Tax Calc",
    tagline: "自动解析富途证券年度结单，按中国个税规则估算境外投资应纳税额。",
    img: "assets/icons/crs-tax-calc.png",
    gradient: "linear-gradient(135deg,#1e3c72,#2a5298)",
    platforms: ["iPhone"],
    status: "soon", // 待上架
    appStoreUrl: "",
    privacy: "crs-tax-calc.html",
    features: [
      "从「文件」/ iCloud 导入结单即自动解析计算，零手工",
      "移动加权平均成本法跨年度结转，结果可对账",
      "原始结单全程端内处理与存储，绝不上传服务器",
    ],
  },
];

/* ============================================================
   Helpers
   ============================================================ */
function basePrefix() {
  // 从 main.js 自身的 <script src> 推导根目录前缀，
  // 这样无论部署在域名根目录还是 GitHub Pages 子路径都能正确指向。
  const script =
    document.currentScript ||
    Array.from(document.scripts).find((s) => /(^|\/)js\/main\.js(\?|$)/.test(s.getAttribute("src") || ""));
  const src = script ? script.getAttribute("src") || "" : "";
  const prefix = src.replace(/js\/main\.js.*$/, "");
  return prefix || "./";
}

const ROOT = basePrefix();

/* ============================================================
   Header / nav
   ============================================================ */
function renderHeader(active) {
  const links = [
    { href: "index.html", label: "首页", key: "home" },
    { href: "support.html", label: "技术支持", key: "support" },
    { href: "blog/index.html", label: "博客", key: "blog" },
    { href: "privacy/index.html", label: "隐私政策", key: "privacy" },
  ];
  const linkHtml = links
    .map(
      (l) =>
        `<a href="${ROOT}${l.href}" class="${active === l.key ? "active" : ""}">${l.label}</a>`
    )
    .join("");

  return `
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="${ROOT}index.html">
        <span class="brand-mark">${SITE.brandMark}</span>
        <span>${SITE.brand}</span>
      </a>
      <nav class="nav-links" id="navLinks">${linkHtml}</nav>
      <div class="nav-actions">
        <button class="icon-btn" id="themeToggle" aria-label="切换主题">◐</button>
        <button class="icon-btn nav-toggle" id="navToggle" aria-label="菜单">☰</button>
      </div>
    </div>
  </header>`;
}

/* ============================================================
   Footer
   ============================================================ */
function renderFooter() {
  const productLinks = PRODUCTS.map(
    (p) => `<a href="${ROOT}privacy/${p.privacy}">${p.name}</a>`
  ).join("");

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col" style="max-width:280px">
          <a class="brand" href="${ROOT}index.html" style="margin-bottom:12px">
            <span class="brand-mark">${SITE.brandMark}</span>
            <span>${SITE.brand}</span>
          </a>
          <p class="muted" style="font-size:.92rem;margin:0">${SITE.tagline}</p>
        </div>
        <div class="footer-col">
          <h4>产品</h4>
          ${PRODUCTS.map((p) => `<a href="${ROOT}index.html#products">${p.name}</a>`).join("")}
        </div>
        <div class="footer-col">
          <h4>支持</h4>
          <a href="${ROOT}support.html">技术支持</a>
          <a href="${ROOT}support.html#faq">常见问题</a>
          <a href="${ROOT}blog/index.html">更新博客</a>
        </div>
        <div class="footer-col">
          <h4>隐私政策</h4>
          <a href="${ROOT}privacy/index.html">总览</a>
          ${productLinks}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${SITE.year} ${SITE.copyrightName}. 保留所有权利。</span>
        <span>本网站仅用于产品介绍与技术支持。</span>
      </div>
    </div>
  </footer>`;
}

/* ============================================================
   Product cards (home page)
   ============================================================ */
function renderProducts(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = PRODUCTS.map((p) => {
    const iconInner = p.img
      ? `<img src="${ROOT}${p.img}" alt="${p.name} App 图标" loading="lazy" width="76" height="76" />`
      : p.icon || "";
    return `
    <article class="product-card reveal">
      ${p.status === "soon" ? `<span class="badge-soon">即将上架</span>` : ""}
      <div class="app-icon" style="background:${p.gradient}">${iconInner}</div>
      <h3>${p.name}</h3>
      <p class="en-sub">${p.en}</p>
      <p class="tagline">${p.tagline}</p>
      <div class="platforms">${p.platforms
        .map((pl) => `<span class="pill">${pl}</span>`)
        .join("")}</div>
      <div class="product-links">
        ${
          p.appStoreUrl
            ? `<a href="${p.appStoreUrl}" target="_blank" rel="noopener">App Store ↗</a>`
            : `<span class="muted" style="font-size:.85rem">敬请期待</span>`
        }
        <a href="${ROOT}privacy/${p.privacy}">隐私政策</a>
      </div>
    </article>`;
  }).join("");

  // pointer-follow glow
  el.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ============================================================
   Interactions: theme, mobile nav, FAQ, scroll reveal
   ============================================================ */
function initInteractions() {
  // Theme
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  const themeBtn = document.getElementById("themeToggle");
  themeBtn?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next);
  });

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle?.addEventListener("click", () => navLinks?.classList.toggle("open"));
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // FAQ accordions
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = item.classList.toggle("open");
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : null;
    });
  });

  // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Safety net: never leave content invisible if observer misbehaves.
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 200) el.classList.add("in");
    });
  }, 1600);
}

/* ============================================================
   Boot
   ============================================================ */
function injectFavicon() {
  if (document.querySelector('link[rel="icon"]')) return;
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = `${ROOT}assets/favicon.svg`;
  document.head.appendChild(link);
}

function mountChrome(active) {
  injectFavicon();
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = renderHeader(active);
  if (footer) footer.innerHTML = renderFooter();

  // Fill any element with data-brand / data-year hooks
  document.querySelectorAll("[data-brand]").forEach((n) => (n.textContent = SITE.brand));
  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = SITE.year));
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.getAttribute("data-page") || "";
  mountChrome(active);
  renderProducts("product-grid");
  initInteractions();
});
