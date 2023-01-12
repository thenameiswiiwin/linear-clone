import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  href: string;
  children: React.ReactNode;
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    intent: {
      primary:
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
      secondary: '',
      tertiary: '',
    },
    size: {
      sm: 'text-xs px-3 h-7',
      md: 'text-sm px-4 h-8',
      lg: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

export const Button = ({ href, children, intent, size }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ intent, size })}>
      {children}
    </Link>
  );
};
