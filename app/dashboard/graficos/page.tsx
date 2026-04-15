import AnnualTrasactionsChart from "@/components/charts/AnnualTransactionsChart";
import TransactionsForMonthsChart from "@/components/charts/TransactionsForMonthsChart";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Card from "@/components/shares/Card";
import { CalendarDays, CalendarRange } from "lucide-react";

export default function GraficosPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gráficos</h1>
        <p className="text-gray-600 mb-6">
          Visualiza tu progreso financiero con gráficos interactivos
        </p>

        <div className="flex flex-col gap-5 items-center">
          <div className="w-210 flex justify-center items-center">
            <Card title="Transacciones Anuales" icon={<CalendarDays />}>
              <AnnualTrasactionsChart />
            </Card>
          </div>

          <div className="w-210 flex justify-center items-center">
            <Card title="Transacciones Mensuales" icon={<CalendarRange />}>
              <TransactionsForMonthsChart />
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
