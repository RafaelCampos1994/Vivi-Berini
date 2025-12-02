import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  colorClass: 'blue' | 'emerald' | 'indigo' | 'orange' | 'violet' | 'rose';
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon, colorClass }) => {
  const themes = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900', iconColor: 'text-blue-600', border: 'border-blue-100' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-900', iconColor: 'text-emerald-600', border: 'border-emerald-100' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-900', iconColor: 'text-indigo-600', border: 'border-indigo-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-900', iconColor: 'text-orange-600', border: 'border-orange-100' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-900', iconColor: 'text-violet-600', border: 'border-violet-100' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-900', iconColor: 'text-rose-600', border: 'border-rose-100' },
  };

  const theme = themes[colorClass] || themes.blue;

  return (
    <div className={`${theme.bg} p-6 rounded-xl border ${theme.border} shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]`}>
      <div className={`p-3 bg-white rounded-full shadow-sm ${theme.iconColor}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className={`text-sm font-semibold opacity-70 uppercase tracking-wide ${theme.text}`}>{label}</p>
        <p className={`text-2xl font-bold ${theme.text} mt-1`}>{value}</p>
      </div>
    </div>
  );
};
