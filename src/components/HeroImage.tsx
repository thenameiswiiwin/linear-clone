'use client';

import HeroImg from '@assets/images/hero.webp';
import clsx from 'clsx';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState([
    { direction: 'to bottom', duration: 2800, size: 20 },
    { direction: 'to right', duration: 3000, size: 15 },
  ]);

  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={clsx(
          'relative rounded-lg border border-gray-100 bg-white bg-opacity-[0.01] bg-hero-gradient',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]',
          inView && 'before:animate-image-glow'
        )}
      >
        {/* Glowing Lines */}
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              key={line.size}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--animation-duration': `${line.duration}ms`,
                } as CSSProperties
              }
              className={clsx(
                'absolute top-0 block h-[1px] w-[10rem] bg-glow-lines',
                line.direction === 'to bottom' &&
                  'right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical',
                line.direction === 'to right' &&
                  'left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal'
              )}
            />
          ))}
        </div>
        {/* Sketch SVG  */}
        <svg
          className={clsx(
            'absolute top-0 left-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <Image
          src={HeroImg}
          alt="Hero image"
          className={clsx(
            'relative z-10 transition-opacity delay-[600ms]',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </div>
  );
};
