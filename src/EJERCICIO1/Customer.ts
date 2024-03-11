import { Customer } from './CustomerEntitY';

/**
 * Clase CustomerManager. Representa el administrador de clientes.
 * Permite agregar, obtener y buscar clientes.
 * @class CustomerManager
 * @param {Customer[]} customerList - Lista de clientes.
 * @method addCustomer - Agrega un cliente a la lista de clientes.
 * @method getCustomerList - Obtiene la lista de clientes.
 * @method getCustomerById - Obtiene un cliente por su id.
 */
export class CustomerManager {
  private customerList: Customer[] = [];

  /**
   * Función para agregar un cliente a la lista de clientes.
   * @param customer cliente a agregar.
   */
  addCustomer(customer: Customer): void {
    this.customerList.push(customer);
  }

  /**
   * Función para obtener la lista de clientes.
   * @returns lista de clientes.
   */
  getCustomerList(): Customer[] {
    return this.customerList;
  }

  /**
   * Función para obtener un cliente por su id.
   * @param id id del cliente a buscar.
   * @returns retorna el cliente si lo encuentra, de lo contrario retorna undefined.
   */
  getCustomerById(id: number): Customer | undefined {
    return this.customerList.find((customer) => customer.id === id);
  }

  // AÑADIR MAS
}
