'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScroll(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[9999]">
      <div
        className="h-full bg-yellow-400 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
