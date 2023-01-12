import { Container } from '@components/Container';
import { Hero } from '@components/Hero';

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
