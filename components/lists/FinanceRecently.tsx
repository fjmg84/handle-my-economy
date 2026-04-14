"use client";

import usePagination from "@/hooks/usePagination";
import useFinanceHook from "@/stores/useFinanceHook";

import Headers from "../shares/Header";

import TransactionsList from "./TransactionsList";

export default function FinanceRecently() {
  const { transactions, removeTransaction } = useFinanceHook();
  const { Component: PaginationComponent, currentPageTransactions } =
    usePagination(transactions);

  return (
    <div className="flex gap-6 flex-col">
      <Headers
        title="Transacciones Recientes"
        description="Transacciones de tus ingresos y gastos"
      />

      <TransactionsList
        transactions={currentPageTransactions}
        removeTransaction={removeTransaction}
      />

      <PaginationComponent />
    </div>
  );
}
