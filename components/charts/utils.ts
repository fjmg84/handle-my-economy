import { TransactionType } from "@/types/finance";
import { colors } from "@/utils/constant";

// Get current year and initialize monthly expenses array
export const currentYear = new Date()
const monthsIncome = Array(12).fill(0); // Initialize an array for the 12 months
const monthsExpenses = Array(12).fill(0); // Initialize an array for the 12 months

type DatasetOptions = {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
}

export const datasetOptions: Record<TransactionType, DatasetOptions> = {
  [TransactionType.EXPENSE]: {
    label: `Gastos Mensuales del ${currentYear.getFullYear()}`,
    data: monthsExpenses,
    borderColor: colors.expense,
    backgroundColor: colors.expense,
  },
  [TransactionType.INCOME]: {
    label: `Ingresos Mensuales del ${currentYear.getFullYear()}`,
    data: monthsIncome,
    borderColor: colors.income,
    backgroundColor: colors.income,
  },
};