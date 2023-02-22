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

type FeatureMain = {
  image: string;
  text: string;
};

const FeatureMain = ({ image, text }: FeatureMain) => {
  return <div>Big Image</div>;
};

type FeatureGridProps = {
  features: {
    icon: react.ReactNode;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return <div>Feature Grid</div>;
};

type FeatureCardsProps = {
  features: {
    image: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return <div>Feature Cards</div>;
};

Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
