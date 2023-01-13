import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { Logo } from '@components/icons/logo';
import { SlackIcon } from '@components/icons/slack';
import { TwitterIcon } from '@components/icons/twitter';
import { FooterLinks } from '@lib/data';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-gray-400">
              <Logo className="mr-4 h-4 w-4" /> Linear - Designed Worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-gray-400">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {FooterLinks.map((column) => (
            <div
              key={column.title}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label} className="[&_a]:last:mb-0">
                    <Link
                      href={link.href}
                      className="mb-3 block text-gray-400 transition-colors hover:text-gray-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
