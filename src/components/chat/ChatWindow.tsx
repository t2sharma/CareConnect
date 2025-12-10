import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { Lead, Message, MessageDirection, LeadStage } from '../../data/mockLeads';

interface ChatWindowProps {
  lead: Lead | null;
  messages: Message[];
  onSendMessage: (
    leadId: string,
    body: string,
    direction?: MessageDirection,
  ) => void;
  onOpenDetails?: () => void;
}

const quickReplies = [
  'Confirm appointment time',
  'Send parking and directions',
  'Ask for insurance details',
];

const aiSuggestions = [
  'We can see you as early as Tuesday or Thursday next week. Do either of those work?',
  'Before your visit, please bring a list of current medications and any recent x-rays.',
  'We have flexible payment options available. Would you like details before you book?',
];

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

export const ChatWindow: React.FC<ChatWindowProps> = ({
  lead,
  messages,
  onSendMessage,
  onOpenDetails,
}) => {
  const [draft, setDraft] = React.useState('');
  const [isAiOpen, setIsAiOpen] = React.useState(false);
  const [activeChannel, setActiveChannel] = React.useState<'SMS' | 'Email' | 'WA' | 'Web'>(
    'SMS',
  );
  const [showAppointmentModal, setShowAppointmentModal] = React.useState(false);
  const listEndRef = React.useRef<HTMLDivElement | null>(null);

  const groupedMessages = React.useMemo(() => {
    const groups: { day: string; items: Message[] }[] = [];
    let currentDay = '';
    messages.forEach((message) => {
      if (message.dayLabel !== currentDay) {
        currentDay = message.dayLabel;
        groups.push({ day: currentDay, items: [message] });
      } else {
        groups[groups.length - 1]!.items.push(message);
      }
    });
    return groups;
  }, [messages]);

  React.useEffect(() => {
    if (listEndRef.current) {
      listEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, lead?.id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!lead || !draft.trim()) return;

    const text = draft.trim();
    setDraft('');
    onSendMessage(lead.id, text, 'outbound');

    // Optional auto-reply to keep the demo feeling alive
    window.setTimeout(() => {
      onSendMessage(
        lead.id,
        'Thanks for the update. A member of our team will confirm the details shortly.',
        'inbound',
      );
    }, 900);
  };

  const handleQuickReply = (value: string) => {
    setDraft(value);
  };

  const handleAiSuggestion = (value: string) => {
    if (!lead) return;
    setDraft('');
    setIsAiOpen(false);
    onSendMessage(lead.id, value, 'outbound');
  };

  const headerTitle = lead ? lead.name : 'No lead selected';

  return (
    <section
      aria-label="Conversation with selected lead"
      className="order-first flex min-h-[320px] flex-[1.4] flex-col rounded-lg border border-cc-border bg-cc-surface shadow-elevation-md lg:order-none"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cc-border px-4 py-3">
        <div className="min-w-0 space-y-1">
          <div>
            <h2 className="truncate text-sm font-semibold text-cc-text">
              {headerTitle}
            </h2>
            {lead && (
              <p className="mt-0.5 text-xs text-cc-muted">
                {lead.channel} • {lead.phone}
              </p>
            )}
          </div>
          {lead && (
            <div className="flex flex-wrap items-center gap-1 text-[10px] text-cc-muted">
              <span className="mr-1 text-[9px] uppercase tracking-[0.14em] text-cc-primary">
                Channels
              </span>
              {['SMS', 'Email', 'WA', 'Web'].map((channel) => {
                const isActive = activeChannel === channel;
                return (
                  <button
                    key={channel}
                    type="button"
                    onClick={() => setActiveChannel(channel as typeof activeChannel)}
                    className={`rounded-full px-2 py-0.5 text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cc-primary ${
                      isActive
                        ? 'bg-cc-primary/80 text-white'
                        : 'bg-cc-bg text-cc-muted hover:bg-cc-primary-soft/40'
                    }`}
                  >
                    {channel}
                  </button>
                );
              })}
              <span className="ml-1 hidden text-[10px] text-cc-muted sm:inline">
                Replying via {activeChannel}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {lead && (
            <Badge
              variant={stageToBadgeVariant(lead.stage)}
              className="hidden sm:inline-flex"
            >
              {stageToBadgeLabel(lead.stage)}
            </Badge>
          )}
          <Button
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-2"
            title="Call patient"
            aria-label="Call patient"
            type="button"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary-soft text-[11px] text-cc-primary sm:h-6 sm:w-6">
              📞
            </span>
            <span className="hidden text-xs sm:inline">Call</span>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-2"
            title="Send text message"
            aria-label="Send text message"
            type="button"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary-soft text-[11px] text-cc-primary sm:h-6 sm:w-6">
              💬
            </span>
            <span className="hidden text-xs sm:inline">Text</span>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-2"
            title="Suggest appointment times"
            aria-label="Suggest appointment times"
            type="button"
            onClick={() => setShowAppointmentModal(true)}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary-soft text-[11px] text-cc-primary sm:h-6 sm:w-6">
              🗓
            </span>
            <span className="hidden text-xs sm:inline">Suggest times</span>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="inline-flex items-center gap-2"
            title="Move lead stage"
            aria-label="Move lead stage"
            type="button"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary-soft text-[11px] text-cc-primary sm:h-6 sm:w-6">
              ➜
            </span>
            <span className="hidden text-xs sm:inline">Move stage</span>
          </Button>
          {onOpenDetails && (
            <Button
              variant="secondary"
              size="sm"
              className="inline-flex items-center gap-2 sm:hidden"
              type="button"
              aria-label="View lead details"
              onClick={onOpenDetails}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary-soft text-[11px] text-cc-primary">
                ℹ️
              </span>
              <span className="text-xs">Details</span>
            </Button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-3 text-sm scrollbar-thin">
        {!lead && (
          <p className="text-xs text-cc-muted">
            Select a lead from the left to start a conversation.
          </p>
        )}
        {lead && groupedMessages.map((group) => (
          <div key={group.day} className="space-y-3">
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-cc-bg px-3 py-0.5 text-[11px] font-medium text-cc-muted shadow-elevation-xs">
                {group.day}
              </span>
            </div>
            {group.items.map((message) => {
              const isOutbound = message.direction === 'outbound';
              return (
                <div
                  key={message.id}
                  className={isOutbound ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className={
                      isOutbound
                        ? 'flex max-w-[80%] flex-col items-end gap-1'
                        : 'flex max-w-[80%] flex-col items-start gap-1'
                    }
                  >
                    <p
                      className={
                        isOutbound
                          ? 'rounded-2xl bg-cc-primary px-3 py-2 text-sm text-white shadow-elevation-xs'
                          : 'rounded-2xl bg-cc-border px-3 py-2 text-sm text-cc-text shadow-elevation-xs'
                      }
                    >
                      {message.body}
                    </p>
                    <span className="text-[11px] text-cc-muted">
                      {message.timestamp} • {isOutbound ? 'You' : 'Patient'} • {activeChannel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        <div ref={listEndRef} />
      </div>

      {/* Composer */}
      <div className="border-t border-cc-border bg-cc-surface px-3 py-2 sm:px-4 sm:py-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAiOpen((open) => !open)}
              className="inline-flex items-center gap-1 rounded-full border border-cc-border bg-cc-bg px-3 py-1 text-[11px] text-cc-text hover:bg-cc-primary-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
            >
              <span className="text-[13px]">✨</span>
              <span>AI reply suggestions</span>
            </button>
            {isAiOpen && (
              <div className="flex flex-wrap gap-1">
                {aiSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleAiSuggestion(suggestion)}
                    className="rounded-full bg-cc-primary-soft/40 px-2 py-1 text-[10px] text-cc-text hover:bg-cc-primary-soft"
                  >
                    {suggestion.slice(0, 40)}…
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden flex-wrap gap-1 sm:flex">
            {quickReplies.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => handleQuickReply(label)}
                className="rounded-full border border-cc-border bg-cc-surface px-3 py-1 text-[11px] text-cc-muted hover:bg-cc-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-2"
          aria-label="Compose reply"
        >
          <div className="flex-1 rounded-md border border-cc-border bg-cc-bg px-3 py-2 shadow-elevation-xs focus-within:border-cc-primary focus-within:ring-2 focus-within:ring-cc-primary">
            <textarea
              rows={2}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={lead ? 'Type a concise, clinic-friendly response…' : 'Select a lead to start messaging.'}
              className="h-10 w-full resize-none bg-transparent text-sm text-cc-text placeholder:text-cc-muted focus:outline-none"
              aria-label="Message to patient"
            />
          </div>
          <Button
            type="submit"
            disabled={!lead || !draft.trim()}
          >
            Send
          </Button>
        </form>
      </div>
      {lead && showAppointmentModal && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Suggest appointment times"
          onClick={() => setShowAppointmentModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-cc-border bg-cc-surface p-4 shadow-elevation-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between text-sm text-cc-text">
              <p className="font-semibold">Suggest appointment time</p>
              <button
                type="button"
                className="text-cc-muted hover:text-cc-text"
                onClick={() => setShowAppointmentModal(false)}
              >
                ×
              </button>
            </div>
            <p className="text-xs text-cc-muted">Select a time slot to propose to the patient.</p>
            <div className="mt-3 rounded-lg bg-cc-bg px-3 py-2 text-xs text-cc-text">
              <p className="text-cc-muted">Thu · Next week</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['2:30 PM', '3:00 PM', '4:15 PM', '5:00 PM'].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      onSendMessage(
                        lead.id,
                        `We've tentatively booked you for Thu at ${slot} - reply YES to confirm or NO to adjust.`,
                        'outbound',
                      );
                      setShowAppointmentModal(false);
                    }}
                    className="rounded-full bg-cc-primary-soft px-3 py-1 text-[11px] text-cc-text hover:bg-cc-primary hover:text-white"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
