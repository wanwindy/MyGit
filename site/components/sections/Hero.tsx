'use client';

import { heroMetrics } from '@/data/metrics';
import { useCountUp } from '@/hooks/useCountUp';
import type { Metric } from '@/types/content';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <motion.section
      className={styles.hero}
      id="top"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.identity}>
        <span>计算机科学与技术 · 大四</span>
        <span>Java 后端 / 云原生方向</span>
        <span>寻求 2025 届 Java 后端 / 全栈 岗位</span>
      </div>
      <h1>
        我用真实项目讲述工程故事
        <span className={styles.muted}>，让 HR 一眼看到价值。</span>
      </h1>
      <p className={styles.badge}>优点 · 极其稳定，无后台可崩</p>
      <p className={styles.body}>
        在校期间把组件库、发布平台、协同工具等课程 / 实战经验沉淀成可复用资产；在云厂商实习时负责发布控制台前端与 Workers API 联调。
        我擅长用数据说明设计取舍，并把故事讲清楚。
      </p>
      <div className={styles.ctas}>
        <a className="button button--primary" href="#projects">
          查看项目故事
        </a>
        <a
          className="button button--ghost"
          href="mailto:hey@example.com?subject=想约你聊聊发布平台&body=Hi%2C%20我们想了解你的项目"
        >
          发邮件约面试
        </a>
      </div>
      <dl className={styles.metrics}>
        {heroMetrics.map((metric, index) => (
          <StatCard metric={metric} key={metric.label} delay={index * 0.1} />
        ))}
      </dl>
    </motion.section>
  );
}

function StatCard({ metric, delay }: { metric: Metric; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useCountUp(metric.value, { active: inView });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={styles.metric}
    >
      <dt>{metric.label}</dt>
      <dd>
        {value}
        {metric.suffix}
      </dd>
      {metric.detail && <small>{metric.detail}</small>}
    </motion.div>
  );
}
