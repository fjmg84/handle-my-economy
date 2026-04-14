import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Transaction } from "@/types/finance";

interface FinanceState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: string) => void;
}

const useFinanceStore = create<FinanceState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (transaction: Transaction) =>
        set((state) => {
          const id = crypto.randomUUID();
          const createdAt = new Date();
          const newTransaction = { ...transaction, id, createdAt };

          return { transactions: [...state.transactions, newTransaction] };
        }),
      removeTransaction: (id: string) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
    }),
    {
      name: "finance-storage", // unique name
    }
  )
);

export default useFinanceStore;
