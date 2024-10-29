import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PriceCard } from './price-card/price-card.component';

@Component({
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  imports: [CommonModule, PriceCard],
})
export class PricingComponent {}
