import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mat-logout',
  templateUrl: './mat-logout.component.html',
  styleUrls: ['./mat-logout.component.scss']
})
export class MatLogoutComponent {
  constructor(private ref:MatDialogRef<NavbarComponent>){}
  close(){
    this.ref.close();
  }
}
