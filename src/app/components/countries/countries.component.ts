import { Component, inject, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CountriesService } from './countries.service';

@Component({
  standalone: true,
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  imports: [DividerModule],
})
export class CountriesComponent implements OnInit {
  private countriesService = inject(CountriesService);
  ngOnInit() {
    this.countriesService.getAllCountriesData();
  }
}
