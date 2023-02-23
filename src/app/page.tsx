import { Container } from '@components/Container';
import { StarsIllustration } from '@components/illustrations/Stars';
import { AvailableToday } from '@components/sections/AvailableToday';
import { BuildMomentum } from '@components/sections/BuildMomentum';
import { Clients } from '@components/sections/Clients';
import { EnjoyIssueTracking } from '@components/sections/EnjoyIssueTracking';
import { HomepageHero } from '@components/sections/HomepageHero';
import { LinearWorkflows } from '@components/sections/LinearWorkflows';
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
        <StarsIllustration className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]" />
      </div>
      <UnlikeAnyTools />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
      <LinearWorkflows />
      <div
        className={clsx(
          'mask-radial-faded pointer-events-none relative z-[-1] my-[-16.4rem] h-[48rem] rotate-180 overflow-hidden md:h-[60rem]',
          '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
          'after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(78,92,218,0.4)] after:bg-black'
        )}
      >
        <StarsIllustration className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]" />
      </div>
      <AvailableToday />
    </>
  );
}
