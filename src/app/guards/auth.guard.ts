import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../features/authentication/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if(isLoggedIn){
    authService.login();
  }

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
