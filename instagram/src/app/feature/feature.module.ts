import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'profile', pathMatch:'full' },
      { path: 'profile', component: ProfileComponent },
    
    ]
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ], 
  imports: [
    CommonModule,SharedModule,
    RouterModule.forChild(routes),
  ]
 
})
export class FeatureModule { }
