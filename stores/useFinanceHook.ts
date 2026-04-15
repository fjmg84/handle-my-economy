"use client";

import useFinanceStore from "./useFinanceStore";

export default function useFinanceHook() {
  const transactions = useFinanceStore((state) => state.transactions);
  const addTransaction = useFinanceStore((state) => state.addTransaction);
  const removeTransaction = useFinanceStore((state) => state.removeTransaction);

  const incomes = transactions.filter((t) => t.type === "income");
  const expenses = transactions.filter((t) => t.type === "expense");

  return {
    transactions,
    addTransaction,
    removeTransaction,
    incomes,
    expenses,
  };
}
