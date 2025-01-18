import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Handle successful registration (e.g., navigate to login)
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Handle registration error
      }
    });
  }
}