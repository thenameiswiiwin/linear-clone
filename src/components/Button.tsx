import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const buttonClasses = cva('inline-flex items-center rounded-full', {
  variants: {
    intent: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
        '[&_.icon-wrapper]:ml-2',
      ],
      secondary: [
        'backdrop-filter-[12px] border border-gray-100 bg-white bg-opacity-10 text-gray-200 transition-colors ease-in hover:bg-opacity-20',
        '[&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2 [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:bg-gray-100 [&_.icon-wrapper]:px-2',
      ],
    },
    size: {
      sm: 'h-7 px-3 text-xs',
      md: 'h-8 px-4 text-md',
      lg: 'h-12 px-6 text-lg',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
);

export const Button = ({ children, intent, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ intent, size, className: props.className });

  return (
    <Link {...props} className={classes}>
      {children}
    </Link>
  );
};
