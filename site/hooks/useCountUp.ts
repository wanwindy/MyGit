'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  duration?: number;
  active?: boolean;
};

export function useCountUp(target: number, options: Options = {}) {
  const { duration = 700, active = true } = options;
  const [value, setValue] = useState(() => (active ? 0 : target));
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!active) {
      setValue(target);
      return;
    }

    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, active]);

  return value;
}
