import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss']
})
export class SuggestedComponent {
  constructor (private router: Router){}

  userdetail(){
    
    setTimeout(() => {
      this.router.navigate(['/profile']);
    },2000)
  }
}
