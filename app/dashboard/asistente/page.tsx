import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ChatForm from "@/components/forms/ChatForm";

export default function AsistentePage() {
  return (
    <DashboardLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Asistente</h1>
        <p className="text-gray-600 mb-6">
          Asistente virtual para gestión financiera
        </p>

        <ChatForm />
      </div>
    </DashboardLayout>
  );
}
