import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { IApiCountry, ICountry } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private httpClient = inject(HttpClient);
  countries = signal<ICountry[]>([]);

  allCountries = this.countries.asReadonly();

  loadCountries() {
    return this.fetchAllCountriesData().pipe(
      tap({
        next: (fetchedCountries) => this.countries.set(fetchedCountries),
      })
    );
  }

  private fetchAllCountriesData() {
    return this.httpClient
      .get<IApiCountry[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((res) =>
          res.map((country) => ({
            name: country.name.official,
            flag: country.flag,
            currency: Object.keys(country.currencies ?? []),
            population: country.population,
            status: country.status,
            googleMapHref: country.maps.googleMaps,
            continents: country.continents.join(' ,'),
          }))
        )
      );
  }
}
