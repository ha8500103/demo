"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const GsapTest: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 100, duration: 1, repeat: -1, yoyo: true });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="w-32 h-32 bg-indigo-500 rounded shadow flex items-center justify-center text-white"
    >
      GSAP Box
    </div>
  );
};

export default GsapTest;