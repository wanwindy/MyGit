import type { ProjectInsight } from '@/types/content';

export const insights: ProjectInsight[] = [
  {
    id: 'zhiyuai-rag-context',
    title: '实时翻译中的上下文缺失',
    problem: 'ZhiYuAI 语音链路在会议场景长时间运行时，翻译引擎会因为上下文被截断导致术语漂移，尤其是技术词汇频繁切换的语料。',
    solution:
      '在 voice-interaction 服务内嵌轻量 RAG：将最近 3 分钟的中英对话通过 embedding 写入内存向量库，路由前从 RAG 中补齐术语、实体，最终把提示词拼接给 translation 服务。',
    techHighlights: ['RAG', 'DashScope Embedding', 'Sliding Window Cache'],
    impact: '术语一致性指标提升约 18%，Demo 中长期谈话不再需要人工纠错。',
  },
  {
    id: 'agent-workflow-deadlock',
    title: '多 Agent 流程的死锁问题',
    problem: 'AIAgent Dev Studio 在 Workflow Engine 中串联 PM/Architect/Dev/QA 时，如果中途需要“回炉”会因为上下文锁定导致整个流水线卡死。',
    solution:
      '把任务状态机改为可回溯 DAG，引入审查 Agent 作为守护者：当 QA 判定不通过时自动生成补充任务，重新调度 Dev Agent 并复用已有上下文，避免全局阻塞。',
    techHighlights: ['Agent', 'Async Workflow', 'State Machine'],
    impact: '失败任务自动重试率达到 92%，无需手动介入即可恢复流程。',
  },
  {
    id: 'feishu-rag-briefing',
    title: '飞书日报缺少结构化洞察',
    problem: 'FeishuBot 汇总任务后直接丢给 LLM，总结很容易变成流水账，无法突出阻塞与跨项目依赖，HR 不愿阅读。',
    solution:
      '搭建 RAG + 模板结合的摘要器：先用任务类型和标签在 SQLite 中检索相似“优秀日报”，然后把结构化字段喂给豆包 LLM，指导生成分组亮点/风险。',
    techHighlights: ['RAG', 'Prompt Template', 'Feishu OpenAPI'],
    impact: '日报被点击次数翻倍，管理层反馈“能直接看到阻塞项”。',
  },
];
