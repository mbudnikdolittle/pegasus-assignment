import { Component, inject, OnInit, DestroyRef, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CountriesService } from './countries.service';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  imports: [DividerModule, TableModule],
})
export class CountriesComponent implements OnInit {
  private countriesService = inject(CountriesService);
  private destroyRef = inject(DestroyRef);
  countries = this.countriesService.allCountries;

  ngOnInit() {
    const countriesSubscription = this.countriesService
      .loadCountries()
      .subscribe();

    this.destroyRef.onDestroy(() => {
      countriesSubscription.unsubscribe();
    });
  }
}
