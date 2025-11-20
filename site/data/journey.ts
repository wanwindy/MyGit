import type { Milestone } from '@/types/content';

export const journeyTimeline: Milestone[] = [
  {
    title: '计算机科学与技术（本科）',
    role: '云后端 / 云服务方向',
    caption: 'GPA 3.66/4，专业前 5%，多次获得奖学金。聚焦分布式系统、云计算工程与 Java 程序设计。',
    period: '2024 — 至今',
    bullets: [
      '将课程内容沉淀为组件库、自动化脚本、协同工具等工程化资产',
      '专注分布式系统、云计算工程、Java 程序设计与数据库体系',
    ],
  },
  {
    title: 'Java 开发实习生 · 四川恒嘉数字科技有限公司',
    role: '后端服务 + AI 相关模块',
    caption: '负责后台管理系统、微信小程序等业务模块开发，参与 API 文档管理与代码风格优化。',
    period: '2024.03 — 2024.06',
    bullets: [
      '独立完成配置与数据模块、文档编辑模块、逻辑模块等实现工作',
      '参与 YApi / Apifox API 文档管理与维护，优化接口联调流程',
      '负责代码风格统一、SQL 结构优化等工程实践',
    ],
  },
  {
    title: 'ZhiYuAI 多模态翻译平台 · 毕业设计',
    role: '全栈开发 / 架构设计',
    caption: '第七届全球校园人工智能算法精英大赛省赛二等奖、国赛晋级，毕业答辩"优秀"评级。',
    period: '2024.03 — 2024.12',
    bullets: [
      '设计并实现语音交互、场景识别、翻译、AI 路由四个微服务',
      '封装 DashScope/OpenAI 适配层与 Mock 降级方案，确保演示稳定性',
      '交付一键部署脚本、Docker Compose 与完整文档，复现成本极低',
    ],
  },
];
