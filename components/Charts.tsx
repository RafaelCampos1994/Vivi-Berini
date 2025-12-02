import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';
import { LeadData, RemarketingData } from '../types';
import { COLORS } from '../constants';
import { CustomTooltip } from './CustomTooltip';

// --- Chart 1: Volume de Leads ---
interface LeadsVolumeChartProps {
  data: LeadData[];
}
export const LeadsVolumeChart: React.FC<LeadsVolumeChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="segment" tick={{ fill: '#4b5563', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }} />
        <Bar dataKey="leads" name="Leads" fill={COLORS.leads} radius={[4, 4, 0, 0]}>
          <LabelList dataKey="leads" position="top" fill="#374151" fontSize={14} fontWeight="bold" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// --- Chart 2: CPL Efficiency ---
interface CplChartProps {
  data: LeadData[];
}
export const CplChart: React.FC<CplChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="segment" tick={{ fill: '#4b5563', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip content={<CustomTooltip prefix="R$ " />} cursor={{ fill: '#f3f4f6' }} />
        <Bar dataKey="cpl" name="CPL" fill={COLORS.cpl} radius={[4, 4, 0, 0]}>
          <LabelList 
            dataKey="cpl" 
            position="top" 
            fill="#374151" 
            fontSize={14} 
            fontWeight="bold"
            formatter={(val: number) => `R$ ${val.toFixed(2)}`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// --- Chart 3: Remarketing Views ---
interface ViewsChartProps {
  data: RemarketingData[];
}
export const ViewsChart: React.FC<ViewsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="segment" tick={{ fill: '#4b5563', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }} />
        <Bar dataKey="views" name="Visualizações" fill={COLORS.views} radius={[4, 4, 0, 0]}>
             <LabelList dataKey="views" position="top" fill="#374151" fontSize={14} fontWeight="bold" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// --- Chart 4: Remarketing Costs ---
interface CostChartProps {
  data: RemarketingData[];
}
export const CostChart: React.FC<CostChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="segment" tick={{ fill: '#4b5563', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip content={<CustomTooltip prefix="R$ " />} cursor={{ fill: '#f3f4f6' }} />
        <Bar dataKey="costPerView" name="Custo/View" fill={COLORS.cpv} radius={[4, 4, 0, 0]}>
           <LabelList 
            dataKey="costPerView" 
            position="top" 
            fill="#374151" 
            fontSize={14} 
            fontWeight="bold"
            formatter={(val: number) => `R$ ${val.toFixed(2)}`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
