
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes de Ionic
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonSearchbar
} from '@ionic/angular';

// Cabecera compartida
import { CabeceraComponent } from '../../components/cabecera/cabecera.component';

// Datos de los platos
import { Plato } from '../../models/plato';
import { PlatosService } from '../../services/platos';

// Servicio del carrito
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],

  imports: [
    CommonModule,
    FormsModule,
    CabeceraComponent,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonButton,
    IonSearchbar
  ]
})
export class PedidosPage {

  // Lista completa de platos
  platos: Plato[] = [];

  // Texto del buscador
  busqueda: string = '';

  // Cantidad seleccionada para cada plato
  cantidades: Record<number, number> = {};

  // Observaciones escritas para cada plato
  observaciones: Record<number, string> = {};

  constructor(
    private platosService: PlatosService,

    // Lo hacemos público para utilizarlo en el HTML
    public carritoService: CarritoService
  ) {

    // Cargamos los platos
    this.platos = this.platosService.getPlatos();

    // Cada plato comienza con cantidad 1
    for (const plato of this.platos) {
      this.cantidades[plato.id] = 1;
      this.observaciones[plato.id] = '';
    }
  }

  // Filtra la carta según lo que escriba el usuario
  get platosFiltrados(): Plato[] {

    const texto = this.busqueda.toLowerCase().trim();

    return this.platos.filter(plato =>
      plato.nombre.toLowerCase().includes(texto) ||
      plato.descripcion.toLowerCase().includes(texto)
    );
  }

  // Cambia la cantidad antes de añadir al carrito
  cambiarCantidadPlato(plato: Plato, cambio: number): void {

    const actual = this.cantidades[plato.id] || 1;

    this.cantidades[plato.id] = Math.max(1, actual + cambio);
  }

  // Añade el plato seleccionado al carrito
  agregarAlCarrito(plato: Plato): void {

    const cantidad = this.cantidades[plato.id] || 1;
    const nota = this.observaciones[plato.id] || '';

    this.carritoService.agregarPlato(
      plato,
      cantidad,
      nota
    );

    // Restablecemos los controles del plato
    this.cantidades[plato.id] = 1;
    this.observaciones[plato.id] = '';
  }

  // Cambia la cantidad desde el carrito
  cambiarCantidadCarrito(indice: number, cambio: number): void {
    this.carritoService.cambiarCantidad(indice, cambio);
  }

  // Elimina una línea del carrito
  eliminarDelCarrito(indice: number): void {
    this.carritoService.eliminarPlato(indice);
  }

}
