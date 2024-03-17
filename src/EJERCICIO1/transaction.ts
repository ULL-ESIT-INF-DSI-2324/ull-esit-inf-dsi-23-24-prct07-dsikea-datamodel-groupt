export type TransactionType = 'Venta' | 'Compra' | 'Devolucion';

export interface Transaction {
  id: number;
  date: Date;
  price: number;
  quantity: number;
  transactiontype: TransactionType;
  furniture: Furniture;
} 
