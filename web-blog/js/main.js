/* ============================================================
   SITE CONFIG  —  edit everything here.
   No real name / address / phone is used anywhere on the site.
   Contact only goes through the support email below.
   ============================================================ */
const SITE = {
  brand: "Ivor.C Studio",            // 显示用品牌名
  brandMark: "IC",                    // 导航左上角的小图标字母
  // App Store 开发者主页（可留空）
  developerUrl:
    "https://apps.apple.com/cn/developer/%E6%98%8A%E5%AE%87-%E8%94%A1/id1806230418",
  copyrightName: "Ivor.C Studio",    // 版权署名
  year: new Date().getFullYear(),
};

/* ============================================================
   i18n — 全站文案（zh / en）
   ============================================================ */
const I18N = {
  nav: {
    home: { zh: "首页", en: "Home" },
    support: { zh: "技术支持", en: "Support" },
    blog: { zh: "博客", en: "Blog" },
    privacy: { zh: "隐私政策", en: "Privacy" },
  },
  common: {
    themeToggle: { zh: "切换主题", en: "Toggle theme" },
    menu: { zh: "菜单", en: "Menu" },
    langLabel: { zh: "语言", en: "Language" },
    privacyPolicy: { zh: "隐私政策", en: "Privacy Policy" },
    comingSoon: { zh: "敬请期待", en: "Coming soon" },
    badgeNew: { zh: "新上线", en: "New" },
    badgeSoon: { zh: "即将上架", en: "Coming soon" },
    readMore: { zh: "阅读全文 →", en: "Read more →" },
    stayTuned: { zh: "敬请期待", en: "Coming soon" },
  },
  footer: {
    tagline: {
      zh: "用心打造的 iOS 小工具",
      en: "Thoughtfully crafted iOS utilities",
    },
    products: { zh: "产品", en: "Apps" },
    support: { zh: "支持", en: "Support" },
    supportLink: { zh: "技术支持", en: "Support" },
    faq: { zh: "常见问题", en: "FAQ" },
    blog: { zh: "更新博客", en: "Blog" },
    privacy: { zh: "隐私政策", en: "Privacy" },
    overview: { zh: "总览", en: "Overview" },
    rights: {
      zh: "保留所有权利。",
      en: "All rights reserved.",
    },
    note: {
      zh: "本网站仅用于产品介绍与技术支持。",
      en: "This site is for product info and support only.",
    },
  },
  home: {
    title: {
      zh: "Ivor.C Studio · iOS App 作品集与技术支持",
      en: "Ivor.C Studio · iOS Apps & Support",
    },
    description: {
      zh: "独立开发的 iOS 小工具作品集，提供产品介绍、技术支持与隐私政策。",
      en: "A portfolio of independently built iOS utilities — product info, support, and privacy policies.",
    },
    eyebrow: { zh: "独立开发 · 用心打造", en: "Indie · Crafted with care" },
    h1: {
      zh: '把每一个小创意，<br />做成<span class="gradient-text">顺手的 App</span>。',
      en: 'Turn every small idea into a<span class="gradient-text"> handy App</span>.',
    },
    lead: {
      zh: "这里是我的 iOS 应用作品集与技术支持中心。专注做简单、好用、尊重隐私的小工具——所有数据尽量留在你的设备上。",
      en: "My iOS app portfolio and support hub. Simple, useful, privacy-respecting tools — your data stays on your device whenever possible.",
    },
    ctaProducts: { zh: "浏览作品 →", en: "Browse apps →" },
    ctaSupport: { zh: "获取技术支持", en: "Get support" },
    statApps: { zh: "款 App 作品", en: "Apps shipped" },
    statPrivacy: { zh: "本地优先 / 隐私友好", en: "Local-first / Privacy-friendly" },
    statPlatform: { zh: "iPhone & iPad", en: "iPhone & iPad" },
    productsEyebrow: { zh: "产品", en: "Apps" },
    productsH2: { zh: "我的 App 作品", en: "My apps" },
    productsLead: {
      zh: "每一款都围绕一个简单的需求打磨，界面克制，体验直接。",
      en: "Each app focuses on one simple need — restrained UI, direct experience.",
    },
    whyEyebrow: { zh: "设计理念", en: "Principles" },
    whyH2: { zh: "简单，但讲究", en: "Simple, but deliberate" },
    whyLead: {
      zh: "不堆砌功能，不索取隐私。把每个细节做到顺手，是我对作品的要求。",
      en: "No feature bloat, no unnecessary data. Every detail should feel effortless.",
    },
    f1h: { zh: "隐私优先", en: "Privacy first" },
    f1p: {
      zh: "数据尽可能保存在本地设备，不收集与产品无关的个人信息。",
      en: "Data stays on device whenever possible. No unrelated personal data collected.",
    },
    f2h: { zh: "轻量快速", en: "Light & fast" },
    f2p: {
      zh: "启动即用，无需注册账号，专注解决一个具体的小问题。",
      en: "Open and use — no account required. One focused job done well.",
    },
    f3h: { zh: "专注体验", en: "Focused UX" },
    f3p: {
      zh: "界面克制干净，把最重要的信息放在第一眼能看到的位置。",
      en: "Clean, restrained interfaces that put the essentials front and center.",
    },
    f4h: { zh: "持续更新", en: "Kept current" },
    f4p: {
      zh: "常见问题都有自助解答，新功能与修复会持续跟进。",
      en: "Self-serve FAQ answers, plus ongoing features and fixes.",
    },
    ctaH2: { zh: "遇到问题？先看看常见问题", en: "Stuck? Check the FAQ first" },
    ctaP: {
      zh: "大多数使用疑问都能在技术支持页快速找到答案。",
      en: "Most questions are answered quickly on the support page.",
    },
    ctaBtn: { zh: "前往技术支持", en: "Go to support" },
  },
  support: {
    title: { zh: "技术支持 · Ivor.C Studio", en: "Support · Ivor.C Studio" },
    description: {
      zh: "App 技术支持中心：常见问题、联系方式与反馈渠道。",
      en: "App support hub: FAQ, contact paths, and feedback channels.",
    },
    eyebrow: { zh: "技术支持", en: "Support" },
    h1: {
      zh: '需要帮助？<span class="gradient-text">先看这里。</span>',
      en: 'Need help?<span class="gradient-text"> Start here.</span>',
    },
    lead: {
      zh: "大多数问题都能在下面的常见问题中找到答案。本站为自助式支持，不设邮件反馈入口。",
      en: "Most questions are answered in the FAQ below. This site is self-serve — no email inbox.",
    },
    card1h: { zh: "常见问题", en: "FAQ" },
    card1p: {
      zh: "使用、数据、兼容性等高频疑问，多数能在这里直接解决。",
      en: "Common questions about usage, data, and compatibility.",
    },
    card1btn: { zh: "查看 FAQ", en: "View FAQ" },
    card2h: { zh: "更新日志", en: "Changelog" },
    card2p: {
      zh: "新功能与问题修复会在博客同步，遇到 Bug 可先看是否已修复。",
      en: "New features and fixes land on the blog — check there first for known bugs.",
    },
    card2btn: { zh: "查看更新", en: "View updates" },
    card3h: { zh: "App Store", en: "App Store" },
    card3p: {
      zh: "购买、退款或需联系开发者，请前往对应 App 的 App Store 商店页面。",
      en: "For purchases, refunds, or developer contact, use the app’s App Store page.",
    },
    card3btn: { zh: "前往应用", en: "Go to apps" },
    faqEyebrow: { zh: "FAQ", en: "FAQ" },
    faqH2: { zh: "常见问题", en: "Frequently asked questions" },
    faqLead: {
      zh: "大多数疑问都能在这里找到答案。",
      en: "Most questions have answers here.",
    },
    q1: { zh: "App 会收集我的个人信息吗？", en: "Does the app collect my personal data?" },
    a1: {
      zh: '我们坚持隐私优先原则。App 的核心数据（如收入设置、功德计数等）默认保存在你的设备本地，不会上传到服务器，也不会收集与功能无关的个人信息。详情请见各 App 的<a href="privacy/index.html">隐私政策</a>。',
      en: 'We put privacy first. Core data (income settings, merit counts, etc.) stays on your device by default — not uploaded to servers, and unrelated personal data is not collected. See each app’s <a href="privacy/index.html">privacy policy</a> for details.',
    },
    q2: { zh: "数据会同步或备份到云端吗？", en: "Is data synced or backed up to the cloud?" },
    a2: {
      zh: "目前数据以本地存储为主。如果你更换设备或删除 App，本地数据可能会丢失，建议提前记录重要信息。",
      en: "Data is primarily local. If you switch devices or delete the app, local data may be lost — keep important notes elsewhere.",
    },
    q3: { zh: "支持哪些设备和系统版本？", en: "Which devices and OS versions are supported?" },
    a3: {
      zh: "应用同时支持 iPhone 与 iPad。具体最低系统版本要求请以 App Store 商店页面的说明为准。",
      en: "Apps support iPhone and iPad. Check the App Store page for the minimum OS version.",
    },
    q4: { zh: "App 闪退 / 数据异常怎么办？", en: "App crashes or data looks wrong — what now?" },
    a4: {
      zh: '可先尝试：1）重启 App；2）更新到最新版本；3）重启设备。若仍未解决，可前往该 App 的 App Store 商店页面，通过苹果提供的"App 支持"渠道联系开发者，并附上设备型号、系统版本和问题描述。',
      en: "Try: 1) relaunch the app; 2) update to the latest version; 3) restart your device. If it persists, contact the developer via App Support on the App Store page, and include device model, OS version, and a short description.",
    },
    q5: { zh: "如何提交功能建议？", en: "How can I suggest a feature?" },
    a5: {
      zh: "欢迎在 App Store 给应用留下评价并写下你的想法，我会留意这些反馈，优秀的建议会被纳入后续的更新计划。",
      en: "Leave a review on the App Store with your ideas — I read them, and good suggestions shape the roadmap.",
    },
    q6: { zh: "App 是收费的吗？", en: "Are the apps paid?" },
    a6: {
      zh: "具体定价与内购信息请以 App Store 商店页面为准。关于购买、订阅或退款，请通过 App Store / Apple 账户的相关渠道处理。",
      en: "Pricing and in-app purchases are listed on the App Store. For purchases, subscriptions, or refunds, use App Store / Apple Account channels.",
    },
  },
  blog: {
    title: { zh: "博客 · Ivor.C Studio", en: "Blog · Ivor.C Studio" },
    description: {
      zh: "产品更新日志、开发笔记与使用技巧。",
      en: "Product updates, development notes, and tips.",
    },
    eyebrow: { zh: "博客", en: "Blog" },
    h1: {
      zh: '更新日志与<span class="gradient-text">开发笔记</span>',
      en: 'Changelogs & <span class="gradient-text">dev notes</span>',
    },
    lead: {
      zh: "记录产品的更新、功能背后的思考，以及一些好用的小技巧。聚焦产品，不谈太多个人。",
      en: "Product updates, the thinking behind features, and a few useful tips — focused on the apps, not personal stories.",
    },
    post1tag: { zh: "公告", en: "Announcement" },
    post1date: { zh: "2026 年 6 月", en: "June 2026" },
    post1h: {
      zh: "欢迎来到作品集与技术支持站",
      en: "Welcome to the portfolio & support site",
    },
    post1p: {
      zh: "介绍这个站点的用途：产品展示、技术支持以及隐私政策的统一入口。",
      en: "What this site is for: apps, support, and a single place for privacy policies.",
    },
    post2tag: { zh: "今日收入", en: "Today Income" },
    post2date: { zh: "即将更新", en: "Coming soon" },
    post2h: {
      zh: "「今日收入」是怎么算的？",
      en: "How does Today Income calculate pay?",
    },
    post2p: {
      zh: "聊聊按秒计薪背后的小逻辑，以及为什么所有数据都只存在你的手机里。",
      en: "The small logic behind per-second pay — and why everything stays on your phone.",
    },
    post3tag: { zh: "电子木鱼", en: "WoodenFish" },
    post3date: { zh: "即将更新", en: "Coming soon" },
    post3h: {
      zh: "一敲一念：电子木鱼的设计想法",
      en: "Tap by tap: the idea behind WoodenFish",
    },
    post3p: {
      zh: "如何用最简单的交互，做出让人愿意一直敲下去的小确幸。",
      en: "How the simplest interaction can become a habit worth keeping.",
    },
  },
  welcome: {
    title: {
      zh: "欢迎来到作品集与技术支持站 · Ivor.C Studio",
      en: "Welcome to the portfolio & support site · Ivor.C Studio",
    },
    back: { zh: "← 返回博客", en: "← Back to blog" },
    tag: { zh: "公告", en: "Announcement" },
    h1: {
      zh: "欢迎来到作品集与技术支持站",
      en: "Welcome to the portfolio & support site",
    },
    meta: { zh: "2026 年 6 月", en: "June 2026" },
    p1: {
      zh: '你好！这里是我的 iOS 应用作品集与技术支持中心。建立这个站点的目的很简单：把<strong>产品介绍</strong>、<strong>技术支持</strong>和 <strong>App Store 要求的隐私政策</strong>集中在一个干净、清晰的地方。',
      en: "Hi! This is my iOS app portfolio and support hub. The goal is simple: one clean place for <strong>product info</strong>, <strong>support</strong>, and <strong>App Store privacy policies</strong>.",
    },
    h2a: { zh: "你可以在这里做什么", en: "What you can do here" },
    li1: {
      zh: '<strong>了解产品</strong>：在<a href="../../index.html#products">首页</a>查看每款 App 的功能与特点。',
      en: '<strong>Explore apps</strong>: see features on the <a href="../../index.html#products">home page</a>.',
    },
    li2: {
      zh: '<strong>获取帮助</strong>：在<a href="../../support.html">技术支持</a>页查看常见问题，自助找到答案。',
      en: '<strong>Get help</strong>: check the <a href="../../support.html">support</a> FAQ for self-serve answers.',
    },
    li3: {
      zh: '<strong>查看隐私政策</strong>：每款 App 都有独立的<a href="../../privacy/index.html">隐私政策</a>页面。',
      en: '<strong>Read privacy policies</strong>: each app has its own <a href="../../privacy/index.html">privacy policy</a>.',
    },
    h2b: { zh: "我的原则：隐私优先", en: "Principle: privacy first" },
    p2: {
      zh: '我做的都是简单的小工具，信奉"不该收集的就不收集"。绝大多数数据都保存在你的设备本地，不会上传服务器。这个站点本身也只展示产品信息，不公开过多个人资料，也不设邮件反馈入口。',
      en: "I build simple tools and collect only what’s necessary. Most data stays on your device. This site only shows product info — no excess personal details, and no email inbox.",
    },
    h2c: { zh: "关于更新", en: "Updates" },
    p3: {
      zh: "后续我会在博客里记录产品的更新日志和一些开发小思考。如果你对某个功能有想法，欢迎在 App Store 给应用留下评价反馈。",
      en: "I’ll post changelogs and short development notes on the blog. Feature ideas are welcome via App Store reviews.",
    },
    p4: { zh: "感谢你的使用与支持 🙌", en: "Thanks for using the apps 🙌" },
  },
  privacyPage: {
    title: { zh: "隐私政策 · Ivor.C Studio", en: "Privacy · Ivor.C Studio" },
    eyebrow: { zh: "隐私政策 · Privacy", en: "Privacy Policy" },
    h1: {
      zh: '我们如何<span class="gradient-text">保护你的隐私</span>',
      en: 'How we <span class="gradient-text">protect your privacy</span>',
    },
  },
};

/* ============================================================
   PRODUCTS  —  来源于 App Store 开发者主页
   ============================================================ */
const PRODUCTS = [
  {
    id: "crs-tax-calc",
    name: { zh: "境外证券收益个税计算器", en: "Overseas Securities Tax Calc" },
    tagline: {
      zh: "自动解析富途证券年度结单，按中国个税规则估算境外投资应纳税额。",
      en: "Parse Futu annual statements and estimate overseas investment tax under PRC individual income tax rules.",
    },
    img: "assets/icons/crs-tax-calc.png",
    gradient: "linear-gradient(135deg,#0f4c81,#1a7bb8 55%,#38d9c4)",
    platforms: ["iPhone"],
    status: "live",
    badge: "new",
    appStoreUrl: "https://apps.apple.com/cn/app/id6778335640",
    privacy: "crs-tax-calc.html",
    features: {
      zh: [
        "从「文件」/ iCloud 导入结单即自动解析计算，零手工",
        "移动加权平均成本法跨年度结转，结果可对账",
        "原始结单全程端内处理与存储，绝不上传服务器",
      ],
      en: [
        "Import statements from Files / iCloud — parse and calculate automatically",
        "Moving weighted-average cost across years, with results you can reconcile",
        "Statements stay on-device end to end — never uploaded to a server",
      ],
    },
  },
  {
    id: "today-income",
    name: { zh: "今日收入", en: "Today Income" },
    tagline: {
      zh: "每日到手工资收入秒级实时计算显示，牛马必备，正能量满满。",
      en: "Watch today’s take-home pay tick up by the second — a little boost for the workday.",
    },
    img: "assets/icons/today-income.jpg",
    gradient: "linear-gradient(135deg,#f7b733,#fc4a1a)",
    platforms: ["iPhone", "iPad"],
    status: "live",
    appStoreUrl: "https://apps.apple.com/cn/app/id6744528278",
    privacy: "today-income.html",
    features: {
      zh: [
        "按秒实时累计当日收入，工作越久数字越好看",
        "支持月薪 / 时薪等多种计薪方式",
        "简洁仪表盘，数据本地存储不上传",
      ],
      en: [
        "Live per-second income counter for the day",
        "Monthly / hourly and other pay modes",
        "Clean dashboard — data stored locally only",
      ],
    },
  },
  {
    id: "woodenfish",
    name: { zh: "电子木鱼", en: "WoodenFish" },
    tagline: {
      zh: "随时随地敲一敲，积攒功德，平静身心的电子木鱼。",
      en: "Tap anytime to accumulate merit and settle your mind — a digital wooden fish.",
    },
    img: "assets/icons/woodenfish.jpg",
    gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
    platforms: ["iPhone", "iPad"],
    status: "live",
    appStoreUrl: "https://apps.apple.com/cn/app/id6448083607",
    privacy: "woodenfish.html",
    features: {
      zh: [
        "轻点屏幕即可敲击，伴随音效与“功德 +1”",
        "可累计功德计数，记录你的专注时刻",
        "纯本地运行，无需账号、无需联网",
      ],
      en: [
        "Tap to strike with sound and “Merit +1”",
        "Track cumulative merit over focused moments",
        "Fully local — no account, no network required",
      ],
    },
  },
];

/* ============================================================
   Helpers
   ============================================================ */
function basePrefix() {
  const script =
    document.currentScript ||
    Array.from(document.scripts).find((s) => /(^|\/)js\/main\.js(\?|$)/.test(s.getAttribute("src") || ""));
  const src = script ? script.getAttribute("src") || "" : "";
  const prefix = src.replace(/js\/main\.js.*$/, "");
  return prefix || "./";
}

const ROOT = basePrefix();

function getLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "zh") return fromUrl;
  return localStorage.getItem("lang") === "en" ? "en" : "zh";
}

function setLang(lang) {
  if (lang !== "en" && lang !== "zh") return;
  localStorage.setItem("lang", lang);
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.pushState({ lang }, "", url);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function t(path, lang = getLang()) {
  const parts = path.split(".");
  let cur = I18N;
  for (const p of parts) {
    if (!cur || typeof cur !== "object") return path;
    cur = cur[p];
  }
  if (cur && typeof cur === "object" && (cur.zh != null || cur.en != null)) {
    return cur[lang] ?? cur.zh ?? path;
  }
  return typeof cur === "string" ? cur : path;
}

function productName(p, lang = getLang()) {
  return typeof p.name === "object" ? p.name[lang] || p.name.zh : p.name;
}

function productAltName(p, lang = getLang()) {
  const other = lang === "en" ? "zh" : "en";
  return typeof p.name === "object" ? p.name[other] || p.name.en : p.en || "";
}

function productTagline(p, lang = getLang()) {
  return typeof p.tagline === "object" ? p.tagline[lang] || p.tagline.zh : p.tagline;
}

/* ============================================================
   Header / nav
   ============================================================ */
function renderHeader(active) {
  const lang = getLang();
  const links = [
    { href: "index.html", key: "home" },
    { href: "support.html", key: "support" },
    { href: "blog/index.html", key: "blog" },
    { href: "privacy/index.html", key: "privacy" },
  ];
  const linkHtml = links
    .map(
      (l) =>
        `<a href="${ROOT}${l.href}" class="${active === l.key ? "active" : ""}">${t(`nav.${l.key}`, lang)}</a>`
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
        <div class="lang-switch" role="group" aria-label="${t("common.langLabel", lang)}">
          <button type="button" data-lang="zh" class="${lang === "zh" ? "on" : ""}" aria-pressed="${lang === "zh"}">中文</button>
          <button type="button" data-lang="en" class="${lang === "en" ? "on" : ""}" aria-pressed="${lang === "en"}">EN</button>
        </div>
        <button class="icon-btn" id="themeToggle" aria-label="${t("common.themeToggle", lang)}">◐</button>
        <button class="icon-btn nav-toggle" id="navToggle" aria-label="${t("common.menu", lang)}">☰</button>
      </div>
    </div>
  </header>`;
}

/* ============================================================
   Footer
   ============================================================ */
function renderFooter() {
  const lang = getLang();
  const productLinks = PRODUCTS.map(
    (p) => `<a href="${ROOT}privacy/${p.privacy}">${productName(p, lang)}</a>`
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
          <p class="muted" style="font-size:.92rem;margin:0">${t("footer.tagline", lang)}</p>
        </div>
        <div class="footer-col">
          <h4>${t("footer.products", lang)}</h4>
          ${PRODUCTS.map((p) => `<a href="${ROOT}index.html#products">${productName(p, lang)}</a>`).join("")}
        </div>
        <div class="footer-col">
          <h4>${t("footer.support", lang)}</h4>
          <a href="${ROOT}support.html">${t("footer.supportLink", lang)}</a>
          <a href="${ROOT}support.html#faq">${t("footer.faq", lang)}</a>
          <a href="${ROOT}blog/index.html">${t("footer.blog", lang)}</a>
        </div>
        <div class="footer-col">
          <h4>${t("footer.privacy", lang)}</h4>
          <a href="${ROOT}privacy/index.html">${t("footer.overview", lang)}</a>
          ${productLinks}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${SITE.year} ${SITE.copyrightName}. ${t("footer.rights", lang)}</span>
        <span>${t("footer.note", lang)}</span>
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
  const lang = getLang();
  el.innerHTML = PRODUCTS.map((p) => {
    const name = productName(p, lang);
    const alt = productAltName(p, lang);
    const iconInner = p.img
      ? `<img src="${ROOT}${p.img}" alt="${name}" loading="lazy" width="76" height="76" />`
      : p.icon || "";
    let badge = "";
    if (p.badge === "new") {
      badge = `<span class="badge-new">${t("common.badgeNew", lang)}</span>`;
    } else if (p.status === "soon") {
      badge = `<span class="badge-soon">${t("common.badgeSoon", lang)}</span>`;
    }
    return `
    <article class="product-card reveal${p.badge === "new" ? " product-card--new" : ""}">
      ${badge}
      <div class="app-icon" style="background:${p.gradient}">${iconInner}</div>
      <h3>${name}</h3>
      <p class="en-sub">${alt}</p>
      <p class="tagline">${productTagline(p, lang)}</p>
      <div class="platforms">${p.platforms
        .map((pl) => `<span class="pill">${pl}</span>`)
        .join("")}</div>
      <div class="product-links">
        ${
          p.appStoreUrl
            ? `<a href="${p.appStoreUrl}" target="_blank" rel="noopener">App Store ↗</a>`
            : `<span class="muted" style="font-size:.85rem">${t("common.comingSoon", lang)}</span>`
        }
        <a href="${ROOT}privacy/${p.privacy}">${t("common.privacyPolicy", lang)}</a>
      </div>
    </article>`;
  }).join("");

  el.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ============================================================
   Apply data-i18n / data-i18n-html on page content
   ============================================================ */
function applyPageI18n() {
  const lang = getLang();
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key, lang);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    el.innerHTML = t(key, lang);
  });

  const page = document.body.getAttribute("data-page") || "";
  const titleMap = {
    home: "home.title",
    support: "support.title",
    blog: "blog.title",
    privacy: "privacyPage.title",
  };
  if (document.body.getAttribute("data-post") === "welcome") {
    document.title = t("welcome.title", lang);
  } else if (titleMap[page] && page !== "privacy") {
    document.title = t(titleMap[page], lang);
  } else if (page === "privacy" && (document.body.getAttribute("data-app") || "index") === "index") {
    document.title = t("privacyPage.title", lang);
  }

  const descMap = {
    home: "home.description",
    support: "support.description",
    blog: "blog.description",
  };
  const meta = document.querySelector('meta[name="description"]');
  if (meta && descMap[page]) meta.setAttribute("content", t(descMap[page], lang));
}

/* ============================================================
   Interactions: theme, mobile nav, FAQ, scroll reveal, lang
   ============================================================ */
function bindChromeInteractions() {
  const themeBtn = document.getElementById("themeToggle");
  themeBtn?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next);
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle?.addEventListener("click", () => navLinks?.classList.toggle("open"));
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  document.querySelectorAll(".nav-actions .lang-switch [data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (next === getLang()) return;
      setLang(next);
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach((q) => {
    if (q.dataset.bound) return;
    q.dataset.bound = "1";
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = item.classList.toggle("open");
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : null;
    });
  });
}

function initReveal() {
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
  document.querySelectorAll(".reveal").forEach((el) => {
    if (!el.classList.contains("in")) io.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 200) el.classList.add("in");
    });
  }, 1600);
}

function initInteractions() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  bindChromeInteractions();
  initFaq();
  initReveal();
}

function refreshUI() {
  const active = document.body.getAttribute("data-page") || "";
  mountChrome(active);
  renderProducts("product-grid");
  applyPageI18n();
  bindChromeInteractions();
  initFaq();
  // Keep open FAQ heights correct after language swap
  document.querySelectorAll(".faq-item.open .faq-a").forEach((ans) => {
    ans.style.maxHeight = ans.scrollHeight + "px";
  });
  initReveal();
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

  document.querySelectorAll("[data-brand]").forEach((n) => (n.textContent = SITE.brand));
  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = SITE.year));
}

document.addEventListener("DOMContentLoaded", () => {
  // Sync URL with stored language preference
  const lang = getLang();
  const url = new URL(location.href);
  if (url.searchParams.get("lang") !== lang) {
    url.searchParams.set("lang", lang);
    history.replaceState({ lang }, "", url);
  }
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  const active = document.body.getAttribute("data-page") || "";
  mountChrome(active);
  renderProducts("product-grid");
  applyPageI18n();
  initInteractions();

  window.addEventListener("langchange", refreshUI);
  window.addEventListener("popstate", refreshUI);
});
