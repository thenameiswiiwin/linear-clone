import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
};

export const Features = ({ children, color }: FeaturesProps) => {
  return (
    <section
      className="flex flex-col items-center py-[12.8rem]"
      style={{ '--feature-color': color } as React.CSSProperties}
    >
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
      <p className="mx-auto my-16 text-2xl leading-tight text-white md:w-[80%] md:text-4xl">
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
    <div className="gid-cols-2 mb-[14rem] grid w-full place-items-center gap-y-9 text-sm text-gray-300 md:grid-cols-3 md:text-md">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          key={title}
          className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline"
        >
          <Icon />
          <span className="block text-white md:inline">{title}</span> {text}
        </div>
      ))}
    </div>
  );
};

type FeatureCardsProps = {
  features: {
    image: StaticImageData;
    imgClassName: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {features.map(({ title, text, image, imgClassName }) => (
        <div
          key={title}
          className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-gray-100 bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
        >
          <h3 className="mb-2 text-2xl text-white">{title}</h3>
          <p className="max-w-[31rem] text-md text-gray-300">{text}</p>
          <Image
            src={image}
            alt={title}
            className={clsx('absolute max-w-none', imgClassName)}
          />
        </div>
      ))}
    </div>
  );
};

Features.Title = FeatureTile;
Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
