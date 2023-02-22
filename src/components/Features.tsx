import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type FeaturesProps = {
  children: React.ReactNode;
};

export const Features = ({ children }: FeaturesProps) => {
  return (
    <section className="flex flex-col items-center py-[12.8rem]">
      {children}
    </section>
  );
};

type FeatureTitleProps = {
  children: React.ReactNode;
};

const FeatureTile = ({ children }: FeatureTitleProps) => {
  return (
    <h2 className="text-gradient text-center text-6xl md:text-8xl mb-11">
      {children}
    </h2>
  );
};

type FeatureMainProps = {
  image: StaticImageData;
  text: string;
};

const FeatureMain = ({ image, text }: FeatureMainProps) => {
  return (
    <div className="w-[78rem] max-w-[90%] text-center">
      <div>
        <Image src={image} alt="issues" className="h-auto w-full" />
        <p className="leading-tight w-[80%] mx-auto mt-16 text-4xl text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div>
      {features.map(({ title, text, icon: Icon }) => (
        <div key={title}>
          <Icon />
          <span>{title}</span> {text}
        </div>
      ))}
    </div>
  );
};

type FeatureCardsProps = {
  features: {
    image: StaticImageData;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <div>
      {features.map(({ title, text, image }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
          <Image src={image} alt={title} />
        </div>
      ))}
    </div>
  );
};

Features.Title = FeatureTile;
Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
