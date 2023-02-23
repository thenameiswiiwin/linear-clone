import AppImg from '@assets/images/appIcon.webp';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { AppleIcon } from '@components/icons/apple';
import Image from 'next/image';

export const AvailableToday = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 pb-16 text-center">
        <Image
          src={AppImg}
          alt="Linear app icon"
          className="h-[12.8rem] w-[12.8rem]"
        />
        <h1 className="text-gradient text-5xl md:text-8xl">
          Built for the future.
          <br />
          Available today.
        </h1>
        <div className="flex gap-[1.6rem]">
          <Button type="button" intent="primary" size="lg">
            Sign up for free
          </Button>
          <Button
            type="button"
            intent="secondary"
            size="lg"
            className="hidden md:inline-flex"
          >
            <AppleIcon />
            <span className="ml-2">Download</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
