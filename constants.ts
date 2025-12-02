import { LeadData, RemarketingData } from './types';

export const LEAD_DATA: LeadData[] = [
  { segment: "Muito Quente", leads: 214, cpl: 8.53 },
  { segment: "Quente", leads: 53, cpl: 8.61 },
  { segment: "Morno", leads: 100, cpl: 9.02 },
];

export const REMARKETING_DATA: RemarketingData[] = [
  { segment: "Público Quente", views: 861, costPerView: 0.34 },
  { segment: "Clientes", views: 308, costPerView: 0.33 },
];

// Colors conforming to the request: 
// Capture: Blue/Green tones
// Remarketing: Orange/Purple tones
export const COLORS = {
  leads: '#0ea5e9', // Sky 500
  cpl: '#10b981',   // Emerald 500
  views: '#f97316', // Orange 500
  cpv: '#8b5cf6',   // Violet 500
};
