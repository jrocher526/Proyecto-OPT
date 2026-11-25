
import { Component, Input } from '@angular/core';

// Para utilizar el pipe number
import { CommonModule } from '@angular/common';

// Componentes Ionic
import {
  IonCard,
  IonCardContent,
  IonImg
} from '@ionic/angular';

// Interfaz de platos
import { Plato } from '../../models/plato';

@Component({
  selector: 'app-plato-card',
  standalone: true,

  templateUrl: './plato-card.component.html',
  styleUrls: ['./plato-card.component.scss'],

  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    IonImg
  ]
})
export class PlatoCardComponent {

  // Recibimos un plato desde la página que utiliza la tarjeta
  @Input() plato!: Plato;

}
