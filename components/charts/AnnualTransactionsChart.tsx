"use client";

import { useEffect, useRef } from "react";

import useFinanceHook from "@/stores/useFinanceHook";
import { TransactionType } from "@/types/finance";

import createChart from "@/utils/create-chart";
import { currentYear, datasetOptions } from "./utils";
import { months } from "@/utils/constant";
import DisplayChart from "../shares/DisplayChart";
import Headers from "../shares/Header";

function AnnualTransactionsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const { transactions } = useFinanceHook();

  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.date || 0);

    if (transactionDate.getFullYear() === currentYear.getFullYear()) {
      const month = transactionDate.getMonth(); // Get the month (0-11)

      if (transaction.type === TransactionType.EXPENSE) {
        datasetOptions[TransactionType.EXPENSE].data[month] +=
          transaction?.amount || 0; // Add the amount to the corresponding month
      } else if (transaction.type === TransactionType.INCOME) {
        datasetOptions[TransactionType.INCOME].data[month] +=
          transaction?.amount || 0; // Add the amount to the corresponding month
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
              ...datasetOptions[TransactionType.EXPENSE],
            },
            {
              ...datasetOptions[TransactionType.INCOME],
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  return (
    <DisplayChart>
      <Headers
        title="Transacciones Anuales"
        description={`Transacciones anuales para ${currentYear.getFullYear()}`}
      />
      <canvas ref={chartRef} id="annualExpensesChart"></canvas>
    </DisplayChart>
  );
}

export default AnnualTransactionsChart;
