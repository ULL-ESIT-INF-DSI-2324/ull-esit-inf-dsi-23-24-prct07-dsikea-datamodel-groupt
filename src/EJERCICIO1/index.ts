import * as inquirer from "inquirer";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

// Asumiendo que estos son tus archivos de manager correctamente configurados
import { FurnitureManager } from './Furniture';
import { ProviderManager } from './Providers';
import { CustomerManager } from './Customer';

// Configuración del adaptador y la base de datos Lowdb
const adapter = new FileSync("db.json");
const db = lowdb(adapter);

// Asegúrate de inicializar la base de datos con la estructura predeterminada
db.data ||= { furniture: [], providers: [], customers: [] };
db.write();

// Instancia de los managers
const furnitureManager = new FurnitureManager(db);
const providerManager = new ProviderManager(db);
const customerManager = new CustomerManager(db);

// Aquí continúa tu lógica de aplicación con inquirer...
