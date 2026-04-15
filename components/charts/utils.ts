import { ChartDataProps } from "@/types/chart";
import { TransactionType } from "@/types/finance";
import { ChartConfiguration, ChartType } from "chart.js";

// Get current year and initialize monthly expenses array
export const currentYear = new Date()
const monthsIncome = Array(12).fill(0); // Initialize an array for the 12 months
const monthsExpenses = Array(12).fill(0); // Initialize an array for the 12 months

type DatasetOptions = {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
}

export const datasetOptions: Record<TransactionType, DatasetOptions> = {
  [TransactionType.EXPENSE]: {
    label: `Gastos Mensuales del ${currentYear.getFullYear()}`,
    data: monthsExpenses,
    borderColor: "rgba(255, 99, 132, 1)",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderWidth: 2,
  },
  [TransactionType.INCOME]: {
    label: `Ingresos Mensuales del ${currentYear.getFullYear()}`,
    data: monthsIncome,
    borderColor: "rgba(75, 192, 192, 1)",
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderWidth: 2,
  },
};