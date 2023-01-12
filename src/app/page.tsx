import { AppConfig } from '@lib/AppConfig';
import { Container } from '@components/Container';

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>{AppConfig.header}</Container>
      </header>
      <main>
        <Container>{AppConfig.main}</Container>
      </main>
      <footer>
        <Container>{AppConfig.footer}</Container>
      </footer>
    </div>
  );
}
