import { HeroContent } from '@lib/content/HeroContent';

const HeroTitle = () => {
  return (
    <h1 className="text-5xl my-6">
      {HeroContent.titleTop}
      <br />
      {HeroContent.titleBottom}
    </h1>
  );
};

const HeroSubtitle = () => {
  return (
    <p className="text-lg mb-12">
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
