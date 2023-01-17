import { NavLinks as Links } from '@lib/data';
import clsx from 'clsx';
import Link from 'next/link';

interface NavBarProps {
  isOpen: boolean;
}

export const NavBar = ({ isOpen }: NavBarProps) => {
  return (
    <div
      className={clsx(
        'transition-[visibility] md:visible',
        isOpen ? 'visible' : 'invisible delay-500'
      )}
    >
      <nav
        className={clsx(
          'fixed top-nav-height left-0 h-[calc(100vh_-_var(--nav-height))] w-full overflow-auto bg-black transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none',
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[-100vw] opacity-0'
        )}
      >
        <ul className="flex h-full flex-col ease-in md:flex-row md:items-center">
          {Links.map((link) => (
            <li
              key={link.label}
              className={clsx(
                'ml-6 border-b border-gray-500 md:border-none',
                link.className
              )}
            >
              <Link
                href={link.href}
                className={clsx(
                  'flex h-nav-height w-full translate-y-8 items-center text-lg transition-[color,transform] duration-300 hover:text-gray-400 md:translate-y-0 md:text-md md:transition-colors',
                  isOpen && 'translate-y-0'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
