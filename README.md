## Atelier Stack

基于 **Next.js 静态导出** + **Cloudflare Workers API** 的极简个人官网，内容与 API 解耦，方便同时部署到 GitHub Pages / Vercel / Cloudflare。

```
.
├─ site/             # Next.js 前端
├─ workers/api/      # Cloudflare Worker + D1 schema
├─ docs/             # 作品集文案 / 复盘素材
└─ .github/workflows # GitHub Pages 部署流程
```

> 如果只想部署到 Vercel，只需保留 `site/` 目录即可；Workers API 与 D1 数据库是可选增强项。

### 1. 前端（Next.js）

1. **安装依赖**
   ```bash
   cd site
   npm install
   ```
2. **本地调试**
   ```bash
   npm run dev
   # 浏览器访问 http://localhost:3000
   ```
3. **环境变量**
   - 复制 `.env.example` → `.env`
   - 设置 `NEXT_PUBLIC_API_BASE_URL` 为 Worker 域名（本地可指向 `http://127.0.0.1:8787` 并运行 `wrangler dev`）
4. **构建 / 静态导出**
   ```bash
   npm run export   # 静态文件输出到 site/out
   ```
   GitHub Pages workflow 会自动执行 `npm run export` 并发布 `site/out`。
5. **开发素材**
   - `public/book1.jpg` / `book2.jpg`：Claude 架构手写笔记原稿
   - `public/AIKnowledge.md`：AI 100 题草稿，对应 `/notes/ai-knowledge`
   - `docs/portfolio-guidelines.md`：项目卡片与详情页写作指南（来源于 `fix.md`）

### 2. Vercel 部署

> 推荐将 Next.js 前端放到 Vercel，Workers API 仍可作为后端提供动态内容。

1. **新建仓库并推送**
   ```bash
   git init
   git remote add origin <your-repo>
   git add .
   git commit -m "feat: init portfolio"
   git push origin main
   ```
2. **在 Vercel 中导入仓库**
   - `Framework Preset`: Next.js
   - `Root Directory`: `site`
   - `Build Command`: `npm run build`
   - `Output Directory`: `.next`
3. **环境变量**
   - `NEXT_PUBLIC_API_BASE_URL`：Worker / 其他 API 地址（可临时写成 `https://example.com`，后续再切换）
4. **运行时**
   - Next.js 14 + App Router
   - 输出设置为 `export`，在 Vercel 会自动转成静态文件；如需 SSR，可将 `next.config.mjs` 的 `output` 改为默认值

### 3. Worker API（Cloudflare）

1. **安装依赖**
   ```bash
   cd workers/api
   npm install
   ```
2. **创建 D1 并导入 schema**
   ```bash
   wrangler d1 create portfolio
   # 将返回的 database_id 写入 wrangler.toml
   wrangler d1 execute portfolio --file=./schema.sql
   ```
3. **本地运行**
   ```bash
   API_TOKEN=devtoken wrangler dev
   ```
4. **部署**
   ```bash
   API_TOKEN=prodtoken wrangler deploy
   ```
5. **管理接口**
   - `POST /projects`, `PUT /projects/:id`, `POST /articles`, `PUT /articles/:id` 需携带 `Authorization: Bearer <API_TOKEN>`
   - `GET /projects`、`GET /articles` 为公开接口，供前端读取

### 4. GitHub Pages Workflow

- Workflow 位于 `.github/workflows/deploy-pages.yml`
- 触发条件：推送到 `main` 或手动触发
- 步骤：checkout → Node 20 → 在 `site/` 内执行 `npm install` 与 `npm run export` → 上传 `site/out` → `actions/deploy-pages` 发布
- 仓库 Secrets：新增 `NEXT_PUBLIC_API_BASE_URL`（指向 Worker URL）

### 5. API 接口

| Method & Path                 | 说明                                                         |
|------------------------------|--------------------------------------------------------------|
| `GET /projects`              | 可选 `?status=live` 过滤，返回技术栈数组、高亮信息           |
| `POST /projects`             | 新增项目（需 Bearer Token）                                  |
| `PUT /projects/:id`          | 更新项目（需 Bearer Token）                                  |
| `GET /articles`              | 按 `publishedAt` 排序的文章列表                              |
| `POST /articles` / `PUT /articles/:id` | 管理文章与标签（仅管理员）                             |
| `GET /health`                | Worker 健康检查                                              |

请求与响应字段与 `site/types/content.ts` 中的类型保持一致。

### 6. 内容发布流程

1. 通过脚本或 API 工具调用 Worker 管理接口
2. 项目与文章写入 D1
3. 前端运行时从 Worker 拉取；若失败会退回 `site/data/staticContent.ts` 的静态内容
4. UI 或静态内容变更才需要重新部署 Pages；仅内容更新时只需重新部署 Worker

### 7. 后续扩展

- 新增 `/admin` 页面（Next.js 路由 + Token 验证）直接调 Worker API
- 若想切换包管理器，可改用 `pnpm`/`bun` 并同步更新 workflow
- 接入 R2 处理图片上传，或利用 Workers Analytics Engine 记录访问统计
