const CommandOptions = [
  {
    label: 'Assign to...',
    icon: () => {},
    subOptions: [
      {
        label: 'Jori',
        icon: () => {},
      },
      {
        label: 'Karri',
        icon: () => {},
      },
      {
        label: 'Tuomas',
        icon: () => {},
      },
    ],
  },
  {
    label: 'Change status...',
    icon: () => {},
    subOptions: [
      {
        label: 'Backlog',
        icon: () => {},
      },
      {
        label: 'Todo',
        icon: () => {},
      },
      {
        label: 'In Progress',
        icon: () => {},
      },
      {
        label: 'Done',
        icon: () => {},
      },
    ],
  },
  {
    label: 'Change priority...',
    icon: () => {},
    subOptions: [
      {
        label: 'No priority',
        icon: () => {},
      },
      {
        label: 'Urgent',
        icon: () => {},
      },
      {
        label: 'High',
        icon: () => {},
      },
      {
        label: 'Medium',
        icon: () => {},
      },
    ],
  },
  {
    label: 'Add label...',
    icon: () => {},
    subOptions: [
      {
        label: 'Bug',
        icon: () => {},
      },
      {
        label: 'Feature',
        icon: () => {},
      },
      {
        label: 'Improvement',
        icon: () => {},
      },
    ],
  },
];

export const CommandMenu = () => {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-[90vw] max-w-[64rem] -translate-x-1/2 -translate-y-1/2 flex-col items-start rounded-lg border border-gray-100 bg-gray-100">
      <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
        LIN-111 Walkway lighting
      </span>
      <input
        type="text"
        placeholder="Type a command or search..."
        className="w-full bg-transparent p-5 text-lg outline-none"
      />
      <div className="flex flex-col text-sm text-gray-200">
        {CommandOptions.map((option) => (
          <button key={option.label} type="button">
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
