import { Container } from '@components/Container';
import { Logo } from '@components/icons/logo';
import { NavLinks } from '@lib/data';
import clsx from 'clsx';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-100">
      <Container className="flex h-[var(--nav-height)]">
        <Link href="/" className="flex items-center text-md">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <nav className="h-full">
          <ul className="flex h-full items-center">
            {NavLinks.map((link) => (
              <li key={link.label} className={clsx('ml-6', link.className)}>
                <Link href={link.href} className="text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex h-full items-center">
          <Link href="/login" className="mr-6 text-sm">
            Log in
          </Link>
          <Link href="/login">Sign up</Link>
        </div>
      </Container>
    </header>
  );
};
