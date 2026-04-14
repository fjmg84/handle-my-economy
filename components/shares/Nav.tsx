"use client";

import { useRef, useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("dashboard");
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: { name: string; path: string; description: string }[] = [
    { name: "Dashboard", path: "/dashboard", description: "Resumen" },
    { name: "Gastos", path: "/dashboard/gastos", description: "Ver gastos" },
    {
      name: "Ingresos",
      path: "/dashboard/ingresos",
      description: "Ver ingresos",
    },
    { name: "Gráficos", path: "/dashboard/graficos", description: "Análisis" },
  ];

  return (
    <nav ref={navRef}>
      {navItems.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className={`flex items-center gap-3 px-3 py-2 ${
            active === item.name
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          } rounded-lg`}
        >
          <span className="flex items-center">
            <span className="truncate">{item.name}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
