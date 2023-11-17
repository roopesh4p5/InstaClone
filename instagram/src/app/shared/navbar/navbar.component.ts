import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatLogoutComponent } from '../mat-logout/mat-logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private authService: AuthService,private dialog:MatDialog) {}

  logout() {
    this.authService.removeToken();
    this.dialog.open(MatLogoutComponent,{
      width:'25%',
      height:'25%',
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      
    })
   
  }
  profile(){
      this.router.navigate(['/profile']);
  }
  home(){
    this.router.navigate(['/home']);
  }
}
