export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Transaction {
  id?: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: TransactionType;
  createdAt?: Date;
}

export interface DashboardCard {
  title: string;
  value: string;
  icon: string;
  color?: string;
  change?: number;
}

export interface NavItem {
  name: string;
  path: string;
  description: string;
}
