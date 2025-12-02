export interface LeadData {
  segment: string;
  leads: number;
  cpl: number;
}

export interface RemarketingData {
  segment: string;
  views: number;
  costPerView: number;
}

export interface AdPerformanceData {
  id: string;
  name: string;
  results: number;
  costPerResult: number;
  amountSpent: number;
  impressions: number;
  reach?: number;
}