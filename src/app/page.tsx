import { Container } from '@components/Container';
import { StarsIllustration } from '@components/illustrations/Stars';
import { BuildMomentum } from '@components/sections/BuildMomentum';
import { Clients } from '@components/sections/Clients';
import { EnjoyIssueTracking } from '@components/sections/EnjoyIssueTracking';
import { HomepageHero } from '@components/sections/HomepageHero';
import { SetDirection } from '@components/sections/SetDirection';
import { UnlikeAnyTools } from '@components/sections/UnlikeAnyTools';
import clsx from 'clsx';

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={clsx(
          'mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden',
          '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
          'after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,119,198,0.4)] after:bg-black'
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTools />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
