"use client";

import useFinanceHook from "@/stores/useFinanceHook";
import { TransactionType } from "@/types/finance";
import createChart from "@/utils/create-chart";
import { useEffect, useRef, useState } from "react";
import { datasetOptions } from "./utils";
import Headers from "../shares/Header";
import DisplayChart from "../shares/DisplayChart";
import { colors } from "@/utils/constant";

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
    const transactionDate = new Date(transaction.date || 0);

    if (
      transactionDate.getFullYear() === year &&
      transactionDate.getMonth() === month &&
      transaction.type === transactionType
    ) {
      const day = transactionDate.getDate(); // Get the day of the month (1-31)

      daysInMonthArray[day - 1] += transaction.amount || 0; // Add the amount to the corresponding day (adjusting for 0-based index)
    }
  });

  useEffect(() => {
    if (chartRef.current) {
      const nameMonth = new Date(0, month).toLocaleString("es-ES", {
        month: "long",
      });
      const label =
        transactionType === TransactionType.INCOME
          ? `Ingresos Mensuales ${nameMonth} del ${year} `
          : `Gastos Mensuales ${nameMonth} del ${year}`;

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
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions, transactionType, year, month]);

  return (
    <DisplayChart>
      <Headers
        title="Transacciones Mensuales"
        description="Visualiza tus ingresos o gastos diarios para un mes específico"
      />

      <div className="flex gap-10 ">
        <div className="flex items-center gap-3">
          <span
            className={`text-sm font-medium transition-colors ${
              transactionType === TransactionType.INCOME
                ? "text-indigo-600"
                : "text-gray-400"
            }`}
          >
            Ingresos
          </span>
          <button
            role="switch"
            aria-checked={transactionType === TransactionType.EXPENSE}
            onClick={() =>
              setTransactionType(
                transactionType === TransactionType.INCOME
                  ? TransactionType.EXPENSE
                  : TransactionType.INCOME
              )
            }
            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor:
                transactionType === TransactionType.EXPENSE
                  ? colors.expense
                  : colors.income,
            }}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                transactionType === TransactionType.EXPENSE
                  ? "translate-x-5"
                  : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              transactionType === TransactionType.EXPENSE
                ? "text-indigo-500"
                : "text-gray-400"
            }`}
          >
            Gastos
          </span>
        </div>

        <select
          className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-40"
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

        <select
          className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-40"
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

      <div className="w-200 h-auto ">
        <canvas id="transactionsForMonthsChart" ref={chartRef}></canvas>
      </div>
    </DisplayChart>
  );
}

export default TransactionsForMonthsChart;
