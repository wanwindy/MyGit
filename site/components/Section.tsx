'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function Section({ children, className, delay = 0, id }: Props) {
  const classes = ['section-shell', className].filter(Boolean).join(' ');

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={classes}
    >
      {children}
    </motion.section>
  );
}
