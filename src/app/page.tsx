import HeroImg from '@assets/images/hero.webp';
import { Button, IconWrapper } from '@components/Button';
import { Container } from '@components/Container';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import { ChevronIcon } from '@components/icons/chevron';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <Container className="pt-[6.4rem]">
        <Hero>
          <Button
            href="/"
            intent="secondary"
            size="sm"
            className="translate-y-[-1rem] animate-fade-in opacity-0"
          >
            Linear 2022 Release - Built for scale
            <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubtitle>
          <Button
            href="/"
            intent="primary"
            size="lg"
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          >
            Get started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <Image src={HeroImg} alt="Hero image" className="mt-[12.8rem]" />
        </Hero>
      </Container>
    </div>
  );
}
