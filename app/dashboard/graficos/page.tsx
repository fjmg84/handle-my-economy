import AnnualTrasactionsChart from "@/components/charts/AnnualTransactionsChart";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function GraficosPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gráficos</h1>
        <p className="text-gray-600 mb-6">
          Visualiza tu progreso financiero con gráficos interactivos
        </p>

        <AnnualTrasactionsChart />
      </div>
    </DashboardLayout>
  );
}
