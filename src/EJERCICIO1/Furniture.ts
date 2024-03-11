import { Furniture } from './FurnitureEntity';

/**
 * Clase FurnitureManager que se encarga de gestionar la lista de muebles.
 * Permite agregar, obtener y buscar muebles.
 * @class FurnitureManager
 * @param {Furniture[]} furnitureList - Lista de muebles.
 * @method addFurniture - Agrega un mueble a la lista de muebles.
 * @method getFurnitureList - Obtiene la lista de muebles.
 * @method getFurnitureById - Obtiene un mueble por su id.
 */
export class FurnitureManager {
  private furnitureList: Furniture[] = [];

  /**
   * Función para agregar un mueble a la lista de muebles.
   * @param furniture mueble a agregar.
   */
  addFurniture(furniture: Furniture): void {
    this.furnitureList.push(furniture);
  }

  /**
   * Método para obtener la lista de muebles.
   * @returns Retorna la lista de muebles.
   */
  getFurnitureList(): Furniture[] {
    return this.furnitureList;
  }

  /**
   * Función para obtener un mueble por su id.
   * @param id id del mueble a buscar.
   * @returns retorna el mueble si lo encuentra, de lo contrario retorna undefined.
   */
  getFurnitureById(id: number): Furniture | undefined {
    return this.furnitureList.find((furniture) => furniture.id === id);
  }

  // AÑADIR MAS 
}
