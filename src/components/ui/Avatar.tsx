import React from 'react';
import { cn } from '../../lib/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return `${parts[0]!.charAt(0)}${parts[parts.length - 1]!.charAt(0)}`.toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({ name, className, ...props }) => {
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary-soft text-sm font-semibold text-cc-primary',
        className,
      )}
      aria-label={name}
      role="img"
      {...props}
    >
      {initials}
    </div>
  );
};
