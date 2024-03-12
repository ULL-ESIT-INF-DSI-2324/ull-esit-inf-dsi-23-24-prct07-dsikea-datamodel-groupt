// PRUEBAS PARA LA INTERFAZ PROVIDERS
import 'mocha';
import { expect } from 'chai';
import { Provider } from '../../src/EJERCICIO1/ProviderEntity';

// pruebas para la interfaz provider
describe('Provider Entity', () => {
  // prueba para comprobar que se puede crear un proveedor
  it('should create a provider', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
  // prueba para comprobar que el id es un número
  it('should id be a number', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider.id).to.be.a('number');
  });
  // prueba para comprobar que el nombre es un string
  it('should name be a string', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider.name).to.be.a('string');
  });
  // prueba para comprobar que el contacto es un string
  it('should contact be a string', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider.contact).to.be.a('string');
  });
  // prueba para comprobar que la dirección es un string
  it('should address be a string', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider.address).to.be.a('string');
  });
  // prueba para comprobar que es una interfaz
  it('should be a interface', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).to.be.a('object');
  });
  // comprobar que no retorna tipos incorrectos
  it ('should not return incorrect types', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider.id).to.not.be.a('string');
    expect(provider.id).to.be.a('number');
    expect(provider.id).to.not.be.a('object');
    expect(provider.id).to.not.be.a('boolean');
    expect(provider.name).to.not.be.a('number');
    expect(provider.name).to.be.a('string');
    expect(provider.name).to.not.be.a('object');
    expect(provider.name).to.not.be.a('boolean');
    expect(provider.contact).to.not.be.a('number');
    expect(provider.contact).to.be.a('string');
    expect(provider.contact).to.not.be.a('object');
    expect(provider.contact).to.not.be.a('boolean');
    expect(provider.address).to.not.be.a('number');
    expect(provider.address).to.be.a('string');
    expect(provider.address).to.not.be.a('object');
    expect(provider.address).to.not.be.a('boolean');
  });
  // prueba para comprobar que no devuelve un objeto vacío
  it('should not return an empty object', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).not.to.be.empty;
  });
  // comporbar que no es undefined
  it('should not be undefined', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).not.to.be.undefined;
  });
  // comprobar que no es nulo
  it('should not be null', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).not.to.be.null;
  });
  // comprobar que no es NaN
  it('should not be NaN', () => {
    const provider: Provider = {
      id: 1,
      name: 'Juan',
      contact: '1234567890',
      address: 'Calle 123',
    };
    expect(provider).not.to.be.NaN;
  });
});