# Ivor.C Studio — 产品官网 / 技术支持站

一个用于 App Store 的**技术支持网站**，同时也是聚焦产品的个人博客。纯静态站点（HTML + CSS + 原生 JS），无需构建步骤，可直接部署到 GitHub Pages / Vercel / Netlify。

> 设计原则：**保护个人隐私**。站点不暴露真实姓名、电话、住址，所有联系方式统一走一个可配置的支持邮箱。

## 目录结构

```
.
├── index.html              # 首页：Hero + 产品展示 + 设计理念
├── support.html            # 技术支持：联系方式 + 常见问题(FAQ)
├── blog/
│   ├── index.html          # 博客列表
│   └── posts/
│       └── welcome.html    # 示例文章
├── privacy/                # App Store 要求的隐私政策目录（中文 / English 一键切换）
│   ├── index.html          # 隐私政策总览
│   ├── today-income.html   # 《今日收入》隐私政策
│   ├── woodenfish.html     # 《电子木鱼》隐私政策
│   └── crs-tax-calc.html   # 《境外证券收益个税计算器》隐私政策（即将上架）
├── css/styles.css          # 设计系统 / 样式
├── js/privacy-data.js      # 隐私政策全部文案（zh / en，集中维护）
├── js/privacy.js           # 隐私政策渲染 + 语言切换
├── js/main.js              # 站点配置 + 产品数据 + 导航/页脚/交互
├── assets/
│   ├── favicon.svg         # 站点图标
│   └── icons/              # 各 App 的官方图标（首页产品卡使用）
└── .nojekyll               # 让 GitHub Pages 原样发布静态文件
```

## 快速开始

只需一个静态服务器即可本地预览：

```bash
# 任选其一
python3 -m http.server 8080
# 或
npx serve .
```

然后访问 http://localhost:8080 。

## 如何自定义（重要）

几乎所有需要修改的内容都集中在 **`js/main.js` 顶部的 `SITE` 和 `PRODUCTS`**：

1. **`SITE.brand` / `brandMark` / `copyrightName`** —— 品牌名（当前为 `Ivor.C Studio`），如需更换在此修改。
2. **`PRODUCTS[].appStoreUrl`** —— App 上架后填入商店链接，卡片会自动出现 “App Store ↗”。
3. **App 图标** —— 产品卡使用 `PRODUCTS[].img`（真实图标，放在 `assets/icons/`）。若某项没有 `img`，会回退到 `icon`（emoji）+ `gradient` 底色。`status: "soon"` 会显示「即将上架」角标。
4. **新增博客文章** —— 复制 `blog/posts/welcome.html` 改写内容，并在 `blog/index.html` 增加一张卡片。
5. **新增 App** —— 在 `PRODUCTS` 数组里加一项；隐私政策只需在 `js/privacy-data.js` 的 `PRIVACY.policies` 里补一条（zh / en），再复制一个 `privacy/<id>.html`（仅改 `data-app`）即可。

### 隐私政策（多语言）

- 所有政策文案集中在 **`js/privacy-data.js`**，每条都含 `zh` / `en` 两种语言，页面右上角可一键切换（选择会记忆在浏览器）。
- `今日收入`、`电子木鱼` 的内容还原自其官方政策模板；`境外证券收益个税计算器` 按其「端内处理 + Apple 内购」的实际情况编写。
- 修改文案：直接编辑 `js/privacy-data.js`；无需改动 HTML。

> **关于联系方式（重要）**：本站为**自助式技术支持**，刻意**不提供邮件反馈入口**，以避免邮箱被骚扰。用户的支持/反馈统一引导到 **App Store 商店页面（苹果的「App 支持」渠道）**。如果将来你想加回邮箱，只需在 `SITE` 里加 `supportEmail` 字段并自行补回链接即可。

## 部署到 GitHub Pages

1. 推送到 GitHub 仓库。
2. 仓库 Settings → Pages → Source 选择 `main` 分支根目录。
3. 站点会发布在 `https://<用户名>.github.io/<仓库名>/`。链接已做相对路径处理，子路径也能正常工作。

## 隐私说明

- 站点本身不收集访客数据，无第三方追踪脚本。
- 主题偏好仅用浏览器本地 `localStorage` 保存。
- 各 App 的隐私政策模板已写好通用条款，请根据实际数据处理情况核对后再上线。
