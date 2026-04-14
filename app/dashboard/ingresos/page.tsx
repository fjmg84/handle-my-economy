"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionsList from "@/components/lists/TransactionsList";
import useFinanceHook from "@/stores/useFinanceHook";

export default function IngresosPage() {
  const { transactions, removeTransaction } = useFinanceHook();
  const incomes = transactions.filter((t) => t.type === "income");

  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ingresos</h1>
        <p className="text-gray-600 mb-6">
          Gestiona y visualiza tus ingresos mensuales
        </p>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <TransactionsList
            transactions={incomes}
            removeTransaction={removeTransaction}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
