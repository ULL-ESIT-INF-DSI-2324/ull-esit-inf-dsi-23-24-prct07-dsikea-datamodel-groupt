// app.ts
import inquirer from 'inquirer';
import { FurnitureManager } from './Furniture';
import { ProviderManager } from './Providers';
import { CustomerManager } from './Customer';
import { Stock } from './stock';

const furnitureManager = new FurnitureManager();
const providerManager = new ProviderManager();
const customerManager = new CustomerManager();
const stock = new Stock(furnitureManager, providerManager, customerManager);

async function main() {
  while (true) {
    const action = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Seleccione una acción:',
      choices: ['Gestionar Muebles', 'Gestionar Proveedores', 'Gestionar Clientes', 'Realizar Transacción', 'Generar Informes', 'Salir'],
    });

    switch (action.action) {
      case 'Gestionar Muebles':
        // Implementa la lógica para gestionar muebles
        break;
      case 'Gestionar Proveedores':
        // Implementa la lógica para gestionar proveedores
        break;
      case 'Gestionar Clientes':
        // Implementa la lógica para gestionar clientes
        break;
      case 'Realizar Transacción':
        // Implementa la lógica para realizar transacciones
        break;
      case 'Generar Informes':
        // Implementa la lógica para generar informes
        break;
      case 'Salir':
        process.exit();
    }
  }
}

main();
