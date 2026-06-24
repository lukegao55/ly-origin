import { useEffect, useState } from 'react'
import {
  siAlibabacloud,
  siAnthropic,
  siBytedance,
  siClaude,
  siDeepseek,
  siGooglecloud,
  siGooglegemini,
  siHuawei,
  siMoonshotai,
  siQwen,
  siSupabase,
  siVercel,
} from 'simple-icons'
import './App.css'

const email = 'luke@ly-origin.com'

const translations = {
  zh: {
    htmlLang: 'zh-CN',
    title: '领弈禾元',
    description:
      '深圳领弈禾元科技有限公司专注 AI 软件开发、工作流搭建、数据与知识工程，帮助企业把 AI 能力落到业务流程里。',
    brand: '领弈禾元',
    company: '深圳领弈禾元科技有限公司',
    navAria: '主导航',
    nav: [
      ['partners', '生态'],
      ['products', '产品'],
      ['services', '服务'],
      ['delivery', '流程'],
      ['about', '联系'],
    ],
    langLabel: 'Switch language',
    langToggle: 'EN',
    cta: '预约咨询',
    secondaryCta: '查看产品结构',
    heroSubtitle: '把 AI 能力落到业务流程里',
    heroDesc:
      '我们为不同需求提供 AI 化的帮助，从应用开发、内容生产到流程自动化，让想法更快变成可使用的系统。',
    partnersHeading: '连接主流模型与云生态',
    partnersIntro:
      '面向实际业务场景接入模型、云服务、数据库和部署平台，让 AI 能力稳定进入企业系统。',
    partnerRows: [
      [
        ['chatgpt', 'ChatGPT'],
        ['gemini', 'Gemini'],
        ['claude', 'Claude'],
        ['anthropic', 'Anthropic'],
        ['deepseek', 'DeepSeek'],
        ['qwen', '通义千问'],
        ['doubao', '豆包'],
        ['zhipu', '智谱 AI'],
        ['moonshot', 'Moonshot'],
      ],
      [
        ['volcengine', '火山引擎'],
        ['aws', 'AWS'],
        ['googlecloud', 'Google Cloud'],
        ['azure', 'Azure'],
        ['alibabacloud', '阿里云'],
        ['tencentcloud', '腾讯云'],
        ['huaweicloud', '华为云'],
        ['vercel', 'Vercel'],
        ['supabase', 'Supabase'],
      ],
    ],
    productsHeading: '旗下产品',
    productsIntro:
      '通过 AI 赋能内容创作、资料整理、视觉资产和页面搭建，我们显著提升了产品从想法到上线的效率。',
    products: [
      {
        name: '疯狂一家人',
        englishName: 'CrazyFam',
        eyebrow: '聚会游戏',
        summary: 'AI 让疯狂一家人能更快生成和迭代聚会内容，从玩法想法快速变成可上线的游戏体验。',
        theme: 'crazyfam',
        productUrl: '/crazyfam/index.html',
        appStoreUrl: 'https://apps.apple.com/us/app/crazyfam/id6754828243',
        privacyUrl: '/crazyfam/privacy-policy.html',
        productCta: '进入产品网站',
        appStoreCta: '在 App Store 下载',
        privacyCta: '隐私条款',
      },
      {
        name: '拳伴',
        englishName: 'RoundBuddy',
        eyebrow: '训练陪伴',
        summary: 'AI 让拳伴能更快把训练经验转化成可执行计划，降低内容设计和迭代成本。',
        theme: 'roundbuddy',
        productUrl: '/roundbuddy/index.html',
        appStoreUrl: 'https://apps.apple.com/us/app/roundbuddy/id6779547962',
        privacyUrl: '/roundbuddy/privacy-policy.html',
        productCta: '进入产品网站',
        appStoreCta: '在 App Store 下载',
        privacyCta: '隐私条款',
      },
      {
        name: '鞋世界',
        englishName: 'TopShoesWorld',
        eyebrow: 'AI 电商平台',
        summary: 'AI 让鞋世界帮助传统鞋业更快出海，从产品内容生成到询盘处理，提升跨境获客和转化效率。',
        theme: 'topshoes',
        productUrl: 'https://www.topshoesworld.com/',
        productCta: '进入产品网站',
      },
    ],
    servicesHeading: '服务能力',
    servicesIntro: '围绕当前最有价值的 AI 场景，把模型能力、业务知识和运营动作组合成可持续使用的服务能力。',
    services: [
      ['AI Agent', '面向客服、销售、运营和内部协作设计可执行任务的智能体。'],
      ['知识库与 RAG', '把文档、产品资料和业务经验变成可检索、可问答的 AI 知识系统。'],
      ['AI 客服与销售助手', '自动处理咨询、线索跟进、FAQ、产品推荐和售前沟通。'],
      ['AIGC 内容生产', '为商品、短视频、社媒、广告和品牌内容建立稳定生成流程。'],
      ['AI 电商出海', '商品内容、询盘回复、买家沟通和多语言运营的 AI 化能力。'],
      ['多模型接入', '按场景组合 ChatGPT、Gemini、Claude、DeepSeek、豆包等模型能力。'],
      ['数据洞察助手', '把经营数据、用户反馈和业务记录转化成可追问的分析助手。'],
      ['AI 运营自动化', '让 AI 参与日常运营动作，包括内容排期、客户触达和效果复盘。'],
    ],
    deliveryHeading: 'AI 能力落地路径',
    deliveryIntro: '我们不是单纯接需求做系统，而是帮助你判断哪些场景值得 AI 化，并把能力沉淀成长期可运营的服务。',
    deliverySteps: [
      ['01', 'AI 场景识别', '找到最适合用 AI 提效的业务场景，区分真正有价值的机会和噱头。'],
      ['02', '能力组合设计', '选择模型、知识库、工具调用和人工协作方式，形成可落地的 AI 服务方案。'],
      ['03', '知识与流程接入', '把产品资料、业务规则、客户问题和运营动作接入 AI 能力链路。'],
      ['04', '服务上线运营', '让 AI 进入真实业务触点，在咨询、内容、销售或运营场景中持续工作。'],
      ['05', '效果复盘升级', '根据使用数据和反馈优化提示词、知识内容、工具链和自动化策略。'],
    ],
    contactHeading: '让 AI 成为业务增长的基础设施',
    contactIntro: '从场景洞察到落地执行，我们陪伴企业构建可持续的 AI 能力与自动化体系。',
    contactName: 'luke gao',
    contactCardTitle: '联系我们',
    contactCardMeta: '留下你的需求，我们会尽快回复。',
    contactNameLabel: '称呼',
    contactNamePlaceholder: '你的名字',
    contactMethodLabel: '联系方式',
    contactMethodPlaceholder: '邮箱 / 微信 / 电话',
    contactMessageLabel: '留言',
    contactMessagePlaceholder: '简单说说你想用 AI 解决什么问题',
    contactSubmit: '发送留言',
    contactSubject: '官网留言咨询',
  },
  en: {
    htmlLang: 'en',
    title: 'ly origin',
    description:
      'ly origin builds AI software, workflow automation, data and knowledge systems that bring AI capabilities into real business processes.',
    brand: 'ly origin',
    company: 'ly origin',
    navAria: 'Main navigation',
    nav: [
      ['partners', 'Partners'],
      ['products', 'Products'],
      ['services', 'Services'],
      ['delivery', 'Process'],
      ['about', 'Contact'],
    ],
    langLabel: '切换语言',
    langToggle: '中文',
    cta: 'Contact us',
    secondaryCta: 'View product system',
    heroSubtitle: 'Bring AI into real business workflows',
    heroDesc:
      'We bring AI into different kinds of needs, from application development and content production to workflow automation, turning ideas into usable systems faster.',
    partnersHeading: 'Connected to the model and cloud ecosystem',
    partnersIntro:
      'We integrate models, cloud services, databases, and deployment platforms around real business systems.',
    partnerRows: [
      [
        ['chatgpt', 'ChatGPT'],
        ['gemini', 'Gemini'],
        ['claude', 'Claude'],
        ['anthropic', 'Anthropic'],
        ['deepseek', 'DeepSeek'],
        ['qwen', 'Qwen'],
        ['doubao', 'Doubao'],
        ['zhipu', 'Zhipu AI'],
        ['moonshot', 'Moonshot'],
      ],
      [
        ['volcengine', 'Volcengine'],
        ['aws', 'AWS'],
        ['googlecloud', 'Google Cloud'],
        ['azure', 'Azure'],
        ['alibabacloud', 'Alibaba Cloud'],
        ['tencentcloud', 'Tencent Cloud'],
        ['huaweicloud', 'Huawei Cloud'],
        ['vercel', 'Vercel'],
        ['supabase', 'Supabase'],
      ],
    ],
    productsHeading: 'Products',
    productsIntro:
      'AI improves how fast we create content, organize domain knowledge, prepare visual assets, and assemble product pages from idea to launch.',
    products: [
      {
        name: 'CrazyFam',
        englishName: '疯狂一家人',
        eyebrow: 'Party game',
        summary:
          'AI helps CrazyFam turn gameplay ideas into shippable party content faster, reducing the cost of content iteration.',
        theme: 'crazyfam',
        productUrl: '/crazyfam/index.html',
        appStoreUrl: 'https://apps.apple.com/us/app/crazyfam/id6754828243',
        privacyUrl: '/crazyfam/privacy-policy.html',
        productCta: 'Open product site',
        appStoreCta: 'Download on the App Store',
        privacyCta: 'Privacy policy',
      },
      {
        name: 'RoundBuddy',
        englishName: '拳伴',
        eyebrow: 'Training companion',
        summary:
          'AI helps RoundBuddy turn training knowledge into executable plans faster, lowering the cost of session design.',
        theme: 'roundbuddy',
        productUrl: '/roundbuddy/index.html',
        appStoreUrl: 'https://apps.apple.com/us/app/roundbuddy/id6779547962',
        privacyUrl: '/roundbuddy/privacy-policy.html',
        productCta: 'Open product site',
        appStoreCta: 'Download on the App Store',
        privacyCta: 'Privacy policy',
      },
      {
        name: 'TopShoesWorld',
        englishName: '鞋世界',
        eyebrow: 'Footwear AI commerce',
        summary:
          'AI helps traditional footwear companies go global with faster product content generation and inquiry handling.',
        theme: 'topshoes',
        productUrl: 'https://www.topshoesworld.com/',
        productCta: 'Open product site',
      },
    ],
    servicesHeading: 'Services',
    servicesIntro:
      'We combine models, business knowledge, and operational actions into AI services people can keep using.',
    services: [
      ['AI Agents', 'Task-oriented agents for support, sales, operations, and internal collaboration.'],
      ['Knowledge Base and RAG', 'Turn documents, product materials, and business know-how into searchable AI knowledge.'],
      ['AI Support and Sales', 'Automate inquiries, lead follow-up, FAQ, recommendations, and presales conversations.'],
      ['AIGC Content Production', 'Reliable generation workflows for product, social, ad, video, and brand content.'],
      ['AI Commerce Globalization', 'AI-powered product content, inquiry replies, buyer communication, and multilingual ops.'],
      ['Multi-model Integration', 'Combine ChatGPT, Gemini, Claude, DeepSeek, Doubao, and other models by scenario.'],
      ['Data Insight Assistants', 'Make business data, feedback, and records explorable through conversational analysis.'],
      ['AI Operations Automation', 'Use AI for content scheduling, customer touchpoints, follow-ups, and performance review.'],
    ],
    deliveryHeading: 'AI Service Path',
    deliveryIntro:
      'We help identify which scenarios deserve AI, then turn model capability into services that can be operated over time.',
    deliverySteps: [
      ['01', 'Find AI Opportunities', 'Identify where AI can create real leverage and separate useful scenarios from noise.'],
      ['02', 'Compose Capabilities', 'Choose models, knowledge, tool use, and human collaboration patterns for the service.'],
      ['03', 'Connect Knowledge and Flow', 'Bring product material, rules, customer questions, and operations into the AI loop.'],
      ['04', 'Operate in Real Touchpoints', 'Put AI into support, content, sales, or operations where it can keep working.'],
      ['05', 'Review and Upgrade', 'Improve prompts, knowledge, tools, and automation based on usage and feedback.'],
    ],
    contactHeading: 'Make AI business infrastructure',
    contactIntro:
      'From scenario discovery to production execution, we help companies build sustainable AI and automation capabilities.',
    contactName: 'luke gao',
    contactCardTitle: 'Contact us',
    contactCardMeta: 'Leave your request and we will get back to you soon.',
    contactNameLabel: 'Name',
    contactNamePlaceholder: 'Your name',
    contactMethodLabel: 'Contact',
    contactMethodPlaceholder: 'Email / WeChat / phone',
    contactMessageLabel: 'Message',
    contactMessagePlaceholder: 'Tell us what you want AI to help with',
    contactSubmit: 'Send message',
    contactSubject: 'Website inquiry',
  },
}

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function SectionHeader({ title, intro }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  )
}

const simpleIconMap = {
  alibabacloud: siAlibabacloud,
  anthropic: siAnthropic,
  claude: siClaude,
  deepseek: siDeepseek,
  doubao: siBytedance,
  gemini: siGooglegemini,
  googlecloud: siGooglecloud,
  huaweicloud: siHuawei,
  moonshot: siMoonshotai,
  qwen: siQwen,
  supabase: siSupabase,
  vercel: siVercel,
}

function CustomPartnerIcon({ id }) {
  if (id === 'chatgpt') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.8">
          <path d="M30.7 7.8c5.2-3 11.9-1.3 15 3.9 1.2 2.1 1.7 4.4 1.5 6.6 5.5 1.5 9.5 6.5 9.5 12.5 0 3.9-1.7 7.5-4.5 9.9.6 5.8-3.1 11.5-8.9 13.1-2.4.7-4.8.6-7-.2-3.7 4.4-10.1 5.6-15.2 2.6-3.4-2-5.5-5.3-6.1-8.9-5.5-1.6-9.4-6.6-9.4-12.5 0-3.9 1.7-7.4 4.4-9.8-.6-5.8 3.1-11.5 8.9-13.2 2.4-.7 4.8-.6 7 .2 1.2-1.7 2.8-3.1 4.8-4.2Z" />
          <path d="m22.8 43.9 18.5-10.7V21.9" />
          <path d="m41.2 20.1-18.5 10.7-9.8-5.7" />
          <path d="m14.7 38.6 18.5 10.7 9.8-5.7" />
          <path d="M49.3 25.4 30.8 14.7 21 20.4" />
          <path d="M49.3 38.6V17.2" />
          <path d="M14.7 25.4v21.4" />
        </g>
      </svg>
    )
  }

  if (id === 'aws') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M14 25c4-8 13-12 22-9 7 2 12 8 13 16 5 1 9 5 9 11 0 7-5 12-12 12H19C11 55 5 49 5 41c0-7 4-13 9-16Z" />
          <path d="M20 39c8 7 22 7 31-1" />
          <path d="m48 36 5 2-2 5" />
        </g>
      </svg>
    )
  }

  if (id === 'azure') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="currentColor" d="M35 7 16 43h17l-10 14 27-25H34l14-25H35Z" />
      </svg>
    )
  }

  if (id === 'tencentcloud') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M17 44c-7 0-12-5-12-12 0-6 4-11 10-12 3-8 10-13 19-13 10 0 18 7 20 17 4 2 7 6 7 11 0 7-5 12-12 12H17Z" />
          <path d="M25 28h18M25 37h18" />
        </g>
      </svg>
    )
  }

  if (id === 'volcengine') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M8 52 25 16l9 18 6-11 16 29H8Z" />
          <path d="M30 13c4 5 3 9-1 13 8-3 13-8 10-18" />
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M32 6 54 19v26L32 58 10 45V19L32 6Z" />
        <path d="M32 19v26M20 26l12-7 12 7M20 38l12 7 12-7" />
      </g>
    </svg>
  )
}

function BrandIcon({ id }) {
  const icon = simpleIconMap[id]

  if (!icon) {
    return <CustomPartnerIcon id={id} />
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}

function PartnerCarousel({ rows }) {
  return (
    <div className="partner-carousel" aria-label="Partners carousel">
      {rows.map((row, rowIndex) => {
        const repeated = [...row, ...row]

        return (
          <div
            className={`partner-track ${rowIndex === 1 ? 'reverse' : ''}`}
            key={rowIndex === 0 ? 'models' : 'clouds'}
          >
            {repeated.map(([id, label], index) => (
              <article className="partner-logo" key={`${id}-${rowIndex}-${index}`}>
                <BrandIcon id={id} />
                <span>{label}</span>
              </article>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function ProductShowcase({ products }) {
  return (
    <div className="product-showcase">
      {products.map((product) => (
        <article className={`product-panel product-panel-${product.theme}`} key={product.name}>
          <div className="product-main-link">
            <span className="product-eyebrow">{product.eyebrow}</span>
            <div>
              <h3>{product.name}</h3>
              <span className="product-subname">{product.englishName}</span>
            </div>
            <p>{product.summary}</p>
          </div>
          <div className="product-link-row">
            <a className="product-open" href={product.productUrl}>
              {product.productCta}
              <Arrow />
            </a>
            {product.privacyUrl ? (
              <a className="product-privacy-link" href={product.privacyUrl}>
                {product.privacyCta}
              </a>
            ) : null}
          </div>
          {product.appStoreUrl ? (
            <a className="app-store-badge" href={product.appStoreUrl} aria-label={product.appStoreCta}>
              <img src="/download-on-app-store.svg" alt="" />
            </a>
          ) : null}
        </article>
      ))}
    </div>
  )
}

function DeliveryFlow({ steps }) {
  return (
    <div className="delivery-flow">
      {steps.map(([number, title, body]) => (
        <article key={number}>
          <span>{number}</span>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function NetworkField() {
  return <div className="halo-field" aria-hidden="true" />
}

function App() {
  const [language, setLanguage] = useState('zh')
  const copy = translations[language]
  const nextLanguage = language === 'zh' ? 'en' : 'zh'

  function handleSectionPointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    event.currentTarget.style.setProperty('--mx', ((x - 0.5) * 2).toFixed(3))
    event.currentTarget.style.setProperty('--my', ((y - 0.5) * 2).toFixed(3))
    event.currentTarget.style.setProperty('--px', `${Math.round(x * 100)}%`)
    event.currentTarget.style.setProperty('--py', `${Math.round(y * 100)}%`)
  }

  function handleSectionPointerLeave(event) {
    event.currentTarget.style.setProperty('--mx', '0')
    event.currentTarget.style.setProperty('--my', '0')
    event.currentTarget.style.setProperty('--px', '50%')
    event.currentTarget.style.setProperty('--py', '50%')
  }

  function handleContactSubmit(event) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = form.get('name')?.toString().trim()
    const contact = form.get('contact')?.toString().trim()
    const message = form.get('message')?.toString().trim()
    const body = [
      `${copy.contactNameLabel}: ${name}`,
      `${copy.contactMethodLabel}: ${contact}`,
      '',
      `${copy.contactMessageLabel}:`,
      message,
    ].join('\n')

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(copy.contactSubject)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
    document.title = copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy])

  return (
    <main>
      <section
        className="hero-section"
        id="top"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <header className="site-header">
          <a className="brand" href="#top" aria-label={copy.company}>
            {copy.brand}
          </a>
          <nav aria-label={copy.navAria}>
            {copy.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              type="button"
              aria-label={copy.langLabel}
              onClick={() => setLanguage(nextLanguage)}
            >
              {copy.langToggle}
            </button>
          </div>
        </header>

        <div className="hero-layout">
          <NetworkField />
          <div className="hero-copy">
            <h1>
              {language === 'zh' ? (
                <>
                  把 <em>AI 能力</em> 落到业务流程里
                </>
              ) : (
                <>
                  Bring <em>AI capabilities</em> into real business workflows
                </>
              )}
            </h1>
            <p className="hero-desc">{copy.heroDesc}</p>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${email}`}>
                {copy.cta}
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section partners-section"
        id="partners"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.partnersHeading} intro={copy.partnersIntro} />
        <PartnerCarousel rows={copy.partnerRows} />
      </section>

      <section
        className="section products-section"
        id="products"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.productsHeading} intro={copy.productsIntro} />
        <ProductShowcase products={copy.products} />
      </section>

      <section
        className="section services-section"
        id="services"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.servicesHeading} intro={copy.servicesIntro} />
        <div className="split-list">
          {copy.services.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section delivery-section"
        id="delivery"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.deliveryHeading} intro={copy.deliveryIntro} />
        <DeliveryFlow steps={copy.deliverySteps} />
      </section>

      <section
        className="contact-section"
        id="about"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <div>
          <h2>{copy.contactHeading}</h2>
          <p>{copy.contactIntro}</p>
        </div>
        <form className="contact-card" onSubmit={handleContactSubmit}>
          <div className="contact-card-head">
            <strong>{copy.contactCardTitle}</strong>
            <span>{copy.contactCardMeta}</span>
          </div>
          <label>
            <span>{copy.contactNameLabel}</span>
            <input name="name" type="text" placeholder={copy.contactNamePlaceholder} required />
          </label>
          <label>
            <span>{copy.contactMethodLabel}</span>
            <input name="contact" type="text" placeholder={copy.contactMethodPlaceholder} required />
          </label>
          <label>
            <span>{copy.contactMessageLabel}</span>
            <textarea name="message" rows="3" placeholder={copy.contactMessagePlaceholder} required />
          </label>
          <button className="primary-button" type="submit">
            {copy.contactSubmit}
            <Arrow />
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
