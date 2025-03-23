import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message: string = 'Hello from BridgeLabz';
  logoUrl: string = './assets/bridgelabz_logo.jpg'; 
  bridgeLabzSite: string = 'https://www.bridgelabz.com'; 
}
