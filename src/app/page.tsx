import HeroImg from '@assets/images/hero.webp';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <Container>
        <Hero />
        <Image src={HeroImg} alt="Hero image" />
      </Container>
    </div>
  );
}
