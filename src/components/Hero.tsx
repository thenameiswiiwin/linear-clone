import { HeroContent } from '@lib/data';

const HeroTitle = () => {
  return (
    <h1 className="my-6 text-5xl">
      {HeroContent.titleTop}
      <br />
      {HeroContent.titleBottom}
    </h1>
  );
};

const HeroSubtitle = () => {
  return (
    <p className="mb-12 text-lg">
      {HeroContent.subtitleTop}
      <br />
      {HeroContent.subtitleBottom}
    </p>
  );
};

export const Hero = () => {
  return (
    <div className="text-center">
      <HeroTitle />
      <HeroSubtitle />
    </div>
  );
};
