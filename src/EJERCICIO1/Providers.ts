import { Provider } from './ProviderEntity';

/**
 * Clase ProviderManager. Representa el gestor de proveedores.
 * Permite agregar, obtener y buscar proveedores.
 * @class ProviderManager
 */
export class ProviderManager {
  /**
   * Lista de proveedores.
   * @private por ser una propiedad privada.
   */
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

  /**
   * Método para buscar proveedores por nombre.
   * @param name nombre del proveedor a buscar.
   * @returns lista de proveedores que coinciden con el nombre.
   */
  searchProvidersByName(name: string): Provider[] {
    return this.providerList.filter((provider) => provider.name.toLowerCase().includes(name.toLowerCase()));
  }

  /**
   * Método para buscar proveedores por contacto.
   * @param contact contacto del proveedor a buscar.
   * @returns lista de proveedores que coinciden con el contacto.
   */
  searchProvidersByContact(contact: string): Provider[] {
    return this.providerList.filter((provider) => provider.contact.toLowerCase().includes(contact.toLowerCase()));
  }

  /**
   * Método para buscar proveedores por dirección.
   * @param address dirección del proveedor a buscar.
   * @returns lista de proveedores que coinciden con la dirección.
   */
  searchProvidersByAddress(address: string): Provider[] {
    return this.providerList.filter((provider) => provider.address.toLowerCase().includes(address.toLowerCase()));
  }
}
