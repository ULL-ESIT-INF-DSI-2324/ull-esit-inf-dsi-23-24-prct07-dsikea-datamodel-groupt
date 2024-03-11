// stock.ts
import inquirer from 'inquirer';
import * as low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { FurnitureManager } from './Furniture';
import { ProviderManager } from './Providers';
import { CustomerManager } from './Customer';

const adapter = new FileSync('stock.json');
const stockDB = low(adapter);

export class Stock {
  private furnitureManager: FurnitureManager;
  private providerManager: ProviderManager;
  private customerManager: CustomerManager;

  constructor(furnitureManager: FurnitureManager, providerManager: ProviderManager, customerManager: CustomerManager) {
    this.furnitureManager = furnitureManager;
    this.providerManager = providerManager;
    this.customerManager = customerManager;
    stockDB.defaults({ transactions: [] }).write();
  }

  sellFurniture(customerId: number): void {
    const furnitureList = this.furnitureManager.getFurnitureList();
    const furnitureChoices = furnitureList.map((furniture) => ({ name: furniture.name, value: furniture.id }));

    inquirer.prompt([
        {
          type: 'list',
          name: 'furnitureId',
          message: 'Seleccione el mueble que desea vender:',
          choices: furnitureChoices,
        },
        {
          type: 'number',
          name: 'quantity',
          message: 'Ingrese la cantidad de unidades a vender:',
          validate: (input) => (Number.isInteger(input) && input > 0 ? true : 'Ingrese un número entero positivo'),
        },
      ])
      .then((answers) => {
        const furniture = this.furnitureManager.getFurnitureById(answers.furnitureId);
        if (furniture) {
          const totalPrice = furniture.price * answers.quantity;
          this.customerManager.addTransaction(customerId, answers.furnitureId, answers.quantity, totalPrice);
          this.updateStock(answers.furnitureId, -answers.quantity);
          console.log(`Venta realizada. Total: $${totalPrice}`);
        } else {
          console.log('Error: Mueble no encontrado.');
        }
      });
  }

  buyFurniture(providerId: number): void {
    const furnitureList = this.furnitureManager.getFurnitureList();
    const furnitureChoices = furnitureList.map((furniture) => ({ name: furniture.name, value: furniture.id }));

    inquirer.prompt([
        {
          type: 'list',
          name: 'furnitureId',
          message: 'Seleccione el mueble que desea comprar:',
          choices: furnitureChoices,
        },
        {
          type: 'number',
          name: 'quantity',
          message: 'Ingrese la cantidad de unidades a comprar:',
          validate: (input) => (Number.isInteger(input) && input > 0 ? true : 'Ingrese un número entero positivo'),
        },
      ])
      .then((answers) => {
        const furniture = this.furnitureManager.getFurnitureById(answers.furnitureId);
        if (furniture) {
          const totalPrice = furniture.price * answers.quantity;
          this.providerManager.addTransaction(providerId, answers.furnitureId, answers.quantity, totalPrice);
          this.updateStock(answers.furnitureId, answers.quantity);
          console.log(`Compra realizada. Total: $${totalPrice}`);
        } else {
          console.log('Error: Mueble no encontrado.');
        }
      });
  }

  updateStock(furnitureId: number, quantity: number): void {
    const stock = stockDB.get('stock').find({ furnitureId: furnitureId }).value();
    if (stock) {
      stock.quantity += quantity;
    } else {
      stockDB.get('stock').push({ furnitureId: furnitureId, quantity: quantity }).write();
    }
  }

  getStockReport(): void {
    const stock = stockDB.get('stock').value();
    console.log('=== Stock Report ===');
    console.table(stock);
  }
}
