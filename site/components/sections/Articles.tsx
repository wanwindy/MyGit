'use client';

import { Section } from '@/components/Section';
import type { Article } from '@/types/content';
import { motion } from 'framer-motion';
import styles from './Articles.module.css';

type Props = {
  articles: Article[];
};

export function Articles({ articles }: Props) {
  return (
    <Section id="articles" className={styles.section}>
      <div className={styles.headline}>
        <div>
          <p className="eyebrow">文章</p>
          <h2>把项目复盘写成 HR 看得懂的笔记</h2>
          <p className={styles.subtitle}>精选 3 篇项目复盘 / 工程思路文章，方便 HR 快速了解我的思考方式。</p>
        </div>
      </div>
      <div className={styles.list}>
        {articles.map((article, index) => (
          <motion.a
            href={article.url}
            key={article.id}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          >
            <div className={styles.meta}>
              <span>{article.publishedAt}</span>
              <span>{article.minutes} 分钟阅读</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
