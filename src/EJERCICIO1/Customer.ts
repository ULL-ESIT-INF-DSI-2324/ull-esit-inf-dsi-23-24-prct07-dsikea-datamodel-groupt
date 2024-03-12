import { Customer } from './CustomerEntity';

/**
 * Clase CustomerManager. Representa el administrador de clientes.
 * Permite agregar, obtener y buscar clientes.
 * @class CustomerManager
 */
export class CustomerManager {
  /**
   * Lista de clientes. 
   * @private por ser una propiedad privada.
   */
  private customerList: Customer[] = [];

  /**
   * Función para agregar un cliente a la lista de clientes.
   * Para ello, recibe el cliente a agregar y lo agrega a la lista de clientes.
   * @param customer cliente a agregar.
   */
  addCustomer(customer: Customer): void {
    this.customerList.push(customer);
  }

  /**
   * Función para obtener la lista de clientes.
   * Se encarga de retornar la lista de clientes.
   * @returns lista de clientes.
   */
  getCustomerList(): Customer[] {
    return this.customerList;
  }

  /**
   * Función para obtener un cliente por su id.
   * Para ello, se encarga de buscar el cliente por su id. 
   * @param id id del cliente a buscar.
   * @returns retorna el cliente si lo encuentra, de lo contrario retorna undefined.
   */
  getCustomerById(id: number): Customer | undefined {
    return this.customerList.find((customer) => customer.id === id);
  }

  /**
   * Método para buscar clientes por nombre.
   * Para ello, se encarga de buscar clientes por nombre y retorna la lista de clientes que coinciden con el nombre.
   * @param name nombre del cliente a buscar.
   * @returns lista de clientes que coinciden con el nombre.
   */
  searchCustomersByName(name: string): Customer[] {
    return this.customerList.filter((customer) => customer.name.toLowerCase().includes(name.toLowerCase()));
  }

  /**
   * Método para buscar clientes por contacto.
   * Se encarga de buscar clientes por contacto y retorna la lista de clientes que coinciden con el contacto.
   * @param contact contacto del cliente a buscar.
   * @returns lista de clientes que coinciden con el contacto.
   */
  searchCustomersByContact(contact: string): Customer[] {
    return this.customerList.filter((customer) => customer.contact.toLowerCase().includes(contact.toLowerCase()));
  }

  /**
   * Método para buscar clientes por dirección.
   * para ello, se encarga de buscar clientes por dirección y retorna la lista de clientes que coinciden con la dirección.
   * @param address dirección del cliente a buscar.
   * @returns lista de clientes que coinciden con la dirección.
   */
  searchCustomersByAddress(address: string): Customer[] {
    return this.customerList.filter((customer) => customer.address.toLowerCase().includes(address.toLowerCase()));
  }
}
