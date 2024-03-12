// PRUEBASS PARA LA CLASE PROVIDER

import 'mocha';
import { expect } from 'chai';
import { Provider } from '../../src/EJERCICIO1/ProviderEntity';
import { ProviderManager } from '../../src/EJERCICIO1/Providers';

// PRUEBAS PARA LA CLASE PROVIDER
describe('ProviderManager', () => {
  // prueba para comprobar que se puede agregar un proveedor
  it('should add a provider', () => {
    const providerManager = new ProviderManager();
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    providerManager.addProvider(provider);
    expect(providerManager.getProviderList()).to.be.a('array');
  });
  // prueba para comprobar que se puede obtener un proveedor por su id
  it('should get a provider by id', () => {
    const providerManager = new ProviderManager();
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    providerManager.addProvider(provider);
    expect(providerManager.getProviderById(1)).to.be.a('object');
  });
  // prueba para comprobar que se puede buscar un proveedor por su nombre
  it('should search a provider by name', () => {
    const providerManager = new ProviderManager();
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    providerManager.addProvider(provider);
    expect(providerManager.searchProvidersByName('Juan')).to.be.a('array');
  });
  // prueba para comprobar que se puede buscar un proveedor por su contacto
  it('should search a provider by contact', () => {
    const providerManager = new ProviderManager();
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    providerManager.addProvider(provider);
    expect(providerManager.searchProvidersByContact('1234567890')).to.be.a('array');
  });
  // prueba para comprobar que se puede buscar un proveedor por su dirección
  it('should search a provider by address', () => {
    const providerManager = new ProviderManager();
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    providerManager.addProvider(provider);
    expect(providerManager.searchProvidersByAddress('Calle 123')).to.be.a('array');
  });
  // comprobar que no devuelve nada si no encuentra el proveedor
  it('should return undefined if the provider is not found', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.getProviderById(1)).to.be.undefined;
  });
  // comporbar que no devuelve tipos de datos incorrectos
  it('should return undefined if the provider is not found', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.getProviderById(1)).to.be.undefined;
  });

  // Test to ensure that the searchProvidersByName, searchProvidersByContact, and searchProvidersByAddress methods return an empty array if no providers match the search criteria
  it('should return an empty array if no providers match the search criteria', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.searchProvidersByName('Nonexistent')).to.be.empty;
    expect(providerManager.searchProvidersByContact('Nonexistent')).to.be.empty;
    expect(providerManager.searchProvidersByAddress('Nonexistent')).to.be.empty;
  });

  // Test to ensure that the getProviderById method returns undefined if the id does not exist
  it('should return undefined if the id does not exist', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.getProviderById(999)).to.be.undefined;
  });
  // prueba para comprobar que es una interfaz
  it('should be a interface', () => {
    const providerManager = new ProviderManager();
    expect(providerManager).to.be.a('object');
  });
  // comprobar que no devuelve un objeto vacío
  it('should not return an empty object', () => {
    const providerManager = new ProviderManager();
    expect(providerManager).not.to.be.empty;
  });
  // comprobar que son funciones
  it('should be a function', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.addProvider).to.be.a('function');
    expect(providerManager.getProviderList).to.be.a('function');
    expect(providerManager.getProviderById).to.be.a('function');
    expect(providerManager.searchProvidersByName).to.be.a('function');
    expect(providerManager.searchProvidersByContact).to.be.a('function');
    expect(providerManager.searchProvidersByAddress).to.be.a('function');
  });
  // comporbar que no es undefined
  it('should not be undefined', () => {
    const providerManager = new ProviderManager();
    expect(providerManager).not.to.be.undefined;
  });
  // comporbar que no es null
  it('should not be null', () => {
    const providerManager = new ProviderManager();
    expect(providerManager).not.to.be.null;
  });
  // comprobar que no devuelve tipos incorrectos
  it('should not return incorrect types', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.getProviderList()).to.not.be.a('string');
    expect(providerManager.getProviderList()).to.be.a('array');
  });
  // Test to ensure that the addProvider method is a function
  it('addProvider should be a function', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.addProvider).to.be.a('function');
  });

  // Test to ensure that the getProviderList method returns an array even when no providers have been added
  it('getProviderList should return an array even when no providers have been added', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.getProviderList()).to.be.a('array');
  });

  // Test to ensure that the searchProvidersByName, searchProvidersByContact, and searchProvidersByAddress methods return an array even when no providers have been added
  it('search methods should return an array even when no providers have been added', () => {
    const providerManager = new ProviderManager();
    expect(providerManager.searchProvidersByName('Nonexistent')).to.be.a('array');
    expect(providerManager.searchProvidersByContact('Nonexistent')).to.be.a('array');
    expect(providerManager.searchProvidersByAddress('Nonexistent')).to.be.a('array');
  });
  
});