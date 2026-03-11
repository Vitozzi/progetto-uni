import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  managergym() {
    if (this.userEmail === 'manager@fit.com') {

      console.log('Welcome to your Gym Dashboard');
      this.router.navigate(['/manager-dash']);

    } else if (this.userEmail !== '') {

      console.log('Welcome to your Gym');
      this.router.navigate(['/client-home']);

    } else {

      console.log('Please enter valid credentials!');
      alert('Please enter valid credentials');

    }
  }
}