CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  tech TEXT NOT NULL,
  repo_url TEXT NOT NULL,
  demo_url TEXT,
  status TEXT NOT NULL CHECK (status IN ('live', 'preview', 'building')),
  highlight TEXT,
  last_updated TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  url TEXT NOT NULL,
  published_at TEXT NOT NULL,
  minutes INTEGER NOT NULL,
  tags TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER IF NOT EXISTS projects_updated
AFTER UPDATE ON projects
BEGIN
  UPDATE projects SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER IF NOT EXISTS articles_updated
AFTER UPDATE ON articles
BEGIN
  UPDATE articles SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
