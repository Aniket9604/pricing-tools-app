import { Routes } from '@angular/router';
import { RateCardComponent } from './components/rate-card/rate-card.component';
import { RateCardDetailsComponent } from './components/rate-card-details/rate-card-details.component';

export const rateCardRoutes: Routes = [
  { path: '', component: RateCardComponent },  // Default list page
  { path: 'details', component: RateCardDetailsComponent },  // Dynamic details page
];
