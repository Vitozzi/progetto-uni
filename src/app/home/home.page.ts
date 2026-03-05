import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  trophy, walk, add, home, people, barChart, ribbon, chevronForward, search, options, swapVertical, star, mail, lockClosed, barbellOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonIcon
  ],
})
export class HomePage {
  
  activeTab: string = 'login'; // Partiamo dal Login!
  activeCategory: string = 'Plans';
  categorie = ['Fitness', 'Plans', 'Workouts', 'Exercises'];

  trainers = [
    { name: 'Richard Smith', spec: 'High Intensity Training', exp: '5 years experience', rating: '4.8', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fit=crop&w=150&q=80' },
    { name: 'Kasandra Lilo', spec: 'High Intensity Training', exp: '5 years experience', rating: '4.8', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&q=80' },
    { name: 'Chris Heria', spec: 'Calisthenics Master', exp: '7 years experience', rating: '4.6', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&q=80' },
    { name: 'Ronald Chief', spec: 'Bodybuilding Pro', exp: '9 years experience', rating: '4.2', img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=crop&w=150&q=80' }
  ];

  constructor() {
    addIcons({ trophy, walk, add, home, people, barChart, ribbon, chevronForward, search, options, swapVertical, star, mail, lockClosed, barbellOutline });
  }

  login(ruolo: string) {
    if(ruolo === 'trainer') {
      alert("Accesso come TRAINER autorizzato da THE GOD!");
      this.activeTab = 'trainer';
    } else {
      this.activeTab = 'home';
    }
  }

  recuperaPassword() {
    alert("Email di recupero inviata! (Finta, ovviamente 😜)");
  }

  signUp() {
    alert("Ti stiamo portando alla pagina di registrazione...");
  }

  cambiaPagina(tab: string) {
    this.activeTab = tab;
  }

  aggiungiWorkout() {
    alert("THE GOD sta per aggiungere un nuovo record!");
  }

  cambiaCategoria(categoria: string) {
    this.activeCategory = categoria;
  }

  apriFiltri() {
    alert("Si aprirà il menu dei filtri!");
  }

  apriOrdinamento() {
    alert("Si aprirà il menu per ordinare i trainer!");
  }

  apriRicerca() {
    alert("Si aprirà la barra di ricerca!");
  }
}