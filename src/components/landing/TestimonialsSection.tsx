import React from 'react';

const marketSignals = [
  {
    title: "What we're hearing from the market",
    points: [
      'Front-desk teams are drowning in manual follow-ups.',
      'Clinic owners want clear visibility into leads and revenue.',
      'Patients expect SMS-first, not endless phone tag.',
    ],
  },
  {
    title: "Who we're building CareConnect for",
    points: [
      'Multi-location clinic groups that care about conversion, not just volume.',
      'Founder-led practices modernizing intake, reminders, and follow-up.',
      'Operators who want a single, accountable inbox for every patient touchpoint.',
    ],
  },
  {
    title: 'Invitation to early design partners',
    body: [
      'CareConnect is in prototype stage. We are opening a limited number of pilot slots for clinics that want to co-design the product with us.',
      'Early partners get direct founder access, roadmap influence, and preferred pricing as we move toward launch.',
    ],
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
              Prototype · Recruiting pilot clinics
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
              Looking for the right first clinics.
            </h2>
            <p className="text-sm text-cc-muted sm:text-[15px]">
              CareConnect is pre-launch. We are partnering with a small group of forward-thinking clinics and investors to shape how modern patient communication and revenue-focused follow-up should work.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
          {marketSignals.map((card) => (
            <section
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-cc-border bg-cc-bg/80 p-4 text-[13px] shadow-elevation-xs"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-cc-text">
                  {card.title}
                </h3>
                {'points' in card && (
                  <ul className="mt-3 space-y-1.5 text-[13px] text-cc-muted">
                    {card.points!.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cc-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {'body' in card && (
                  <div className="mt-3 space-y-2 text-[13px] text-cc-muted">
                    {card.body!.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
              {card.title === 'Invitation to early design partners' && (
                <div className="mt-4 flex items-center justify-between text-[11px]">
                  <p className="text-cc-muted">
                    Clinics and investors interested in pilots can reach out directly.
                  </p>
                  <a
                    href="mailto:founders@careconnect.health?subject=CareConnect%20design%20partner%20interest"
                    className="inline-flex items-center gap-1 rounded-full bg-cc-primary-soft px-3 py-1 font-medium text-cc-primary hover:bg-cc-primary hover:text-white"
                  >
                    Become a design partner
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
