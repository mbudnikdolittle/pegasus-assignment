import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { IApiCountry } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countriesData = signal<any>([]);
  private httpClient = inject(HttpClient);

  getAllCountriesData() {
    this.httpClient
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
            continents: country.continents,
          }))
        )
      )
      .subscribe({
        next: (countries) => {
          this.countriesData.set(countries);
        },
      });
  }
}
