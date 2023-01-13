import '@styles/globals.css';

import { Container } from '@components/Container';
import { Header } from '@components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <Header />
        <main className="pt-nav-height">{children}</main>
        <footer>
          <Container>footer</Container>
        </footer>
      </body>
    </html>
  );
}
