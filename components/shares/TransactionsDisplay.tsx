"use client";

import useFinanceHook from "@/stores/useFinanceHook";
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import Headers from "./Header";

function TransactionsDisplay() {
  const { incomes, expenses } = useFinanceHook();

  let incomeTotal = 0;
  incomes.forEach((income) => {
    const incomeDate = new Date(income.createdAt || "");
    const today = new Date().getFullYear();

    if (incomeDate.getFullYear() === today) {
      return (incomeTotal += income?.amount || 0);
    }
  });

  let expenseTotal = 0;
  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.createdAt || "");
    const today = new Date().getFullYear();

    if (expenseDate.getFullYear() === today) {
      return (expenseTotal += expense?.amount || 0);
    }
  });

  const netTotal = incomeTotal - expenseTotal;

  return (
    <div className="flex flex-col gap-4 from-indigo-800 to-slate-900 bg-linear-to-br rounded-2xl p-6">
      <Headers
        title="Resumen Financiero"
        description="Una visión general de tus finanzas este año"
        color="light"
      />

      <div className="flex flex-col md:flex-row gap-4 justify-start mt-6">
        <div className="px-4 py-2 h-12.5 bg-green-100 rounded-3xl flex justify-center gap-4 items-center w-max">
          <BanknoteArrowUp color="#16a34a" size={20} />

          <p className="text-lg font-semibold text-green-800">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(incomeTotal)}
          </p>
        </div>

        <div className="px-4 py-2 h-12.5 bg-red-100 rounded-3xl flex justify-center gap-4 items-center w-max">
          <BanknoteArrowDown color="#9f0712" size={20} />

          <p className="text-lg font-semibold text-red-800">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(expenseTotal)}
          </p>
        </div>

        <div
          className={`px-4 py-2 h-12.5 bg-lime-300 rounded-3xl flex justify-center gap-4 items-center w-max`}
        >
          <p className={`text-sm text-lime-800`}>Total Neto</p>

          <div className="flex justify-center gap-4 items-center">
            <p className={`text-lg font-semibold text-lime-800`}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(netTotal)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsDisplay;
