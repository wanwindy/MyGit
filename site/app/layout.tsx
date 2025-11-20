import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'wanwindy个人空间',
  description: '计算机科学与技术大四学生的项目作品集，面向 HR 展示真实工程与实习经验。',
  metadataBase: new URL('https://wanwindy.xyz'),
  alternates: {
    canonical: 'https://wanwindy.xyz',
  },
  openGraph: {
    title: 'wanwindy个人空间',
    description: '计算机科学与技术大四学生的项目作品集，面向 HR 展示真实工程与实习经验。',
    url: 'https://wanwindy.xyz',
    siteName: 'wanwindy个人空间',
    images: ['/og.png'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wanwindy个人空间',
    description: '计算机科学与技术大四学生的项目作品集，面向 HR 展示真实工程与实习经验。',
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
