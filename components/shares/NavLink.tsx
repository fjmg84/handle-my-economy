import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems: { name: string; path: string; description: string }[] = [
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

function NavLink() {
  const pathname = usePathname();
  const active = navItems.find((item) => pathname === item.path)?.name;

  return navItems.map((item) => (
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
  ));
}

export default NavLink;
