import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { Logo } from '@components/icons/logo';
import { SlackIcon } from '@components/icons/slack';
import { TwitterIcon } from '@components/icons/twitter';

import { FooterLink } from './FooterLink';

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
        <FooterLink />
      </Container>
    </footer>
  );
};
