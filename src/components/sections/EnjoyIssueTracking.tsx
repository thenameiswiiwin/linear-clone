import CardBoardImg from '@assets/images/card-board.webp';
import CardViewsImg from '@assets/images/card-views.webp';
import IssuesImg from '@assets/images/issues.webp';
import { Features } from '@components/Features';
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from '@components/icons/features';

export const EnjoyIssueTracking = () => {
  return (
    <Features>
      <Features.Title>
        Issue tracking
        <br /> you'll enjoy using
      </Features.Title>
      <Features.Main
        image={IssuesImg}
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: 'Parent and sub-issues.',
            text: 'Break larger takss into smaller issues',
          },
          {
            icon: AutomatedBacklogIcon,
            title: 'Automated backlog.',
            text: 'Linear will auto-close and auto-archive issues.',
          },
          {
            icon: WorkflowsIcon,
            title: 'Custom workflows',
            text: 'Define unique issue states for each team.',
          },
          {
            icon: CustomViewsIcon,
            title: 'Filters and custom views.',
            text: "See only what's relevant for you.",
          },
          {
            icon: DiscussionIcon,
            title: 'Discussion.',
            text: 'Collaborate on issues without losing context.',
          },
          {
            icon: IssuesIcon,
            title: 'Issue templates.',
            text: 'Guide your team to write effective issues.',
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: CardBoardImg,
            title: 'List and board',
            text: 'Switch between list and board layout to view work from any angle.',
          },
          {
            image: CardViewsImg,
            title: 'Make it yours',
            text: 'Quickly apply filters and operators to refine your issue lists and create custom views.',
          },
        ]}
      />
    </Features>
  );
};
