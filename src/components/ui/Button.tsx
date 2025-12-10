import React from 'react';
import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      fullWidth,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cc-bg disabled:opacity-60 disabled:cursor-not-allowed transition-colors select-none';

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-cc-primary text-white hover:bg-indigo-600 shadow-elevation-sm',
      secondary:
        'bg-cc-surface text-cc-text border border-cc-border hover:bg-slate-50/10',
      subtle:
        'bg-transparent text-cc-text hover:bg-cc-primary-soft border border-transparent',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
