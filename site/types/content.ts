export type ProjectCategory = 'frontend-ui' | 'cloud-release' | 'collab' | 'ai';

export type ProjectDetailSections = {
  intro: string;
  contributions: string[];
  techHighlights: string[];
  architecture: {
    description: string;
    diagram: string;
    caption?: string;
  };
  useCases: string[];
  projectValue: string[];
  achievements?: ProjectAchievement[];
  insights?: ProjectInsight[];
};

export type Project = {
  id: string;
  slug: string;
  emoji: string;
  title: string;
  categories: ProjectCategory[];
  oneLiner: string;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  lastUpdated?: string;
  detail: ProjectDetailSections;
};

export type Article = {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  minutes: number;
  tags: string[];
};

export type Milestone = {
  title: string;
  role?: string;
  caption: string;
  period: string;
  bullets?: string[];
};

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
  detail?: string;
};

export type ProjectAchievement = {
  title: string;
  status: string;
  description: string;
  note?: string;
};

export type ProjectInsight = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techHighlights: string[];
  impact?: string;
};
