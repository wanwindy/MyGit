'use client';

import { Section } from '@/components/Section';
import type { ProjectInsight } from '@/types/content';
import { motion } from 'framer-motion';
import styles from './Insights.module.css';

type Props = {
  insights: ProjectInsight[];
};

export function Insights({ insights }: Props) {
  return (
    <Section id="insights" className={styles.section}>
      <div className={styles.headline}>
        <div>
          <p className="eyebrow">问题心得</p>
          <h2>棘手问题与解决方案</h2>
          <p className={styles.subtitle}>记录在项目中遇到的难点，附上解决方案与用到的技术（RAG、Agent、Workflow 等）。</p>
        </div>
      </div>
      <div className={styles.grid}>
        {insights.map((insight, index) => (
          <motion.article
            key={insight.id}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          >
            <div className={styles.meta}>
              <span>{insight.title}</span>
              {insight.impact && <small>{insight.impact}</small>}
            </div>
            <div className={styles.block}>
              <p className={styles.label}>问题</p>
              <p className={styles.body}>{insight.problem}</p>
            </div>
            <div className={styles.block}>
              <p className={styles.label}>方案</p>
              <p className={styles.body}>{insight.solution}</p>
            </div>
            <div className={styles.techStack}>
              {insight.techHighlights.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
