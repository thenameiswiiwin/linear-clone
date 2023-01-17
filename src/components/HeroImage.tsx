import HeroImg from '@assets/images/hero.webp';
import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className="mt-[12.8rem] overflow-hidden [perspective:2000px]">
      <div className="rounded-lg border border-gray-100 bg-white bg-opacity-[0.01] bg-hero-gradient [transform:rotateX(25deg)]">
        <Image src={HeroImg} alt="Hero image" />
      </div>
    </div>
  );
};
