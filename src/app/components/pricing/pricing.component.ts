import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PriceCard } from './price-card/price-card.component';
import { PricingService } from './pricing.service';

@Component({
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  imports: [CommonModule, PriceCard],
})
export class PricingComponent {
  private pricingService = inject(PricingService);
  cards = this.pricingService.allPriceCards;
}
