'use client';

import { heroMetrics } from '@/data/metrics';
import { useCountUp } from '@/hooks/useCountUp';
import type { Metric } from '@/types/content';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className={styles.hero}
      id="top"
      style={{ opacity }}
    >
      <BackgroundGradient />

      <motion.div
        className={styles.content}
        style={{ y }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
      >
        <motion.div className={styles.identity} variants={itemVariants}>
          <span>计算机科学与技术 · 大四</span>
          <span>Java 后端 / 云原生方向</span>
          <span>寻求 2025 届 Java 后端 / 全栈 岗位</span>
        </motion.div>

        <motion.h1 variants={itemVariants}>
          我用真实项目讲述工程故事<span className={styles.muted}>,</span>
          <br />
          <span className={styles.muted}>让 HR 一眼看到价值。</span>
        </motion.h1>

        <motion.p className={styles.badge} variants={itemVariants}>
          优点 · 极其稳定，无后台可崩
        </motion.p>

        <motion.p className={styles.body} variants={itemVariants}>
          在校期间把组件库、发布平台、协同工具等课程 / 实战经验沉淀成可复用资产；在云厂商实习时负责发布控制台前端与 Workers API 联调。
          我擅长用数据说明设计取舍，并把故事讲清楚。
        </motion.p>

        <motion.div className={styles.ctas} variants={itemVariants}>
          <a className="button button--primary" href="#projects">
            查看项目故事
          </a>
          <a
            className="button button--ghost"
            href="mailto:hey@example.com?subject=想约你聊聊发布平台&body=Hi%2C%20我们想了解你的项目"
          >
            发邮件约面试
          </a>
        </motion.div>

        <dl className={styles.metrics}>
          {heroMetrics.map((metric, index) => (
            <StatCard metric={metric} key={metric.label} delay={0.6 + index * 0.1} />
          ))}
        </dl>
      </motion.div>
    </motion.section>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function BackgroundGradient() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.6
      }}
    />
  );
}

function StatCard({ metric, delay }: { metric: Metric; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const value = useCountUp(metric.value, { active: inView });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
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
