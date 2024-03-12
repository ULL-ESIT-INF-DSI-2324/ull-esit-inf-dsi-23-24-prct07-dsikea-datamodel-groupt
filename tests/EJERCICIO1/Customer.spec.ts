// PRUEBAS PARA LA CLASE CUSTOMER

import 'mocha';
import { expect } from 'chai';
import { Customer} from '../../src/EJERCICIO1/CustomerEntity';
import { CustomerManager } from '../../src/EJERCICIO1/Customer';

// PRUEBAS PARA LA CLASE CUSTOMER
describe('CustomerManager', () => {
  // prueba para comprobar que se puede crear un cliente
  it('should create a customer', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // prueba para comprobar que el id es un número
  it('should id be a number', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.id).to.be.a('number');
  });
  // prueba para comprobar que el nombre es un string
  it('should name be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.name).to.be.a('string');
  });
  // prueba para comprobar que el contacto es un string
  it('should contact be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.contact).to.be.a('string');
  });
  // prueba para comprobar que la dirección es un string
  it('should address be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.address).to.be.a('string');
  });
  // prueba para comprobar que es una interfaz
  it('should be a interface', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer).to.be.a('object');
  });
  // prueba para comprobar que se puede crear un cliente manager
  it('should create a customer manager', () => {
    const customerManager = new CustomerManager();
    expect(customerManager).to.be.a('object');
  });
  // pruebas para comporabr la funcion de agregar un cliente
  it('should add a customer', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.getCustomerList()).to.be.a('array');
  });
  // comprobar que es una funcion
  it('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.addCustomer).to.be.a('function');
  });
  // pruebas para comprobar la función de obtener la lista de clientes
  it('should get the customer list', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerList()).to.be.a('array');
  });
  // comprobar que es una funcion
  it('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerList).to.be.a('function');
  });
  // pruebas para comprobar la función de obtener un cliente por su id
  it('should get a customer by id', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerById(1)).to.be.undefined;
  });
  // comprobar que es una funcion
  it('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerById).to.be.a('function');
  });
  // pruebas para comprobar la función de buscar clientes por nombre
  it('should search customers by name', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByName('Juan')).to.be.a('array');
  });
  // comprobar que es una funcion
  it('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByName).to.be.a('function');
  });
  // pruebas para comprobar la función de buscar clientes por contacto
  it('should search customers by contact', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByContact('1234567890')).to.be.a('array');
  });
  // comprobar que es una funcion
  it('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByContact).to.be.a('function');
  });
  // pruebas para comprobar la función de buscar clientes por dirección
  it('should search customers by address', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByAddress('Calle 123')).to.be.a('array');
  });
  // comprobar que es una funcion
  it ('should be a function', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByAddress).to.be.a('function');
  });
  // comprobar que no retorna tipos incorrectos
  // prueba para comprobar que el id no es un string
  it('should id not be a string', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.id).to.not.be.a('string');
    expect(customer.id).to.be.a('number');
    expect(customer.id).to.not.be.a('object');
    expect(customer.id).to.not.be.a('boolean');
  });
  // prueba para comprobar que el nombre no es un número
  it('should name not be a number', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.name).to.not.be.a('number');
    expect(customer.name).to.be.a('string');
    expect(customer.name).to.not.be.a('object');
    expect(customer.name).to.not.be.a('boolean');
  });
  // prueba para comprobar que el contacto no es un número
  it('should contact not be a number', () => {
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(customer.contact).to.not.be.a('number');
    expect(customer.contact).to.be.a('string');
    expect(customer.contact).to.not.be.a('object');
    expect(customer.contact).to.not.be.a('boolean');
  });
  // prueba para la funcion addCustomer para comporabr que hace un push
  it('should add a customer', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.getCustomerList().length).to.be.equal(1);
  });
  //comporbar que la funcion addCustomer hace lo que se espera
  it('should add a customer', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.getCustomerList()[0]).to.be.equal(customer);
  });
  // prueba para getacuastomerlist para comprobar que retorna un array
  it('should get the customer list', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerList()).to.be.a('array');
  });
  // coporbar que hace lo que se espera
  it('should get the customer list', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerList()).to.be.empty;
  });
  // prueba para comporbar que devuelve la lista de clientes
  it('should get the customer list', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    const customer2: Customer = {
      id: 2,
      name: 'Pedro',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    customerManager.addCustomer(customer2);
    const customerList = customerManager.getCustomerList();
    // Check if the list contains both customers
    expect(customerList).to.include.members([customer, customer2]);
  });
  // funcion para getCustumerById para comprobar que retorna un cliente
  it('should get a customer by id', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.getCustomerById(1)).to.be.equal(customer);
  });
  // funcion para getCustumerById para comprobar que retorna undefined
  it('should get a customer by id', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.getCustomerById(1)).to.be.undefined;
  });
  // funcion para searchCustomersByName para comprobar que retorna un array
  it('should search customers by name', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByName('Juan')).to.be.a('array');
  });
  // funcion para searchCustomersByName para comprobar que retorna un array vacío
  it('should search customers by name', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByName('Juan')).to.be.empty;
  });
  // comporbar que searchCustomersByName hace lo que se espera
  it('should search customers by name', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.searchCustomersByName('Juan')).to.include.members([customer]);
  });
  // funcion para searchCustomersByContact para comprobar que retorna un array
  it('should search customers by contact', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByContact('1234567890')).to.be.a('array');
  });
  // funcion para searchCustomersByContact para comprobar que retorna un array vacío
  it('should search customers by contact', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByContact('1234567890')).to.be.empty;
  });
  // comporbar que searchCustomersByContact hace lo que se espera
  it('should search customers by contact', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.searchCustomersByContact('1234567890')).to.include.members([customer]);
  });
  // funcion para searchCustomersByAddress para comprobar que retorna un array
  it('should search customers by address', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByAddress('Calle 123')).to.be.a('array');
  });
  // funcion para searchCustomersByAddress para comprobar que retorna un array vacío
  it('should search customers by address', () => {
    const customerManager = new CustomerManager();
    expect(customerManager.searchCustomersByAddress('Calle 123')).to.be.empty;
  });
  // comporbar que searchCustomersByAddress hace lo que se espera
  it('should search customers by address', () => {
    const customerManager = new CustomerManager();
    const customer: Customer = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    customerManager.addCustomer(customer);
    expect(customerManager.searchCustomersByAddress('Calle 123')).to.include.members([customer]);
  });    
});