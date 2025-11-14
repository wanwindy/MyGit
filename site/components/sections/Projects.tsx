'use client';

import { Section } from '@/components/Section';
import type { Project } from '@/types/content';
import { PROJECT_CATEGORY_LABELS, PROJECT_FILTERS } from '@/lib/projectCategories';
import { motion } from 'framer-motion';
import type { Route } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './Projects.module.css';

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<(typeof PROJECT_FILTERS)[number]['value']>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <Section id="projects" className={styles.section}>
      <div className={styles.headline}>
        <div>
          <p className="eyebrow">项目</p>
          <h2>真实场景里的系统化实践</h2>
          <p className={styles.subtitle}>每个故事都包括业务语境、负责内容、结果与可验证链接。</p>
        </div>
      </div>

      <div className={styles.filters}>
        {PROJECT_FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            aria-pressed={activeFilter === filter.value}
            className={`${styles.filterButton} ${activeFilter === filter.value ? styles.filterButtonActive : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project, index) => (
          <ProjectCard project={project} key={project.id} index={index} />
        ))}
      </div>
    </Section>
  );
}

type CardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: CardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.15 } }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
    >
      <div className={styles.meta}>
        <div className={styles.tags}>
          {project.categories.map((category) => (
            <span key={category}>{PROJECT_CATEGORY_LABELS[category]}</span>
          ))}
        </div>
        {project.lastUpdated && <span className={styles.timestamp}>{project.lastUpdated}</span>}
      </div>
      <h3 className={styles.title}>
        <span className={styles.emoji}>{project.emoji}</span>
        {project.title}
      </h3>
      <p className={styles.summary}>{project.oneLiner}</p>
      <ul className={styles.highlights}>
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className={styles.tech}>
        {project.techStack.map((tech) => (
          <span className={styles.chip} key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <Link href={project.detailUrl as Route} className={styles.primaryLink}>
          查看项目详情
        </Link>
        <div className={styles.secondaryLinks}>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              在线 Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
