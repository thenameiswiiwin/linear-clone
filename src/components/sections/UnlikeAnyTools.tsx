import { Button, Highlight } from '@components/Button';
import { ChevronIcon } from '@components/icons/chevron';
import { LogoLightIllustration } from '@components/illustrations/LogoLight';
import { ZapIllustration } from '@components/illustrations/Zap';

export const UnlikeAnyTools = () => (
  <div className="text-white">
    <div className="text-center">
      <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
        Unlike any tool
        <br className="hidden md:inline-block" /> you’ve used before
      </h2>
      <p className="mx-auto mb-4 max-w-[68rem] text-lg text-gray-300 md:text-xl">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
    </div>
    <div className="flex flex-wrap gap-6">
      <div className="flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col items-center justify-end rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:p-14">
        <p className="text-3xl">Built for your keyboard</p>
        <p className="text-md text-gray-300">
          Fly through your tasks with rapid-fire keyboard shortcuts for
          everything. Literally everything.
        </p>
      </div>
      <div className="relative flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col items-center justify-end rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:p-14">
        <div className="mask-linear-faded absolute top-[-9.2rem]">
          <ZapIllustration />
        </div>
        <p className="text-3xl">Breathtakingly fast</p>
        <p className="text-md text-gray-300">
          Built for speed with 50ms interactions and real-time sync.
        </p>
      </div>
      <div className="group relative flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col items-center justify-end rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:p-14">
        <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
          <LogoLightIllustration />
        </div>
        <p className="text-3xl">Designed for modern software teams</p>
        <p className="text-md text-gray-300">
          Comes with built-in workflows that create focus and routine.
        </p>
        <Button
          href="/method"
          intent="secondary"
          size="sm"
          className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] opacity-0 backdrop-blur-[12px] transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-xs"
        >
          <Highlight>Linear Method</Highlight>
          Product Principles
          <ChevronIcon fill="#8A8F98" className="ml-1" />
        </Button>
      </div>
      <div className="flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col items-center justify-end rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:p-14">
        <p className="text-3xl">Meet your command line</p>
        <p className="text-md text-gray-300">
          Complete any action in seconds with the global command menu.
        </p>
      </div>
    </div>
  </div>
);
