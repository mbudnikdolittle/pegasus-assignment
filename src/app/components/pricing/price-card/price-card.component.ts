import { CommonModule } from '@angular/common';
import { IPriceCard } from './../../../models/price-card.model';
import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'price-card',
  standalone: true,
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
  imports: [ButtonModule, CommonModule],
})
export class PriceCard {
  card = input.required<IPriceCard>();
}