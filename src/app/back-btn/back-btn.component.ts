import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }


}
