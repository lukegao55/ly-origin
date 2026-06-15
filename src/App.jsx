import { useEffect, useState } from 'react'
import './App.css'

const translations = {
  zh: {
    htmlLang: 'zh-CN',
    title: '深圳领弈禾元科技有限公司 | AI 软件开发与工作流搭建',
    description:
      '深圳领弈禾元科技有限公司专注 AI 软件开发、工作流搭建、数据与知识工程，帮助企业把 AI 能力落到业务流程里。',
    brand: '领弈禾元',
    brandAria: '深圳领弈禾元科技有限公司',
    navAria: '主导航',
    nav: [
      ['services', '服务'],
      ['process', '交付流程'],
      ['solutions', '解决方案'],
      ['about', '关于我们'],
    ],
    cta: '预约咨询',
    processCta: '查看交付流程',
    heroTitle: '深圳领弈禾元科技有限公司',
    heroServices: ['AI 软件开发', '工作流搭建'],
    heroLead: '把 AI 能力落到业务流程里',
    heroDesc:
      '我们帮助企业从流程梳理、AI 应用开发到自动化交付，把模型、数据、系统和人协同起来，形成稳定可复用的智能工作流。',
    heroVisualLabel: 'AI 工作流编排视觉图',
    heroVisualAlt: 'AI 工作流编排与自动化系统视觉图',
    servicesHeading: '服务能力',
    servicesIntro: '从想法到上线，覆盖 AI 应用落地的关键环节。',
    services: [
      ['code', 'AI 软件开发', '面向业务目标定制 AI 应用、内部工具、智能体与企业级系统。'],
      ['flow', '工作流搭建', '梳理流程、连接系统、自动执行，让 AI 真正进入日常运营。'],
      ['data', '数据与知识工程', '数据治理、知识库构建、RAG 检索与结构化沉淀。'],
      ['ops', '运维与持续优化', '上线监控、效果评估、迭代调优，保障长期可用。'],
    ],
    processHeading: '交付流程',
    processIntro: '用工程化节奏控制 AI 项目从探索到生产的每一步。',
    process: [
      ['01', '需求洞察', '识别高价值业务流程与 AI 落地点', 'search'],
      ['02', '方案设计', '输出技术路线、系统边界与交付计划', 'plan'],
      ['03', '开发实现', '快速构建应用、集成系统与数据', 'build'],
      ['04', '测试验证', '验证性能、安全、可用性与业务效果', 'verify'],
      ['05', '上线交付', '部署上线、培训团队并建立使用规范', 'launch'],
      ['06', '持续优化', '基于数据反馈持续提升自动化成效', 'growth'],
    ],
    solutionsHeading: '解决方案与场景',
    solutionsIntro: '聚焦真实业务，不做悬空的 AI 演示。',
    scenarios: [
      ['智能客服与运营', '多渠道问答、工单分流、服务流程自动化', 'chat'],
      ['企业知识助手', '内部知识检索、制度问答、专家经验复用', 'cube'],
      ['流程自动化', '跨系统审批、报表、通知与任务编排', 'flow'],
      ['数据分析与洞察', '业务数据汇总、可视化分析与决策辅助', 'chart'],
      ['行业定制方案', '围绕企业场景设计专属 AI 解决方案', 'building'],
    ],
    contactHeading: '让 AI 成为业务增长的引擎',
    contactIntro: '从场景洞察到落地执行，我们陪伴企业构建可持续的 AI 能力与自动化体系。',
    companyName: '深圳领弈禾元科技有限公司',
    languageLabel: 'Switch language',
    languageToggle: 'EN',
  },
  en: {
    htmlLang: 'en',
    title: 'ly origin | AI Software Development and Workflow Automation',
    description:
      'ly origin builds AI software, workflow automation, data and knowledge systems that bring AI capabilities into real business processes.',
    brand: 'ly origin',
    brandAria: 'ly origin',
    navAria: 'Main navigation',
    nav: [
      ['services', 'Services'],
      ['process', 'Process'],
      ['solutions', 'Solutions'],
      ['about', 'About'],
    ],
    cta: 'Contact us',
    processCta: 'View process',
    heroTitle: 'ly origin',
    heroServices: ['AI Software Development', 'Workflow Automation'],
    heroLead: 'Bring AI into real business workflows',
    heroDesc:
      'We help teams move from process discovery and AI application development to automated delivery, connecting models, data, systems, and people into reliable intelligent workflows.',
    heroVisualLabel: 'AI workflow orchestration visual',
    heroVisualAlt: 'AI workflow orchestration and automation system visual',
    servicesHeading: 'Services',
    servicesIntro: 'From concept to launch, we cover the key stages of practical AI implementation.',
    services: [
      ['code', 'AI Software Development', 'Custom AI applications, internal tools, agents, and enterprise systems built around business goals.'],
      ['flow', 'Workflow Automation', 'Process mapping, system integration, and automated execution for daily operations.'],
      ['data', 'Data and Knowledge Engineering', 'Data governance, knowledge base design, RAG retrieval, and structured knowledge assets.'],
      ['ops', 'Operations and Optimization', 'Launch monitoring, performance review, and continuous iteration for long-term reliability.'],
    ],
    processHeading: 'Delivery Process',
    processIntro: 'An engineering-led rhythm for moving AI projects from exploration to production.',
    process: [
      ['01', 'Discovery', 'Identify high-value workflows and AI opportunities', 'search'],
      ['02', 'Solution Design', 'Define technical direction, system boundaries, and delivery plan', 'plan'],
      ['03', 'Development', 'Build applications, integrate systems, and connect data', 'build'],
      ['04', 'Validation', 'Verify performance, safety, reliability, and business impact', 'verify'],
      ['05', 'Launch', 'Deploy, onboard teams, and establish usage guidelines', 'launch'],
      ['06', 'Optimization', 'Improve automation outcomes through continuous feedback', 'growth'],
    ],
    solutionsHeading: 'Solutions and Use Cases',
    solutionsIntro: 'Focused on real business work, not abstract AI demos.',
    scenarios: [
      ['Customer Service and Ops', 'Multi-channel Q&A, ticket routing, and service workflow automation', 'chat'],
      ['Enterprise Knowledge Assistant', 'Internal search, policy Q&A, and reusable expert knowledge', 'cube'],
      ['Workflow Automation', 'Cross-system approvals, reporting, notifications, and task orchestration', 'flow'],
      ['Data Analysis and Insights', 'Business data consolidation, visualization, and decision support', 'chart'],
      ['Industry Solutions', 'Dedicated AI solutions designed around company-specific scenarios', 'building'],
    ],
    contactHeading: 'Make AI a driver of business growth',
    contactIntro:
      'From scenario discovery to production execution, we help companies build sustainable AI and automation capabilities.',
    companyName: 'ly origin',
    languageLabel: '切换语言',
    languageToggle: '中文',
  },
}

const email = 'luke@ly-origin.com'

function Icon({ name }) {
  const icons = {
    code: (
      <path d="m9 8-4 4 4 4m6-8 4 4-4 4m-2-10-2 12" />
    ),
    flow: (
      <>
        <path d="M12 4v4m0 8v4M5 12h14" />
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="2" y="10" width="6" height="4" rx="1" />
        <rect x="16" y="10" width="6" height="4" rx="1" />
        <rect x="9" y="18" width="6" height="4" rx="1" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    ops: (
      <>
        <path d="M4 19V5m0 14h16" />
        <path d="m7 15 3-4 3 2 4-6" />
        <path d="M17 7h-4V3" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </>
    ),
    plan: (
      <>
        <path d="M7 4h10M7 20h10M6 8h12v8H6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    build: (
      <>
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    verify: (
      <>
        <path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7z" />
        <path d="m8.5 12.5 2.2 2.2 4.8-5" />
      </>
    ),
    launch: (
      <>
        <path d="M12 3c3 1 5 3 6 6-3 1-5 3-6 6-1-3-3-5-6-6 1-3 3-5 6-6Z" />
        <path d="M9 15 7 20l5-2M15 15l2 5-5-2" />
      </>
    ),
    growth: (
      <>
        <path d="M4 19V5m0 14h16" />
        <path d="m7 15 4-4 3 3 5-7" />
        <path d="M19 7h-5" />
      </>
    ),
    chat: (
      <>
        <path d="M5 6h14v10H9l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
    cube: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19h16M7 16V9m5 7V5m5 11v-4" />
        <path d="M6 5h3M11 3h3M16 8h3" />
      </>
    ),
    building: (
      <>
        <path d="M5 20V6l9-3v17M14 8h5v12" />
        <path d="M8 9h2M8 13h2M8 17h2M16 12h1M16 16h1" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function HeroVisual({ label, alt }) {
  return (
    <div className="hero-visual" aria-label={label}>
      <img src="/ai-workflow-visual.webp" alt={alt} />
      <div className="visual-status" aria-hidden="true">
        <strong>AI Orchestration</strong>
        <span>Workflow ready</span>
      </div>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState('zh')
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
    document.title = copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy])

  const nextLanguage = language === 'zh' ? 'en' : 'zh'

  return (
    <main>
      <section className="hero-section">
        <header className="site-header">
          <a className="brand" href="#top" aria-label={copy.brandAria}>
            <span>{copy.brand}</span>
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
              aria-label={copy.languageLabel}
              onClick={() => setLanguage(nextLanguage)}
            >
              {copy.languageToggle}
            </button>
            <a className="header-cta" href={`mailto:${email}`}>
              {copy.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <h1>{copy.heroTitle}</h1>
            <p className="hero-services">
              <span>{copy.heroServices[0]}</span>
              <i />
              <span>{copy.heroServices[1]}</span>
            </p>
            <p className="hero-lead">{copy.heroLead}</p>
            <p className="hero-desc">{copy.heroDesc}</p>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${email}`}>
                {copy.cta}
                <span aria-hidden="true">→</span>
              </a>
              <a className="secondary-button" href="#process">
                {copy.processCta}
              </a>
            </div>
          </div>

          <HeroVisual label={copy.heroVisualLabel} alt={copy.heroVisualAlt} />
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <h2>{copy.servicesHeading}</h2>
          <p>{copy.servicesIntro}</p>
        </div>
        <div className="service-grid">
          {copy.services.map(([icon, title, body]) => (
            <article className="service-item" key={title}>
              <Icon name={icon} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading inverse">
          <h2>{copy.processHeading}</h2>
          <p>{copy.processIntro}</p>
        </div>
        <div className="process-line">
          {copy.process.map(([number, title, body, icon]) => (
            <article key={number}>
              <div className="process-icon">
                <Icon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section scenarios-section" id="solutions">
        <div className="section-heading">
          <h2>{copy.solutionsHeading}</h2>
          <p>{copy.solutionsIntro}</p>
        </div>
        <div className="scenario-grid">
          {copy.scenarios.map(([title, body, icon]) => (
            <article key={title}>
              <span>
                <Icon name={icon} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="about">
        <div className="contact-copy">
          <h2>{copy.contactHeading}</h2>
          <p>{copy.contactIntro}</p>
          <a className="primary-button" href={`mailto:${email}`}>
            {copy.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <address>
          <strong>{copy.companyName}</strong>
          <a href={`mailto:${email}`}>{email}</a>
        </address>
      </section>
    </main>
  )
}

export default App
