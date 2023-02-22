import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type FeaturesProps = {
  title: string;
  children: React.ReactNode;
};

export const Features = ({ title, children }: FeaturesProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

type FeatureMainProps = {
  image: StaticImageData;
  text: string;
};

const FeatureMain = ({ image, text }: FeatureMainProps) => {
  return (
    <div>
      <Image src={image} alt="issues" />
      <p>{text}</p>
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

Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
