import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '把毕业设计提炼成 UI System',
  description:
    '复盘如何把课程平台毕业设计拆成 24 个 Token 化组件与 Storybook 文档，通过指标与落地结果向老师与 HR 讲清设计系统价值。',
};

export default function DesignSystemNotePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.hero}>
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
            </div>
          </header>

          <section className={styles.section}>
            <h2>项目背景</h2>
            <p>
              课程平台原本由多个小组分散开发，交互与视觉体验严重割裂：同一类信息在不同页面出现 6 种样式，表单校验逻辑重复实现且不可配置。为保证毕业答辩的完整性，我决定
              “以 Design System 的方式” 交付成果：把 UI 规范、代码实现、测试与上线故事合为一体。
            </p>
            <ul className={styles.list}>
              <li>目标对象：课程数据运营团队 + 校内技术评审老师 + 求职面试官。</li>
              <li>交付内容：Figma 设计语言、Token 体系、React/Radix 组件库、Storybook、指标面板。</li>
              <li>衡量方式：组件复用率、Bug 数、Review 时长、导师评分。</li>
            </ul>
          </section>

          <section className={styles.section}>
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
              </div>
            </div>
          </section>

          <section className={styles.section}>
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
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>反思与可复制经验</h2>
            <ul className={styles.list}>
              <li>先定义 Token，再改组件，可让中途换主题时改动保持在 CSS 层，降低返工。</li>
              <li>度量设计质量的指标（复用率、Bug、评审时长）比“好不好看”更能说服导师/HR。</li>
              <li>Storybook + Chromatic + Vitest 的组合，让我可以在没有 CI/CD 的学校环境照样做到可回归。</li>
              <li>演示时准备“样式切换 + KPI 面板 + 代码片段”三件套，能把抽象的设计理念具体化。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>可用资产</h2>
            <ul className={styles.assetList}>
              <li>
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
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
