import type { Project } from '@/types/content';

export const projects: Project[] = [
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
    lastUpdated: '2024-12',
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
    lastUpdated: '2024-10',
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
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
