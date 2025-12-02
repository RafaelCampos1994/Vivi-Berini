import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-[400px]">
      <h3 className="text-lg font-bold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-3">
        {title}
      </h3>
      <div className="flex-1 w-full min-h-0">
        {children}
      </div>
    </div>
  );
};
