'use client';

import CardRoadmapsImg from '@assets/images/card-roadmaps.webp';
import CardUpdatesImg from '@assets/images/card-updates.webp';
import RoadmapImg from '@assets/images/roadmap.webp';
import { Features } from '@components/Features';

import {
  DocumentsIcon,
  InsightsIcon,
  MultiTeamIcon,
  NotificationsIcon,
  RoadmapsIcon,
  TimelineIcon,
} from '../icons/features/setDirection';

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Set direction
            <br />
            with Roadmaps
          </>
        }
        image={RoadmapImg}
        imgSize="large"
        text="Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamIcon,
            title: 'Multi-team projects.',
            text: 'Collaborate across teams and departments.',
          },
          {
            icon: DocumentsIcon,
            title: 'Project documents.',
            text: 'Write project briefs and specs directly in Linear.',
          },
          {
            icon: RoadmapsIcon,
            title: 'Custom roadmaps.',
            text: 'Organize projects across multiple roadmaps.',
          },
          {
            icon: TimelineIcon,
            title: 'Timeline view.',
            text: 'Visualize the product journey ahead.',
          },
          {
            icon: InsightsIcon,
            title: 'Project insights.',
            text: 'Track scope, velocity, and progress over time.',
          },
          {
            icon: NotificationsIcon,
            title: 'Personal notifications.',
            text: 'Stay in the loop on project activity and updates.',
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: CardUpdatesImg,
            imgClassName: 'top-[55%] md:top-[40%] w-full left-[7%]',
            title: 'Project updates',
            text: 'Keep everyone up-to-date on the health and progress of projects.',
          },
          {
            image: CardRoadmapsImg,
            imgClassName: 'top-[55%] md:top-[40%] w-full left-[2%]',
            title: 'Focus on the big picture',
            text: 'Explore every company project in one view to easily identify what needs attention.',
          },
        ]}
      />
    </Features>
  );
};
