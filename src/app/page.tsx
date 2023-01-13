import HeroImg from '@assets/images/hero.webp';
import { Container } from '@components/Container';
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <Container>
        <Hero>
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
