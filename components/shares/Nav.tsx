"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems: { name: string; path: string; description: string }[] = [
  {
    name: "Transacciones",
    path: "/dashboard",
    description: "Agregar transacciones nuevas",
  },
  { name: "Gastos", path: "/dashboard/gastos", description: "Ver gastos" },
  {
    name: "Ingresos",
    path: "/dashboard/ingresos",
    description: "Ver ingresos",
  },
  {
    name: "Gráficos",
    path: "/dashboard/graficos",
    description: "Análisis de datos visual",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const active = navItems.find((item) => pathname === item.path)?.name;

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col gap-6 p-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg"
        >
          <span className="text-lg font-bold text-white">Mi Economía</span>
        </Link>

        {/* Navigation */}

        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 ${
                active === item.name
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } rounded-lg`}
            >
              <div className="flex flex-col">
                <span className="truncate">{item.name}</span>
                <span
                  className={`text-xs ${active === item.name ? "text-white" : "text-gray-500"}`}
                >
                  {item.description}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <div
        id="mobileNav"
        className={`fixed inset-y-0 bg-white w-full duration-300 ease-in-out z-50 ${
          showMobileNav ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 h-full overflow-y-auto">
          <div className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg">
            <span className="text-lg font-bold text-white">Mi Economía</span>
          </div>
          <nav>
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.path}`}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 ${
                  active === item.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                } rounded-lg`}
              >
                <div className="flex flex-col">
                  <span className="truncate">{item.name}</span>
                  <span
                    className={`text-xs ${active === item.name ? "text-white" : "text-gray-500"}`}
                  >
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          //id="mobileNavBtn"
          className="bg-blue-100 p-3 rounded-lg shadow-lg hover:bg-blue-200 transition-colors"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <MenuIcon size={20} color="#1e40af" />
        </button>
      </div>
    </>
  );
}
