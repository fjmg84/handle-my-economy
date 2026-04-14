"use client";

import { useEffect, useRef } from "react";

import useFinanceHook from "@/stores/useFinanceHook";
import { TransactionType } from "@/types/finance";
import { months } from "@/utils/constant";
import createChart from "@/utils/create-chart";

// Get current year and initialize monthly expenses array
const currentYear = new Date().getFullYear();

const monthlyExpenses = Array(12).fill(0); // Initialize an array for the 12 months
const monthlyIncome = Array(12).fill(0); // Initialize an array for the 12 months

function AnnualTransactionsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const { transactions } = useFinanceHook();

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.createdAt || 0);

    if (transactionDate.getFullYear() === currentYear) {
      const month = transactionDate.getMonth(); // Get the month (0-11)

      if (transaction.type === TransactionType.EXPENSE) {
        monthlyExpenses[month] += transaction.amount; // Add the amount to the corresponding month
      } else if (transaction.type === TransactionType.INCOME) {
        monthlyIncome[month] += transaction.amount; // Add the amount to the corresponding month
      }
    }
  });

  useEffect(() => {
    if (chartRef.current) {
      createChart({
        chartRef,
        type: "line",
        data: {
          labels: months, // Use month names as labels
          datasets: [
            {
              label: `Gastos Mensuales del ${currentYear}`,
              data: monthlyExpenses,
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderWidth: 2,
            },
            {
              label: `Ingresos Mensuales del ${currentYear}`,
              data: monthlyIncome,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2,
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  return (
    <div className="w-200 h-200">
      <canvas ref={chartRef} id="annualExpensesChart"></canvas>
    </div>
  );
}

export default AnnualTransactionsChart;
