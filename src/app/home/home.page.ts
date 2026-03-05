import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonLabel, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonList, IonItem, IonLabel, IonIcon
  ],
})
export class HomePage {
  constructor() {
    // Questo serve per far apparire le icone!
    addIcons({ peopleOutline, calendarOutline });
  }

  funzioneDiEsempio() {
    console.log("THE GOD ha cliccato il tasto!");
    alert("Hai cliccato la Gestione Studenti!");
  }
}