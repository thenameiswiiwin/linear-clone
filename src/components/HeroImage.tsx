'use client';

import HeroImg from '@assets/images/hero.webp';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  console.log(inView);

  return (
    <div
      ref={ref}
      className="mt-[12.8rem] overflow-hidden [perspective:2000px]"
    >
      <div
        className={clsx(
          'rounded-lg border border-gray-100 bg-white bg-opacity-[0.01] bg-hero-gradient',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]'
        )}
      >
        <Image src={HeroImg} alt="Hero image" />
      </div>
    </div>
  );
};
