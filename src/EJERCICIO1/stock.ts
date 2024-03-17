import { Furniture } from "./furniture"
import { TransactionType, Transaction } from "./transaction"

export class Stock {
  private furniturestock: Map<string, Furniture> = new Map<string, Furniture>;
  private transactionshistory: Transaction[] = [];

  constructor(items: Furniture[]) {
    items.forEach((item) => {
      this.furniturestock.set(item.name, item)
    })
  }


  addItem(item: Furniture, quantity: number): void {
    this.furniturestock.set(item.name, item);
    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Compra";
    const furniture: Furniture = item
    this.transactionshistory.push({
      id,
      date,
      price,
      quantity,
      transactiontype,
      furniture
    });
  }

  removeItem(item: Furniture, quantity: number): void {
    this.furniturestock.set(item.name, item)

    const id: number = Math.floor(Math.random() * 1000000);
    const date: Date = new Date();
    const price: number = item.price;
    const transactiontype: TransactionType = "Venta";
    const furniture: Furniture = item
    this.transactionshistory.push({
      id,
      date, 
      price, 
      quantity, 
      transactiontype, 
      furniture
    })
  }

  printStock() {
    this.furniturestock.forEach((item) => {
      console.log(item.name + ".............................." + item.quantity)
    });
  }

  specificItemInfo(name: string): void {
    const item: Furniture = this.furniturestock.get(name) as Furniture;
    console.log()
    console.log("Objeto .............................. " + item.name);
    console.log("Material ............................ " + item.material);
    console.log("Precio .............................. " + item.price);
    console.log("Dimensiones ......................... " + item.dimensions);
    console.log("Cantidad en stock ................... " + item.quantity);
    console.log("Más detalles ........................ " + item.description);
    console.log("Id del objeto ....................... " + item.id);
    console.log()
  }

  printTransactions() {
    this.transactionshistory.forEach(transaction => {
      console.log();
      console.log("Id de la transacción .............. " + transaction.id);
      console.log("Fecha de la transacción ........... " + transaction.date);
      console.log("Precio ............................ " + transaction.price);
      console.log("Objeto ............................ " + transaction.furniture.name);
      console.log("Cantidad de objetos ............... " + transaction.quantity);
      console.log("Tipo de transacción ............... " + transaction.transactiontype);
      console.log();
    });
  }

  getHistoricInfo(dias: number) {
    const miliseconds = dias * 24 * 60 * 60 * 1000;
    const thisday: Date = new Date();
    let fromday: Date = new Date(thisday.getTime() - miliseconds);
    let profit: number = 0;
    let losses: number = 0;
    let mostselled: Map<string, [Furniture, number]> = new Map<string, [Furniture, number]>;

    this.transactionshistory.forEach(transaction => {
      if (transaction.date >= fromday) {
        console.log();
        console.log("Id de la transacción ............ " + transaction.id);
        console.log("Fecha de la transacción ......... " + transaction.date);
        console.log("Precio .......................... " + transaction.price);
        console.log("Objeto .......................... " + transaction.furniture.name);
        console.log("Cantidad de objetos ............. " + transaction.quantity);
        console.log("Tipo de transacción ............. " + transaction.transactiontype);
        console.log();
        if (transaction.transactiontype == "Venta") {
          profit = profit + transaction.price;
          if (!mostselled.has(transaction.furniture.name)) {
            mostselled.set(transaction.furniture.name, [transaction.furniture, 1]);
          } else {
            mostselled.set(transaction.furniture.name, [transaction.furniture, mostselled.get(transaction.furniture.name)![1] + transaction.quantity]);
          }
        } else if (transaction.transactiontype == "Compra") {
          losses = losses + transaction.price;
        }
      }
    })
    console.log();
    console.log("Ganancias ....................... " + profit);
    console.log("Pérdidas ........................ " + losses);
    console.log("Balance ........................ " + (profit - losses));
    console.log("Estadísticas de los objetos: ");
    mostselled.forEach((value, index) => {
      console.log()
      console.log("Nombre ........................ " + index);
      console.log("ventas ........................ " + value[1]);
    }) 
    console.log();
  }
}