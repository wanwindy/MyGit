import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
<<<<<<< HEAD
import { MermaidDiagram } from '@/components/MermaidDiagram';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ZhiYuAI：我的毕业设计实战复盘',
  description:
    '复盘 ZhiYuAI 多模态翻译平台从 0 到 1 的全过程：微服务架构、DashScope AI 路由、Mock 降级方案、省赛/国赛答辩与一键部署工程化交付。',
=======
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '把毕业设计提炼成 UI System',
  description:
    '复盘如何把课程平台毕业设计拆成 24 个 Token 化组件与 Storybook 文档，通过指标与落地结果向老师与 HR 讲清设计系统价值。',
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
};

export default function DesignSystemNotePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.hero}>
<<<<<<< HEAD
            <p className="eyebrow">笔记 · 毕业设计</p>
            <h1>ZhiYuAI：我的毕业设计实战复盘</h1>
            <p className={styles.description}>
              这篇复盘讲述我如何将 ZhiYuAI 多模态翻译平台从课程原型升级为省赛二等奖、国赛晋级作品：从微服务拆分、AI 路由策略、Mock 降级，到一键部署脚本、答辩演示与工程化交付。
              文章不仅展示架构设计，更强调真实可运行的工程资产与比赛复盘，让 HR 看到「说得清楚、跑得起来、拿得出手」的系统化能力。
            </p>
            <div className={styles.meta}>
              <span>2024-03-12</span>
              <span>预计阅读 9 分钟</span>
              <span>4 个微服务 / 省赛二等奖</span>
=======
            <p className="eyebrow">笔记 · UI System</p>
            <h1>把毕业设计提炼成 UI System</h1>
            <p className={styles.description}>
              这篇复盘讲述我如何把「课程数据平台」毕业设计抽象成组件库：从视觉规范、Token 体系、无障碍标准，到 Storybook、指标看板与导师评审材料。
              文章不仅展示设计稿，更强调落地过程与数据，让 HR 看到“说得清楚、跑得起来”的系统化能力。
            </p>
            <div className={styles.meta}>
              <span>2024-03-12</span>
              <span>预计阅读 7 分钟</span>
              <span>24 个组件 / 3 套主题</span>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
            </div>
          </header>

          <section className={styles.section}>
            <h2>项目背景</h2>
            <p>
<<<<<<< HEAD
              ZhiYuAI 最初是我的《云计算与分布式系统》课程项目，目标是搭建一个简单的翻译工具。为了让它成为有说服力的毕业设计，我决定将其升级为多模态翻译平台：
              整合语音交互、场景识别、多引擎翻译与 AI 路由四大能力，并确保可以在无 AI 凭据的环境（如答辩现场）稳定运行。
            </p>
            <ul className={styles.list}>
              <li>目标对象：毕业答辩评委 + 算法大赛评审 + 求职面试官。</li>
              <li>交付内容：微服务架构、DashScope/OpenAI 适配层、Mock 降级、一键部署脚本、Web/Flutter 客户端。</li>
              <li>衡量方式：比赛成绩、演示稳定性、代码可复现性、导师评分。</li>
=======
              课程平台原本由多个小组分散开发，交互与视觉体验严重割裂：同一类信息在不同页面出现 6 种样式，表单校验逻辑重复实现且不可配置。为保证毕业答辩的完整性，我决定
              “以 Design System 的方式” 交付成果：把 UI 规范、代码实现、测试与上线故事合为一体。
            </p>
            <ul className={styles.list}>
              <li>目标对象：课程数据运营团队 + 校内技术评审老师 + 求职面试官。</li>
              <li>交付内容：Figma 设计语言、Token 体系、React/Radix 组件库、Storybook、指标面板。</li>
              <li>衡量方式：组件复用率、Bug 数、Review 时长、导师评分。</li>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
            </ul>
          </section>

          <section className={styles.section}>
<<<<<<< HEAD
            <h2>架构设计</h2>
            <p>我将系统拆分为 4 个独立的 Starlette 微服务，通过共享的 AI 适配层与数据平面协同工作：</p>
            <MermaidDiagram
              chart={`
flowchart LR
    subgraph Clients
        Web[Web Console]
        Mobile[Flutter App]
        Demo[final_demo.py]
    end
    subgraph Gateway
        API[API Gateway / start_services]
    end
    subgraph Services
        Voice[Voice Interaction]
        Scene[Scene Recognition]
        Translate[Translation]
        Router[AI Router]
    end
    subgraph Shared
        AI[DashScope / OpenAI Adapter]
        DB[(Memory DB / PostgreSQL)]
        MQ[(Redis / MQ)]
    end

    Web --> API
    Mobile --> API
    Demo --> Voice
    API --> Voice
    API --> Scene
    API --> Translate
    API --> Router
    Voice --> Router
    Scene --> Router
    Router --> AI
    Translate --> AI
    Services --> DB
    Services --> MQ
              `}
            />
            <p>
              四个服务由 <code>start_services.py</code> 一键启动，并通过共享适配层访问 DashScope 或 Mock 实现，确保演示与生产环境都可以顺畅运行。
            </p>
          </section>

          <section className={styles.section}>
            <h2>关键技术与亮点</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>01 · 微服务架构</h3>
                <p>语音交互、场景识别、翻译、AI 路由四个服务独立部署，统一暴露 REST/WebSocket/SSE 接口。</p>
              </div>
              <div className={styles.card}>
                <h3>02 · AI 路由策略</h3>
                <p>通过 LLM 驱动的策略引擎，根据任务类型、优先级与实时指标挑选最优模型并自动回退。</p>
              </div>
              <div className={styles.card}>
                <h3>03 · Mock 降级方案</h3>
                <p>当缺失 AI 凭据时自动启用内存数据库与本地示例，确保答辩演示与培训场景稳定性。</p>
              </div>
              <div className={styles.card}>
                <h3>04 · 一键部署脚本</h3>
                <p><code>start_services.py</code> + Docker Compose 覆盖健康检查、日志聚合与依赖拉起，方便快速复现。</p>
=======
            <h2>提炼过程</h2>
            <p>整套流程被拆成 4 步，每一步都保留可验证的产出：</p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>01 · Token 化</h3>
                <p>梳理 60+ 视觉变量，抽象成尺寸、排版、语义色与暗色模式 Token，自动同步到 Figma 与代码。</p>
              </div>
              <div className={styles.card}>
                <h3>02 · 模式设计</h3>
                <p>将常见交互（表格、筛选、任务面板、弹窗）总结为 Interaction Pattern，并写入空、加载、错误状态。</p>
              </div>
              <div className={styles.card}>
                <h3>03 · 组件实现</h3>
                <p>基于 React + Radix + TypeScript + Tailwind 构建 24 个核心组件，提供受控/非受控双模式与辅助 props。</p>
              </div>
              <div className={styles.card}>
                <h3>04 · 文档与验证</h3>
                <p>用 Storybook/Chromatic 生成交互文档，结合 Vitest + Axe 进行可达性测试，并记录指标。</p>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
              </div>
            </div>
          </section>

          <section className={styles.section}>
<<<<<<< HEAD
            <h2>比赛成果与答辩</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>省赛二等奖</h3>
                <p>第七届全球校园人工智能算法精英大赛省赛，完整演示语音/场景/翻译协同链路。</p>
              </div>
              <div className={styles.card}>
                <h3>国赛晋级</h3>
                <p>晋级国赛后继续迭代可观测性、Mock 降级与部署脚本，聚焦「可靠交付」场景。</p>
              </div>
              <div className={styles.card}>
                <h3>演示稳定性</h3>
                <p>使用 Mock 模式在无凭据环境跑完整链路，答辩现场零失败。</p>
              </div>
              <div className={styles.card}>
                <h3>导师评价</h3>
                <p>毕业答辩获得"优秀"评级，导师认可架构设计与工程化交付能力。</p>
=======
            <h2>关键组件与亮点</h2>
            <ul className={styles.list}>
              <li>数据密集型 Table 套件：支持 8 种单元格、列冻结、批量操作和嵌入 KPI 卡片，搭配虚拟滚动保证性能。</li>
              <li>流程向导（Flow Builder）：通过状态管理 Hook 自动保存草稿，导师演示时可以回放步骤。</li>
              <li>通知 & 任务中心：统一 toast、Banner 与 Inbox 的视觉语言，提供优先级/操作埋点，方便衡量使用情况。</li>
              <li>主题切换：Token 层支持 light/dark/campus 三套主题，storybook 控制面板即可预览。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>结果与指标</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>复用率</h3>
                <p>上线前 20+ 页面切换到统一组件，研发同学平均 2 天即可适配旧页面。</p>
              </div>
              <div className={styles.card}>
                <h3>评审时长</h3>
                <p>导师答辩时通过文档模式直接跳转到关键组件，讲解时间从 18 分钟降到 9 分钟。</p>
              </div>
              <div className={styles.card}>
                <h3>稳定性</h3>
                <p>Chromatic Snapshot 覆盖率 95%，上线后未收到新的 UI Bug 反馈。</p>
              </div>
              <div className={styles.card}>
                <h3>认可</h3>
                <p>毕业设计被评为“优秀”，同时在秋招面试中多次作为系统化案例讲述。</p>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>反思与可复制经验</h2>
            <ul className={styles.list}>
<<<<<<< HEAD
              <li>微服务拆分要考虑演示场景：独立服务可以单独启动验证，降低答辩时的依赖风险。</li>
              <li>Mock 降级是真实需求：AI 凭据在答辩/培训场景往往不可用，内存实现能保证流程完整性。</li>
              <li>一键脚本 + Docker Compose 让复现成本极低，评审老师可以快速跑起来验证。</li>
              <li>数据驱动的答辩材料（比赛成绩、服务指标、架构图）比单纯讲技术更有说服力。</li>
=======
              <li>先定义 Token，再改组件，可让中途换主题时改动保持在 CSS 层，降低返工。</li>
              <li>度量设计质量的指标（复用率、Bug、评审时长）比“好不好看”更能说服导师/HR。</li>
              <li>Storybook + Chromatic + Vitest 的组合，让我可以在没有 CI/CD 的学校环境照样做到可回归。</li>
              <li>演示时准备“样式切换 + KPI 面板 + 代码片段”三件套，能把抽象的设计理念具体化。</li>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
            </ul>
          </section>

          <section className={styles.section}>
            <h2>可用资产</h2>
            <ul className={styles.assetList}>
              <li>
<<<<<<< HEAD
                <strong>GitHub 仓库</strong>
                <span>完整的微服务代码、脚本与 Docker Compose 配置，可直接 clone 运行。</span>
              </li>
              <li>
                <strong>演示脚本</strong>
                <span><code>final_demo.py</code> 提供语音→翻译→播报全链路演示，适合答辩与面试。</span>
              </li>
              <li>
                <strong>架构文档</strong>
                <span>包含 Mermaid 架构图、API 文档与部署指南，面试时用于讲解设计思路。</span>
=======
                <strong>Figma Library</strong>
                <span>含 3 套主题 + Token 文件，可直接复制。</span>
              </li>
              <li>
                <strong>Storybook 文档</strong>
                <span>包含 Canvas/Docs/A11y 标签，面试时用于演示。</span>
              </li>
              <li>
                <strong>指标面板</strong>
                <span>记录 bug 数、复用率、答辩时长，可拓展为团队 KPI。</span>
>>>>>>> f13c5949c6902215c56a307f6e2c0e07c1ea66a3
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
