import HeroImg from '@assets/images/hero.webp';
import { Button, IconWrapper } from '@components/Button';
import { Container } from '@components/Container';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <Container className="pt-[6.4rem]">
        <Hero>
          <Button href="/" intent="secondary" size="sm">
            Linear 2022 Release - Built for scale
            <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle>
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubtitle>
        </Hero>
        <Image src={HeroImg} alt="Hero image" />
      </Container>
    </div>
  );
}
