import { MenuIcon } from "lucide-react";
import Link from "next/dist/client/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-55 bg-white border-r border-gray-200 flex-col">
        <div className="flex flex-col gap-6 p-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg"
          >
            <span className="text-lg font-bold text-white">Mi Economía</span>
          </Link>

          {/* Navigation */}
          <nav>
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg text-white"
            >
              <span className="flex items-center">Dashboard</span>
            </a>
            <a
              href="/dashboard/gastos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Gastos</span>
            </a>
            <a
              href="/dashboard/ingresos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Ingresos</span>
            </a>
            <a
              href="/dashboard/graficos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Gráficos</span>
            </a>
            <a
              href="/dashboard/asistente"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Asistente</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        <div className="flex-1 overflow-auto p-10">{children}</div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobileNav"
        className="fixed inset-y-0 bg-white w-full -right-full duration-300 ease-in-out z-50"
      >
        <div className="flex flex-col gap-6 p-6 h-full overflow-y-auto">
          <div className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg">
            <span className="text-lg font-bold text-white">Mi Economía</span>
          </div>

          <nav>
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg text-white mb-4"
            >
              <span className="flex items-center">Dashboard</span>
            </a>
            <a
              href="/dashboard/gastos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Gastos</span>
            </a>
            <a
              href="/dashboard/ingresos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Ingresos</span>
            </a>
            <a
              href="/dashboard/graficos"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Gráficos</span>
            </a>
            <a
              href="/dashboard/asistente"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="flex items-center">Asistente</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          id="mobileNavBtn"
          className="bg-blue-100 p-3 rounded-lg shadow-lg hover:bg-blue-200 transition-colors"
        >
          <MenuIcon size={20} color="#1e40af" />
        </button>
      </div>
    </div>
  );
}
