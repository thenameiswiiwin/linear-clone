'use client';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { HamburgerIcon } from '@components/icons/hamburger';
import { Logo } from '@components/icons/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { NavBar } from './NavBar';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) html.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('resize', () => handleResize);
    return () => {
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-gray-100 backdrop-blur-[12px]">
      <Container className="flex h-nav-height">
        <Link href="/" className="flex items-center text-lg">
          <Logo className="mr-2 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <NavBar isOpen={isOpen} />
        <div className="ml-auto flex h-full items-center">
          <Link href="/login" className="mr-6 text-md">
            Log in
          </Link>
          <Button href="/login" intent="primary">
            Sign up
          </Button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="ml-6 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
