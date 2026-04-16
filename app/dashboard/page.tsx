import DashboardLayout from "@/components/dashboard/DashboardLayout";
import FinanceForm from "@/components/forms/FinanceForm";
import FinanceRecently from "@/components/lists/FinanceRecently";
import Headers from "@/components/shares/Header";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className=" flex flex-col gap-10">
        {/* Header */}
        <Headers
          title="Dashboard"
          description="Administra tus finanzas personales de manera fácil y eficiente."
        />

        {/* Main Content */}
        <div className="flex gap-6 flex-wrap">
          {/* Form Section */}
          <div className="w-95 shrink-0 ">
            <div className="rounded-2xl bg-indigo-50 border border-gray-200 p-6">
              <FinanceForm />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <FinanceRecently />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
