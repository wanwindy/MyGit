'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useState, type CSSProperties } from 'react';

type Props = {
  chart?: string;
  className?: string;
};

let initialized = false;

const messageStyle: CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-muted)',
  margin: 0,
};

export function MermaidDiagram({ chart, className }: Props) {
  const id = useId().replace(/:/g, '-');
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const normalizedChart = chart?.trim();

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
      });
      initialized = true;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!normalizedChart) {
        setSvg(null);
        return;
      }
      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, normalizedChart);
        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setSvg(null);
          const message = err instanceof Error ? err.message : 'Mermaid 渲染失败';
          setError(message);
        }
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [id, normalizedChart]);

  if (!normalizedChart) {
    return (
      <div className={className}>
        <p style={messageStyle}>暂无架构图</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <p style={messageStyle}>Mermaid 渲染失败：{error}</p>
        <pre>
          <code>{normalizedChart}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={className}>
        <p style={messageStyle}>架构图渲染中...</p>
      </div>
    );
  }

  // eslint-disable-next-line react/no-danger
  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}
