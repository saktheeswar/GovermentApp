import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Note the plural 'styleUrls'
  providers:[AuthService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {} 

  ngOnInit(): void {
    // Initialization logic can go here
  }

  async login() {
    if (this.email === '') { // Fixed comparison
      alert('Please enter the email');
      return;
    }
    if (this.password === '') { // Fixed comparison
      alert('Please enter the password'); // Changed alert message to reflect the correct field
      return;
    }
    //await this.authService.login(this.email, this.password); // Ensure `login` method exists in AuthService
    this.email = '';
    this.password = '';
  }
}
