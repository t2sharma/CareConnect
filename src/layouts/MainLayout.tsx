import React from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Avatar } from '../components/ui/Avatar';
import { Textarea } from '../components/ui/Textarea';
import { Input } from '../components/ui/Input';
import { ChatWindow } from '../components/chat/ChatWindow';
import { LeadDetailsPanel } from '../components/details/LeadDetailsPanel';
import {
  mockLeads,
  mockMessages,
  type Lead,
  type LeadStage,
  type Message,
  type MessageDirection,
} from '../data/mockLeads';

type LeadFilter = 'all' | 'new' | 'followups';

const leadTabs: { id: LeadFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New Leads' },
  { id: 'followups', label: 'Follow-ups' },
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

interface MainLayoutProps {
  onBackToLanding?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ onBackToLanding }) => {
  const [activeFilter, setActiveFilter] = React.useState<LeadFilter>('all');
  const [sortByScore, setSortByScore] = React.useState(false);
  const [showOverdueOnly, setShowOverdueOnly] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);
  const [isLeadPanelOpen, setIsLeadPanelOpen] = React.useState(true);
  const [selectedLeadId, setSelectedLeadId] = React.useState<string | null>(
    mockLeads[0]?.id ?? null,
  );
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(true);
  const [messagesByLead, setMessagesByLead] = React.useState<
    Record<string, Message[]>
  >(() => {
    const grouped: Record<string, Message[]> = {};
    mockMessages.forEach((message) => {
      if (!grouped[message.leadId]) {
        grouped[message.leadId] = [];
      }
      grouped[message.leadId]!.push(message);
    });
    return grouped;
  });

  const filteredLeads = React.useMemo<Lead[]>(() => {
    let base: Lead[];
    if (activeFilter === 'all') base = mockLeads;
    else if (activeFilter === 'new') {
      base = mockLeads.filter((lead) => lead.stage === 'new');
    } else {
      base = mockLeads.filter((lead) => lead.stage === 'followup');
    }
    if (showOverdueOnly) {
      base = base.filter((lead) => lead.overdue);
    }

    if (!sortByScore) return base;

    return [...base].sort((a, b) => b.score - a.score);
  }, [activeFilter, sortByScore, showOverdueOnly]);

  const selectedLead = React.useMemo(
    () => filteredLeads.find((lead) => lead.id === selectedLeadId) ?? filteredLeads[0] ?? null,
    [filteredLeads, selectedLeadId],
  );

  React.useEffect(() => {
    if (!selectedLead && filteredLeads.length > 0) {
      setSelectedLeadId(filteredLeads[0]!.id);
    }
  }, [filteredLeads, selectedLead]);

  const overdueCount = React.useMemo(
    () => mockLeads.filter((lead) => lead.overdue).length,
    [],
  );

  const handleSendMessage = React.useCallback(
    (
      leadId: string,
      body: string,
      direction: MessageDirection = 'outbound',
    ) => {
      setMessagesByLead((current) => {
        const existing = current[leadId] ?? [];
        const now = new Date();
        const timestamp = now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
        const newMessage: Message = {
          id: `${leadId}-${Date.now()}-${existing.length + 1}`,
          leadId,
          direction,
          body,
          timestamp,
          dayLabel: 'Today',
        };

        return {
          ...current,
          [leadId]: [...existing, newMessage],
        };
      });
    },
    [],
  );

  return (
    <div className="flex min-h-screen flex-col bg-cc-bg">
      {/* Top nav */}
      <header className="border-b border-cc-border bg-cc-surface/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBackToLanding}
            className="group flex items-center gap-2 rounded-lg border border-transparent px-1 py-0.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
            aria-label="Back to CareConnect landing page"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cc-primary-soft text-sm font-semibold text-cc-primary group-hover:bg-cc-primary group-hover:text-white">
              CC
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-cc-text">
                CareConnect
              </div>
              <div className="text-xs text-cc-muted">
                Lead messaging for modern clinics
              </div>
            </div>
          </button>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsLeadPanelOpen((open) => !open)}
              aria-label={isLeadPanelOpen ? 'Hide lead list' : 'Show lead list'}
            >
              {isLeadPanelOpen ? 'Hide leads' : 'Show leads'}
            </Button>
            <Avatar name="Clinic Admin" />
            <Button
              variant="subtle"
              size="sm"
              type="button"
              className="hidden text-xs text-cc-muted sm:inline-flex"
              onClick={() => setShowDashboard(true)}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* 3-column responsive layout */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:gap-6 lg:py-6 lg:px-8">
        <section
          aria-label="Lead inbox"
          className={[
            'order-1 flex-1 rounded-lg border border-cc-border bg-cc-surface shadow-elevation-sm lg:order-none lg:w-[300px] lg:flex-none',
            !isLeadPanelOpen ? 'hidden lg:block' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="border-b border-cc-border px-4 pb-1 pt-3">
            {overdueCount > 0 && (
              <div className="mb-2 flex items-center justify-between rounded-md bg-amber-500/10 px-3 py-1.5 text-[11px] text-amber-200">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-amber-400" />
                  <span>
                    {overdueCount} lead{overdueCount > 1 ? 's' : ''} overdue for follow-up today
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowOverdueOnly((prev) => !prev)}
                  className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-medium text-amber-100 hover:bg-amber-400/30"
                >
                  {showOverdueOnly ? 'Clear' : 'View'}
                </button>
              </div>
            )}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-cc-text">Leads</h2>
                <p className="text-xs text-cc-muted">Entry point for every new patient</p>
              </div>
              <Badge variant="subtle">{filteredLeads.length} active</Badge>
            </div>
            <div
              className="mt-3 flex gap-4 border-b border-cc-border/60 text-xs sm:text-sm"
              role="tablist"
              aria-label="Filter leads"
            >
              {leadTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={[
                      'relative pb-2 pt-1.5 text-left font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary',
                      isActive ? 'text-cc-primary' : 'text-cc-muted hover:text-cc-text',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => setActiveFilter(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <span
                      aria-hidden="true"
                      className={[
                        'pointer-events-none absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-cc-primary transition-all duration-200',
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    />
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-cc-muted">
              <p>
                {sortByScore
                  ? 'Sorted by AI lead score (high to low)'
                  : 'Default order · toggle to sort by score'}
              </p>
              <button
                type="button"
                onClick={() => setSortByScore((prev) => !prev)}
                className="rounded-full border border-cc-border bg-cc-bg px-2 py-0.5 text-[10px] font-medium text-cc-text hover:bg-cc-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
              >
                {sortByScore ? 'Score sorting on' : 'Sort by score'}
              </button>
            </div>
          </div>
          <div className="max-h-[520px] space-y-1 overflow-y-auto p-2 scrollbar-thin">
            {filteredLeads.map((lead) => {
              const isSelected = lead.id === selectedLeadId;
              return (
                <button
                  key={lead.id}
                  type="button"
                  onClick={() => setSelectedLeadId(lead.id)}
                  className={[
                    'flex w-full items-start justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary',
                    isSelected
                      ? 'border-cc-primary bg-cc-primary-soft'
                      : 'border-transparent hover:border-cc-border hover:bg-cc-primary-soft/30',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-pressed={isSelected}
                >
                  <div className="flex min-w-0 items-start gap-2">
                    <Avatar
                      name={lead.name}
                      className="mt-0.5 h-8 w-8 text-xs"
                    />
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium text-cc-text">
                          {lead.name}
                        </p>
                        <span className="shrink-0 text-[11px] text-cc-muted">
                          {lead.lastMessageAt}
                        </span>
                      </div>
                      <p className="truncate text-xs text-cc-muted">
                        {lead.lastMessagePreview}
                      </p>
                      <p className="truncate text-[11px] text-cc-muted">
                        {lead.channel} • {lead.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      variant={stageToBadgeVariant(lead.stage)}
                      className="shrink-0 text-[11px]"
                    >
                      {stageToBadgeLabel(lead.stage)}
                    </Badge>
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-cc-bg px-2 py-0.5 text-[10px] text-cc-muted"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          lead.heat === 'hot'
                            ? 'bg-emerald-400'
                            : lead.heat === 'warm'
                              ? 'bg-amber-300'
                              : 'bg-slate-500'
                        }`}
                      />
                      <span>{lead.score}</span>
                    </span>
                    {lead.overdue && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[9px] text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Overdue
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <ChatWindow
          lead={selectedLead}
          messages={selectedLead ? messagesByLead[selectedLead.id] ?? [] : []}
          onSendMessage={handleSendMessage}
          onOpenDetails={() => setIsDetailsOpen(true)}
        />

        <LeadDetailsPanel
          lead={selectedLead}
          open={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          onSendMessage={(leadId, body) => handleSendMessage(leadId, body, 'outbound')}
        />
      </main>
    </div>
  );
};
