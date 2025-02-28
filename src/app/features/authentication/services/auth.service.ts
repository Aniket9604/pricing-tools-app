import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private isAuthenticated = signal(false);

  constructor(){
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {

    }
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }


}
