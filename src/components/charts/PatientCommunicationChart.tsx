import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const DATA = [
  { label: 'Prefer SMS', value: 80 },
  { label: 'Would switch providers', value: 67 },
  { label: 'Expect self-serve', value: 70 },
];

const PatientTooltip: React.FC<any> = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  const label = item.payload.label;
  return (
    <div className="rounded-lg border border-cc-border bg-cc-bg px-2 py-1 text-[11px] text-cc-text shadow-elevation-sm">
      <div className="font-medium">{label}</div>
      <div className="text-cc-muted">{item.value}% of patients</div>
    </div>
  );
};

export const PatientCommunicationChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={DATA}
        margin={{ top: 10, right: 10, bottom: 4, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#E5E7EB', fontSize: 10 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#9CA3AF', fontSize: 10 }}
          width={32}
        />
        <Tooltip content={<PatientTooltip />} cursor={{ fill: 'rgba(34, 197, 94, 0.09)' }} />
        <Bar
          dataKey="value"
          radius={[6, 6, 0, 0]}
          fill="url(#patient-gradient)"
          animationDuration={700}
        />
        <defs>
          <linearGradient id="patient-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#48C774" stopOpacity={0.95} />
            <stop offset="100%" stopColor="#48C774" stopOpacity={0.5} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};