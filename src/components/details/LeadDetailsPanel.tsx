import React from 'react';
import type { Lead, LeadStage } from '../../data/mockLeads';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface LeadDetailsPanelProps {
  lead: Lead | null;
  open: boolean;
  onClose: () => void;
  onSendMessage?: (leadId: string, body: string) => void;
}

function stageToBadgeLabel(stage: LeadStage): string {
  switch (stage) {
    case 'new':
      return 'New';
    case 'followup':
      return 'Follow-up';
    case 'booked':
      return 'Booked';
    case 'closed':
    default:
      return 'Closed';
  }
}

function stageToBadgeVariant(stage: LeadStage): 'success' | 'subtle' {
  if (stage === 'booked') return 'success';
  return 'subtle';
}

interface LeadDetailsContentProps {
  lead: Lead;
  onClose: () => void;
  isMobile?: boolean;
  onSendMessage?: (leadId: string, body: string) => void;
}

const LeadDetailsContent: React.FC<LeadDetailsContentProps> = ({
  lead,
  onClose,
  isMobile,
  onSendMessage,
}) => {
  const [activeTags, setActiveTags] = React.useState<string[]>(lead.tags);
  const [showSequenceModal, setShowSequenceModal] = React.useState(false);
  const [reviewBanner, setReviewBanner] = React.useState<string | null>(null);

  React.useEffect(() => {
    setActiveTags(lead.tags);
  }, [lead.id, lead.tags]);

  const toggleTag = (tag: string) => {
    setActiveTags((current) =>
      current.includes(tag)
        ? current.filter((value) => value !== tag)
        : [...current, tag],
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-cc-border px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar name={lead.name} className="h-10 w-10 text-sm" />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-cc-text">
                {lead.name}
              </h2>
              <Badge variant={stageToBadgeVariant(lead.stage)}>
                {stageToBadgeLabel(lead.stage)}
              </Badge>
            </div>
            <a
              href={`tel:${lead.phone}`}
              className="mt-0.5 block text-xs text-cc-primary hover:underline"
            >
              {lead.phone}
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cc-muted hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
          aria-label={isMobile ? 'Close lead details' : 'Collapse lead details'}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-3 text-sm scrollbar-thin">
        <section aria-label="Lead tags">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-cc-muted">
            Tags
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {lead.tags.map((tag) => {
              const selected = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={[
                    'rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary',
                    selected
                      ? 'border-cc-primary bg-cc-primary-soft text-cc-primary'
                      : 'border-cc-border bg-cc-surface text-cc-muted hover:bg-cc-bg',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </section>

        <section aria-label="Lead details">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-cc-muted">
            Lead details
          </h3>
          <div className="mt-2 space-y-2 text-xs text-cc-text">
            <div>
              <p className="font-medium text-cc-muted">Source</p>
              <p>{lead.source}</p>
            </div>
            <div>
              <p className="font-medium text-cc-muted">Next follow-up</p>
              <p>{lead.nextFollowUp}</p>
            </div>
            <div>
              <p className="font-medium text-cc-muted">Lead score</p>
              <p>
                {lead.score} ·{' '}
                <span className="inline-flex items-center gap-1 rounded-full bg-cc-bg px-2 py-0.5 text-[11px]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      lead.heat === 'hot'
                        ? 'bg-emerald-400'
                        : lead.heat === 'warm'
                          ? 'bg-amber-300'
                          : 'bg-slate-500'
                    }`}
                  />
                  {lead.heat.toUpperCase()}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Notes">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-cc-muted">
            Notes
          </h3>
          <div className="mt-2 rounded-md border border-cc-border bg-cc-bg px-3 py-2 text-xs leading-relaxed text-cc-text shadow-elevation-xs">
            {lead.notes}
          </div>
        </section>

        <section aria-label="Follow-up journey">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-cc-muted">
            Follow-up journey
          </h3>
          <div className="mt-2 space-y-2 text-xs text-cc-text">
            {[
              { label: 'Day 1 · Welcome SMS', status: 'Done' },
              { label: 'Day 3 · Reminder', status: 'Scheduled' },
              { label: 'Day 7 · Final touch', status: 'Pending' },
            ].map((step) => (
              <div
                key={step.label}
                className="flex items-center justify-between rounded-lg bg-cc-bg px-3 py-1.5 text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                      step.status === 'Done'
                        ? 'bg-emerald-500/80 text-slate-950'
                        : step.status === 'Scheduled'
                          ? 'bg-cc-primary/80 text-white'
                          : 'bg-slate-700 text-slate-100'
                    }`}
                  >
                    {step.status === 'Done' ? '✓' : step.status === 'Scheduled' ? '⏱' : '…'}
                  </span>
                  <span>{step.label}</span>
                </div>
                <span className="text-cc-muted">{step.status}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowSequenceModal(true)}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-cc-border bg-cc-bg px-3 py-1 text-[11px] text-cc-text hover:bg-cc-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
          >
            View full sequence
          </button>
        </section>

        <section aria-label="Reviews">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-cc-muted">
            Reviews
          </h3>
          <div className="mt-2 space-y-2 text-xs text-cc-text">
            <p>
              Last review request: <span className="text-cc-muted">{lead.lastReviewRequest ?? 'Not sent'}</span>
            </p>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                className="text-[11px]"
                onClick={() => {
                  setReviewBanner(`Review request SMS queued for ${lead.name.split(' ')[0]}.`);
                  if (onSendMessage) {
                    onSendMessage(
                      lead.id,
                      'Hi, thanks again for visiting. If you have a moment, wed love a quick review: https://example.review.link',
                    );
                  }
                }}
              >
                Send review request
              </Button>
              <span className="text-[11px] text-cc-muted">SMS with review link</span>
            </div>
            {reviewBanner && (
              <div className="mt-1 rounded-md bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-200">
                {reviewBanner}
              </div>
            )}
          </div>
        </section>
      </div>

      {isMobile && (
        <div className="border-t border-cc-border px-4 py-3">
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={onClose}
          >
            Back to conversation
          </Button>
        </div>
      )}
      {showSequenceModal && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Follow-up sequence"
          onClick={() => setShowSequenceModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-cc-border bg-cc-surface p-4 shadow-elevation-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between text-sm text-cc-text">
              <p className="font-semibold">Automated follow-up sequence</p>
              <button
                type="button"
                className="text-cc-muted hover:text-cc-text"
                onClick={() => setShowSequenceModal(false)}
              >
                ×
              </button>
            </div>
            <p className="text-xs text-cc-muted">
              This is a read-only preview of the journey CareConnect runs to keep every
              patient moving toward a booked appointment.
            </p>
            <ul className="mt-3 space-y-2 text-xs text-cc-text">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Day 1 · Welcome SMS with intro and clinic contact details.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-cc-primary" />
                <span>Day 3 · Reminder to book, with 2-3 suggested time slots.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>Day 7 · Final touch and soft close with option to stay on list.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export const LeadDetailsPanel: React.FC<LeadDetailsPanelProps> = ({
  lead,
  open,
  onClose,
  onSendMessage,
}) => {
  if (!lead) {
    return null;
  }

  const desktopPanel = (
    <section
      aria-label="Lead details and follow-ups"
      className={[
        'order-2 hidden h-full rounded-lg border border-cc-border bg-cc-surface shadow-elevation-sm lg:order-none lg:flex lg:w-[340px] lg:flex-none lg:transition-transform lg:duration-300 lg:ease-out',
        open ? 'lg:translate-x-0' : 'lg:translate-x-full',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <LeadDetailsContent lead={lead} onClose={onClose} onSendMessage={onSendMessage} />
    </section>
  );

  const mobileSheet = open ? (
    <div
      className="fixed inset-0 z-40 flex items-end bg-black/40 px-2 pb-3 pt-10 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Lead details"
      onClick={onClose}
    >
      <div
        className="mx-auto w-full max-w-md transform rounded-2xl bg-cc-surface shadow-elevation-lg transition-transform duration-300 ease-out"
        onClick={(event) => event.stopPropagation()}
      >
        <LeadDetailsContent lead={lead} onClose={onClose} isMobile onSendMessage={onSendMessage} />
      </div>
    </div>
  ) : null;

  return (
    <>
      {desktopPanel}
      {mobileSheet}
    </>
  );
};
