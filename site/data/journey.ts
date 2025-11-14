import type { Milestone } from '@/types/content';

export const journeyTimeline: Milestone[] = [
  {
    title: '计算机科学与技术（大四）',
    role: '云原生 / 前端方向',
    caption: '聚焦分布式系统、云计算与前端工程化，GPA 排名前 10%。',
    period: '2021 - 至今',
    bullets: ['课程项目覆盖组件库、协同工具、低代码平台'],
  },
  {
    title: '前端开发实习 · 云厂商',
    role: '发布平台前端',
    caption: '在云厂商实习 4 个月，负责灰度发布面板与边缘 API。',
    period: '2023 年夏',
    bullets: ['联调 Workers API，构建实时指标看板', '推动部署耗时降至 90 秒'],
  },
  {
    title: 'ACM / 创新实验室',
    role: '前端负责人',
    caption: '校队成员，负责竞赛题解平台与训练管理。',
    period: '2020 - 2022',
    bullets: ['设计题解检索模块，维护 300+ 日活', '组织 15 场算法训练营'],
  },
];
