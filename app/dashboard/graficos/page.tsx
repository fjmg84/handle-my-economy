import AnnualTrasactionsChart from "@/components/charts/AnnualTransactionsChart";
import IncomeExpensesChart from "@/components/charts/IncomeExpensesChart";
import TransactionsForMonthsChart from "@/components/charts/TransactionsForMonthsChart";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Headers from "@/components/shares/Header";

export default function GraficosPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-10">
        <Headers
          title="Gráficos"
          description="Visualiza tu progreso financiero con gráficos interactivos"
        />

        <div className=" flex gap-4 flex-wrap">
          <div className="w-full max-w-210">
            <AnnualTrasactionsChart />
          </div>

          <IncomeExpensesChart />

          <TransactionsForMonthsChart />
        </div>
      </div>
    </DashboardLayout>
  );
}
