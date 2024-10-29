import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pricing/pricing.component').then((mod) => mod.PricingComponent),
  },
];
