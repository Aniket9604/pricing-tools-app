import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    authService = inject(AuthService);
    router = inject(Router);
    
  
      login(){
        localStorage.setItem('isLoggedIn', 'true');
        this.authService.login()
        this.router.navigate(['/rate-card'], { replaceUrl: true });
      }
  

}
