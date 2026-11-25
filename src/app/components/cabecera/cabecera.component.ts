import { Component } from '@angular/core';

// Navegación de Angular
import { RouterLink, RouterLinkActive } from '@angular/router';

// Componentes y herramientas de Ionic
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  AlertController
} from '@ionic/angular';

// Registro de iconos
import { addIcons } from 'ionicons';

import {
  restaurantOutline,
  homeOutline,
  fastFoodOutline,
  calendarOutline,
  settingsOutline,
  moonOutline,
  sunnyOutline,
  languageOutline,
  personCircleOutline,
  menuOutline,
  leafOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-cabecera',

  standalone: true,

  templateUrl: './cabecera.component.html',

  styleUrls: ['./cabecera.component.scss'],

  imports: [
    RouterLink,
    RouterLinkActive,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonPopover,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
  ]
})

export class CabeceraComponent {

  // Guardamos la preferencia del modo oscuro
  modoOscuro: boolean = false;

  // Idioma seleccionado
  idioma: string = 'es';

  constructor(private alertController: AlertController) {

    // Registramos todos los iconos
    addIcons({
      restaurantOutline,
      homeOutline,
      fastFoodOutline,
      calendarOutline,
      settingsOutline,
      moonOutline,
      sunnyOutline,
      languageOutline,
      personCircleOutline,
      menuOutline,
      leafOutline
    });

    // Recuperamos la apariencia guardada
    this.modoOscuro =
      localStorage.getItem('modoOscuro') === 'true';

    // Aplicamos la apariencia
    document.documentElement.classList.toggle(
      'ion-palette-dark',
      this.modoOscuro
    );

    // Recuperamos el idioma guardado
    this.idioma = localStorage.getItem('idioma') || 'es';

    document.documentElement.lang = this.idioma;
  }

  // Cambiar entre modo claro y oscuro
  cambiarTema() {

    this.modoOscuro = !this.modoOscuro;

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      this.modoOscuro
    );

    // Guardamos la preferencia
    localStorage.setItem(
      'modoOscuro',
      String(this.modoOscuro)
    );
  }

  // Cambiar la preferencia de idioma
  cambiarIdioma(evento: CustomEvent) {

    this.idioma = evento.detail.value;

    localStorage.setItem('idioma', this.idioma);

    document.documentElement.lang = this.idioma;
  }

  // Mensaje provisional mientras construimos Perfil
  async abrirPerfil() {

    const alerta = await this.alertController.create({
      header: 'Mi perfil',
      message: 'Próximamente podrás acceder a tu perfil.',
      buttons: ['Aceptar']
    });

    await alerta.present();
  }

}