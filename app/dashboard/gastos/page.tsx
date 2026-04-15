"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TransactionsList from "@/components/lists/TransactionsList";
import useFinanceHook from "@/stores/useFinanceHook";

export default function GastosPage() {
  const { expenses, removeTransaction } = useFinanceHook();

  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gastos</h1>
        <p className="text-gray-600 mb-6">
          Gestiona y visualiza tus gastos mensuales
        </p>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <TransactionsList
            transactions={expenses}
            removeTransaction={removeTransaction}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
