import { Injectable } from '@angular/core';

// Importamos nuestra interfaz Plato
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})

export class PlatosService {

// Lista de platos disponibles en el restaurante
private platos: Plato[] = [

  // AREPAS

  {
    id: 1,
    nombre: 'Arepa Reina Pepiada',
    descripcion: 'Arepa rellena de pollo, aguacate y mayonesa.',
    precio: 9.50,
    imagen: 'assets/platos/arepa.jpg',
    destacado: true
  },

  {
    id: 2,
    nombre: 'Arepa Pelúa',
    descripcion: 'Arepa rellena de carne mechada y queso amarillo.',
    precio: 9.00,
    imagen: 'assets/platos/arepa-pelua.jpg',
    destacado: false
  },

  {
    id: 3,
    nombre: 'Arepa Catira',
    descripcion: 'Arepa rellena de pollo mechado y queso amarillo.',
    precio: 8.50,
    imagen: 'assets/platos/arepa-catira.jpg',
    destacado: false
  },

  {
    id: 4,
    nombre: 'Arepa Dominó',
    descripcion: 'Arepa rellena de caraotas negras y queso blanco.',
    precio: 8.00,
    imagen: 'assets/platos/arepa-domino.jpg',
    destacado: false
  },

  {
    id: 5,
    nombre: 'Arepa Sifrina',
    descripcion: 'Arepa de Reina Pepiada con queso amarillo.',
    precio: 10.00,
    imagen: 'assets/platos/arepa-sifrina.jpg',
    destacado: false
  },

  {
    id: 6,
    nombre: 'Arepa de Pernil',
    descripcion: 'Arepa rellena de pernil de cerdo y salsa de la casa.',
    precio: 9.50,
    imagen: 'assets/platos/arepa-pernil.jpg',
    destacado: false
  },

  // CACHAPAS

  {
    id: 7,
    nombre: 'Cachapa con queso',
    descripcion: 'Cachapa de maíz dulce acompañada de queso de mano.',
    precio: 11.00,
    imagen: 'assets/platos/cachapa.jpg',
    destacado: true
  },

  {
    id: 8,
    nombre: 'Cachapa con pernil',
    descripcion: 'Cachapa con queso de mano y pernil de cerdo.',
    precio: 13.50,
    imagen: 'assets/platos/cachapa-pernil.jpg',
    destacado: false
  },

  {
    id: 9,
    nombre: 'Cachapa con carne mechada',
    descripcion: 'Cachapa rellena de carne mechada y queso.',
    precio: 13.00,
    imagen: 'assets/platos/cachapa-carne.jpg',
    destacado: false
  },

  // ENTRANTES

  {
    id: 10,
    nombre: 'Tequeños',
    descripcion: 'Palitos de queso venezolano envueltos en masa crujiente.',
    precio: 7.50,
    imagen: 'assets/platos/tequenos.jpg',
    destacado: true
  },

  {
    id: 11,
    nombre: 'Empanada de carne',
    descripcion: 'Empanada venezolana de maíz rellena de carne mechada.',
    precio: 4.00,
    imagen: 'assets/platos/empanada-carne.jpg',
    destacado: false
  },

  {
    id: 12,
    nombre: 'Empanada de pollo',
    descripcion: 'Empanada venezolana rellena de pollo mechado.',
    precio: 4.00,
    imagen: 'assets/platos/empanada-pollo.jpg',
    destacado: false
  },

  {
    id: 13,
    nombre: 'Empanada de queso',
    descripcion: 'Empanada de maíz rellena de queso blanco.',
    precio: 3.50,
    imagen: 'assets/platos/empanada-queso.jpg',
    destacado: false
  },

  {
    id: 14,
    nombre: 'Pastelitos andinos',
    descripcion: 'Pastelitos fritos rellenos de carne con arroz.',
    precio: 5.50,
    imagen: 'assets/platos/pastelitos.jpg',
    destacado: false
  },

  {
    id: 15,
    nombre: 'Mandocas',
    descripcion: 'Rosquillas venezolanas de plátano y harina de maíz.',
    precio: 6.00,
    imagen: 'assets/platos/mandocas.jpg',
    destacado: false
  },

  // PLATOS TRADICIONALES

  {
    id: 16,
    nombre: 'Pabellón criollo',
    descripcion: 'Arroz, carne mechada, caraotas negras y tajadas.',
    precio: 14.50,
    imagen: 'assets/platos/pabellon.jpg',
    destacado: true
  },

  {
    id: 17,
    nombre: 'Asado negro',
    descripcion: 'Carne de ternera en salsa oscura acompañada de arroz.',
    precio: 16.00,
    imagen: 'assets/platos/asado-negro.jpg',
    destacado: false
  },

  {
    id: 18,
    nombre: 'Hallaca venezolana',
    descripcion: 'Masa de maíz rellena de guiso y envuelta en hoja de plátano.',
    precio: 10.00,
    imagen: 'assets/platos/hallaca.jpg',
    destacado: false
  },

  {
    id: 19,
    nombre: 'Hervido de res',
    descripcion: 'Sopa tradicional con carne de res, verduras y tubérculos.',
    precio: 12.00,
    imagen: 'assets/platos/hervido.jpg',
    destacado: false
  },

  {
    id: 20,
    nombre: 'Sancocho de gallina',
    descripcion: 'Sopa tradicional venezolana preparada con gallina y verduras.',
    precio: 13.00,
    imagen: 'assets/platos/sancocho.jpg',
    destacado: false
  },

  {
    id: 21,
    nombre: 'Pisca andina',
    descripcion: 'Sopa andina de patata, leche, queso y cilantro.',
    precio: 9.00,
    imagen: 'assets/platos/pisca-andina.jpg',
    destacado: false
  },

  {
    id: 22,
    nombre: 'Patacón venezolano',
    descripcion: 'Sándwich de plátano verde con carne, queso y vegetales.',
    precio: 11.50,
    imagen: 'assets/platos/patacon.jpg',
    destacado: false
  },

  {
    id: 23,
    nombre: 'Pepito venezolano',
    descripcion: 'Bocadillo de carne con verduras, queso y salsas.',
    precio: 12.00,
    imagen: 'assets/platos/pepito.jpg',
    destacado: false
  },

  {
    id: 24,
    nombre: 'Carne en vara',
    descripcion: 'Carne de ternera asada al estilo llanero.',
    precio: 18.00,
    imagen: 'assets/platos/carne-vara.jpg',
    destacado: false
  },

  // DESAYUNOS

  {
    id: 25,
    nombre: 'Desayuno criollo',
    descripcion: 'Arepas, huevos revueltos, caraotas y queso blanco.',
    precio: 11.00,
    imagen: 'assets/platos/desayuno-criollo.jpg',
    destacado: false
  },

  {
    id: 26,
    nombre: 'Perico con arepas',
    descripcion: 'Huevos revueltos con tomate, cebolla y arepas.',
    precio: 8.50,
    imagen: 'assets/platos/perico.jpg',
    destacado: false
  },

  // POSTRES

  {
    id: 27,
    nombre: 'Quesillo venezolano',
    descripcion: 'Postre tradicional de huevo, leche condensada y caramelo.',
    precio: 5.50,
    imagen: 'assets/platos/quesillo.jpg',
    destacado: false
  },

  {
    id: 28,
    nombre: 'Tres leches',
    descripcion: 'Bizcocho bañado en tres tipos de leche.',
    precio: 6.00,
    imagen: 'assets/platos/tres-leches.jpg',
    destacado: false
  },

  {
    id: 29,
    nombre: 'Golfeados',
    descripcion: 'Rollitos dulces con papelón, queso y anís.',
    precio: 5.00,
    imagen: 'assets/platos/golfeados.jpg',
    destacado: false
  },

  {
    id: 30,
    nombre: 'Arroz con leche',
    descripcion: 'Postre cremoso de arroz, leche y canela.',
    precio: 4.50,
    imagen: 'assets/platos/arroz-leche.jpg',
    destacado: false
  }

];

  constructor() {}

  // Devuelve todos los platos del restaurante
  getPlatos(): Plato[] {
    return this.platos;
  }

  // Busca un plato utilizando su identificador
  getPlatoPorId(id: number): Plato | undefined {
    return this.platos.find(plato => plato.id === id);
  }

}