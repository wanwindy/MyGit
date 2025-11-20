import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteTitle = 'wanwindy\u4e2a\u4eba\u7a7a\u95f4';
const siteDescription = '\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f\u5927\u56db\u5b66\u751f\u7684\u9879\u76ee\u4f5c\u54c1\u96c6\uff0c\u9762\u5411 HR \u5c55\u793a\u771f\u5b9e\u5de5\u7a0b\u4e0e\u5b9e\u4e60\u7ecf\u9a8c\u3002';

export const metadata: Metadata = {
  metadataBase: new URL('https://wanwindy.xyz'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: 'https://wanwindy.xyz',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://wanwindy.xyz',
    siteName: siteTitle,
    images: ['/og.png'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="page-shell">{children}</body>
    </html>
  );
}
