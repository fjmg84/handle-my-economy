"use client";

import useFinanceHook from "@/stores/useFinanceHook";
import createChart from "@/utils/create-chart";
import { useEffect, useRef } from "react";
import DisplayChart from "../shares/DisplayChart";
import Headers from "../shares/Header";
import { colors } from "@/utils/constant";

function IncomeExpensesChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { incomes, expenses } = useFinanceHook();

  const incomeTotal = incomes.reduce(
    (total, income) => total + (income.amount || 0),
    0
  );
  const expensesTotal = expenses.reduce(
    (total, expense) => total + (expense.amount || 0),
    0
  );

  useEffect(() => {
    if (chartRef.current) {
      createChart({
        chartRef,
        type: "doughnut",
        data: {
          labels: ["Ingresos", "Gastos"],
          datasets: [
            {
              label: "Ingresos vs Gastos",
              data: [incomeTotal, expensesTotal],
              backgroundColor: [colors.income, colors.expense],
              borderColor: [colors.income, colors.expense],
            },
          ],
        },
      });
    }
  }, [incomeTotal, expensesTotal]); // Re-renderizar el gráfico cuando cambien los totales

  return (
    <DisplayChart>
      <Headers
        title="Ingresos vs Gastos"
        description="Comparación entre ingresos y gastos"
      />

      <canvas ref={chartRef} id="incomeExpensesChart"></canvas>
      
      <div className="flex flex-col gap-2 text-xs">
        <div className="flex justify-between">
          <p className="uppercase">Ingresos:</p>
          <span className={`font-bold text-[${colors.income}]`}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(incomeTotal)}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="uppercase">Gastos:</p>
          <span className={`font-bold text-[${colors.expense}]`}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(expensesTotal)}
          </span>
        </div>
      </div>
    </DisplayChart>
  );
}

export default IncomeExpensesChart;
