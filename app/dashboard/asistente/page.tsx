import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function AsistentePage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Asistente</h1>
        <p className="text-gray-600 mb-6">
          Asistente virtual para gestión financiera
        </p>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p>Funcionalidad de asistente en construcción...</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
