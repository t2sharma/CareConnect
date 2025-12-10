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
  { label: 'TAM', value: 80 },
  { label: 'SAM', value: 25 },
  { label: 'SOM', value: 2.5 },
];

const CareconnectTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg border border-cc-border bg-cc-bg px-2 py-1 text-[11px] text-cc-text shadow-elevation-sm">
      <div className="font-medium">{label}</div>
      <div className="text-cc-muted">${item.value}B total market</div>
    </div>
  );
};

export const TamSamSomChart: React.FC = () => {
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
          tick={{ fill: '#E5E7EB', fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#9CA3AF', fontSize: 10 }}
          width={32}
        />
        <Tooltip content={<CareconnectTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }} />
        <Bar
          dataKey="value"
          radius={[6, 6, 0, 0]}
          fill="#4A60F6"
          animationDuration={700}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};