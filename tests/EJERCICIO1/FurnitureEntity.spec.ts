// PRUEBAS  PARA LA INTERFAZ FURNITURE

import 'mocha';
import { expect } from 'chai';
import { Furniture } from '../../src/EJERCICIO1/FurnitureEntity';

// PRUEBAS PARA LA INTERFAZ FURNITURE
describe('FurnitureEntity', () => {
  // prueba para comporbar que se puede crear un mueble
  it('should create a furniture', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture).to.be.a('object');
  });
  // prueba para comprobar que el id es un número
  it('should id be a number', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.id).to.be.a('number');
  });
  // prueba para comprobar que el nombre es un string
  it('should name be a string', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.name).to.be.a('string');
  });
  // prueba para comprobar que la descripción es un string
  it('should description be a string', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.description).to.be.a('string');
  });
  // prueba para comprobar que el material es un string
  it('should material be a string', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.material).to.be.a('string');
  });
  // prueba para comprobar que las dimensiones es un string
  it('should dimensions be a string', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.dimensions).to.be.a('string');
  });
  // prueba para comprobar que el precio es un número
  it('should price be a number', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.price).to.be.a('number');
  });
  // prueba para comprobar que es una interfaz
  it('should be a interface', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture).to.be.a('object');
  });
  // pruebas para comprobar que no retorna un tipo incorrecto
  // prueba para comprobar que el precio no es un string
  it('should price not be a string', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.price).to.not.be.a('string');
    expect(furniture.price).to.be.a('number');
    expect(furniture.price).to.not.be.a('object');
    expect(furniture.price).to.not.be.a('boolean');
  });
  // prueba para comprobar que el nombre no es un número
  it('should name not be a number', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.name).to.not.be.a('number');
    expect(furniture.name).to.be.a('string');
    expect(furniture.name).to.not.be.a('object');
    expect(furniture.name).to.not.be.a('boolean');
  });
  // prueba para comprobar que la descripción no es un número
  it('should description not be a number', () => {
    const furniture: Furniture = {
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    };
    expect(furniture.description).to.not.be.a('number');
    expect(furniture.description).to.be.a('string');
    expect(furniture.description).to.not.be.a('object');
    expect(furniture.description).to.not.be.a('boolean');
  });
});