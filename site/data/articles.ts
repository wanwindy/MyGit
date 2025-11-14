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
    title: '把毕业设计提炼成 UI System',
    summary: '记录如何把课程项目沉淀成 24 个 Token 化组件、Storybook 文档与指标看板，并用真实数据说服导师/HR。',
    url: '/notes/design-system',
    publishedAt: '2024-03-12',
    minutes: 7,
    tags: ['设计系统', '组件库'],
  },
];
