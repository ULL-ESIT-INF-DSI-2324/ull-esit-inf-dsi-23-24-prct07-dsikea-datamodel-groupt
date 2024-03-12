import { Furniture } from './FurnitureEntity';

/**
 * Clase FurnitureManager que se encarga de gestionar la lista de muebles.
 * Permite agregar, obtener y buscar muebles.
 * @class FurnitureManager
 */
export class FurnitureManager {
  /**
   * Lista de muebles.
   * @private por ser una propiedad privada.
   */
  private furnitureList: Furniture[] = [];

  /**
   * Función para agregar un mueble a la lista.
   * @param furniture mueble a agregar.
   * @returns void. no retorna nada.
   */
  addFurniture(furniture: Furniture): void {
    this.furnitureList.push(furniture);
  }

  /**
   * Método para obtener la lista de muebles.
   * Se encarga de retornar la lista de muebles.
   * Para ello, retorna la lista de muebles.
   */
  getFurnitureList(): Furniture[] {
    return this.furnitureList;
  }

  /**
   * Método para buscar muebles por nombre, tipo o descripción y ordenarlos.
   * Se encarga de buscar muebles por nombre, tipo o descripción y ordenarlos.
   * Para ello, recibe el criterio de búsqueda, el término de búsqueda, el orden y el criterio de orden.
   * Retorna la lista de muebles que coinciden con el criterio de búsqueda y ordenados.
   * @param criteria criterio de búsqueda.
   * @param searchTerm término de búsqueda.
   * @param order orden de los muebles.
   * @param sortBy criterio de orden.
   * @returns lista de muebles que coinciden con el criterio de búsqueda y ordenados.
   */
  searchFurniture(criteria: 'name' | 'description', searchTerm: string, order: 'asc' | 'desc' = 'asc', sortBy: 'name' | 'price' = 'name'): Furniture[] {
    const result = this.furnitureList.filter((furniture) => furniture[criteria].toLowerCase().includes(searchTerm.toLowerCase()));
    return this.sortFurniture(result, order, sortBy);
  }

  /**
   * Método para ordenar muebles.
   * Se encarga de ordenar los muebles.
   * Para ello, recibe la lista de muebles, el orden y el criterio de orden.
   * Si el criterio de orden es por precio, ordena por precio, de lo contrario, ordena por nombre.
   * Retorna la lista de muebles ordenada.
   * @param furnitureList lista de muebles.
   * @param order orden de los muebles.
   * @param sortBy criterio de orden.
   * @returns lista de muebles ordenada.
   */
  sortFurniture(furnitureList: Furniture[], order: 'asc' | 'desc', sortBy: 'name' | 'price'): Furniture[] {
    return furnitureList.sort((a, b) => {
      if (sortBy === 'price') {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
    });
  }

  /**
   * Método para borrar muebles.
   * Se encarga de borrar un mueble, para ello, recibe el id del mueble a borrar.
   * Retorna void. no retorna nada.
   * @param furnitureId id del mueble a borrar.
   * @returns void. no retorna nada.
   */
  deleteFurniture(furnitureId: number): void {
    this.furnitureList = this.furnitureList.filter((furniture) => furniture.id !== furnitureId);
  }
  
  /**
   * Método para actualizar muebles.
   * Se encarga de actualizar un mueble.
   * Para ello, recibe el id del mueble a actualizar y el mueble actualizado.
   * @param furnitureId id del mueble a actualizar.
   * @param furniture mueble actualizado.
   * @returns void. no retorna nada.
   */
  updateFurniture(furnitureId: number, furniture: Furniture): void {
    const index = this.furnitureList.findIndex((furniture) => furniture.id === furnitureId);
    if (index !== -1) {
      this.furnitureList[index] = furniture;
    }
  }
}
