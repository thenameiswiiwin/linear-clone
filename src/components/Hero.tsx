import { HeroContent } from '@lib/data';

export const Hero = () => {
  return (
    <div className="text-center">
      <h1 className="my-6 text-6xl md:text-8xl">
        {HeroContent.titleTop} <br className="hidden md:block" />{' '}
        {HeroContent.titleBottom}
      </h1>
      <p className="mb-12 text-lg md:text-xl text-gray-200">
        {HeroContent.subtitleTop} <br className="hidden md:block" />{' '}
        {HeroContent.subtitleBottom}
      </p>
    </div>
  );
};
