'use client';

import { KeyboardIllustration } from '@components/illustrations/Keyboard';
import { Shortcuts } from '@lib/data';
import { useEffect, useRef } from 'react';

import { Button, Highlight } from './Button';

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcutIndexRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scheduleTimeout = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    timeoutRef.current = setTimeout(goToNextShortcut, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToShortcut = (index: number) => {
    clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    );

    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: 'smooth',
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      .querySelectorAll('.active')
      .forEach((el) => el.classList.remove('active'));

    const keys = shortcut.dataset.keys || '';
    const keyArray = keys.split('');
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );

    keyElements.forEach((element) => element?.classList.add('active'));

    activeShortcutIndexRef.current = index;
    scheduleTimeout();
  };

  const goToNextShortcut = () =>
    goToShortcut((activeShortcutIndexRef.current + 1) % Shortcuts.length);

  const onShortcutButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goToShortcut(Number(e.currentTarget.dataset.index));
  };

  return (
    <>
      <div
        ref={illustrationWrapperRef}
        className="mask-keyboard absolute top-0 -left-12 h-full max-h-[30rem] w-[200%] md:relative md:left-auto md:w-full"
      >
        <KeyboardIllustration />;
      </div>
      <div className="my-7 hidden min-h-[4rem] w-full overflow-hidden md:block">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex h-[6rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
        >
          {Shortcuts.map((shortcut, index) => (
            <Button
              key={shortcut.text}
              data-index={index}
              data-keys={shortcut.keys}
              onClick={onShortcutButtonClick}
              intent="secondary"
              className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]"
            >
              <Highlight className="uppercase">{shortcut.keys}</Highlight>
              <span className="ml-[.8rem]">{shortcut.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
