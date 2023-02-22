'use client';

import CyclesImg from '@assets/images/cycles.webp';
import { Features } from '@components/Features';

import {
  ConfigurableIcon,
  CreepIcon,
  DelaysIcon,
  PreparedIcon,
  ScheduledIcon,
  TrackingIcon,
} from '../icons/features/buildMomentum';

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Build momentum
            <br />
            with Cycles
          </>
        }
        image={CyclesImg}
        imgSize="large"
        text="Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress."
      />
      <Features.Grid
        features={[
          {
            icon: TrackingIcon,
            title: 'Automatic tracking.',
            text: 'Any started issues are added to the current cycle.',
          },
          {
            icon: ScheduledIcon,
            title: 'Scheduled.',
            text: 'Unfinished work rolls over to the next cycle automatically.',
          },
          {
            icon: ConfigurableIcon,
            title: 'Fully configurable.',
            text: 'Define start date, end date, duration, and more.',
          },
          {
            icon: DelaysIcon,
            title: 'Predict delays.',
            text: 'Get warnings for at-risk cycles.',
          },
          {
            icon: CreepIcon,
            title: 'Scope creep.',
            text: 'Understand which issues are added mid-cycle.',
          },
          {
            icon: PreparedIcon,
            title: 'Be prepared.',
            text: 'Schedule work in advance with upcoming cycles.',
          },
        ]}
      />
    </Features>
  );
};
