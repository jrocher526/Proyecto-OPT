
import { Injectable } from '@angular/core';

// Utilizamos la interfaz de platos que ya tenemos
import { Plato } from '../models/plato';

// Define cómo será cada producto del carrito
export interface ProductoCarrito {
  plato: Plato;
  cantidad: number;
  observaciones: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // Productos añadidos al carrito
  private productos: ProductoCarrito[] = [];

  // Devuelve los productos actuales
  getProductos(): ProductoCarrito[] {
    return this.productos;
  }

  // Añade un plato con su cantidad y observaciones
  agregarPlato(
    plato: Plato,
    cantidad: number,
    observaciones: string
  ): void {

    // Comprobamos que la cantidad sea válida
    if (!Number.isInteger(cantidad) || cantidad < 1) {
      return;
    }

    // Quitamos espacios innecesarios
    const nota = observaciones.trim();

    // Buscamos si ya existe el mismo plato
    // con exactamente las mismas observaciones
    const existente = this.productos.find(
      producto =>
        producto.plato.id === plato.id &&
        producto.observaciones === nota
    );

    if (existente) {

      // Si ya existe, aumentamos su cantidad
      existente.cantidad += cantidad;

    } else {

      // Si no existe, añadimos otra línea
      this.productos.push({
        plato: plato,
        cantidad: cantidad,
        observaciones: nota
      });

    }
  }

  // Aumenta o disminuye la cantidad
  cambiarCantidad(indice: number, cambio: number): void {

    const producto = this.productos[indice];

    if (!producto) {
      return;
    }

    const nuevaCantidad = producto.cantidad + cambio;

    // Si llega a cero, eliminamos el producto
    if (nuevaCantidad <= 0) {
      this.eliminarPlato(indice);
      return;
    }

    producto.cantidad = nuevaCantidad;
  }

  // Elimina un producto del carrito
  eliminarPlato(indice: number): void {

    if (indice < 0 || indice >= this.productos.length) {
      return;
    }

    this.productos.splice(indice, 1);
  }

  // Calcula el subtotal
  getSubtotal(): number {

    return this.productos.reduce(
      (total, producto) =>
        total + producto.plato.precio * producto.cantidad,
      0
    );
  }

  // Número total de unidades añadidas
  getCantidadTotal(): number {

    return this.productos.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  }

  // Por ahora no cobramos gastos de envío
  getEnvio(): number {
    return 0;
  }

  // Calcula el precio final
  getTotal(): number {
    return this.getSubtotal() + this.getEnvio();
  }

}
