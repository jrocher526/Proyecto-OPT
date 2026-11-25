// Interfaz que define la estructura de nuestros platos

export interface Plato {

  // Identificador único del plato
  id: number;

  // Nombre del plato
  nombre: string;

  // Descripción del plato
  descripcion: string;

  // Precio del plato
  precio: number;

  // Ruta de la imagen
  imagen: string;

  // Indica si es uno de los favoritos de la casa
  destacado: boolean;

}