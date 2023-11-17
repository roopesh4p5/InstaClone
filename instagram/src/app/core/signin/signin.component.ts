import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(signinForm: NgForm) {
    if (signinForm.valid) {
      console.log(signinForm.value);
      const email = signinForm.value.email;
      const password = signinForm.value.password;
      const fullname = signinForm.value.fullname;
      const username = signinForm.value.username;
      console.log('here',fullname); //i get undefined here resolve this error
      
// email: string, password: string, fullname: string, username: string
      this.authService.register(email, password,fullname,username ).subscribe(
        (response) => {
          alert('Login successful');
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login error', error);
        }
      );
    } else {
      console.log('tryagain');
      
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}