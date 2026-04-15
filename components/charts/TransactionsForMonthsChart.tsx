"use client";

import useFinanceHook from "@/stores/useFinanceHook";
import { TransactionType } from "@/types/finance";
import createChart from "@/utils/create-chart";
import { useEffect, useRef, useState } from "react";
import { datasetOptions } from "./utils";

const currentDate = new Date();
const months = Array(12).fill(0); // Initialize an array for the days of the month

function TransactionsForMonthsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [transactionType, setTransactionType] = useState(
    TransactionType.INCOME
  );

  const lastDay = new Date(year, month + 1, 0).getDate();
  const daysInMonthArray = Array(lastDay).fill(0); // Initialize an array for the days of the month

  const { transactions } = useFinanceHook();

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.createdAt || 0);

    if (
      transactionDate.getFullYear() === year &&
      transactionDate.getMonth() === month &&
      transaction.type === transactionType
    ) {
      const day = transactionDate.getDate(); // Get the day of the month (1-31)

      daysInMonthArray[day - 1] += transaction.amount;
    }
  });

  useEffect(() => {
    if (chartRef.current) {
      const label =
        transactionType === TransactionType.INCOME
          ? `Ingresos Mensuales del ${year}`
          : `Gastos Mensuales del ${year}`;
          
      createChart({
        chartRef,
        type: "line",
        data: {
          labels: daysInMonthArray.map((_, index) => index + 1), // Labels for the days of the month
          datasets: [
            {
              ...datasetOptions[transactionType],
              data: daysInMonthArray,
              label,
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions, transactionType, year, month]);

  return (
    <>
      <div className="flex gap-10">
        <select
          className="border border-gray-300 rounded-md p-2 mb-4"
          value={transactionType}
          onChange={(e) =>
            setTransactionType(e.target.value as TransactionType)
          }
        >
          <option value={TransactionType.INCOME}>Ingresos</option>
          <option value={TransactionType.EXPENSE}>Gastos</option>
        </select>
        <select
          className="border border-gray-300 rounded-md p-2 mb-4"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Array.from(
            { length: 10 },
            (_, i) => currentDate.getFullYear() - i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2 mb-4">
          <select
            className="border border-gray-300 rounded-md p-2"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {months.map((_, index) => (
              <option key={index} value={index}>
                {new Date(0, index).toLocaleString("es-ES", { month: "long" })}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-200 h-auto">
        <canvas id="transactionsForMonthsChart" ref={chartRef}></canvas>
      </div>
    </>
  );
}

export default TransactionsForMonthsChart;
