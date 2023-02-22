'use client';

import { Features } from '@components/Features';
import { ChevronIcon } from '@components/icons/chevron';
import {
  AirbyteIcon,
  FigmaIcon,
  FrontInterZenIcon,
  GitIcon,
  SentryIcon,
  SlackDiscIcon,
} from '@components/icons/features/linearWorkflows';

export const LinearWorkflows = () => {
  return (
    <Features color="62,36,118" colorDark="62,36,118">
      <Features.Main
        title={
          <>
            Linear workflows.
            <br /> Expoential results.
          </>
        }
        text="From customer support integrations to powerful Git automations, Linear streamlines the entire product development process."
        btnText={
          <>
            Discover integrations
            <ChevronIcon fill="#8A8F98" className="ml-1" />
          </>
        }
      />
      <Features.Grid
        features={[
          {
            icon: GitIcon,
            title: 'GitHub and GitLab.',
            text: 'Prs with issues that close automatically.',
          },
          {
            icon: SlackDiscIcon,
            title: 'Slack and Discord.',
            text: 'Create issues and set up alerts.',
          },
          {
            icon: SentryIcon,
            title: 'Sentry.',
            text: 'Automatically create issues from code exceptions.',
          },
          {
            icon: AirbyteIcon,
            title: 'Airbyte.',
            text: 'Sync workspace data to external warehouses and databases.',
          },
          {
            icon: FrontInterZenIcon,
            title: 'Front, Intercom, Zendesk.',
            text: 'Keep a tight loop with your users.',
          },
          {
            icon: FigmaIcon,
            title: 'Figma.',
            text: 'Embed design files in issues and documents.',
          },
        ]}
      />
    </Features>
  );
};
