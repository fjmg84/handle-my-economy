"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionsList from "@/components/lists/TransactionsList";
import Headers from "@/components/shares/Header";
import usePagination from "@/hooks/usePagination";
import useFinanceHook from "@/stores/useFinanceHook";

export default function IngresosPage() {
  const { removeTransaction, incomes } = useFinanceHook();
  const { Component: Pagination, currentPageTransactions } = usePagination(incomes);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-10">
        <Headers title="Ingresos" description="Resumen de tus ingresos mensuales" />
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <TransactionsList
            transactions={currentPageTransactions}
            removeTransaction={removeTransaction}
          />
          <Pagination />
        </div>
      </div>
    </DashboardLayout>
  );
}
