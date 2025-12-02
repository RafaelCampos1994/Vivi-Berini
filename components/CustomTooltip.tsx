import React from 'react';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

export const CustomTooltip = ({ active, payload, label, prefix = '' }: TooltipProps<ValueType, NameType> & { prefix?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded shadow-lg text-sm border border-slate-700">
        <p className="font-semibold mb-1">{label}</p>
        <p>
          {`${payload[0].name}: ${prefix}${Number(payload[0].value).toFixed(2)}`}
        </p>
      </div>
    );
  }
  return null;
};
