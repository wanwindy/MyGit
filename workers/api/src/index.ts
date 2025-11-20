import { Hono, type Context } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  DB: D1Database;
  API_TOKEN: string;
  SITE_ORIGIN?: string;
};

type ProjectPayload = {
  id?: string;
  title: string;
  summary: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  status: 'live' | 'preview' | 'building';
  highlight?: string;
  lastUpdated?: string;
};

type ArticlePayload = {
  id?: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  minutes: number;
  tags: string[];
};

type ProjectRow = {
  id: string;
  title: string;
  summary: string;
  tech: string;
  repo_url: string;
  demo_url: string | null;
  status: string;
  highlight: string | null;
  last_updated: string | null;
};

type ArticleRow = {
  id: string;
  title: string;
  summary: string;
  url: string;
  published_at: string;
  minutes: number;
  tags: string;
};

type AppEnv = { Bindings: Bindings };

const app = new Hono<AppEnv>();

app.use(
  '*',
  cors({
    origin: (origin) => origin ?? '*',
    allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.get('/', (c) => {
  return c.json({
    name: 'portfolio-api',
    status: 'ok',
    poweredBy: 'Cloudflare Workers',
  });
});

app.get('/health', (c) => c.json({ status: 'healthy', timestamp: Date.now() }));

app.get('/projects', async (c) => {
  const status = c.req.query('status');
  const stmt = status
    ? c.env.DB.prepare(
        `SELECT id, title, summary, tech, repo_url, demo_url, status, highlight, last_updated
         FROM projects WHERE status = ? ORDER BY COALESCE(updated_at, created_at) DESC`,
      ).bind(status)
    : c.env.DB.prepare(
        `SELECT id, title, summary, tech, repo_url, demo_url, status, highlight, last_updated
         FROM projects ORDER BY COALESCE(updated_at, created_at) DESC`,
      );

  const { results } = await stmt.all<ProjectRow>();
  return c.json(results.map(mapProject));
});

app.post('/projects', async (c) => {
  const authError = requireAuth(c);
  if (authError) return authError;

  const payload = normalizeProjectPayload(await c.req.json<ProjectPayload>());
  await c.env.DB.prepare(
    `INSERT INTO projects (id, title, summary, tech, repo_url, demo_url, status, highlight, last_updated)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      payload.id,
      payload.title,
      payload.summary,
      JSON.stringify(payload.tech),
      payload.repoUrl,
      payload.demoUrl ?? null,
      payload.status,
      payload.highlight ?? null,
      payload.lastUpdated ?? null,
    )
    .run();

  return c.json({ id: payload.id }, 201);
});

app.put('/projects/:id', async (c) => {
  const authError = requireAuth(c);
  if (authError) return authError;

  const id = c.req.param('id');
  const payload = normalizeProjectPayload({ ...(await c.req.json<ProjectPayload>()), id });

  const result = await c.env.DB.prepare(
    `UPDATE projects
     SET title = ?, summary = ?, tech = ?, repo_url = ?, demo_url = ?, status = ?, highlight = ?, last_updated = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ?`,
  )
    .bind(
      payload.title,
      payload.summary,
      JSON.stringify(payload.tech),
      payload.repoUrl,
      payload.demoUrl ?? null,
      payload.status,
      payload.highlight ?? null,
      payload.lastUpdated ?? null,
      payload.id,
    )
    .run();

  if (!result.success || result.changes === 0) {
    return c.json({ error: 'Project not found' }, 404);
  }

  return c.json({ id: payload.id });
});

app.get('/articles', async (c) => {
  const { results } = await c.env.DB.prepare(
    `SELECT id, title, summary, url, published_at, minutes, tags
     FROM articles ORDER BY published_at DESC`,
  ).all<ArticleRow>();

  return c.json(results.map(mapArticle));
});

app.post('/articles', async (c) => {
  const authError = requireAuth(c);
  if (authError) return authError;

  const payload = normalizeArticlePayload(await c.req.json<ArticlePayload>());
  await c.env.DB.prepare(
    `INSERT INTO articles (id, title, summary, url, published_at, minutes, tags)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      payload.id,
      payload.title,
      payload.summary,
      payload.url,
      payload.publishedAt,
      payload.minutes,
      JSON.stringify(payload.tags),
    )
    .run();

  return c.json({ id: payload.id }, 201);
});

app.put('/articles/:id', async (c) => {
  const authError = requireAuth(c);
  if (authError) return authError;

  const id = c.req.param('id');
  const payload = normalizeArticlePayload({ ...(await c.req.json<ArticlePayload>()), id });

  const result = await c.env.DB.prepare(
    `UPDATE articles
     SET title = ?, summary = ?, url = ?, published_at = ?, minutes = ?, tags = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ?`,
  )
    .bind(
      payload.title,
      payload.summary,
      payload.url,
      payload.publishedAt,
      payload.minutes,
      JSON.stringify(payload.tags),
      payload.id,
    )
    .run();

  if (!result.success || result.changes === 0) {
    return c.json({ error: 'Article not found' }, 404);
  }

  return c.json({ id: payload.id });
});

app.onError((err, c) => {
  console.error('[worker] unhandled', err);
  return c.json({ error: err.message ?? 'Unexpected error' }, 500);
});

export default app;

function requireAuth(c: Context<AppEnv>) {
  const header = c.req.header('authorization');
  if (!header || !header.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  const token = header.slice('Bearer '.length).trim();
  if (token !== c.env.API_TOKEN) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  return null;
}

type NormalizedProject = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  status: ProjectPayload['status'];
  highlight?: string;
  lastUpdated?: string;
};

type NormalizedArticle = {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  minutes: number;
  tags: string[];
};

function normalizeProjectPayload(payload: ProjectPayload): NormalizedProject {
  if (!payload.title) throw new Error('title is required');
  if (!payload.summary) throw new Error('summary is required');
  if (!payload.repoUrl) throw new Error('repoUrl is required');
  if (!payload.tech || !Array.isArray(payload.tech) || payload.tech.length === 0) {
    throw new Error('tech array is required');
  }
  if (!payload.status || !['live', 'preview', 'building'].includes(payload.status)) {
    throw new Error('status is invalid');
  }

  const tech = payload.tech.map((item) => item.trim()).filter(Boolean);
  if (tech.length === 0) {
    throw new Error('tech array cannot be empty');
  }

  return {
    id: payload.id ?? crypto.randomUUID(),
    title: payload.title,
    summary: payload.summary,
    tech,
    repoUrl: payload.repoUrl,
    demoUrl: payload.demoUrl,
    status: payload.status,
    highlight: payload.highlight,
    lastUpdated: payload.lastUpdated,
  };
}

function normalizeArticlePayload(payload: ArticlePayload): NormalizedArticle {
  if (!payload.title) throw new Error('title is required');
  if (!payload.summary) throw new Error('summary is required');
  if (!payload.url) throw new Error('url is required');
  if (!payload.publishedAt) throw new Error('publishedAt is required');
  if (!Number.isFinite(payload.minutes) || payload.minutes <= 0) throw new Error('minutes must be a positive number');
  if (!payload.tags || !Array.isArray(payload.tags) || payload.tags.length === 0) {
    throw new Error('tags array is required');
  }

  const tags = payload.tags.map((tag) => tag.trim()).filter(Boolean);
  if (tags.length === 0) {
    throw new Error('tags array cannot be empty');
  }

  return {
    id: payload.id ?? crypto.randomUUID(),
    title: payload.title,
    summary: payload.summary,
    url: payload.url,
    publishedAt: payload.publishedAt,
    minutes: payload.minutes,
    tags,
  };
}

function mapProject(row: ProjectRow) {
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    tech: parseStringArray(row.tech),
    repoUrl: row.repo_url,
    demoUrl: row.demo_url ?? undefined,
    status: row.status as ProjectPayload['status'],
    highlight: row.highlight ?? undefined,
    lastUpdated: row.last_updated ?? undefined,
  };
}

function mapArticle(row: ArticleRow) {
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    url: row.url,
    publishedAt: row.published_at,
    minutes: row.minutes,
    tags: parseStringArray(row.tags),
  };
}

function parseStringArray(value: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item));
    }
  } catch {
    // noop
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}
