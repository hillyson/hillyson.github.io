/* ============================================================
   隐私政策内容（多语言）
   - today-income / woodenfish: 还原 mlaohu.com 官方政策模板（zh / en）
   - crs-tax-calc: 同结构，内容按其端内处理 + Apple 内购的实际情况编写
   渲染逻辑见 js/privacy.js
   ============================================================ */

/* 通用模板（今日收入 / 电子木鱼共用，仅替换产品名） */
function privacyTemplate(zhName, enName) {
  return [
    {
      h: { zh: "提示条款", en: "Notice" },
      blocks: [
        {
          p: {
            zh: `本隐私权政策适用于「${zhName}」提供的软件、网站、服务（统称为「本产品」），包括但不限于适用于电脑、移动智能终端的产品及服务。`,
            en: `This Privacy Policy applies to the software, websites and services provided by “${enName}” (collectively, “the Product”), including but not limited to products and services for computers and mobile smart terminals.`,
          },
        },
        {
          p: {
            zh: "本产品尊重并保护所有使用用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本产品会按照本隐私权政策的规定使用和披露您的个人信息。但本产品将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本产品不会将这些信息对外披露或向第三方提供。本产品会不时更新本隐私权政策。您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本产品或服务使用协议不可分割的一部分。",
            en: "The Product respects and protects the personal privacy of all users. In order to provide you with more accurate and personalized services, the Product will use and disclose your personal information in accordance with this Privacy Policy. The Product will treat such information with a high degree of diligence and prudence. Except as otherwise provided in this Privacy Policy, the Product will not disclose such information to the public or provide it to third parties without your prior consent. The Product may update this Privacy Policy from time to time. By agreeing to the service agreement of this application, you are deemed to have agreed to all the content of this Privacy Policy. This Privacy Policy is an integral part of the Product or service agreement.",
          },
        },
      ],
    },
    {
      h: { zh: "适用范围", en: "Scope of Application" },
      blocks: [
        { p: { zh: "本隐私权政策适用于以下情形：", en: "This Privacy Policy applies to the following situations:" } },
        {
          ol: {
            zh: [
              "在您注册本产品时，您根据本产品要求提供的个人注册信息；",
              "在您使用本产品网络服务，或访问本产品平台网页时，本产品自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的 IP 地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；",
              "本产品通过合法途径从商业伙伴处取得的用户个人数据。",
            ],
            en: [
              "The personal registration information you provide as required by the Product when you register;",
              "Information on your browser and computer that the Product automatically receives and records when you use the Product’s network services or visit the Product’s web pages, including but not limited to your IP address, browser type, language used, date and time of access, hardware and software feature information, and the web page records you request;",
              "User personal data obtained by the Product from business partners through legal channels.",
            ],
          },
        },
        { p: { zh: "您了解并同意，以下信息不适用本隐私权政策：", en: "You understand and agree that the following information does not fall under this Privacy Policy:" } },
        {
          ol: {
            zh: [
              "您在使用本产品平台提供的搜索服务时输入的关键字信息；",
              "本产品收集到的您在本产品发布的有关信息数据，包括但不限于发布文字、评价、参与活动、成交信息；",
              "违反法律规定或违反本产品规则行为及本产品已对您采取的措施。",
            ],
            en: [
              "The keywords you enter when using the search service provided by the Product platform;",
              "Information and data collected by the Product that you publish on the Product, including but not limited to published text, reviews, activity participation and transaction information;",
              "Acts that violate laws and regulations or the Product’s rules, and the measures the Product has taken against you.",
            ],
          },
        },
      ],
    },
    {
      h: { zh: "信息使用", en: "Use of Information" },
      blocks: [
        {
          p: {
            zh: "本产品不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本产品（含本产品关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。",
            en: "The Product will not provide, sell, rent, share or trade your personal information to any unrelated third party, unless with your prior permission, or where such third party and the Product (including its affiliates) provide services to you separately or jointly; and after such services end, the third party will be prohibited from accessing all such materials it was previously able to access.",
          },
        },
        {
          p: {
            zh: "本产品亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本产品平台用户如从事上述活动，一经发现，本产品有权立即终止与该用户的服务协议。",
            en: "The Product does not allow any third party to collect, edit, sell or freely disseminate your personal information by any means. If any user of the Product platform engages in the above activities, once discovered, the Product has the right to immediately terminate the service agreement with that user.",
          },
        },
        {
          p: {
            zh: "为服务用户的目的，本产品可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本产品合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。",
            en: "For the purpose of serving users, the Product may use your personal information to provide you with information you may be interested in, including but not limited to sending you product and service information, or sharing information with the Product’s partners so that they can send you information about their products and services (the latter requires your prior consent).",
          },
        },
      ],
    },
    {
      h: { zh: "信息披露", en: "Information Disclosure" },
      blocks: [
        { p: { zh: "在如下情况下，本产品将依据您的个人意愿或法律的规定，全部或部分地披露您的个人信息：", en: "Under the following circumstances, the Product will disclose all or part of your personal information in accordance with your personal wishes or the provisions of the law:" } },
        {
          ul: {
            zh: [
              "经您事先同意，向第三方披露；",
              "为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；",
              "根据法律的有关规定，或者行政、司法机构的要求，向第三方或者行政、司法机构披露；",
              "如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；",
              "如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；",
              "在本产品平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，本产品有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决；",
              "其它本产品根据法律、法规或者网站政策认为合适的披露。",
            ],
            en: [
              "Disclosure to a third party with your prior consent;",
              "Sharing your personal information with a third party as necessary to provide the products and services you request;",
              "Disclosure to a third party or to administrative or judicial authorities in accordance with the law, or at the request of administrative or judicial authorities;",
              "Disclosure to a third party where you violate relevant Chinese laws and regulations, or the application’s service agreement or related rules;",
              "If you are a qualified intellectual property complainant and have filed a complaint, disclosure to the respondent at the respondent’s request, so that both parties can handle possible rights disputes;",
              "In a transaction created on the Product platform, if any party has performed or partially performed its obligations and requests disclosure, the Product has the right to decide to provide that user with necessary information such as the counterparty’s contact details, in order to facilitate completion of the transaction or resolution of disputes;",
              "Other disclosures the Product considers appropriate in accordance with laws, regulations or website policies.",
            ],
          },
        },
      ],
    },
    {
      h: { zh: "信息存储和交换", en: "Information Storage and Exchange" },
      blocks: [
        {
          p: {
            zh: "本产品收集的有关您的信息和资料将保存在本产品及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在的国家、地区，或本产品收集信息和资料所在地的境外，并在境外被访问、存储和展示。",
            en: "The information and data collected by the Product about you will be stored on the servers of the Product and/or its affiliates. Such information and data may be transmitted to, and accessed, stored and displayed in, your country or region, or outside the location where the Product collects the information and data.",
          },
        },
        {
          p: {
            zh: "在您未拒绝接受 Cookie 的情况下，本产品会在您的设备上设定或取用 Cookie，以便您能登录或使用依赖于 Cookie 的本应用平台服务或功能。本产品使用 Cookie 可为您提供更加周到的个性化服务，包括推广服务。",
            en: "Unless you refuse to accept cookies, the Product will set or access cookies on your device so that you can log in to or use the services or functions of this application platform that rely on cookies. The Product uses cookies to provide you with more thoughtful and personalized services, including promotional services.",
          },
        },
        {
          p: {
            zh: "您有权选择接受或拒绝接受 Cookie。您可以通过修改浏览器设置的方式拒绝接受 Cookie。但如果您选择拒绝接受 Cookie，则您可能无法登录或使用依赖于 Cookie 的本产品网络服务或功能。通过本产品所设 Cookie 所取得的有关信息，将适用本政策。",
            en: "You have the right to choose to accept or refuse cookies. You can refuse cookies by modifying your browser settings. However, if you choose to refuse cookies, you may not be able to log in to or use the Product’s network services or functions that rely on cookies. Information obtained through the cookies set by the Product is subject to this Policy.",
          },
        },
      ],
    },
    {
      h: { zh: "信息安全", en: "Information Security" },
      blocks: [
        {
          p: {
            zh: "本产品账号均有安全保护功能，请妥善保管您的用户名及密码信息。本产品将通过对用户密码进行加密等安全措施，确保您的信息不丢失、不被滥用和变造。尽管有前述安全措施，但同时也请您注意：在信息网络上不存在「完善的安全措施」。",
            en: "The Product’s accounts all have security protection functions; please keep your username and password safe. The Product will use security measures such as encrypting user passwords to ensure that your information is not lost, misused or altered. Despite the foregoing security measures, please also be aware that there is no “perfect security measure” on information networks.",
          },
        },
        {
          p: {
            zh: "在使用本产品网络服务进行网上交易时，您不可避免地要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄露，请您立即联络本产品客服，以便本应用采取相应措施。",
            en: "When using the Product’s network services for online transactions, you will inevitably disclose your personal information, such as contact details or mailing address, to the counterparty or potential counterparty. Please protect your personal information and provide it to others only when necessary. If you find that your personal information has been leaked, especially your username and password, please contact the Product’s support immediately so that the application can take corresponding measures.",
          },
        },
      ],
    },
    {
      h: { zh: "隐私权政策变更", en: "Changes to this Privacy Policy" },
      blocks: [
        {
          p: {
            zh: "我们的隐私权政策可能变更。未经您明确同意，我们不会限制您按照本隐私权政策所应享有的权利。",
            en: "Our Privacy Policy may change. We will not, without your explicit consent, restrict the rights you are entitled to under this Privacy Policy.",
          },
        },
        { p: { zh: "对于重大变更，我们还会提供更为显著的通知。本政策所指的重大变更包括但不限于：", en: "For material changes, we will also provide more prominent notice. Material changes referred to in this Policy include but are not limited to:" } },
        {
          ol: {
            zh: [
              "我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；",
              "我们在控制权等方面发生重大变化。如并购重组等引起的所有者变更等；",
              "个人信息共享、转让或公开披露的主要对象发生变化；",
              "您参与个人信息处理方面的权利及其行使方式发生重大变化；",
              "我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；",
              "个人信息安全影响评估报告表明存在高风险时。",
            ],
            en: [
              "Major changes to our service model, such as the purpose of processing personal information, the types of personal information processed, or the way personal information is used;",
              "Major changes in our control, such as ownership changes caused by mergers, acquisitions and reorganizations;",
              "Changes in the main parties to whom personal information is shared, transferred or publicly disclosed;",
              "Major changes in your rights to participate in the processing of personal information and the ways to exercise them;",
              "Changes to the department responsible for personal information security, its contact information and complaint channels;",
              "When a personal information security impact assessment report indicates a high risk.",
            ],
          },
        },
      ],
    },
  ];
}

/* 境外证券收益个税计算器：按其端内处理 + Apple 内购的实际情况编写 */
function crsTaxPolicy() {
  return [
    {
      h: { zh: "核心原则：数据不出端", en: "Core Principle: Your Data Stays on Device" },
      blocks: [
        {
          p: {
            zh: "本应用是一款纯客户端工具，无后端服务器、无需注册登录。您导入的结单文件及其解析、计算结果全部在您的设备本地处理与存储，不会上传到任何服务器，本产品也无法访问这些数据。",
            en: "This application is a purely client-side tool with no backend server and no registration or login. The statement files you import, along with their parsing and calculation results, are all processed and stored locally on your device. They are not uploaded to any server, and the Product cannot access this data.",
          },
        },
      ],
    },
    {
      h: { zh: "我们处理的信息", en: "Information We Process" },
      blocks: [
        {
          ul: {
            zh: [
              "您导入的结单文件（如券商导出的年度账单等）：仅用于在本地解析交易记录、计算应纳税所得额与预估税额；",
              "计算与历史记录：为便于您查看历年结果，相关数据保存在设备本地（应用沙盒）。",
            ],
            en: [
              "Statement files you import (such as annual statements exported by a broker): used only to parse transactions locally and compute taxable income and estimated tax;",
              "Calculations and history: to let you review results across years, related data is stored locally on your device (the app sandbox).",
            ],
          },
        },
        {
          p: {
            zh: "我们不收集您的姓名、身份证号、银行账户、电话或住址等个人身份信息。",
            en: "We do not collect personally identifiable information such as your name, ID number, bank account, phone number or address.",
          },
        },
      ],
    },
    {
      h: { zh: "文件访问权限", en: "File Access" },
      blocks: [
        {
          p: {
            zh: "本应用通过系统的「文件」选择器读取您主动选择的结单文件。我们不会在后台扫描或访问您未选择的任何文件。",
            en: "The application reads only the statement files you actively select via the system file picker. We do not scan or access any files you have not selected in the background.",
          },
        },
      ],
    },
    {
      h: { zh: "Apple 内购与支付", en: "In-App Purchases and Payment" },
      blocks: [
        {
          p: {
            zh: "本应用通过 Apple 内购（In-App Purchase）提供付费解锁功能。支付流程完全由 Apple App Store 处理，本产品不会接触您的支付信息（如银行卡号）。购买凭证由设备本地的 StoreKit 校验，用于解锁相应功能。相关交易与账单请参阅 Apple 隐私政策。",
            en: "This application offers paid unlocking through Apple In-App Purchase. The payment process is handled entirely by the Apple App Store, and the Product does not have access to your payment information (such as card numbers). Purchase receipts are validated locally on your device via StoreKit to unlock the corresponding features. For related transactions and billing, please refer to Apple’s Privacy Policy.",
          },
        },
      ],
    },
    {
      h: { zh: "数据存储与安全", en: "Data Storage and Security" },
      blocks: [
        {
          p: {
            zh: "所有数据存储于您的设备本地。如果您卸载本应用或清除数据，相关信息将一并被移除且无法恢复。由于数据不出端，请注意自行保管设备与重要文件。",
            en: "All data is stored locally on your device. If you uninstall the application or clear its data, the related information will be removed and cannot be recovered. Because data never leaves your device, please keep your device and important files safe.",
          },
        },
      ],
    },
    {
      h: { zh: "第三方共享", en: "Third-Party Sharing" },
      blocks: [
        {
          p: {
            zh: "我们不会将您的任何信息出售、出租或共享给第三方。",
            en: "We will not sell, rent or share any of your information with third parties.",
          },
        },
      ],
    },
    {
      h: { zh: "计算结果免责说明", en: "Disclaimer on Calculation Results" },
      blocks: [
        {
          p: {
            zh: "本应用提供的税额为基于公开规则的估算结果，仅供参考，不构成税务、法律或投资建议。实际申报与缴税请以税务机关的规定及专业意见为准。",
            en: "The tax amounts provided by this application are estimates based on publicly available rules and are for reference only. They do not constitute tax, legal or investment advice. Actual filing and payment should follow the regulations of the tax authorities and professional advice.",
          },
        },
      ],
    },
    {
      h: { zh: "儿童隐私", en: "Children’s Privacy" },
      blocks: [
        {
          p: {
            zh: "本应用面向成年投资者，不会有意收集儿童的个人信息。",
            en: "This application is intended for adult investors and does not knowingly collect personal information from children.",
          },
        },
      ],
    },
    {
      h: { zh: "政策更新", en: "Changes to this Policy" },
      blocks: [
        {
          p: {
            zh: "我们可能会不时更新本隐私政策。更新后将在本页面发布，并修改顶部的「最近更新」日期。",
            en: "We may update this Privacy Policy from time to time. Updates will be posted on this page and the “Last updated” date at the top will be revised.",
          },
        },
      ],
    },
  ];
}

const PRIVACY = {
  order: ["today-income", "woodenfish", "crs-tax-calc"],
  names: {
    "today-income": { zh: "今日收入", en: "Today Income" },
    woodenfish: { zh: "电子木鱼", en: "WoodenFish" },
    "crs-tax-calc": { zh: "境外证券收益个税计算器", en: "Overseas Securities Tax Calc" },
  },
  badge: {},
  ui: {
    overview: { zh: "总览", en: "Overview" },
    policyTitle: { zh: "隐私政策", en: "Privacy Policy" },
    updated: { zh: "最近更新：2026 年 6 月", en: "Last updated: June 2026" },
    pageEyebrow: { zh: "隐私政策", en: "Privacy Policy" },
    overviewHeading: {
      zh: "我们如何保护你的隐私",
      en: "How we protect your privacy",
    },
    overviewLead: {
      zh: "本页汇总旗下各款 App 的隐私政策。请选择对应应用查看其完整政策，内容支持中文 / English 切换。",
      en: "This page lists the privacy policies for each of our apps. Choose an app to read its full policy. Content is available in 中文 / English.",
    },
    chooseHeading: { zh: "选择应用查看完整政策", en: "Choose an app to read the full policy" },
    contactHeading: { zh: "联系方式", en: "Contact" },
    contactBody: {
      zh: "如对隐私政策有任何疑问，可前往对应 App 的 App Store 商店页面，通过苹果提供的「App 支持」渠道联系开发者。",
      en: "If you have any questions about a privacy policy, please visit the relevant app’s App Store page and contact the developer through Apple’s “App Support” channel.",
    },
    langLabel: { zh: "语言", en: "Language" },
  },
  template: privacyTemplate,
  policies: {
    "today-income": privacyTemplate("今日收入", "Today Income"),
    woodenfish: privacyTemplate("电子木鱼", "WoodenFish"),
    "crs-tax-calc": crsTaxPolicy(),
  },
};
