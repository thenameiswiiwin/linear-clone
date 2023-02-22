'use client';

import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from '@components/icons/commandBar';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';

const CommandOptions = [
  {
    label: 'Assign to...',
    icon: AssignToIcon,
    subOptions: [
      {
        label: 'Jori',
        icon: PersonIcon,
      },
      {
        label: 'Karri',
        icon: PersonIcon,
      },
      {
        label: 'Tuomas',
        icon: PersonIcon,
      },
    ],
  },
  {
    label: 'Change status...',
    icon: ChangeStatusIcon,
    subOptions: [
      {
        label: 'Backlog',
        icon: BacklogIcon,
      },
      {
        label: 'Todo',
        icon: TodoIcon,
      },
      {
        label: 'In Progress',
        icon: InProgressIcon,
      },
      {
        label: 'Done',
        icon: DoneIcon,
      },
    ],
  },
  {
    label: 'Change priority...',
    icon: ChangePriorityIcon,
    subOptions: [
      {
        label: 'No priority',
        icon: NoPriorityIcon,
      },
      {
        label: 'Urgent',
        icon: UrgentIcon,
      },
      {
        label: 'High',
        icon: HighIcon,
      },
      {
        label: 'Medium',
        icon: MediumIcon,
      },
      {
        label: 'Low',
        icon: LowIcon,
      },
    ],
  },
  {
    label: 'Add label...',
    icon: AddLabels,
    subOptions: [
      {
        label: 'Bug',
        icon: () => <LabelIcon type="bug" />,
      },
      {
        label: 'Feature',
        icon: () => <LabelIcon type="feature" />,
      },
      {
        label: 'Improvement',
        icon: () => <LabelIcon type="improvement" />,
      },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuBtn =
        e.target instanceof Element &&
        e.target.classList.contains('commandMenuBtn');
      const clickedOutside =
        !isMenuBtn && !commandMenuRef.current.contains(e.target as Node);

      setOpened(!clickedOutside);
    };

    window.addEventListener('click', toggleCommandMenu);

    return () => {
      window.removeEventListener('click', toggleCommandMenu);
    };
  }, []);

  const currentOption = useMemo(() => {
    const options =
      selectedOption === null
        ? CommandOptions
        : CommandOptions[selectedOption].subOptions;

    return options;
  }, [selectedOption]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove('animate-bounce');
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add('animate-bounce');
  }, [selectedOption]);

  return (
    <div ref={commandMenuRef} className={clsx(opened && 'opened')}>
      <div
        className={clsx(
          'absolute left-1/2 flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-lg border border-gray-100 bg-gray-100 transition-[transform,opacity]',
          opened && 'opened translate-y-[2.4rem] opacity-100',
          !opened && 'translate-y-[12.8rem] opacity-60'
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
          LIN-111 Walkway lighting
        </span>
        <input
          type="text"
          placeholder="Type a command or search..."
          className="w-full bg-transparent p-5 text-lg outline-none"
        />
        <div className="flex w-full flex-col text-sm text-gray-200">
          {currentOption.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setSelectedOption('subOptions' in menuItem ? index : null);
              }}
              className="commandMenuBtn flex h-[4.6rem] w-full items-center gap-3 px-5 hover:bg-white/[0.05]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
