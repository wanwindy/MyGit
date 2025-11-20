import type { ProjectCategory } from '@/types/content';

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'frontend-ui': '前端 UI',
  'cloud-release': '云与发布',
  collab: '协同',
  ai: 'AI',
};

export const PROJECT_FILTERS: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: '全部', value: 'all' },
  { label: '前端 UI', value: 'frontend-ui' },
  { label: '云与发布', value: 'cloud-release' },
  { label: '协同', value: 'collab' },
  { label: 'AI', value: 'ai' },
];
