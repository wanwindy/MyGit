import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ClaudeCode 多 Agent 架构手记',
  description: '整理 ClaudeCode 手写笔记：交互层、记忆体系、SubAgent 调度与工具沙箱的完整拆解，并附原始扫描件。',
};

export default function ClaudeArchitectureNotePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <p className="eyebrow">笔记 · Claude</p>
            <h1>ClaudeCode 多 Agent 架构手记</h1>
            <p className={styles.description}>
              结合自己的项目实践，总结 ClaudeCode 在交互层、Agent 协作、记忆体系以及工具安全上的设计。文章把手写笔记整理成可复用的架构要点，顺便附上原稿扫描，方便 HR 或同学验证细节。
            </p>
            <div className={styles.meta}>
              <span>2024-11-15</span>
              <span>预计阅读 6 分钟</span>
              <span>CSDN · 1.2k+ 阅读</span>
            </div>
          </header>

          <section className={styles.section}>
            <h2>架构概览</h2>
            <p>ClaudeCode 采用“交互层 → Agent 调度层 → 工具执行层”的分层架构，复杂开发任务由多智能体和工具并行推进。</p>
            <ul className={styles.list}>
              <li>交互层支持 CLI、VSCode 插件与 Web 入口，API 网关会把请求路由到最近的计算集群，降低延迟。</li>
              <li>指令在调度层被转成任务图，线程池并行调配工具，长/短/复盘记忆负责保存上下文，避免代码生成中断。</li>
              <li>所有 Agent 与工具共享统一的上下文协议，调用结束后立即把结果写回“工具上下文 + 复盘记忆”，保证可追溯。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>交互层与工具链</h2>
            <p>工具层被抽象为“插件协议”，任何输入都可以通过可视化 UI 实现“提笔即写”的体验。</p>
            <ul className={styles.list}>
              <li>Prompt 解析模块识别任务类型、预期输出、依赖工具，并结合 Agent 偏好绑定最合适的工具链。</li>
              <li>调度器动态计算优先级（工具类型、参数影响度、依赖深度、置信度），当各工具冷启动或限流时会实时改写任务图。</li>
              <li>工具调用受权能系统保护，每次执行都能回放，支持临时热更新工具版本而不影响正在运行的流程。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>记忆与状态体系</h2>
            <p>多层记忆是 ClaudeCode 的稳定性关键，手写笔记中特别强调了三套机制。</p>
            <ul className={styles.list}>
              <li>长上下文处理模块会压缩并重排历史内容，把未完成任务、关键变量、错误栈放进优先缓存，其余写入延迟队列，输出稳定后再同步回持久层。</li>
              <li>短期记忆追踪当前任务进度，复盘记忆会在任务结束后生成 structured note，同时写入 long-term token store，方便复用。</li>
              <li>长期存储记录用户偏好（语言、风格、默认工具）以及系统配置；状态缓存采用“键值对 + 过期时间”设计，用来保存测试进度或未完成的文件修改。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Agent / SubAgent 协同</h2>
            <p>复杂功能会被拆成子任务，由 SubAgent 独立完成再由主 Agent 汇总。</p>
            <ul className={styles.list}>
              <li>调度器可把“修复代码逻辑、生成测试、构建脚本、更新文档”等任务拆给不同 SubAgent。</li>
              <li>每个 SubAgent 输出结构化反馈，主 Agent 结合复盘记忆决定下一步迭代。</li>
              <li>工具运行在受限沙箱，管控 CPU / 内存 / I/O，并把日志写进“工具事件流”，Debug Agent 可以随时复盘。</li>
              <li>内置 MCP 事件总线，把代码诊断、review 结果、测试日志等事件标准化广播，其他 Agent 可以订阅并在不同阶段接管任务。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>工具与安全治理</h2>
            <ul className={styles.list}>
              <li>Git 集成采用独立工作副本：开发 Agent 负责推送代码，Review Agent 负责合并策略，测试 / Ops Agent 负责验证与发布。</li>
              <li>权限装饰器在工具调用前校验所有令牌与密钥，敏感凭据只在调用瞬间解密，结束即销毁。</li>
              <li>缓存多副本备份 + checkpoint 机制，默认保存 3~5 个版本，方便回滚任意节点。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>任务执行流水线</h2>
            <p>book2 把一次“定位并修复 bug”的完整流水线拆成 8 步：</p>
            <ol className={styles.flow}>
              <li>用户交互层接收指令并标准化后，通过 API 网关送到主循环引擎。</li>
              <li>主循环解析任务类型，把请求放进消息队列，压缩器提取关键代码上下文。</li>
              <li>引擎按顺序调用工具：先读文件（文件操作工具），再用“代码诊断工具”定位 bug，并发控制器负责资源分配。</li>
              <li>权限网关校验用户是否有操作权限；若问题复杂，SubAgent 管理器把任务拆为“修复代码逻辑/生成测试”两条支线。</li>
              <li>短期记忆临时保存诊断结果，修复完成后会记录具体修复了哪些 bug。</li>
              <li>状态缓存更新文件的修改时间与版本号，长记忆记录经验，供后续任务参考。</li>
              <li>对话流生成器把新的代码按函数块流式输出给用户界面。</li>
              <li>主循环通过消息队列发送“任务完成”信号，交互层展示最终结果。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>原始手写笔记</h2>
            <p>以下是保存在 <code>/public</code> 的扫描件，可用于佐证笔记来源。</p>
            <div className={styles.gallery}>
              <Image src="/book1.jpg" alt="Claude 架构手写笔记（第一页）" width={1230} height={1936} priority />
              <Image src="/book2.jpg" alt="Claude 架构手写笔记（第二页）" width={1216} height={694} />
            </div>
          </section>

          <section className={styles.section}>
            <h2>线上同步</h2>
            <p>同一篇笔记也在 CSDN 发布，截至目前累计 1.2k+ 阅读，方便校招 HR 直接转发或讨论。</p>
            <a
              className={styles.externalLink}
              href="https://blog.csdn.net/a1269936432/article/details/149650006?fromshare=blogdetail&sharetype=blogdetail&sharerId=149650006&sharerefer=PC&sharesource=a1269936432&sharefrom=from_link"
              target="_blank"
              rel="noreferrer"
            >
              在 CSDN 阅读原文
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
