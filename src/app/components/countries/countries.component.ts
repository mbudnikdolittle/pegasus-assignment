import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  standalone: true,
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  imports: [DividerModule],
})
export class CountriesComponent {}
