'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: '项目', href: '#projects' },
  { label: '文章', href: '#articles' },
  { label: '历程', href: '#journey' },
  { label: '联系', href: '#contact' },
];

type Contact = {
  label: string;
  display: string;
  value: string;
};

const contacts: Contact[] = [
  { label: '电话', display: '191 8245 9004', value: '19182459004' },
  { label: '邮箱', display: 'wanwindy@163.com', value: 'wanwindy@163.com' },
  { label: '微信', display: 'l1269936432', value: 'l1269936432' },
];

export function Navbar() {
  const [hovering, setHovering] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = hovering || pinned;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setPinned(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setPinned(false);
      }
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleButtonClick = () => {
    setPinned((prev) => !prev);
  };

  const handleCopy = async (contact: Contact) => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopied(contact.label);
      setTimeout(() => {
        setCopied((prev) => (prev === contact.label ? null : prev));
      }, 2000);
    } catch (error) {
      console.error('copy failed', error);
    }
  };

  return (
    <motion.header
      className={styles.nav}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a className={styles.brand} href="#top">
        <span className={styles.brandDot} />
        wanwindy · 我的项目作品集
      </a>
      <div className={styles.right}>
        <nav className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div
          className={styles.contact}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <button
            ref={buttonRef}
            type="button"
            className={`${styles.avatarButton} ${isOpen ? styles.avatarButtonActive : ''}`}
            onClick={handleButtonClick}
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-label="打开联系方式"
          >
            <span className={styles.avatarPulse} />
            <Image src="/avatar.jpg" alt="个人头像" width={44} height={44} className={styles.avatarImage} />
          </button>
          <div
            className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
            ref={menuRef}
            role="menu"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <p className={styles.menuTitle}>联系我</p>
            <p className={styles.menuHint}>点击可复制信息，欢迎 HR 或团队随时沟通</p>
            <div className={styles.menuItems}>
              {contacts.map((item) => (
                <button key={item.label} type="button" className={styles.menuItem} onClick={() => handleCopy(item)}>
                  <span>{item.label}</span>
                  <strong>{copied === item.label ? '已复制 ✓' : item.display}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
