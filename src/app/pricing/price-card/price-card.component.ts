import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'price-card',
  standalone: true,
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.scss',
  imports: [ButtonModule],
})
export class PriceCard {}
