import React from 'react';

interface MetricChartCardProps {
  title: string;
  description: string;
  chart: React.ReactNode;
}

export const MetricChartCard: React.FC<MetricChartCardProps> = ({
  title,
  description,
  chart,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-cc-border bg-cc-bg/80 p-4 shadow-elevation-sm">
      <div>
        <h3 className="text-sm font-semibold text-cc-text">{title}</h3>
        <p className="mt-2 text-xs text-cc-muted sm:text-[13px]">{description}</p>
      </div>
      <div className="mt-4 h-52 w-full rounded-xl border border-cc-border/80 bg-gradient-to-br from-slate-900/80 to-slate-950 px-3 py-2">
        {chart}
      </div>
    </div>
  );
};