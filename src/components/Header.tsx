'use client';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { HamburgerIcon } from '@components/icons/hamburger';
import { Logo } from '@components/icons/logo';
import { NavLinks } from '@lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-200 backdrop-blur-[12px]">
      <Container className="flex h-nav-height">
        <Link href="/" className="flex items-center text-md">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <nav
          className={clsx(
            'fixed top-nav-height left-0 h-[calc(100vh-var(--nav-height))] w-full overflow-auto bg-black md:relative md:block md:top-0 md:h-auto md:w-auto md:bg-transparent',
            isOpen ? '' : 'hidden'
          )}
        >
          <ul className="flex h-full flex-col md:flex-row md:items-center">
            {NavLinks.map((link) => (
              <li
                key={link.label}
                className={clsx(
                  'ml-6 border-b border-gray-200 md:border-none',
                  link.className
                )}
              >
                <Link
                  href={link.href}
                  className="flex h-nav-height w-full items-center text-md transition-colors hover:text-gray-100 md:text-sm"
                >
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
          <Button href="/login" intent="primary">
            Sign up
          </Button>
        </div>

        <button onClick={handleToggle} className="ml-6 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
