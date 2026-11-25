import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../../components/cabecera/cabecera.component';

// Permite utilizar ngModel
import { FormsModule } from '@angular/forms';

// Navegación de Angular
import { RouterLink } from '@angular/router';

// Componentes de Ionic
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/angular';


@Component({
  selector: 'app-reservas',

  templateUrl: './reservas.page.html',

  styleUrls: ['./reservas.page.scss'],

  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonSelect,
    CabeceraComponent,
    IonSelectOption
  ]
})

export class ReservasPage {

  // DATOS DEL FORMULARIO

  nombre: string = '';

  correo: string = '';

  fecha: string = '';

  hora: string = '';

// Número de personas o la opción "Más personas"
personas: number | 'mas' | null = null;

// Cantidad personalizada introducida por el cliente
personasExtra: number | null = null;

  constructor() {}

}