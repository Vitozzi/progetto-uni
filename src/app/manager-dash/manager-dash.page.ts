import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-manager-dash',
  templateUrl: './manager-dash.page.html',
  styleUrls: ['./manager-dash.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ManagerDashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
