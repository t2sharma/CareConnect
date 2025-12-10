export type LeadStage = 'new' | 'followup' | 'booked' | 'closed';

export type LeadHeat = 'hot' | 'warm' | 'cold';

export type MessageDirection = 'inbound' | 'outbound';

export interface Message {
  id: string;
  leadId: string;
  direction: MessageDirection;
  body: string;
  timestamp: string; // e.g. "10:32 AM"
  dayLabel: string; // e.g. "Today", "Yesterday"
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  channel: 'Web' | 'Phone' | 'Referral' | 'SMS';
  stage: LeadStage;
   score: number;
   heat: LeadHeat;
   overdue?: boolean;
  lastMessagePreview: string;
  lastMessageAt: string;
  tags: string[];
  source: string;
  nextFollowUp: string;
  notes: string;
   lastReviewRequest?: string;
   estMonthlyValue?: number;
}

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    phone: '(555) 010-2345',
    channel: 'Web',
    stage: 'new',
    score: 92,
    heat: 'hot',
    overdue: true,
    lastMessagePreview:
      'Hi, I’m interested in a new patient consultation for next week…',
    lastMessageAt: '10:32 AM',
    tags: ['New inquiry', 'Dental', 'High priority'],
    source: 'Website form',
    nextFollowUp: 'Today, 4:00 PM',
    notes:
      'New patient interested in consultation for sensitivity in upper molars. Prefers afternoons and text communication.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 4500,
  },
  {
    id: '2',
    name: 'Samantha Lee',
    phone: '(555) 010-8899',
    channel: 'Phone',
    stage: 'followup',
    score: 78,
    heat: 'warm',
    overdue: true,
    lastMessagePreview: 'Following up on your whitening quote from last week.',
    lastMessageAt: '9:05 AM',
    tags: ['Follow-up', 'Cosmetic'],
    source: 'Facebook Ads',
    nextFollowUp: 'Tomorrow, 10:30 AM',
    notes:
      'Considering whitening. Price-sensitive but highly engaged. Follow-up on quote and financing options.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 2800,
  },
  {
    id: '3',
    name: 'Carlos Martinez',
    phone: '(555) 010-1823',
    channel: 'SMS',
    stage: 'booked',
    score: 88,
    heat: 'hot',
    lastMessagePreview: 'Appointment confirmed for Thursday at 2:30 PM.',
    lastMessageAt: 'Yesterday',
    tags: ['Booked', 'Ortho'],
    source: 'Referral – Dr. Ortiz',
    nextFollowUp: '3 days before appointment',
    notes:
      'Orthodontic consult confirmed. Ensure imaging from referring provider is uploaded before visit.',
    lastReviewRequest: '2 days ago',
    estMonthlyValue: 6200,
  },
  {
    id: '4',
    name: 'Taylor Kim',
    phone: '(555) 010-4411',
    channel: 'Referral',
    stage: 'followup',
    score: 64,
    heat: 'warm',
    overdue: true,
    lastMessagePreview:
      'Patient asked to reschedule to a later afternoon slot.',
    lastMessageAt: 'Yesterday',
    tags: ['Referral', 'Reschedule'],
    source: 'Referral – Existing patient',
    nextFollowUp: 'Today, 5:15 PM',
    notes:
      'Requested later afternoon slot due to work schedule. Be flexible on timing if possible.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 3100,
  },
  {
    id: '5',
    name: 'Jordan Smith',
    phone: '(555) 010-7766',
    channel: 'Web',
    stage: 'new',
    score: 71,
    heat: 'warm',
    lastMessagePreview: 'Is your clinic accepting new pediatric patients this month?',
    lastMessageAt: 'Mon',
    tags: ['Pediatric', 'High intent'],
    source: 'Website form',
    nextFollowUp: 'This week, flexible',
    notes:
      'Parent looking for pediatric availability. Emphasize family-friendly hours and providers.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 1900,
  },
  {
    id: '6',
    name: 'Priya Desai',
    phone: '(555) 010-9923',
    channel: 'SMS',
    stage: 'booked',
    score: 82,
    heat: 'hot',
    lastMessagePreview: 'Thank you, see you on Friday at 9:00 AM.',
    lastMessageAt: 'Sun',
    tags: ['Recall', 'Booked'],
    source: 'Recall campaign',
    nextFollowUp: '1 day before appointment',
    notes:
      'Routine recall. Confirm insurance on file and send parking instructions.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 2300,
  },
  {
    id: '7',
    name: 'Michael Chen',
    phone: '(555) 010-5544',
    channel: 'Phone',
    stage: 'closed',
    score: 35,
    heat: 'cold',
    lastMessagePreview: 'Patient decided to stay with current provider for now.',
    lastMessageAt: 'Last week',
    tags: ['Closed', 'Price sensitive'],
    source: 'Phone inquiry',
    nextFollowUp: 'Optional – 3 months',
    notes:
      'Chose to stay with current provider due to pricing. May be open to future promos.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 800,
  },
  {
    id: '8',
    name: 'Emily Davis',
    phone: '(555) 010-6677',
    channel: 'Referral',
    stage: 'followup',
    score: 69,
    heat: 'warm',
    lastMessagePreview: 'Referred by Dr. Patel for an implant consult.',
    lastMessageAt: 'Last week',
    tags: ['Referral', 'Implant'],
    source: 'Referral – Dr. Patel',
    nextFollowUp: 'After imaging review',
    notes:
      'Implant consult. Verify medical history and ensure cone-beam CT is scheduled pre-visit.',
    lastReviewRequest: 'Not sent',
    estMonthlyValue: 5400,
  },
];

export const mockMessages: Message[] = [
  // Alex Johnson (new inquiry)
  {
    id: 'm-1',
    leadId: '1',
    direction: 'inbound',
    body: "Hi, I'm looking to book a new patient consultation next week. Do you have any openings?",
    timestamp: '10:24 AM',
    dayLabel: 'Today',
  },
  {
    id: 'm-2',
    leadId: '1',
    direction: 'outbound',
    body: 'Hi Alex, thanks for reaching out to Riverside Clinic. We have a few openings later this week. Do mornings or afternoons work better for you?',
    timestamp: '10:27 AM',
    dayLabel: 'Today',
  },
  {
    id: 'm-3',
    leadId: '1',
    direction: 'inbound',
    body: 'Afternoons are best for me if possible.',
    timestamp: '10:29 AM',
    dayLabel: 'Today',
  },

  // Samantha Lee (follow-up)
  {
    id: 'm-4',
    leadId: '2',
    direction: 'outbound',
    body: 'Hi Samantha, just checking in on the whitening quote we shared last week. Do you have any questions we can answer?',
    timestamp: '9:05 AM',
    dayLabel: 'Today',
  },
  {
    id: 'm-5',
    leadId: '2',
    direction: 'inbound',
    body: "Thanks for the follow-up. I'm comparing a couple of options and will let you know by tomorrow.",
    timestamp: '9:12 AM',
    dayLabel: 'Today',
  },

  // Carlos Martinez (booked)
  {
    id: 'm-6',
    leadId: '3',
    direction: 'outbound',
    body: 'Hi Carlos, your appointment is confirmed for Thursday at 2:30 PM. Please reply YES to confirm or NO to reschedule.',
    timestamp: '4:02 PM',
    dayLabel: 'Yesterday',
  },
  {
    id: 'm-7',
    leadId: '3',
    direction: 'inbound',
    body: 'YES, that time works for me. Thank you!',
    timestamp: '4:05 PM',
    dayLabel: 'Yesterday',
  },

  // Taylor Kim (follow-up/reschedule)
  {
    id: 'm-8',
    leadId: '4',
    direction: 'inbound',
    body: 'Hi, I may need to move my appointment to a later time. Do you have anything after 4 PM?',
    timestamp: '3:18 PM',
    dayLabel: 'Yesterday',
  },
  {
    id: 'm-9',
    leadId: '4',
    direction: 'outbound',
    body: 'We can move you to 4:30 PM tomorrow. Would that work?',
    timestamp: '3:22 PM',
    dayLabel: 'Yesterday',
  },

  // A couple of short threads for additional leads
  {
    id: 'm-10',
    leadId: '5',
    direction: 'inbound',
    body: 'Are you accepting new pediatric patients this month?',
    timestamp: '11:41 AM',
    dayLabel: 'Mon',
  },
  {
    id: 'm-11',
    leadId: '6',
    direction: 'outbound',
    body: 'Hi Priya, this is a quick reminder for your cleaning on Friday at 9:00 AM.',
    timestamp: '2:01 PM',
    dayLabel: 'Sun',
  },
];
