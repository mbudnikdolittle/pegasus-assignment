import { BENEFIT_STATUS } from './../../models/price-card.model';
import { Injectable, signal } from '@angular/core';
import { IPriceCard } from '../../models/price-card.model';

const mockedAllIncludedBenefits = [
  {
    status: BENEFIT_STATUS.INCLUDED,
    label: 'All standard elements included',
  },
  {
    status: BENEFIT_STATUS.INCLUDED,
    label: 'Over 1800 Components',
  },
  {
    status: BENEFIT_STATUS.INCLUDED,
    label: 'Best Figma techniques',
  },
  {
    status: BENEFIT_STATUS.INCLUDED,
    label: 'Up to 10 design editors',
  },
  {
    status: BENEFIT_STATUS.INCLUDED,
    label: 'Email support',
  },
];

const mockedPriceCards = [
  {
    id: Math.random().toString(),
    option: 'Option Name',
    price: '$9/month',
    description: 'Good starting point',
    benefits: [
      {
        status: BENEFIT_STATUS.INCLUDED,
        label: 'All standard elements included',
      },
      {
        status: BENEFIT_STATUS.INCLUDED,
        label: 'Over 1800 Components',
      },
      {
        status: BENEFIT_STATUS.INCLUDED,
        label: 'Best Figma techniques',
      },
      {
        status: BENEFIT_STATUS.EXCLUDED,
        label: 'Up to 10 design editors',
      },
      {
        status: BENEFIT_STATUS.EXCLUDED,
        label: 'Email support',
      },
    ],
  },
  {
    id: Math.random().toString(),
    option: 'Option Name',
    price: '$19/month',
    description: 'Good starting point',
    label: 'Most popular',
    benefits: mockedAllIncludedBenefits,
    isHighlighted: true,
  },
  {
    id: Math.random().toString(),
    option: 'Option Name',
    price: '$29/month',
    description: 'Good starting point',
    benefits: mockedAllIncludedBenefits,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  private priceCards = signal<IPriceCard[]>(mockedPriceCards);
  allPriceCards = this.priceCards.asReadonly();
}
