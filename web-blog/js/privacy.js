/* ============================================================
   隐私政策渲染 + 多语言切换
   依赖 js/privacy-data.js（PRIVACY）
   页面通过 <body data-app="..."> 指定：overview 或某个 app id
   ============================================================ */
(function () {
  // 语言优先级：URL ?lang= → localStorage → 默认 zh
  function getLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "zh") return fromUrl;
    return localStorage.getItem("lang") === "en" ? "en" : "zh";
  }
  function setLang(l) {
    localStorage.setItem("lang", l);
  }
  // 给同目录页面链接附加当前语言参数
  function withLang(href, lang) {
    return `${href}?lang=${lang}`;
  }

  function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;");
  }

  function renderLangSwitch(lang) {
    const t = PRIVACY.ui.langLabel[lang];
    const page = location.pathname.split("/").pop() || "index.html";
    return `
    <div class="lang-switch" role="group" aria-label="${escapeAttr(t)}">
      <a href="${withLang(page, "zh")}" data-lang="zh" class="${lang === "zh" ? "on" : ""}">中文</a>
      <a href="${withLang(page, "en")}" data-lang="en" class="${lang === "en" ? "on" : ""}">EN</a>
    </div>`;
  }

  function renderNav(active, lang) {
    const items = [{ id: "index", name: PRIVACY.ui.overview }].concat(
      PRIVACY.order.map((id) => ({ id, name: PRIVACY.names[id] }))
    );
    return (
      `<div class="policy-nav">` +
      items
        .map((it) => {
          const href = withLang(it.id === "index" ? "index.html" : `${it.id}.html`, lang);
          const isActive = it.id === active;
          const badge =
            PRIVACY.badge[it.id] && it.id !== active
              ? ` <span class="nav-badge">${PRIVACY.badge[it.id][lang]}</span>`
              : "";
          return `<a href="${href}" class="${isActive ? "active" : ""}">${it.name[lang]}${badge}</a>`;
        })
        .join("") +
      `</div>`
    );
  }

  function renderBlocks(blocks, lang) {
    return blocks
      .map((b) => {
        if (b.p) return `<p>${b.p[lang]}</p>`;
        if (b.ul) return `<ul>${b.ul[lang].map((i) => `<li>${i}</li>`).join("")}</ul>`;
        if (b.ol) return `<ol>${b.ol[lang].map((i) => `<li>${i}</li>`).join("")}</ol>`;
        return "";
      })
      .join("");
  }

  function renderSections(sections, lang) {
    return sections
      .map(
        (s) => `<section class="policy-section"><h2>${s.h[lang]}</h2>${renderBlocks(s.blocks, lang)}</section>`
      )
      .join("");
  }

  function renderOverview(lang) {
    const ui = PRIVACY.ui;
    const list = PRIVACY.order
      .map((id) => {
        const badge = PRIVACY.badge[id] ? `（${PRIVACY.badge[id][lang]}）` : "";
        return `<li><a href="${withLang(`${id}.html`, lang)}">${PRIVACY.names[id][lang]}${badge}</a></li>`;
      })
      .join("");
    return `
      ${renderNav("index", lang)}
      <div class="prose" style="max-width:820px">
        <p class="lead-muted">${ui.overviewLead[lang]}</p>
        <h2>${ui.chooseHeading[lang]}</h2>
        <ul>${list}</ul>
        <h2>${ui.contactHeading[lang]}</h2>
        <p>${ui.contactBody[lang]}</p>
      </div>`;
  }

  function renderApp(appId, lang) {
    const ui = PRIVACY.ui;
    const sections = PRIVACY.policies[appId];
    const label =
      PRIVACY.names[appId].zh === PRIVACY.names[appId].en
        ? PRIVACY.names[appId].zh
        : `${PRIVACY.names[appId].zh} · ${PRIVACY.names[appId].en}`;
    const badge = PRIVACY.badge[appId]
      ? ` · <span class="meta-badge">${PRIVACY.badge[appId][lang]}</span>`
      : "";
    return `
      ${renderNav(appId, lang)}
      <div class="article-head">
        <span class="tag">${label}</span>
        <h1>${ui.policyTitle[lang]}</h1>
        <div class="article-meta">${ui.updated[lang]}${badge}</div>
      </div>
      <div class="prose">${renderSections(sections, lang)}</div>
      <div class="prose" style="margin-top:32px">
        <h2>${ui.contactHeading[lang]}</h2>
        <p>${ui.contactBody[lang]}</p>
      </div>`;
  }

  function render() {
    const root = document.getElementById("policy");
    if (!root || typeof PRIVACY === "undefined") return;
    const app = document.body.getAttribute("data-app") || "index";
    const lang = getLang();

    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

    const eyebrow = PRIVACY.ui.pageEyebrow[lang];
    const heading =
      app === "index" ? PRIVACY.ui.overviewHeading[lang] : PRIVACY.names[app][lang];

    root.innerHTML = `
      <div class="policy-top">
        <div>
          <span class="eyebrow">${eyebrow}</span>
        </div>
        ${renderLangSwitch(lang)}
      </div>
      ${app === "index" ? renderOverview(lang) : renderApp(app, lang)}`;

    // 语言切换：更新 URL（?lang=）但不刷新页面，支持分享/收藏/前进后退
    root.querySelectorAll(".lang-switch a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const next = a.getAttribute("data-lang");
        if (next === getLang()) return;
        setLang(next);
        const url = new URL(location.href);
        url.searchParams.set("lang", next);
        history.pushState({ lang: next }, "", url);
        render();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    // 浏览器前进/后退时按 URL 重新渲染
    window.addEventListener("popstate", render);
  });
})();
