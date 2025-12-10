import React from 'react';
import { cn } from '../../lib/cn';
import { Button } from './Button';

export interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onClose: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  children,
}) => {
  const dialogRef = React.useRef<HTMLDivElement | null>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => {
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4"
      role="presentation"
      onClick={onClose}
      aria-label="Close modal overlay"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={cn(
          'w-full max-w-lg rounded-lg bg-cc-surface p-6 shadow-elevation-md',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id={titleId}
              className="text-lg font-semibold text-cc-text"
            >
              {title}
            </h2>
            {description && (
              <p
                id={descriptionId}
                className="mt-1 text-sm text-cc-muted"
              >
                {description}
              </p>
            )}
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {children && <div className="mt-4 text-sm text-cc-text">{children}</div>}

            {(primaryActionLabel || secondaryActionLabel) && (
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
                {secondaryActionLabel && (
                  <Button
                    variant="subtle"
                    onClick={onSecondaryAction ?? onClose}
                  >
                    {secondaryActionLabel}
                  </Button>
                )}
                {primaryActionLabel && (
                  <Button onClick={onPrimaryAction}>{primaryActionLabel}</Button>
                )}
              </div>
            )}
          </div>
        </div>
      );
    };