export interface Campaign {
  id: string;
  brandName: string;
  brandLogo: string;
  campaignImage: string;
  title: string;
  description: string;
  payoutType: 'barter' | 'refund' | 'fixed';
  payoutDetails: string;
  totalSlots: number;
  hiredCount: number;
  category: string;
}

export type PayoutType = Campaign['payoutType'];