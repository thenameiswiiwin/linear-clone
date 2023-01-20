'use client';

import { KeyboardIllustration } from '@components/illustrations/Keyboard';
import { useRef } from 'react';

import { Button, Highlight } from './Button';

const Shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onShortcutButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTo({
      left: e.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="mask-keyboard h-full w-full">
        <KeyboardIllustration />;
      </div>
      <div className="min-h-[4rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
        >
          {Shortcuts.map((shortcut) => (
            <Button
              key={shortcut.text}
              onClick={onShortcutButtonClick}
              intent="secondary"
              className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]"
            >
              <Highlight className="mr-4 uppercase">{shortcut.keys}</Highlight>
              {shortcut.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
