import { LeadData, RemarketingData, AdPerformanceData } from './types';

export const LEAD_DATA: LeadData[] = [
  { segment: "Muito Quente", leads: 214, cpl: 8.53 },
  { segment: "Quente", leads: 53, cpl: 8.61 },
  { segment: "Morno", leads: 100, cpl: 9.02 },
];

export const REMARKETING_DATA: RemarketingData[] = [
  { segment: "Público Quente", views: 861, costPerView: 0.34 },
  { segment: "Clientes", views: 308, costPerView: 0.33 },
];

// Data extracted from Image 1 (Lead Generation)
export const LEAD_ADS_DATA: AdPerformanceData[] = [
  { id: '1', name: 'AD09', results: 94, costPerResult: 8.36, amountSpent: 785.92, impressions: 20193, reach: 5996 },
  { id: '2', name: 'AD09', results: 68, costPerResult: 7.76, amountSpent: 527.94, impressions: 16905, reach: 8395 },
  { id: '3', name: 'AD12', results: 49, costPerResult: 7.98, amountSpent: 391.20, impressions: 16260, reach: 6080 },
  { id: '4', name: 'AD09', results: 36, costPerResult: 7.14, amountSpent: 256.97, impressions: 9496, reach: 3335 },
  { id: '5', name: 'AD13', results: 22, costPerResult: 10.05, amountSpent: 221.04, impressions: 6176, reach: 2559 },
  { id: '6', name: 'AD12', results: 24, costPerResult: 9.19, amountSpent: 220.44, impressions: 16215, reach: 9646 },
  { id: '7', name: 'AD07', results: 28, costPerResult: 7.48, amountSpent: 209.50, impressions: 6414, reach: 2839 },
  { id: '8', name: 'AD03', results: 11, costPerResult: 7.75, amountSpent: 85.27, impressions: 1906, reach: 1051 },
  { id: '9', name: 'AD11', results: 7, costPerResult: 9.75, amountSpent: 68.26, impressions: 2423, reach: 1366 },
  { id: '10', name: 'AD12', results: 7, costPerResult: 7.55, amountSpent: 52.84, impressions: 3170, reach: 1996 },
];

// Data extracted from Image 2 (Remarketing)
export const REMARKETING_ADS_DATA: AdPerformanceData[] = [
  { id: 'r1', name: 'Inscrições Abertas - Vid2', results: 781, costPerResult: 0.31, amountSpent: 243.59, impressions: 19462, reach: 13198 },
  { id: 'r2', name: 'Inscrições Abertas - Vid2', results: 294, costPerResult: 0.32, amountSpent: 93.93, impressions: 7505, reach: 6121 },
  { id: 'r3', name: 'AD01', results: 32, costPerResult: 0.87, amountSpent: 27.81, impressions: 2814, reach: 2668 },
  { id: 'r4', name: 'Inscrições Abertas - Vid1', results: 48, costPerResult: 0.38, amountSpent: 18.07, impressions: 931, reach: 860 },
  { id: 'r5', name: 'Inscrições Abertas - Img02 - Para Alunos', results: 10, costPerResult: 0.67, amountSpent: 6.74, impressions: 1096, reach: 1058 },
  { id: 'r6', name: 'Inscrições Abertas - Vid1', results: 4, costPerResult: 0.34, amountSpent: 1.34, impressions: 52, reach: 51 },
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