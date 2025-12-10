import React from 'react';
import { cn } from '../../lib/cn';

export type BadgeVariant = 'default' | 'success' | 'subtle';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium';

  const variantStyles: Record<BadgeVariant, string> = {
    default:
      'border-transparent bg-cc-primary-soft text-cc-primary',
    success:
      'border-transparent bg-emerald-50 text-cc-success',
    subtle:
      'border-cc-border bg-cc-surface text-cc-muted',
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
