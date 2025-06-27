// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector('#smooth-wrapper') as HTMLElement;
    const content = document.querySelector('#smooth-content') as HTMLElement;

    if (!container || !content) return;

    // Basic smooth scrolling simulation
    gsap.to(content, {
      y: () => -(content.scrollHeight - container.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => content.scrollHeight,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
