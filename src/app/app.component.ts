import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  // UC2
  message: string = 'Hello from BridgeLabz';
  logoUrl: string = './assets/bridgelabz_logo.jpg'; 

}
