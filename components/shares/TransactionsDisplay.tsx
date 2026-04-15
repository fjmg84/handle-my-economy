"use client";

import useFinanceHook from "@/stores/useFinanceHook";
import { ArrowUpDown, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";

function TransactionsDisplay() {
  const { incomes, expenses } = useFinanceHook();

  let incomeTotal = 0;
  incomes.forEach((income) => {
    const incomeDate = new Date(income.createdAt || "");
    const today = new Date().getFullYear();

    if (incomeDate.getFullYear() === today) {
      return (incomeTotal += income.amount);
    }
  });

  let expenseTotal = 0;
  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.createdAt || "");
    const today = new Date().getFullYear();

    if (expenseDate.getFullYear() === today) {
      return (expenseTotal += expense.amount);
    }
  });

  const netTotal = incomeTotal - expenseTotal;
  const colorNetTotal = netTotal >= 0 ? "text-green-800" : "text-red-800";
  const bgColorNetTotal = netTotal >= 0 ? "bg-green-100" : "bg-red-100";
  const iconColorNetTotal = netTotal >= 0 ? "#016630" : "#9f0712";

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs bg-lime-300 px-4 py-2 rounded-full w-max uppercase">
        Transacciones del año actual
      </h2>

      <div className="space-y-4 flex flex-col md:flex-row md:space-x-4 md:space-y-0 justify-between">
        <div className="flex gap-4">
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="text-sm text-green-800">Ingresos</p>
            <div className="flex justify-center gap-4 items-center">
              <BanknoteArrowUp color="#16a34a" size={20} />

              <p className="text-lg font-semibold text-green-800">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(incomeTotal)}
              </p>
            </div>
          </div>

          <div className="p-4 bg-red-100 rounded-lg">
            <p className="text-sm text-red-800">Gastos</p>
            <div className="flex justify-center gap-4 items-center">
              <BanknoteArrowDown color="#9f0712" size={20} />

              <p className="text-lg font-semibold text-red-800">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(expenseTotal)}
              </p>
            </div>
          </div>
        </div>

        <div className={`p-4 ${bgColorNetTotal} rounded-lg`}>
          <p className={`text-sm ${colorNetTotal}`}>Total Neto</p>

          <div className="flex justify-center gap-4 items-center">
            <ArrowUpDown color={iconColorNetTotal} size={20} />
            <p className={`text-lg font-semibold ${colorNetTotal}`}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(netTotal)}
            </p>
          </div>
        </div>
      </div>

      <div className=" p-0.5 bg-blue-100 rounded-full" />
    </div>
  );
}

export default TransactionsDisplay;
