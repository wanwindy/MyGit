import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'wanwindy个人空间',
  description: '计算机科学与技术大四学生的项目作品集，面向 HR 展示真实工程与实习经验。',
  metadataBase: new URL('https://atelier.example.com'),
  openGraph: {
    title: 'Atelier · CS Portfolio',
    description: '展示课程设计、实习与 Hackathon 的真实成果，欢迎 HR 联系。',
    url: 'https://atelier.example.com',
    siteName: 'Atelier',
    images: ['/og.svg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="page-shell">{children}</body>
    </html>
  );
}
