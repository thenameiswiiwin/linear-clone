import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva('relative inline-flex items-center rounded-full', {
  variants: {
    intent: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
        '[&_.highlight]:ml-2',
      ],
      secondary: [
        'backdrop-filter-[12px] border border-gray-100 bg-white bg-opacity-10 text-gray-200 transition-colors ease-in hover:bg-opacity-20 backdrop-blur-[12px]',
        '[&_.highlight]:bg-gray-100 [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2',
      ],
    },
    size: {
      sm: 'h-7 px-3 text-xs',
      md: 'h-8 px-4 text-sm',
      lg: 'h-12 px-6 text-md',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={clsx('highlight', className)}>{children}</span>;

export const Button = ({ children, intent, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ intent, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
