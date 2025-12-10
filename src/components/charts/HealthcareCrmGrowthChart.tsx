import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const DATA = [
  { year: 2024, value: 10 },
  { year: 2026, value: 15 },
  { year: 2028, value: 22 },
  { year: 2030, value: 30 },
];

const CrmTooltip: React.FC<any> = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg border border-cc-border bg-cc-bg px-2 py-1 text-[11px] text-cc-text shadow-elevation-sm">
      <div className="font-medium">{item.payload.year}</div>
      <div className="text-cc-muted">${item.value}B market size</div>
    </div>
  );
};

export const HealthcareCrmGrowthChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={DATA}
        margin={{ top: 10, right: 10, bottom: 4, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#E5E7EB', fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#9CA3AF', fontSize: 10 }}
          width={36}
        />
        <Tooltip content={<CrmTooltip />} cursor={{ stroke: 'rgba(148, 163, 184, 0.6)' }} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4A60F6"
          strokeWidth={2}
          dot={{ r: 3, stroke: '#E5E7EB', strokeWidth: 1, fill: '#4A60F6' }}
          activeDot={{ r: 4 }}
          animationDuration={700}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};