// PRUEBAS PARA LA INTERFAZ PROVIDERS
import 'mocha';
import { expect } from 'chai';
import { Provider } from '../../src/EJERCICIO1/ProviderEntity';

// pruebas para la interfaz provider
describe('Provider Entity', () => {
  let provider: Provider;
  beforeEach(() => {
    provider = {
      id: 1,
      name: 'Proveedor 1',
      contact: '1234567890',
      address: 'Calle 123',
    };
  });
  // debe tener un id
  it('should have a number id', () => {
    expect(provider.id).to.be.a('number');
  });
  // debe tener un 
  it('should have a string name', () => {
    expect(provider.name).to.be.a('string');
  });

  it('should have a string contact', () => {
    expect(provider.contact).to.be.a('string');
  });

  it('should have a string address', () => {
    expect(provider.address).to.be.a('string');
  });

  // Aquí puedes agregar más pruebas según sea necesario
});