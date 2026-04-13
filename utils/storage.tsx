'use client';

import { Transaction } from "@/types/finance";

const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY || 'transactions';

export default function StorageManager() {
  const addTransaction = async (
    data: Transaction
  ) => {
    
    
    const transaction: Transaction = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    
    const existingTransactions = JSON.parse(localStorage.getItem(storageKey) || '[]');
    existingTransactions.push(transaction);
    localStorage.setItem(storageKey, JSON.stringify(existingTransactions));
    
    return transaction;
  };

  const getTransactions = (): Transaction[] => {
    return JSON.parse(localStorage.getItem(storageKey) || '[]');
  };

  return { addTransaction, getTransactions };
}
