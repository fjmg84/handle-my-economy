import {
  ArrowLeftRight,
  BanknoteArrowDown,
  BanknoteArrowUp,
  ChartArea,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavItem = {
  name: string;
  path: string;
  description: string;
  icon?: ReactNode;
};

export const navItems: NavItem[] = [
  {
    name: "Transacciones",
    path: "/dashboard",
    description: "Agregar transacciones nuevas",
    icon: <ArrowLeftRight color="#4f46e5" />,
  },
  {
    name: "Gastos",
    path: "/dashboard/gastos",
    description: "Ver gastos",
    icon: <BanknoteArrowDown color="#4f46e5" />,
  },
  {
    name: "Ingresos",
    path: "/dashboard/ingresos",
    description: "Ver ingresos",
    icon: <BanknoteArrowUp color="#4f46e5" />,
  },
  {
    name: "Gráficos",
    path: "/dashboard/graficos",
    description: "Análisis de datos visual",
    icon: <ChartArea color="#4f46e5" />,
  },
];

function NavLink() {
  const pathname = usePathname();
  const active = navItems.find((item) => pathname === item.path)?.name;

  return navItems.map((item) => (
    <Link
      key={item.path}
      href={item.path}
      className={`flex items-center gap-3 p-4 ${
        active === item.name
          ? "bg-indigo-600 text-white"
          : "text-gray-700 hover:bg-indigo-100"
      } rounded-lg`}
    >
      <div className="bg-indigo-100 p-2 rounded-md">{item.icon}</div>

      <div className="flex flex-col justify-start items-start">
        <span className="truncate text-md">{item.name}</span>
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
