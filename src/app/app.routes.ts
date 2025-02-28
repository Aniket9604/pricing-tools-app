import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/components/login/login.component';
import { LayoutComponent } from './features/layout/components/layout/layout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'pricing-engine',
                loadComponent: () => import('./features/pricing-engine/components/pricing-engine/pricing-engine.component').then(m => m.PricingEngineComponent)
            },
            {
                path: 'rate-card',
                loadChildren: () => import('./features/rate-card/rate-card.routes').then(m => m.rateCardRoutes)
            },
            { path: '**', redirectTo: 'rate-card' } // Default route
        ],
    },
    { path: '**', redirectTo: 'login' }, // Redirect to login for unknown routes


];











