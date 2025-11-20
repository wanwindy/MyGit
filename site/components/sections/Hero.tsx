<<<<<<< HEAD
﻿'use client';
=======
'use client';
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3

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
<<<<<<< HEAD
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
=======
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
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
<<<<<<< HEAD
          <span>{'\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f \u00b7 \u5927\u56db'}</span>
          <span>{'Java \u540e\u7aef / \u4e91\u539f\u751f\u65b9\u5411'}</span>
          <span>{'\u5bfb\u6c42 2025 \u5c4a Java \u540e\u7aef / \u5168\u6808\u5c97\u4f4d'}</span>
        </motion.div>

        <motion.h1 variants={itemVariants}>
          {'\u6211\u7528\u771f\u5b9e\u9879\u76ee\u8bb2\u8ff0\u5de5\u7a0b\u6545\u4e8b'}
          <span className={styles.muted}>,</span>
          <br />
          <span className={styles.muted}>{'\u5e2e HR \u4e00\u773c\u770b\u5230\u4ef7\u503c'}</span>
        </motion.h1>

        <motion.p className={styles.badge} variants={itemVariants}>
          {'\u4f18\u70b9 \u00b7 \u6781\u5176\u7a33\u5b9a\uff0c\u65e0\u540e\u53f0\u53ef\u5d29'}
        </motion.p>

        <motion.p className={styles.body} variants={itemVariants}>
          {
            '\u5728\u6821\u671f\u95f4\u628a\u7ec4\u4ef6\u5e93\u3001\u53d1\u5e03\u5e73\u53f0\u3001\u534f\u540c\u5de5\u5177\u7b49\u8bfe\u7a0b\u4e0e\u5b9e\u6218\u7ecf\u9a8c\u6c89\u6dc0\u6210\u53ef\u590d\u7528\u8d44\u4ea7\uff1b\u5728\u4e91\u5382\u5546\u5b9e\u4e60\u65f6\u8d1f\u8d23\u53d1\u5e03\u63a7\u5236\u53f0\u524d\u7aef\u4e0e Workers API \u8054\u8c03\u3002\u6211\u64c5\u957f\u7528\u6570\u636e\u8bf4\u660e\u8bbe\u8ba1\u53d6\u820d\uff0c\u5e76\u628a\u6545\u4e8b\u8bb2\u6e05\u695a\u3002'
          }
=======
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
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
        </motion.p>

        <motion.div className={styles.ctas} variants={itemVariants}>
          <a className="button button--primary" href="#projects">
<<<<<<< HEAD
            {'\u67e5\u770b\u9879\u76ee\u6545\u4e8b'}
          </a>
          <a
            className="button button--ghost"
            href="https://mail.163.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'\u53d1\u90ae\u4ef6\u7ea6\u9762\u8bd5'}
=======
            查看项目故事
          </a>
          <a
            className="button button--ghost"
            href="mailto:hey@example.com?subject=想约你聊聊发布平台&body=Hi%2C%20我们想了解你的项目"
          >
            发邮件约面试
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
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
