

'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SlideInSection({
  children,
  direction = 'left',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xFrom = direction === 'left' ? -100 : 100;

    gsap.fromTo(
      el,
      { x: xFrom, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, [direction]);

  return <div ref={ref}>{children}</div>;
}
