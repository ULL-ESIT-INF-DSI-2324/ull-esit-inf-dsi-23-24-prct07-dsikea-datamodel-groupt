import { Provider } from './ProviderEntity';

/**
 * Clase ProviderManager. Representa el gestor de proveedores.
 * Permite agregar, obtener y buscar proveedores.
 * @class ProviderManager
 * @param {Provider[]} providerList - Lista de proveedores.
 * @method addProvider - Agrega un proveedor a la lista de proveedores.
 * @method getProviderList - Obtiene la lista de proveedores.
 * @method getProviderById - Obtiene un proveedor por su id.
 */
export class ProviderManager {
  private providerList: Provider[] = [];

  /**
   * Método para agregar un proveedor a la lista de proveedores.	
   * @param provider proveedor a agregar.
   */
  addProvider(provider: Provider): void {
    this.providerList.push(provider);
  }

  /**
   * Método para obtener la lista de proveedores.
   * @returns lista de proveedores.
   */
  getProviderList(): Provider[] {
    return this.providerList;
  }

  /**
   * Función para obtener un proveedor por su id.
   * @param id id del proveedor a buscar.
   * @returns retorna el proveedor si lo encuentra, de lo contrario retorna undefined.
   */
  getProviderById(id: number): Provider | undefined {
    return this.providerList.find((provider) => provider.id === id);
  }
}
