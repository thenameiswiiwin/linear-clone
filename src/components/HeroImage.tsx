'use client';

import HeroImg from '@assets/images/hero.webp';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  console.log(inView);

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
        <Image src={HeroImg} alt="Hero image" className="relative z-10" />
      </div>
    </div>
  );
};
