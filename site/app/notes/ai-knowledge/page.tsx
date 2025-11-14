import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI 百题进行中 · 核心技术原理复习',
  description:
    '整理 AI 知识体系的长篇笔记，对 100 个核心问题逐一写背景、数学推导、伪代码与复杂度，涵盖模型优化、分布式训练、硬件推理、高级模型与安全对齐。',
};

export default function AIKnowledgeNotePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <p className="eyebrow">笔记 · AI 百题</p>
            <h1>AI 百题进行中：核心技术原理复习</h1>
            <p className={styles.description}>
              《AIKnowledge.md》是我正在撰写的 100 题长文，目标是把模型压缩、分布式训练、推理硬件、对齐与安全等面试常问话题润色成“背景 +
              数学推导 + 伪代码 + 复杂度 + 应用”的结构化答案。当前已完成 Part 1~3 的初稿，并持续补全剩余内容。
            </p>
            <div className={styles.meta}>
              <span>2024-11-20</span>
              <span>预计阅读 8 分钟</span>
              <span>草稿更新中</span>
            </div>
          </header>

          <section className={styles.section}>
            <h2>文档结构</h2>
            <p>全文按照“原题编号”拆成 5 个部分，便于按领域复习：</p>
            <ul className={styles.list}>
              <li>Part 1 · 原理与优化（Q1-Q20）：模型压缩、Self-Attention、FlashAttention、LoRA、梯度稳定性等。</li>
              <li>Part 2 · 分布式训练（Q21-Q40）：数据/模型/流水并行、ZeRO、参数服务器、故障恢复。</li>
              <li>Part 3 · 硬件与推理（Q41-Q60）：稀疏 GEMM、GPU vs NPU、TPU MXU、HBM/DDR、Cache 一致性。</li>
              <li>Part 4 · 高级模型与对齐（Q61-Q80）：位置编码、GPT vs BERT、KV Cache、动态量化、长序列优化等。</li>
              <li>Part 5 · 安全与应用（Q81-Q100）：对抗攻击、差分隐私、联邦学习、公平性、可审计性、边缘部署。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>编写方式</h2>
            <p>每道题都遵循“背景 → 数学原理 → 伪代码 → 性能分析 → 应用”流程，让读者快速参考关键点。</p>
            <ul className={styles.list}>
              <li>数学部分统一使用 LaTeX 公式，可直接复制到论文或演示文档。</li>
              <li>伪代码遵循标准缩进与注释规范，方便转成任意语言。</li>
              <li>性能分析给出时间/空间复杂度，并标记常见工程折衷项。</li>
              <li>交叉引用以“见第 X.Y 节”形式写在文本内，适合跳读。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>样例：Q1 模型压缩</h2>
            <p>以下为 Q1 的结构示例，所有题目都保持类似粒度：</p>
            <div className={styles.codeBlock}>
              <pre>
                <code>
                  {`function ModelCompression(model, target_sparsity):
    importance = calculate_importance(model)
    threshold = percentile(importance, target_sparsity)
    for param in model.parameters():
        mask = importance > threshold
        param.data *= mask
    return sparse_model`}
                </code>
              </pre>
            </div>
            <p>这道题还会解释量化/剪枝/蒸馏/低秩分解的数理依据，并给出“时间复杂度 O(n log n)、空间 O(n)、压缩率可达 90%”的评估。</p>
          </section>

          <section className={styles.section}>
            <h2>当前进度</h2>
            <ul className={styles.list}>
              <li>✔ Part 1：20 题全部补完，包含梯度稳定性、FlashAttention、LoRA、损失景观等内容。</li>
              <li>✔ Part 2：已整理完并行策略与通信优化，正在补充容错案例与参数服务器细节。</li>
              <li>⚙ Part 3：硬件与推理章节进入润色阶段，补充 HBM vs DDR、Cache 一致性图解。</li>
              <li>✍ Part 4-5：正在撰写，计划把 KV Cache、对齐、安全等内容与近期阅读的论文结合。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>下一步计划</h2>
            <ul className={styles.list}>
              <li>为每个问题加入“常见面试追问”与“工程踩坑”小结，便于口述。</li>
              <li>补充配套的 Python / CUDA demo 片段，尤其是量化、稀疏矩阵与 KV Cache。</li>
              <li>整理出可打印的公式速查与复杂度表格，和附录 B/C 呼应。</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>原始草稿下载</h2>
            <p>想要第一时间查看更新，可直接阅读仓库里的 Markdown 草稿。</p>
            <a className={styles.externalLink} href="/AIKnowledge.md" target="_blank" rel="noreferrer">
              打开 AIKnowledge.md
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
