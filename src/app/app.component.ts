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
  userName: string = '';  // Initialize userName
  errorMessage: string = '';

  validateInput() {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;  // Initial capital + min 3 letters
    this.errorMessage = regex.test(this.userName) ? '' : 'Invalid Name! (Start with capital & min 3 letters)';
  }

}
