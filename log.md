PS D:\MyGit-main\site> npm run build

> atelier-portfolio@0.1.0 build
> next build

  ▲ Next.js 14.2.3
  - Experiments (use with caution):
    · typedRoutes

   Creating an optimized production build ...
Failed to compile.

./app/notes/design-system/page.tsx
Error:
  x Merge conflict marker encountered.
   ,-[D:\MyGit-main\site\app\notes\design-system\page.tsx:1:1]
 1 | import type { Metadata } from 'next';
 2 | import { Footer } from '@/components/layout/Footer';
 3 | import { Navbar } from '@/components/layout/Navbar';
 4 | <<<<<<< HEAD
   : ^^^^^^^
 5 | import { MermaidDiagram } from '@/components/MermaidDiagram';
 6 | import styles from './page.module.css';
 6 |
   `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\app\notes\design-system\page.tsx:9:1]
  9 |   title: 'ZhiYuAI：我的毕业设计实战复盘',
 10 |   description:
 11 |     '复盘 ZhiYuAI 多模态翻译平台从 0 到 1 的全过程：微服务架构、DashScope AI 路由、Mock 降级方案、省赛/国赛答辩与一键部署工程化交付。',
 12 | =======
    : ^^^^^^^
 13 | import styles from './page.module.css';
 14 |
 14 | export const metadata: Metadata = {
    `----

  x Unexpected token `styles`. Expected ... , *,  (, [, :, , ?, =, an identifier, public, protected, private, readonly, <.
    ,-[D:\MyGit-main\site\app\notes\design-system\page.tsx:10:1]
 10 |   description:
 11 |     '复盘 ZhiYuAI 多模态翻译平台从 0 到 1 的全过程：微服务架构、DashScope AI 路由、Mock 降级方案、省赛/国赛答辩与一键部署工程化交付。',
 12 | =======
 13 | import styles from './page.module.css';
    :        ^^^^^^
 14 |
 15 | export const metadata: Metadata = {
 15 |   title: '把毕业设计提炼成 UI System',
    `----

Caused by:
    Syntax Error

Import trace for requested module:
./app/notes/design-system/page.tsx

./components/layout/Footer.tsx
Error:
  x Unexpected token `footer`. Expected jsx identifier
   ,-[D:\MyGit-main\site\components\layout\Footer.tsx:2:1]
 2 |
 3 | export function Footer() {
 4 |   return (
 5 |     <footer className={styles.footer} id="contact">
   :      ^^^^^^
 6 |       <div>
 7 |         <p className={styles.eyebrow}>联系</p>
 7 |         <p className={styles.title}>期待与 HR、团队面对面交流。</p>
   `----

Caused by:
    Syntax Error

Import trace for requested module:
./components/layout/Footer.tsx
./app/page.tsx

./components/sections/Hero.tsx
Error:
  x Merge conflict marker encountered.
   ,-[D:\MyGit-main\site\components\sections\Hero.tsx:1:1]
 1 | <<<<<<< HEAD
   : ^^^^^^^
 2 | ﻿'use client';
 3 | =======
 3 | 'use client';
   `----

  x Merge conflict marker encountered.
   ,-[D:\MyGit-main\site\components\sections\Hero.tsx:1:1]
 1 | <<<<<<< HEAD
 2 | ﻿'use client';
 3 | =======
   : ^^^^^^^
 4 | 'use client';
 5 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
 5 |
   `----

  x Merge conflict marker encountered.
   ,-[D:\MyGit-main\site\components\sections\Hero.tsx:2:1]
 2 | ﻿'use client';
 3 | =======
 4 | 'use client';
 5 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
   : ^^^^^^^
 6 |
 7 | import { heroMetrics } from '@/data/metrics';
 7 | import { useCountUp } from '@/hooks/useCountUp';
   `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\components\sections\Hero.tsx:15:1]
 15 |   const ref = useRef(null);
 16 |   const { scrollYProgress } = useScroll({
 17 |     target: ref,
 18 | <<<<<<< HEAD
    : ^^^^^^^
 19 |     offset: ['start start', 'end start']
 20 |   });
 20 |
    `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\components\sections\Hero.tsx:20:1]
 20 |   });
 21 |
 22 |   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
 23 | =======
    : ^^^^^^^
 24 |     offset: ["start start", "end start"]
 25 |   });
 25 |
    `----

  x Expression expected
    ,-[D:\MyGit-main\site\components\sections\Hero.tsx:22:1]
 22 |   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
 23 | =======
 24 |     offset: ["start start", "end start"]
 25 |   });
    :    ^
 26 |
 27 |   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
 27 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
    `----

Caused by:
    Syntax Error

Import trace for requested module:
./components/sections/Hero.tsx
./app/page.tsx

./data/articles.ts
Error:
  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\articles.ts:21:1]
 21 |   },
 22 |   {
 23 |     id: 'design-system-portfolio',
 24 | <<<<<<< HEAD
    : ^^^^^^^
 25 |     title: 'ZhiYuAI：我的毕业设计实战复盘',
 26 |     summary: '复盘多模态翻译平台从 0 到 1 的全过程：微服务架构、AI 路由策略、Mock 降级方案、比赛答辩与工程化交付。',
 26 |     url: '/notes/design-system',
    `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\articles.ts:28:1]
 28 |     publishedAt: '2024-03-12',
 29 |     minutes: 9,
 30 |     tags: ['毕业设计', 'AI 平台', '微服务'],
 31 | =======
    : ^^^^^^^
 32 |     title: '把毕业设计提炼成 UI System',
 33 |     summary: '记录如何把课程项目沉淀成 24 个 Token 化组件、Storybook 文档与指标看板，并用真实数据说服导师/HR。',
 33 |     url: '/notes/design-system',
    `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\articles.ts:35:1]
 35 |     publishedAt: '2024-03-12',
 36 |     minutes: 7,
 37 |     tags: ['设计系统', '组件库'],
 38 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
    : ^^^^^^^
 39 |   },
 40 | ];
    `----

Caused by:
    Syntax Error

Import trace for requested module:
./data/articles.ts
./app/page.tsx

./data/projects.ts
Error:
  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\projects.ts:15:1]
 15 |     ],
 16 |     techStack: ['Python', 'Starlette', 'DashScope', 'OpenAI compatible API', 'PostgreSQL', 'Docker Compose', 'Vue 3', 'Flutter'],
 17 |     repoUrl: 'https://github.com/wanwindy/ZhiYuAI',
 18 | <<<<<<< HEAD
    : ^^^^^^^
 19 |     lastUpdated: '2025-10',
 20 | =======
 20 |     lastUpdated: '2025-11',
    `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\projects.ts:17:1]
 17 |     repoUrl: 'https://github.com/wanwindy/ZhiYuAI',
 18 | <<<<<<< HEAD
 19 |     lastUpdated: '2025-10',
 20 | =======
    : ^^^^^^^
 21 |     lastUpdated: '2025-11',
 22 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
 22 |     detail: {
    `----

  x Merge conflict marker encountered.
    ,-[D:\MyGit-main\site\data\projects.ts:19:1]
 19 |     lastUpdated: '2025-10',
 20 | =======
 21 |     lastUpdated: '2025-11',
 22 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
    : ^^^^^^^
 23 |     detail: {
 24 |       intro:
 24 |         'ZhiYuAI 2.0 将翻译系统重构为语音交互、文本翻译、场景识别与 AI 路由四个 Starlette 微服务，配合共享的 DashScope/OpenAI 适配层、内存数据库与快速演示脚本，既能在 HR Demo 中一键跑全链路，也能按需对接真实的 PostgreSQL、Redis、监控栈。',
    `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:124:1]
 124 |     ],
 125 |     techStack: ['Python', 'Claude API', 'asyncio', 'Cloudflare Workers', 'Docker'],
 126 |     repoUrl: 'https://github.com/wanwindy/AIAgent-Dev-Studio',
 127 | <<<<<<< HEAD
     : ^^^^^^^
 128 |     lastUpdated: '2025-9',
 129 | =======
 129 |     lastUpdated: '2024-12',
     `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:126:1]
 126 |     repoUrl: 'https://github.com/wanwindy/AIAgent-Dev-Studio',
 127 | <<<<<<< HEAD
 128 |     lastUpdated: '2025-9',
 129 | =======
     : ^^^^^^^
 130 |     lastUpdated: '2024-12',
 131 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
 131 |     detail: {
     `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:128:1]
 128 |     lastUpdated: '2025-9',
 129 | =======
 130 |     lastUpdated: '2024-12',
 131 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
     : ^^^^^^^
 132 |     detail: {
 133 |       intro: '一个基于 Claude API 的多智能体自动化开发平台，让 AI 像“虚拟研发团队”一样完成需求分析、架构设计、代码生成、测试到审查的全流程协作。',
 133 |       contributions: [
     `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:213:1]
 213 |     ],
 214 |     techStack: ['Python', 'Feishu API', 'Cloudflare Workers', 'KV Storage', 'Doubao LLM'],
 215 |     repoUrl: 'https://github.com/wanwindy/FeishuBot',
 216 | <<<<<<< HEAD
     : ^^^^^^^
 217 |     lastUpdated: '2025-8',
 218 | =======
 218 |     lastUpdated: '2024-10',
     `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:215:1]
 215 |     repoUrl: 'https://github.com/wanwindy/FeishuBot',
 216 | <<<<<<< HEAD
 217 |     lastUpdated: '2025-8',
 218 | =======
     : ^^^^^^^
 219 |     lastUpdated: '2024-10',
 220 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
 220 |     detail: {
     `----

  x Merge conflict marker encountered.
     ,-[D:\MyGit-main\site\data\projects.ts:217:1]
 217 |     lastUpdated: '2025-8',
 218 | =======
 219 |     lastUpdated: '2024-10',
 220 | >>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
     : ^^^^^^^
 221 |     detail: {
 222 |       intro: '一款自动生成日报／周报的飞书机器人，可收集群成员任务、分析评论、结构化输出团队周报，并支持飞书群内交互。',
 222 |       contributions: [
     `----

Caused by:
    Syntax Error

Import trace for requested module:
./data/projects.ts
./app/page.tsx


> Build failed because of webpack errors
PS D:\MyGit-main\site>