import React from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, errorText, id, className, rows = 4, ...props }, ref) => {
    const textAreaId = id ?? React.useId();
    const helperId = helperText ? `${textAreaId}-helper` : undefined;
    const errorId = errorText ? `${textAreaId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

    return (
      <div className="flex flex-col gap-1 text-sm">
        {label && (
          <label
            htmlFor={textAreaId}
            className="font-medium text-cc-text"
          >
            {label}
          </label>
        )}
        <textarea
          id={textAreaId}
          ref={ref}
          rows={rows}
          className={cn(
            'w-full rounded-md border border-cc-border bg-cc-surface px-3 py-2 text-sm text-cc-text shadow-elevation-xs placeholder:text-cc-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cc-bg resize-none',
            errorText && 'border-cc-danger',
            className,
          )}
          aria-invalid={!!errorText}
          aria-describedby={describedBy}
          {...props}
        />
        {helperText && !errorText && (
          <p id={helperId} className="text-xs text-cc-muted">
            {helperText}
          </p>
        )}
        {errorText && (
          <p id={errorId} className="text-xs text-cc-danger">
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
