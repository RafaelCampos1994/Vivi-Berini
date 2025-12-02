import React from 'react';
import { LEAD_DATA, REMARKETING_DATA, LEAD_ADS_DATA, REMARKETING_ADS_DATA } from './constants';
import { DashboardCard } from './components/DashboardCard';
import { StatCard } from './components/StatCard';
import { AdPerformanceTable } from './components/AdPerformanceTable';
import { 
  LeadsVolumeChart, 
  CplChart, 
  ViewsChart, 
  CostChart 
} from './components/Charts';
import { Activity, Users, Target, CreditCard, DollarSign, Eye, TrendingUp, List } from 'lucide-react';

const App: React.FC = () => {
  // Helper for currency formatting
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  // --- Calculations for Capture (Captação) ---
  const totalCaptureInvestment = LEAD_DATA.reduce((acc, item) => acc + (item.leads * item.cpl), 0);
  const totalCaptureLeads = LEAD_DATA.reduce((acc, item) => acc + item.leads, 0);
  const avgCaptureCPL = totalCaptureInvestment / totalCaptureLeads;

  // --- Calculations for Remarketing ---
  const totalRemarketingInvestment = REMARKETING_DATA.reduce((acc, item) => acc + (item.views * item.costPerView), 0);
  const totalRemarketingViews = REMARKETING_DATA.reduce((acc, item) => acc + item.views, 0);
  const avgRemarketingCPV = totalRemarketingInvestment / totalRemarketingViews;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-900">
      {/* Header */}
      <header className="mb-10 max-w-7xl mx-auto border-b border-gray-200 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Relatório de Lançamento
          </h1>
        </div>
        <p className="text-gray-500 text-lg max-w-2xl">
          Painel de controle visual para análise de performance de campanhas de infoprodutos.
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION 1: CAPTAÇÃO */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-1.5 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Parte 1: Captação</h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              label="Investimento Total" 
              value={formatCurrency(totalCaptureInvestment)} 
              icon={DollarSign} 
              colorClass="blue" 
            />
            <StatCard 
              label="Quantidade de Leads" 
              value={totalCaptureLeads} 
              icon={Users} 
              colorClass="emerald" 
            />
            <StatCard 
              label="Custo por Lead (Médio)" 
              value={formatCurrency(avgCaptureCPL)} 
              icon={CreditCard} 
              colorClass="indigo" 
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DashboardCard title="Volume de Leads por Público">
              <LeadsVolumeChart data={LEAD_DATA} />
            </DashboardCard>
            <DashboardCard title="Eficiência: Custo por Lead (Por Segmento)">
              <CplChart data={LEAD_DATA} />
            </DashboardCard>
          </div>

          {/* Detailed Ads Table */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <List size={20} />
              <h3 className="text-xl font-bold">Detalhamento de Anúncios (Captação)</h3>
            </div>
            <AdPerformanceTable 
              data={LEAD_ADS_DATA} 
              type="capture" 
              metricLabel="Leads (Resultados)"
            />
          </div>
        </section>

        {/* SECTION 2: REMARKETING */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-1.5 bg-orange-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Parte 2: Remarketing</h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              label="Investimento Total" 
              value={formatCurrency(totalRemarketingInvestment)} 
              icon={DollarSign} 
              colorClass="orange" 
            />
            <StatCard 
              label="Quantidade de Visitas" 
              value={totalRemarketingViews} 
              icon={Eye} 
              colorClass="violet" 
            />
            <StatCard 
              label="Custo por Visita (Médio)" 
              value={formatCurrency(avgRemarketingCPV)} 
              icon={TrendingUp} 
              colorClass="rose" 
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DashboardCard title="Visitas na Página de Vendas">
              <ViewsChart data={REMARKETING_DATA} />
            </DashboardCard>
            <DashboardCard title="Eficiência: Custo por Visita (Por Segmento)">
              <CostChart data={REMARKETING_DATA} />
            </DashboardCard>
          </div>

           {/* Detailed Ads Table */}
           <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <List size={20} />
              <h3 className="text-xl font-bold">Detalhamento de Anúncios (Remarketing)</h3>
            </div>
            <AdPerformanceTable 
              data={REMARKETING_ADS_DATA} 
              type="remarketing" 
              metricLabel="Visitas (Resultados)"
            />
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;