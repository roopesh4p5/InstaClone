import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar/navbar.component';
import { StatusComponent }from './status/status.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatLogoutComponent } from './mat-logout/mat-logout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    StatusComponent,
    SuggestedComponent,
    NotfoundComponent,
    MatLogoutComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatMenuModule,MatDialogModule,MatSnackBarModule],
  exports: [NavbarComponent, SuggestedComponent,StatusComponent,SuggestedComponent]
})
export class SharedModule {}
