'use client';

import { Section } from '@/components/Section';
import type { Milestone } from '@/types/content';
import { motion } from 'framer-motion';
import styles from './Journey.module.css';

type Props = {
  items: Milestone[];
};

export function Journey({ items }: Props) {
  return (
    <Section id="journey" className={styles.section}>
      <div className={styles.headline}>
        <div>
          <p className="eyebrow">历程</p>
          <h2>把职责与成果写进时间线</h2>
          <p className={styles.subtitle}>每段经历都补充了“负责 + 结果”，让 HR 能沿时间轴看到成长轨迹。</p>
        </div>
      </div>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.period}>{item.period}</div>
            <h3 className={styles.title}>{item.title}</h3>
            {item.role && <p className={styles.role}>{item.role}</p>}
            <p className={styles.caption}>{item.caption}</p>
            {item.bullets && (
              <ul className={styles.bullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
