import type { Article } from '@/types/content';

export const articles: Article[] = [
  {
    id: 'claude-architecture-note',
    title: 'ClaudeCode 多 Agent 架构手记',
    summary: '整理手写笔记，拆解 ClaudeCode 在交互、记忆、SubAgent 调度与工具沙箱上的架构设计，并附原稿（CSDN 阅读 1.2k+）。',
    url: '/notes/claude-architecture',
    publishedAt: '2024-11-15',
    minutes: 6,
    tags: ['Claude', 'Agent', '架构笔记'],
  },
  {
    id: 'ai-knowledge-note',
    title: 'AI 百题进行中：核心技术原理复习',
    summary: '正在撰写的 100 题长文，覆盖模型优化、分布式训练、硬件推理到安全对齐，逐题写背景/数学/伪代码/复杂度（文档草稿开放阅读）。',
    url: '/notes/ai-knowledge',
    publishedAt: '2024-11-20',
    minutes: 8,
    tags: ['AI 百题', '学习笔记'],
  },
  {
    id: 'design-system-portfolio',

    title: 'ZhiYuAI：我的毕业设计实战复盘',
    summary: '复盘多模态翻译平台从 0 到 1 的全过程：微服务架构、AI 路由策略、Mock 降级方案、比赛答辩与工程化交付。',
    url: '/notes/design-system',
    publishedAt: '2024-03-12',
    minutes: 9,
    tags: ['毕业设计', 'AI 平台', '微服务'],
  },
];
