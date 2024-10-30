import { CommonModule } from '@angular/common';
import { IPriceCard } from '../price-card.model';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'price-card',
  standalone: true,
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
  imports: [ButtonModule, CommonModule, DividerModule, ChipModule],
})
export class PriceCard {
  card = input.required<IPriceCard>();
}
