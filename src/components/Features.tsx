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
    <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
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
      <div className="relative rounded-[14px] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0)120%)] before:p-[1px] before:[mask:linear-gradient(black,black)content-boxcontent-box,linear-gradient(black,black)] before:[mask-composite:xor] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,255,255,0.15)] after:[mask:linear-gradient(black,transparent)]">
        <Image src={image} alt="issues" className="h-auto w-full" />
      </div>
      <p className="mx-auto my-16 w-[80%] text-4xl leading-tight text-white">
        {text}
      </p>
      <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)50%,transparent)]" />
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
