// ==========================================
// IMPORTACIONES DE ANGULAR
// ==========================================

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// ==========================================
// COMPONENTES DE IONIC
// ==========================================

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular';

// ==========================================
// COMPONENTES PERSONALIZADOS
// ==========================================

import { CabeceraComponent } from '../components/cabecera/cabecera.component';

import { PlatoCardComponent } from '../components/plato-card/plato-card.component';

// ==========================================
// INTERFAZ Y SERVICIO DE PLATOS
// ==========================================

import { Plato } from '../models/plato';

import { PlatosService } from '../services/platos';

// ==========================================
// ICONOS DE IONICONS
// ==========================================

import { addIcons } from 'ionicons';

import {
  restaurantOutline,
  calendarOutline,
  arrowForwardOutline,
  leafOutline
} from 'ionicons/icons';

// ==========================================
// CONFIGURACIÓN DE HOME
// ==========================================

@Component({
  selector: 'app-home',

  standalone: true,

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

  // Componentes necesarios para el HTML
  imports: [
    CommonModule,
    RouterLink,

    // Componentes propios
    CabeceraComponent,
    PlatoCardComponent,

    // Componentes de Ionic
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  ]
})

export class HomePage {

  // Lista de platos destacados que mostraremos en Inicio
  platosDestacados: Plato[] = [];

  // ==========================================
  // CONSTRUCTOR
  // ==========================================

  constructor(private platosService: PlatosService) {

    // Registramos los iconos de la página
    addIcons({
      restaurantOutline,
      calendarOutline,
      arrowForwardOutline,
      leafOutline
    });

    // Obtenemos los platos desde nuestro servicio
    // y seleccionamos los tres primeros destacados
    this.platosDestacados = this.platosService
      .getPlatos()
      .filter(plato => plato.destacado)
      .slice(0, 3);

  }

}