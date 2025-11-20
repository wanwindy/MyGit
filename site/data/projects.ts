import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 'zhiyuai-platform',
    slug: 'zhiyuai-platform',
    emoji: '🌏',
    title: 'ZhiYuAI 多模态翻译平台',
    categories: ['ai', 'cloud-release'],
    oneLiner: '将原本的单体翻译工具升级为语音 + 文本 + 场景协同的多引擎平台，演示与生产一键切换。',
    highlights: [
      'Starlette/Uvicorn 拆分语音、翻译、场景、AI 路由四大微服务，统一暴露 REST/WebSocket/SSE 接口',
      'DashScope/Qwen + Mock 双模 SDK，自动路由最优模型并在无凭据时降级为本地示例',
      'start_services.py/final_demo.py + Docker Compose 脚本一键拉起依赖，内存库与 PostgreSQL 自由切换',
    ],
    techStack: ['Python', 'Starlette', 'DashScope', 'OpenAI compatible API', 'PostgreSQL', 'Docker Compose', 'Vue 3', 'Flutter'],
    repoUrl: 'https://github.com/wanwindy/ZhiYuAI',

    lastUpdated: '2025-10',
    detail: {
      intro:
        'ZhiYuAI 2.0 将翻译系统重构为语音交互、文本翻译、场景识别与 AI 路由四个 Starlette 微服务，配合共享的 DashScope/OpenAI 适配层、内存数据库与快速演示脚本，既能在 HR Demo 中一键跑全链路，也能按需对接真实的 PostgreSQL、Redis、监控栈。',
      contributions: [
        '重新划分 translation / voice-interaction / scene-recognition / ai-router 目录，封装统一 CORS、TLS、健康检查，保证服务组合时的接口一致性与部署弹性',
        '实现 services/ai-router 的 LLM 驱动策略引擎，根据任务类型、优先级与实时指标挑选最优模型并在解析失败时自动回退',
        '编写 shared/ai_clients，对 DashScope SDK 与 OpenAI 兼容接口进行统一封装，提供 Mock 模式、流式参数、语言/模型配置与熔断重试',
        '在 shared/database 中实现内存数据库，配套 install_and_setup.py/test_database_integration.py，帮助离线演示也能跑完 CRUD + 指标链路',
        '交付 start_services.py/final_demo.py 以及 docker-compose / Makefile，覆盖一键启停、健康检查、日志聚合与 PyInstaller 打包路径',
      ],
      techHighlights: [
        '实时语音链路：voice-interaction 结合 DashScope ASR/TTS、VAD 与对话管理，支持 REST、SSE、WebSocket 多协议',
        'LLM 驱动 AI Router：通过 chat_completion 汇总可用引擎能力、延迟、成本并输出 JSON 决策，失败时回落到规则表',
        '视觉/对话协同：scene-recognition 服务融合摄像头内容与上下文对话，动态生成翻译语气、推荐模式与多语策略',
        'Mock + 真实双模：shared/ai_clients 与 shared/database 允许缺失凭据时自动启用内存实现，确保训练/演示稳定性',
        '多端入口：web/ 调试控制台与 mobile-app/Flutter 客户端共用 API 网关，方便将翻译流嵌入不同终端',
      ],
      architecture: {
        description:
          'start_services.py 负责按顺序拉起四个 Starlette 微服务，它们通过共享的 AI 适配层与内存/真实数据库交互，再由 Web 控制台、Flutter 客户端或命令行 Demo 访问 API 网关完成整条翻译链路。',
        diagram: `
flowchart LR
    subgraph Clients
        Web[Web Console]
        Mobile[Flutter App]
        Demo[final_demo.py]
    end
    subgraph Gateway
        API[API Gateway / start_services]
    end
    subgraph Services
        Voice[Voice Interaction]
        Scene[Scene Recognition]
        Translate[Translation]
        Router[AI Router]
    end
    subgraph Shared
        AI[DashScope / OpenAI Adapter]
        DB[(Memory DB / PostgreSQL)]
        MQ[(Redis / MQ)]
    end

    Web --> API
    Mobile --> API
    Demo --> Voice
    API --> Voice
    API --> Scene
    API --> Translate
    API --> Router
    Voice --> Router
    Scene --> Router
    Router --> AI
    Translate --> AI
    Services --> DB
    Services --> MQ
        `,
        caption: '四个 Starlette 微服务由一键脚本协调，并通过共享适配层访问 AI 能力与数据平面。',
      },
      useCases: [
        'HR 演示与培训：使用 Mock 模式在无凭据环境跑完整的语音→翻译→播报体验',
        '多语场景助手：场景识别服务根据环境标签推荐翻译模式，适合会议、出访等即时需求',
        '工程评估：通过 Docker Compose/Makefile 快速复现实验环境，验证不同模型、数据库或监控管线',
      ],
      projectValue: [
        '展示我在多模态 AI 平台上的架构拆分、接口治理与部署自动化能力',
        '具备真实可运行资产：脚本、Mock、测试脚手架、移动/Web 客户端与文档齐全',
        '易于扩展：AI Router、共享适配器与基础设施脚本都可以接入新的提供商或监控堆栈',
      ],
      achievements: [
        {
          title: '第七届全球校园人工智能算法精英大赛 · 省赛二等奖',
          status: '已获奖',
          description:
            '基于 ZhiYuAI 的语音 / 场景 / 翻译协同链路，在省赛答辩中完整演示 DashScope AI Router + 实时 Demo，获得二等奖。',
        },
        {
          title: '第七届全球校园人工智能算法精英大赛 · 国赛',
          status: '进行中',
          description:
            '晋级国赛后继续迭代智能翻译 Agent，补充可观测性、Mock 降级与部署脚本，聚焦「可靠交付」场景准备最终答辩。',
        },
        {
          title: '全国 RISC-V 高水平创新及应用大赛',
          status: '进行中',
          description:
            '规划将语音模型裁剪到 RISC-V 边缘板卡上，并结合 Workers API 做远程推理调度，目前处于方案打磨与验证阶段。',
        },
      ],
    },
  },
  {
    id: 'aia-agent-dev-studio',
    slug: 'aia-agent-dev-studio',
    emoji: '🧠',
    title: 'AIAgent Dev Studio',
    categories: ['ai', 'cloud-release'],
    oneLiner: '基于 Claude API 的多智能体自动开发平台，让 AI 团队协作完成需求→架构→编码→测试→审查。',
    highlights: [
      'PM / Architect / Dev / QA / Reviewer 多角色流水线，任务可解释',
      'Workflow Engine + 任务队列 + 质量门禁自动推进每一步',
      'Cloudflare Workers 触发 + Mock API，离线与边缘部署一套代码',
    ],
    techStack: ['Python', 'Claude API', 'asyncio', 'Cloudflare Workers', 'Docker'],
    repoUrl: 'https://github.com/wanwindy/AIAgent-Dev-Studio',

    lastUpdated: '2025-9',
    detail: {
      intro: '一个基于 Claude API 的多智能体自动化开发平台，让 AI 像“虚拟研发团队”一样完成需求分析、架构设计、代码生成、测试到审查的全流程协作。',
      contributions: [
        '设计 Workflow Engine，覆盖任务队列、上下文管理、状态回写与指标采集，让多 Agent 协作有章可循',
        '实现 PM / Architect / Developer / QA / Reviewer 模块化 Agent，并支持裁剪/扩展新的领域 Agent',
        '封装 Claude API 异步客户端，加入熔断、指数重试、Token 统计与 Mock 模式，强化可观测性',
        '设计 Cloudflare Workers 接口与 /health、/metrics 端点，便于在边缘节点触发工作流并监控',
        '编写 Docker / CLI / 文档示例，确保本地、容器与 Workers 部署路径一致',
      ],
      techHighlights: [
        '多 Agent 协作流水线：Workflow Engine 统一调度，Task Queue 负责依赖与优先级管理',
        '质量门禁：自动插入审查与测试 Agent，失败会触发回滚或重试，确保交付可控',
        '全异步执行：利用 asyncio / Pydantic 构建高吞吐的 Claude API 客户端，支持 Mock / 真实双模式',
        'Cloudflare Workers Ready：Worker 入口暴露 Webhook、/health、/metrics，适合 Cron / 事件触发',
        'Git / CI 集成：内置 Git 脚本、日志与监控，方便团队级扩展',
      ],
      architecture: {
        description:
          'CLI 或 Cloudflare Workers 触发 Workflow Engine，任务被分发到 PM/Architect/Dev/QA/Reviewer Agent，结果写回上下文并通过 Claude API / Mock 推进，同时暴露健康检查与指标。',
        diagram: `
flowchart LR
    subgraph Input
        CLI[CLI]
        Scripts[Examples / Workers]
    end
    subgraph Engine
        Workflow[Workflow Engine]
        Queue[Task Queue]
        Context[Global Context / Result Store]
    end
    subgraph Agents
        PM[Project Manager]
        Arch[Architect]
        Dev[Developers]
        QA[Tester]
        Review[Reviewer]
    end
    subgraph Integrations
        Claude[Claude API / Mock]
        Git[Git / CI]
        Monitor[Metrics / Prometheus]
    end

    CLI --> Workflow
    Scripts --> Workflow
    Workflow --> Queue
    Queue --> PM
    Queue --> Arch
    Queue --> Dev
    Queue --> QA
    Queue --> Review
    Agents --> Context
    Claude <---> Workflow
    Git <---> Workflow
    Monitor <---> Workflow
        `,
        caption: '与仓库 README 保持一致的 Mermaid 架构图，可直接复制展示。',
      },
      useCases: [
        '自动化交付一个项目原型：输入需求后由多 Agent 完成项目结构、代码与测试输出',
        '边缘自动审查 / 测试：借助 Cloudflare Workers Cron 触发，定时跑审查与度量',
        '教学或面试演示多 Agent 协作流程，突出系统设计能力',
      ],
      projectValue: [
        '展示云原生 + 多 Agent + 异步工作流的系统设计与工程化能力',
        '完整的工程资产：文档、Mock、监控、部署脚本齐全，可直接运行验证',
        '可作为 AI 工程方向的代表作，覆盖需求拆解到质量门禁的完整闭环',
      ],
    },
  },
  {
    id: 'feishu-bot',
    slug: 'feishu-bot',
    emoji: '🤖',
    title: 'FeishuBot 飞书自动日报',
    categories: ['ai', 'collab'],
    oneLiner: '自动收集团队成员任务并在飞书群内生成结构化日/周报的云端机器人。',
    highlights: [
      '飞书任务 + 评论 API 聚合，多成员输入一次同步',
      '豆包大模型生成摘要，自动标记亮点 / 阻塞',
      'Cloudflare Workers + KV + Cron 定时推送，零服务器运维',
    ],
    techStack: ['Python', 'Feishu API', 'Cloudflare Workers', 'KV Storage', 'Doubao LLM'],
    repoUrl: 'https://github.com/wanwindy/FeishuBot',

    lastUpdated: '2025-8',
    detail: {
      intro: '一款自动生成日报／周报的飞书机器人，可收集群成员任务、分析评论、结构化输出团队周报，并支持飞书群内交互。',
      contributions: [
        '梳理任务收集、评论拉取、成员管理链路，提供去重、分组与格式化逻辑',
        '实现飞书 OAuth2 授权、Token 自动刷新与 KV 存储，保证长期稳定运行',
        '封装豆包大模型 Prompt 与摘要模板，生成完成 / 进行中 / 阻塞等结构化段落',
        '编写 Cloudflare Worker 入口、授权页面与 Cron 触发器，兼容本地 Python 与 Workers 双部署',
        '完善 README 与 Cloudflare 部署指南，提供脚本、配置示例与监控建议',
      ],
      techHighlights: [
        '飞书 Webhook + Worker API 的无服务器后端，同时支持本地 FastAPI 与 Workers 运行',
        'TokenStore 将成员凭据写入 Cloudflare KV，自动刷新避免人工干预',
        '评论解析 + 成员管理 + 任务合并形成结构化 JSON，再交由 LLM 摘要',
        '豆包大模型摘要模板生成「完成 / 在进行 / 阻塞」三段式周报',
        'KV + Cron + Worker 组合实现定时推送与授权流程，提升可运维性',
      ],
      architecture: {
        description:
          'OAuth 授权将成员 Token 安全写入 KV，Cron / CLI 触发任务拉取与评论聚合，数据进入摘要服务并最终推送到飞书群聊。',
        diagram: `
flowchart LR
    OAuth[Feishu OAuth + Token Store] --> Tasks[任务/评论拉取服务]
    Cron[Cron Trigger / Worker] --> Tasks
    CLI[本地 Python 服务] --> Tasks
    Tasks --> Aggregator[成员管理 + 数据聚合]
    Aggregator --> Summary[豆包 LLM 摘要器]
    Summary --> Push[飞书消息推送]
    Push --> Chat[(飞书群聊)]
        `,
        caption: '展示本地服务与 Cloudflare Workers 协同的数据流与推送链路。',
      },
      useCases: [
        '小团队每日同步：自动获取任务进展并在群里发布无打扰日报',
        '周报输出：合并多人任务，生成结构化周报发给管理者',
        '飞书群内指令：成员随时让机器人生成最新摘要或查询阻塞点',
      ],
      projectValue: [
        '覆盖真实企业场景：授权、任务治理、AI 总结、推送闭环齐备',
        '展示 Serverless + AI 结合的工程能力，可复制到其他 SaaS Bot',
        '插件化的数据与摘要层，易于扩展统计、风控或更多报表能力',
      ],
    },
  },

  {
    id: 'aiautodeal-platform',
    slug: 'aiautodeal-platform',
    emoji: '📈',
    title: 'AIAutoDeal 自动化交易平台',
    categories: ['ai', 'cloud-release'],
    oneLiner: '面向 nof1.ai Alpha Arena 场景打造的 AI 自动化股票交易平台原型，打通信号、风控、执行、监控全链路。',
    highlights: [
      'FastAPI Intent API + Kafka 事件总线，将策略信号、风控审批、订单执行与指标推送串成闭环',
      'PaperBroker Stub、Alpaca、CCXT 适配器可随时切换，加上 dev_up.* 脚本一键拉起 Postgres + API + 前端',
      'Next.js/Vite 仪表盘呈现净值曲线、Leaderboard、AI 交易员日志，便于复盘多模型表现',
    ],
    techStack: ['Python 3.11', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Kafka', 'Docker Compose', 'TypeScript', 'Next.js'],
    repoUrl: 'https://github.com/wanwindy/AIAutoDeal.git',
    repoLabel: '查看 GitHub',
    lastUpdated: '2025-11',
    detail: {
      intro:
        'AIAutoDeal 借鉴 nof1.ai 的 Alpha Arena，从数据接入、策略运行、风控、执行、监控到 AI Agent 工具接口完整落地，并提供脚本、文档、前端原型，方便复刻真实券商自动交易体验。',
      contributions: [
        '主导分层架构设计：数据接入→策略 Runtime→风控→执行→监控→前端，文档化在 docs/architecture.md 供团队共识',
        '实现 FastAPI Intent API、账户/持仓/排行榜接口，并打通 SignalIntent → RiskDecision → OrderLifecycle 的数据库与事件流',
        '编写风险引擎与 Execution Orchestrator，内置仓位、杠杆、集中度校验以及券商路由、订单状态机与审计日志',
        '提供 PaperBroker、Alpaca、CCXT 等适配器和可降级的 Kafka 抽象，保障本地/实盘/回测多环境一致',
        '交付 scripts/dev_up.*、bootstrap_db、seed_sample_* 等脚本，自动初始化 Postgres、导入演示日志并同时启动 FastAPI 与 Next.js 仪表盘',
        '构建 web/（Next.js + Chart.js）仪表盘，联通 /metrics/leaderboard、/metrics/series、/ai/logs API，展示净值、排行榜、模型日志',
      ],
      techHighlights: [
        '事件驱动链路：SignalIntent、RiskDecision、OrderEvent 统一写入 Postgres 并广播到 Kafka，方便扩展风控或监控微服务',
        '风控护栏：risk/engine 校验仓位集中度、杠杆、VaR，所有结果落库形成可查询审计记录',
        'Execution Orchestrator：execution/router 将风控通过的意图拆单并派发到 Alpaca/PaperBroker/CCXT 客户端，跟踪订单生命周期',
        'AI 交易员 Runtime：docs/ai_traders.md 描述的多 Persona LLM 借助 MCP 工具轮询行情、生成决策并写入 ai_trader_log，支持回溯推理链',
        '监控与可观测性：monitoring/leaderboard 汇总交易明细生成 Sharpe、Drawdown 指标，API `/metrics/series` `/ai/logs` 对接前端实时展示',
      ],
      architecture: {
        description:
          '策略与 AI 交易员产出的意图经由 FastAPI 进入事件总线，Risk Engine 审批后交给 Execution Orchestrator；订单与指标写入 Postgres/ClickHouse 并通过 Monitoring/Leaderboard 推送给 Next.js 仪表盘。',
        diagram: `
flowchart LR
    subgraph Agents & Strategy
        Strategy
        AITrader[AI Traders]
    end
    subgraph API
        FastAPI
    end
    subgraph Core
        Risk[Risk Engine]
        Exec[Execution Orchestrator]
    end
    subgraph Brokers
        PaperBroker
        Alpaca
        CCXT
    end
    subgraph Data
        PG[(Postgres)]
        CH[(ClickHouse/Logs)]
        Kafka[(Kafka Bus)]
    end
    subgraph Frontend
        Dashboard[Next.js Dashboard]
    end

    Strategy --> FastAPI
    AITrader --> FastAPI
    FastAPI --> Risk
    Risk --> Exec
    Exec --> PaperBroker
    Exec --> Alpaca
    Exec --> CCXT
    Risk --> Kafka
    Exec --> Kafka
    PaperBroker --> PG
    Alpaca --> PG
    CCXT --> PG
    Kafka --> Dashboard
    PG --> Dashboard
    CH --> Dashboard
        `,
        caption: 'Intent → Risk → Execution → Monitoring 的事件驱动链路，既能跑 Paper 账户也能扩展真实券商与指标仓库。',
      },
      useCases: [
        'AI 交易研究团队验证 LLM 交易员到真实券商之间的风控与执行链路',
        'Quant Hackathon 或 Demo Day 快速演示策略表现、排行榜与 AI 决策日志',
        '券商/Fintech 团队搭建多模型竞技场，做第三方策略接入与审计沙盒',
      ],
      projectValue: [
        '证明我能搭建完整的自动交易基座：API、风险、执行、监控、前端、脚本文档全部交付',
        '提供真实可运行资产（脚本、容器、示例数据），方便团队或客户快速体验',
        '可扩展的事件架构与适配器层，降低后续接入更多券商、行情或 Agent Runtime 的成本',
      ],
      achievements: [
        {
          title: 'Intent→Order→Leaderboard 最小闭环',
          status: '已完成',
          description: '打通 FastAPI、Risk Engine、Execution Orchestrator 与监控指标，Paper/Postgres 环境可跑完整交易循环。',
        },
        {
          title: 'AI Trader Runtime 日志化',
          status: '已完成',
          description: '多 Persona LLM 定期轮询行情、生成决策并通过 `ai_trader_log` 记录推理、风控、下单全过程。',
        },
        {
          title: '多券商 + 合规扩展',
          status: '开发中',
          description: '计划对接 IBKR、完善 KYC/权限、合规接口，并把监控体系升级到 Prometheus/Grafana + Kubernetes 部署。',
        },
      ],
    },
  },

  {
    id: 'balatro-reversal-of-fate',
    slug: 'balatro-reversal-of-fate',
    emoji: '🃏',
    title: '小丑牌：命运反转',
    categories: ['frontend-ui', 'cloud-release'],
    oneLiner: '面向微信 / 抖音小游戏生态的轻社交纸牌项目骨架，Cocos Creator + 云函数串联命运卡循环与好友房。',
    highlights: [
      'Cocos Creator 3.x + TypeScript 将 Home / Room / Game / Result 场景与 GameManager / RoomManager 循环脚本搭好',
      '命运卡、随机事件、i18n JSON 配置与 seed RNG，热更新内容即可调整节奏和文案',
      'joinRoom/startGame/turnAction 示例云函数 + AdManager / ShareManager / Telemetry 平台层，打通好友房与广告分享链路',
    ],
    techStack: ['Cocos Creator 3.x', 'TypeScript', 'Node.js', 'WeChat Cloud Functions', 'Douyin Mini Game'],
    repoUrl: 'https://github.com/wanwindy/atelier-stack/tree/main/Balatro%20Reversal%20of%20Fate/workspace',
    repoLabel: '开发中',
    lastUpdated: '2025-11',
    detail: {
      intro:
        '《小丑牌：命运反转》是我基于 docs 策划沉淀搭建的 Cocos Creator + 云函数脚手架，目标是让微信/抖音小游戏能快速落地命运卡社交玩法，直接导入 assets/ 即可继续接 SDK、素材与运营配置。',
      contributions: [
        '整理 workspace/ 目录，固定 assets/scenes/prefabs/scripts 与 cloud/functions/schema 的结构，保证导入 Cocos Creator 即能运行',
        '在 assets/scripts/core 中实现 GameManager、RoomManager、DeckSystem、FateSystem、EffectFactory，将抽牌、触发、回合推进、结算串联起来',
        '提供 assets/config 下的 gameConfig.json、fateCards.json、randomEvents.json、i18n.zh-CN.json，并写进 docs/ 的策划表方便热更内容',
        '抽象 platform/AdManager、ShareManager、Telemetry、Storage，封装微信/抖音平台差异的广告频控、分享截图、埋点能力',
        '交付 cloud/functions (joinRoom/ready/startGame/turnAction/metrics) 与 schema JSON，包含内存 mock DB，方便迁移到云开发环境调试好友房',
      ],
      techHighlights: [
        '核心循环 TypeScript：GameManager 与 RoomManager 驱动牌堆、命运卡、战绩结算，同时导出 GameTypes 提供可选 UI 回调接口',
        'EffectFactory + FateSystem.apply 将命运卡效果表驱动成可扩展的命令树，便于在 UI/Buff 上挂接不同动画',
        '平台适配层：AdManager/ShareManager/CloudClient/Telemetry 拆分广告、分享、云调用、埋点，所有 API 经由 Bridge.ts 做平台分支',
        '可复现随机性：utils/Random.ts 提供 seed-based RNG，回放或联机调试时能复现整局命运卡顺序',
        '云端最小集：joinRoom/turnAction 等函数共享 lib/db.js 的房间状态 mock，可直接粘贴到微信/抖音云函数并加上鉴权/锁控制',
      ],
      architecture: {
        description:
          '客户端以 Cocos Creator 场景 (Home/Room/Game/Result) 驱动 core 系统，平台适配层封装广告/分享/云调用，再访问部署在云开发的房间/指标函数与集合。',
        diagram: `
flowchart LR
    subgraph Scenes
        Home
        Room
        Game
        Result
    end
    subgraph Core
        GameManager
        FateSystem
        DeckSystem
    end
    subgraph Platform
        Bridge[Bridge.ts]
        Ad[AdManager]
        Share[ShareManager]
        Cloud[CloudClient]
        Telemetry[Telemetry]
    end
    subgraph Cloud
        Functions[joinRoom/startGame/turnAction/metrics]
        DB[(rooms/users/metrics)]
    end

    Home --> Core
    Room --> Core
    Game --> Core
    Result --> Core
    Core --> Bridge
    Bridge --> Ad
    Bridge --> Share
    Bridge --> Cloud
    Bridge --> Telemetry
    Cloud --> Functions
    Functions --> DB
        `,
        caption: 'Cocos 场景驱动 core 系统，统一通过 Bridge 调用平台 SDK 与云函数，保障好友房与命运事件链路。',
      },
      useCases: [
        '小游戏立项阶段：导入脚手架即具备单局循环、命运卡逻辑与房间脚本，验证玩法可玩度',
        '好友房 MVP：将 cloud/functions 迁入微信/抖音云开发，快速实现拉人对局、ready、turnAction 同步',
        '运营实验：通过 fateCards/randomEvents/i18n JSON 热更内容，调节广告频次、事件掉率与节奏',
      ],
      projectValue: [
        '展示我在小游戏前端 + 云函数一体化交付的能力，既能搭建 Cocos 场景又能封装平台 SDK',
        '完整交付文档 (DEV_GUIDE.md / DEVELOPMENT_PLAN.md) + checklist，方便团队承接并按周推进',
        '配置驱动 + seed RNG 让内容与调试都可复现，利于审核、联机与长线运营扩展',
      ],
      achievements: [
        {
          title: 'Balatro Reversal of Fate MVP',
          status: '开发中',
          description: '核心循环、配置、云函数与平台适配层已完成，正在接入真实 SDK、好友房部署与美术/音效资源。',
        },
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
