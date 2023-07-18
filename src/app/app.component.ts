import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Cauê';
  userData = {
    email: 'foythcaue@gmail.com',
    role: 'Admin'
  }

  title = 'angular-moments';
}
