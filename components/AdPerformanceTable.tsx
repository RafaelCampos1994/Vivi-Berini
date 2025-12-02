import React from 'react';
import { AdPerformanceData } from '../types';

interface AdPerformanceTableProps {
  data: AdPerformanceData[];
  type: 'capture' | 'remarketing';
  metricLabel: string;
}

export const AdPerformanceTable: React.FC<AdPerformanceTableProps> = ({ data, type, metricLabel }) => {
  const isCapture = type === 'capture';
  
  // Theme colors based on type
  const headerBg = isCapture ? 'bg-blue-50' : 'bg-orange-50';
  const headerText = isCapture ? 'text-blue-800' : 'text-orange-800';
  const borderColor = isCapture ? 'border-blue-100' : 'border-orange-100';

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  
  const formatNumber = (val: number) =>
    new Intl.NumberFormat('pt-BR').format(val);

  return (
    <div className={`overflow-hidden rounded-xl border ${borderColor} shadow-sm bg-white`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`${headerBg} ${headerText} text-xs uppercase font-bold tracking-wider`}>
            <tr>
              <th className="px-6 py-4">Anúncio</th>
              <th className="px-6 py-4 text-right">{metricLabel}</th>
              <th className="px-6 py-4 text-right">Custo / Res.</th>
              <th className="px-6 py-4 text-right">Valor Usado</th>
              <th className="px-6 py-4 text-right">Impressões</th>
              <th className="px-6 py-4 text-right">Alcance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {row.name}
                </td>
                <td className="px-6 py-4 text-right font-bold text-gray-700">
                  {formatNumber(row.results)}
                </td>
                <td className="px-6 py-4 text-right text-gray-600">
                  {formatCurrency(row.costPerResult)}
                </td>
                <td className="px-6 py-4 text-right text-gray-600">
                  {formatCurrency(row.amountSpent)}
                </td>
                <td className="px-6 py-4 text-right text-gray-500">
                  {formatNumber(row.impressions)}
                </td>
                <td className="px-6 py-4 text-right text-gray-500">
                  {row.reach ? formatNumber(row.reach) : '-'}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 font-semibold text-gray-900">
            <tr>
              <td className="px-6 py-4">Total</td>
              <td className="px-6 py-4 text-right">
                {formatNumber(data.reduce((acc, curr) => acc + curr.results, 0))}
              </td>
              <td className="px-6 py-4 text-right">
                {/* Average Cost Calculation for footer */}
                {formatCurrency(
                  data.reduce((acc, curr) => acc + curr.amountSpent, 0) / 
                  data.reduce((acc, curr) => acc + curr.results, 0)
                )}
              </td>
              <td className="px-6 py-4 text-right">
                {formatCurrency(data.reduce((acc, curr) => acc + curr.amountSpent, 0))}
              </td>
              <td className="px-6 py-4 text-right">
                {formatNumber(data.reduce((acc, curr) => acc + curr.impressions, 0))}
              </td>
              <td className="px-6 py-4 text-right">
                {formatNumber(data.reduce((acc, curr) => acc + (curr.reach || 0), 0))}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};