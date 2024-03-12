import inquirer from 'inquirer';
import  low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { CustomerManager } from './Customer';
import { FurnitureManager } from './Furniture';
import { ProviderManager } from './Providers';
import { Furniture } from './FurnitureEntity';
import { Customer } from './CustomerEntity';
import { Provider } from './ProviderEntity';

// Configuración de la base de datos Lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ furniture: [], suppliers: [], clients: [] }).write();

/**
 * Función para mostrar el menú principal
 * Retorna void. no retorna nada.
 */
async function mainMenu() {
  // Menú principal
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción:',
    choices: [
      'Gestionar los clientes',
      'Gestionar los muebles',
      'Gestionar los proveedores',
      'Salir'
    ],
  });

  switch (answer.action) {
    case 'Gestionar los clientes':
      await manageCustomers();
      break;
    case 'Gestionar los muebles':
      await manageFurniture();
      break;
    case 'Gestionar los proveedores':
      await manageProviders();
      break;
    case 'Salir':
      console.log('Saliendo...');
      process.exit();
  }

  await mainMenu();
}

/**
 * Función para agregar un cliente
 * Retorna void. no retorna nada.
 */
async function addCustomer() {
  // Agregamos un cliente con los datos ingresados por el usuario y lo agregamos a la base de datos
  const customer = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del cliente:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del cliente:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del cliente:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del cliente:',
    },
  ]);
  (db.get('clients')as any).push(customer).write();
  console.log(`Cliente agregado con éxito.`);
}

/**
 * Función para eliminar un cliente
 * Retorna void. no retorna nada.
 */
async function deleteCustomer() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de clientes actual
  const clients: Customer[] = db.get('clients').value();

  // Si no hay clientes, informamos al usuario
  if (clients.length === 0) {
    console.log('No hay clientes para eliminar.');
    return;
  }

  // Preparamos la lista de nombres de clientes para Inquirer
  const clientNames = clients.map(client => client.name);

  // Solicitamos al usuario que seleccione el cliente a eliminar por nombre
  const { clientNameToDelete } = await inquirer.prompt({
    name: 'clientNameToDelete',
    type: 'list',
    choices: clientNames,
    message: 'Seleccione el cliente a eliminar:'
  });

  // Filtramos el cliente seleccionado y actualizamos la base de datos
  const updatedClients = clients.filter(client => client.name !== clientNameToDelete);
  db.set('clients', updatedClients).write();

  console.log(`Cliente eliminado con éxito.`);
}

/**
 * Función para buscar un cliente
 * Retorna void. no retorna nada.
 */
async function searchCustomer() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de clientes actual
  const clients: Customer[] = db.get('clients').value();

  // Si no hay clientes, informamos al usuario
  if (clients.length === 0) {
    console.log('No hay clientes para buscar.');
    return;
  }

  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'contacto', 'dirección'],
  });

  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del cliente a buscar:`,
  });

  // Filtramos los clientes que coinciden con el término de búsqueda
  let foundClients: Customer[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundClients = clients.filter(client => client.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'contacto':
      foundClients = clients.filter(client => client.contact.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'dirección':
      foundClients = clients.filter(client => client.address.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }

  // Si no se encontraron clientes, informamos al usuario
  if (foundClients.length === 0) {
    console.log('Cliente no encontrado.');
    return;
  } else {
    // Si se encontraron clientes, los mostramos en consola
    console.log('Cliente(s) encontrado(s):');
    foundClients.forEach(client => {
      console.log(`ID: ${client.id}, Nombre: ${client.name}, Contacto: ${client.contact}, Dirección: ${client.address}`);
    });
  }
}

/**
 * Función para gestionar clientes
 * Retorna void. no retorna nada.
 */
async function manageCustomers() {
  // Menú de gestión de clientes
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los clientes:',
    choices: [
      'Agregar cliente',
      'Eliminar cliente',
      'Buscar cliente',
      'Volver al menú principal'
    ],
  });

  switch (answer.action) {
    case 'Agregar cliente':
      await addCustomer();
      break;
    case 'Eliminar cliente':
      await deleteCustomer();
      break;
    case 'Buscar cliente':
      await searchCustomer();
      break;
    case 'Volver al menú principal':
      return;
  }

  await manageCustomers();
}

/**
 * Función para agregar un mueble
 * Retorna void. no retorna nada.
 */
async function addFurniture() {
  // Agregamos un mueble con los datos ingresados por el usuario y lo agregamos a la base de datos
  const furniture = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del mueble:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del mueble:',
    },
    {
      name: 'description',
      message: 'Ingrese la descripción del mueble:',
    },
    {
      name: 'material',
      message: 'Ingrese el material del mueble:',
    },
    {
      name: 'dimensions',
      message: 'Ingrese las dimensiones del mueble:',
    },
    {
      name: 'price',
      message: 'Ingrese el precio del mueble:',
    },
  ]);
  (db.get('furniture') as any).push(furniture).write();
  console.log(`Mueble agregado con éxito.`);
}

/**
 * Función para eliminar un mueble
 * Retorna void. no retorna nada.
 */
async function deleteFurniture() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de muebles actual
  const furnitureList: Furniture[] = db.get('furniture').value();

  // Si no hay muebles, informamos al usuario
  if (!furnitureList.length) {
    console.log('No hay muebles para eliminar.');
    return;
  }

  // Preparamos la lista de nombres de muebles para Inquirer
  const furnitureNames = furnitureList.map((furniture) => furniture.name);

  // Solicitamos al usuario que seleccione el mueble a eliminar por nombre
  const { furnitureNameToDelete } = await inquirer.prompt([{
    type: 'list',
    name: 'furnitureNameToDelete',
    choices: furnitureNames,
    message: 'Seleccione el mueble a eliminar:'
  }]);

  // Filtramos el mueble seleccionado y actualizamos la base de datos
  const updatedFurnitureList = furnitureList.filter((furniture) => furniture.name !== furnitureNameToDelete);
  db.set('furniture', updatedFurnitureList).write();

  console.log(`Mueble eliminado con éxito.`);
}

/**
 * Función para buscar un mueble
 * Retorna void. no retorna nada.
 */
async function searchFurniture() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de muebles actual
  const furnitureList: Furniture[] = db.get('furniture').value();

  // Si no hay muebles, informamos al usuario
  if (furnitureList.length === 0) {
    console.log('No hay muebles para buscar.');
    return;
  }

  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'descripción', 'material'],
  });

  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del mueble a buscar:`,
  });

  // Filtramos los muebles que coinciden con el término de búsqueda
  let foundFurniture: Furniture[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundFurniture = furnitureList.filter(furniture => furniture.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'descripción':
      foundFurniture = furnitureList.filter(furniture => furniture.description.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'material':
      foundFurniture = furnitureList.filter(furniture => furniture.material.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }

  // Si no se encontraron muebles, informamos al usuario
  if (foundFurniture.length === 0) {
    console.log('Mueble no encontrado.');
  } else {
    // Si se encontraron muebles, los mostramos en consola
    console.log('Mueble(s) encontrado(s):');
    foundFurniture.forEach(furniture => {
      console.log(`ID: ${furniture.id}, Nombre: ${furniture.name}, Descripción: ${furniture.description}, Material: ${furniture.material}, Dimensiones: ${furniture.dimensions}, Precio: ${furniture.price}`);
    });
  }
}

/**
 * Función para gestionar muebles
 * Retorna void. no retorna nada.
 */
async function manageFurniture() {
  // Menú de gestión de muebles
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los muebles:',
    choices: [
      'Agregar mueble',
      'Eliminar mueble',
      'Buscar mueble',
      'Volver al menú principal'
    ],
  });

  switch (answer.action) {
    case 'Agregar mueble':
      await addFurniture();
      break;
    case 'Eliminar mueble':
      await deleteFurniture();
      break;
    case 'Buscar mueble':
      await searchFurniture();
      break;
    case 'Volver al menú principal':
      return;
  }

  await manageFurniture();
}

/**
 * Función para agregar un proveedor
 * Retorna void. no retorna nada.
 */
async function addProvider() {
  // Creamos un proveedor con los datos ingresados por el usuario y lo agregamos a la base de datos
  const provider = await inquirer.prompt([
    {
      name: 'id',
      message: 'Ingrese el id del proveedor:', 
    },
    {
      name: 'name',
      message: 'Ingrese el nombre del proveedor:',
    },
    {
      name: 'contact',
      message: 'Ingrese el contacto del proveedor:',
    },
    {
      name: 'address',
      message: 'Ingrese la dirección del proveedor:',
    },
  ]);
  (db.get('suppliers') as any).push(provider).write();
  console.log(`Proveedor agregado con éxito.`);
}

/**
 * Función para eliminar un proveedor
 * Retorna void. no retorna nada.
 */
async function deleteProvider() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de proveedores actual
  const providers: Provider[] = db.get('suppliers').value();

  // Si no hay proveedores, informamos al usuario
  if (!providers.length) {
    console.log('No hay proveedores para eliminar.');
    return;
  }

  // Preparamos la lista de nombres de proveedores para Inquirer
  const providerNames = providers.map((provider) => provider.name);

  // Solicitamos al usuario que seleccione el proveedor a eliminar por nombre
  const { providerNameToDelete } = await inquirer.prompt([{
    name: 'providerNameToDelete',
    type: 'list',
    choices: providerNames,
    message: 'Seleccione el proveedor a eliminar:'
  }]);

  // Filtramos el proveedor seleccionado y actualizamos la base de datos
  const updatedProviders = providers.filter((provider) => provider.name !== providerNameToDelete);
  db.set('suppliers', updatedProviders).write();

  console.log(`Proveedor eliminado con éxito.`);
}

/**
 * Función para buscar un proveedor
 * Retorna void. no retorna nada.
 */
async function searchProvider() {
  // Nos aseguramos de leer la base de datos antes de realizar operaciones
  db.read();

  // Obtenemos la lista de proveedores actual
  const providers: Provider[] = db.get('suppliers').value();

  // Si no hay proveedores, informamos al usuario
  if (providers.length === 0) {
    console.log('No hay proveedores para buscar.');
    return;
  }

  // Solicitamos al usuario que seleccione el criterio de búsqueda
  const searchType = await inquirer.prompt({
    name: 'type',
    type: 'list',
    message: 'Seleccione el criterio de búsqueda:',
    choices: ['nombre', 'contacto', 'dirección'],
  });

  // Solicitamos al usuario que ingrese el término de búsqueda
  const searchTerm = await inquirer.prompt({
    name: 'term',
    type: 'input',
    message: `Ingrese el ${searchType.type} del proveedor a buscar:`,
  });

  // Filtramos los proveedores que coinciden con el término de búsqueda
  let foundProviders: Provider[] = [];
  switch (searchType.type) {
    case 'nombre':
      foundProviders = providers.filter(provider => provider.name.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'contacto':
      foundProviders = providers.filter(provider => provider.contact.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
    case 'dirección':
      foundProviders = providers.filter(provider => provider.address.toLowerCase().includes(searchTerm.term.toLowerCase()));
      break;
  }

  // Si no se encontraron proveedores, informamos al usuario
  if (foundProviders.length === 0) {
    console.log('Proveedor no encontrado.');
  } else {
    // Si se encontraron proveedores, los mostramos en consola
    console.log('Proveedor(es) encontrado(s):');
    foundProviders.forEach(provider => {
      console.log(`ID: ${provider.id}, Nombre: ${provider.name}, Contacto: ${provider.contact}, Dirección: ${provider.address}`);
    });
  }
}

/**
 * Función para gestionar proveedores
 * Retorna void. no retorna nada.
 */
async function manageProviders() {
  // Menú de gestión de proveedores
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'Seleccione una acción para los proveedores:',
    choices: [
      'Agregar proveedor',
      'Eliminar proveedor',
      'Buscar proveedor',
      'Volver al menú principal'
    ],
  });

  switch (answer.action) {
    case 'Agregar proveedor':
      await addProvider();
      break;
    case 'Eliminar proveedor':
      await deleteProvider();
      break;
    case 'Buscar proveedor':
      await searchProvider();
      break;
    case 'Volver al menú principal':
      return;
  }

  await manageProviders();
}

// Iniciamos el programa
mainMenu();