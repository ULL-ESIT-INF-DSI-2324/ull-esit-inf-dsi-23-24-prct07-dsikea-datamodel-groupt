// PRUEBAS PARA LA CLASE FUENITURE

import 'mocha';
import { expect } from 'chai';
import { FurnitureManager } from '../../src/EJERCICIO1/Furniture';
import { Furniture } from '../../src/EJERCICIO1/FurnitureEntity';

// PRUEBAS PARA LA CLASE FURNITURE
describe('FurnitureManager', () => {
  // prueba para comprobar que se puede crear un mueble
  it('should create a furniture', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager).to.be.a('object');
  });
  // prueba para comprobar que se puede agregar un mueble
  it('should add a furniture', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    expect(furnitureManager.getFurnitureList().length).to.be.equal(1);
  });
  // prueba para comprobar que se puede obtener la lista de muebles
  it('should get the furniture list', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    expect(furnitureManager.getFurnitureList()).to.be.a('array');
  });
  // prueba para comprobar que se puede buscar un mueble por nombre
  it('should search a furniture by name', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    expect(furnitureManager.searchFurniture('name', 'silla')).to.be.a('array');
  });
  // prueba para comprobar que se puede buscar un mueble por descripción
  it('should search a furniture by description', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    expect(furnitureManager.searchFurniture('description', 'madera')).to.be.a('array');
  });
  // pruebas para la funcion shortFurniture
  it('should short furniture by name', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    furnitureManager.addFurniture({
      id: 2,
      name: 'Mesa',
      description: 'Mesa de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 200,
    });
    expect(furnitureManager.sortFurniture(furnitureManager.getFurnitureList(), 'asc', 'name')).to.be.a('array');
  });
  // prueba para se ordena de forma ascendente
  it('should short furniture by price', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    furnitureManager.addFurniture({
      id: 2,
      name: 'Mesa',
      description: 'Mesa de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 200,
    });
    expect(furnitureManager.sortFurniture(furnitureManager.getFurnitureList(), 'asc', 'price')).to.be.a('array');
  });
  // prueba para comporbar que se ordena de forma descendente
  it('should short furniture by price', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    furnitureManager.addFurniture({
      id: 2,
      name: 'Mesa',
      description: 'Mesa de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 200,
    });
    expect(furnitureManager.sortFurniture(furnitureManager.getFurnitureList(), 'desc', 'price')).to.be.a('array');
  });
  // prueba para comporbar que se borra un mueble
  it('should delete a furniture', () => {
    const furnitureManager = new FurnitureManager();
    furnitureManager.addFurniture({
      id: 1,
      name: 'Silla',
      description: 'Silla de madera',
      material: 'Madera',
      dimensions: '40x40x40',
      price: 100,
    });
    furnitureManager.deleteFurniture(1);
    expect(furnitureManager.getFurnitureList().length).to.be.equal(0);
  });
  // pruebas para comprobar que ordenar es una funcion
  it('should sortFurniture be a function', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture).to.be.a('function');
  });
  // pruebas para comprobar que buscar es una funcion
  it('should searchFurniture be a function', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.searchFurniture).to.be.a('function');
  });
  // pruebas para comprobar que agregar es una funcion
  it('should addFurniture be a function', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.addFurniture).to.be.a('function');
  });
  // pruebas para comprobar que obtener es una funcion
  it('should getFurnitureList be a function', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.getFurnitureList).to.be.a('function');
  });
  // pruebas para comprobar que borrar es una funcion
  it('should deleteFurniture be a function', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.deleteFurniture).to.be.a('function');
  });
  // pruebas para comporbar que es una clase
  it('should be a class', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager).to.be.a('object');
  });
  // comporbar que las funciones se implementan
  it('should implement the functions', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.addFurniture).to.be.a('function');
    expect(furnitureManager.getFurnitureList).to.be.a('function');
    expect(furnitureManager.searchFurniture).to.be.a('function');
    expect(furnitureManager.sortFurniture).to.be.a('function');
    expect(furnitureManager.deleteFurniture).to.be.a('function');
  });
  // comprobar que no devuelven tipos incorrectos
  it('should not return incorrect types', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.getFurnitureList()).to.be.a('array');
  });
  // funcion de ordenacion debe devolver un array
  it('should sortFurniture return an array', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture([], 'asc', 'name')).to.be.a('array');
  });
  // funcion sort items debe ordenar de forma ascendente por nombre
  it('should sort items by name', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture([], 'asc', 'name')).to.be.a('array');
  });
  // funcion sort items debe ordenar de forma ascendente por precio
  it('should sort items by price', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture([], 'asc', 'price')).to.be.a('array');
  });
  // funcion sort items debe ordenar de forma descendente por precio
  it('should sort items by price', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture([], 'desc', 'price')).to.be.a('array');
  });
  // comprobar return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  it('comporbar que el nombre se compara loalmente con otro nombre', () => {
    const furnitureManager = new FurnitureManager();
    expect(furnitureManager.sortFurniture([], 'asc', 'name')).to.be.a('array');
  });
  // pruebas para la función sortFurniture con orden ascendente por nombre
  it('should sort items by name in ascending order', () => {
    const furnitureManager = new FurnitureManager();
    const furnitureList: Furniture[] = [
      { id: 1, name: 'Chair', description: 'Wooden chair', material: 'Wood', dimensions: '40x40x40', price: 100 },
      { id: 2, name: 'Table', description: 'Wooden table', material: 'Wood', dimensions: '40x40x40', price: 200 },
      { id: 3, name: 'Desk', description: 'Wooden desk', material: 'Wood', dimensions: '40x40x40', price: 150 },
    ];
    const sortedList = furnitureManager.sortFurniture(furnitureList, 'asc', 'name');
    // Verifica que la lista ordenada tenga la misma longitud que la original
    expect(sortedList.length).to.equal(furnitureList.length);
    // Verifica que los elementos estén ordenados correctamente
    for (let i = 0; i < sortedList.length - 1; i++) {
      expect(sortedList[i].name.localeCompare(sortedList[i + 1].name)).to.be.lessThan(1);
    }
  });
  // pruebas para la función sortFurniture con orden descendente por nombre
  it('should sort items by name in descending order', () => {
    const furnitureManager = new FurnitureManager();
    const furnitureList: Furniture[] = [
      { id: 1, name: 'Chair', description: 'Wooden chair', material: 'Wood', dimensions: '40x40x40', price: 100 },
      { id: 2, name: 'Table', description: 'Wooden table', material: 'Wood', dimensions: '40x40x40', price: 200 },
      { id: 3, name: 'Desk', description: 'Wooden desk', material: 'Wood', dimensions: '40x40x40', price: 150 },
    ];
    const sortedList = furnitureManager.sortFurniture(furnitureList, 'desc', 'name');
    // Verifica que la lista ordenada tenga la misma longitud que la original
    expect(sortedList.length).to.equal(furnitureList.length);
    // Verifica que los elementos estén ordenados correctamente
    for (let i = 0; i < sortedList.length - 1; i++) {
      expect(sortedList[i].name.localeCompare(sortedList[i + 1].name)).to.be.greaterThan(0);
    }
  });
});

