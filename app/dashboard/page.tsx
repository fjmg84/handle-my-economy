import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FinanceForm from "@/components/forms/FinanceForm";
import FinanceRecently from "@/components/lists/FinanceRecently";

export default function DashboardPage() {
  

  return (
    <DashboardLayout>
      <div className="p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-gray-900">Dashboard</h1>
          <p className="text-base text-gray-600 mt-2">
            Resumen de tu actividad financiera
          </p>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Form Section */}
          <div className="w-95 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nueva Transacción</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Registra una nueva transacción
                </p>
              </div>
              <FinanceForm />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <FinanceRecently/>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
