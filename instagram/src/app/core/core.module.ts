import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module'; // Import the SharedModule
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
]

@NgModule({
  declarations: [LoginComponent, SigninComponent, HomeComponent],
  imports: [CommonModule, FormsModule, SharedModule,HttpClientModule],
})
export class CoreModule { }
