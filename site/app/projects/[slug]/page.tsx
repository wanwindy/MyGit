import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { MermaidDiagram } from '@/components/MermaidDiagram';
import { getProjectBySlug, projects } from '@/data/projects';
import { PROJECT_CATEGORY_LABELS } from '@/lib/projectCategories';
import styles from './page.module.css';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: '项目详情',
      description: '项目详情',
    };
  }
  return {
    title: `${project.title} · 项目详情`,
    description: project.oneLiner,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const repoCtaLabel = project.repoLabel ?? project.detail.achievements?.[0]?.status ?? '查看 GitHub';

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <Link href="/#projects" className={`button button--ghost ${styles.backLink}`}>
            返回首页
          </Link>
          <p className="eyebrow">项目详情</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroEmoji}>{project.emoji}</span>
            {project.title}
          </h1>
          <p className={styles.tagline}>{project.oneLiner}</p>
          {project.lastUpdated && <p className={styles.timestamp}>最近更新 · {project.lastUpdated}</p>}
          <div className={styles.heroHighlights}>
            {project.highlights.map((item) => (
              <div key={item} className={styles.heroHighlightCard}>
                {item}
              </div>
            ))}
          </div>
          <div className={styles.heroMeta}>
            <div>
              <p className={styles.metaLabel}>领域</p>
              <div className={styles.chips}>
                {project.categories.map((category) => (
                  <span key={category} className={styles.chip}>
                    {PROJECT_CATEGORY_LABELS[category]}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className={styles.metaLabel}>技术栈</p>
              <div className={styles.chips}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.actionPrimary}>
              {repoCtaLabel}
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.actionSecondary}>
                在线 Demo
              </a>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>项目简介</p>
          <p className={styles.sectionBody}>{project.detail.intro}</p>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>我的角色与贡献</p>
          <ul className={styles.list}>
            {project.detail.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>技术亮点</p>
          <ul className={styles.list}>
            {project.detail.techHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>系统架构</p>
          <p className={styles.sectionBody}>{project.detail.architecture.description}</p>
          <div className={styles.diagram}>
            <MermaidDiagram chart={project.detail.architecture.diagram} />
          </div>
          {project.detail.architecture.caption && (
            <p className={styles.caption}>{project.detail.architecture.caption}</p>
          )}
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>使用场景</p>
          <ul className={styles.list}>
            {project.detail.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>项目价值</p>
          <ul className={styles.list}>
            {project.detail.projectValue.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.detail.achievements && project.detail.achievements.length > 0 && (
          <section className={styles.section}>
            <p className={styles.sectionLabel}>项目成果</p>
            <ul className={styles.list}>
              {project.detail.achievements.map((item) => (
                <li key={item.title}>
                  <div className={styles.achievementTitleRow}>
                    <strong>{item.title}</strong>
                    <span className={styles.achievementStatus}>{item.status}</span>
                  </div>
                  <p className={styles.achievementDescription}>{item.description}</p>
                  {item.note && <small className={styles.achievementNote}>{item.note}</small>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
