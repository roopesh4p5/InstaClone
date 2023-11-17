import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      const emailOrUsername = loginForm.value.emailorusername;
      const password = loginForm.value.password;

      this.authService.login(emailOrUsername, password).subscribe(
        (response) => {
          // Login successful, store the token and user info
          const accessToken = response.access_token;
          this.authService.setToken(accessToken); // Implement setToken method in your AuthService
          
          // You can also decode and extract user info from the token if it's present

          alert('Login successful');
          console.log('Login successful', accessToken);

          this.router.navigate(['/home']); // Redirect to the home page on successful login
        },
        (error) => {
          // Login failed, you can handle the error here
          console.error('Login error', error);
        }
      );
    }
  }

  signin() {
    this.router.navigate(['/signin']);
  }
}
