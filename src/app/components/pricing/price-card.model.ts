export enum BENEFIT_STATUS {
  INCLUDED = 'INCLUDED',
  EXCLUDED = 'EXCLUDED',
}

interface Benefit {
  status: BENEFIT_STATUS;
  label: string;
}

export interface IPriceCard {
  id: string;
  option: string;
  price: string;
  description: string;
  benefits: Benefit[];
  label?: string;
  isHighlighted?: boolean;
}
