import Card from "./shares/Card";
import { CircleUser, LayoutDashboard, LifeBuoy } from "lucide-react";

const links = [
  {
    title: "Dashboard",
    description:
      "Accede al resumen de tus finanzas y gestiona tus transacciones",
    link: "/dashboard",
    icon: <LayoutDashboard color="#4f46e5" />,
  },
  {
    title: "Ayuda",
    description: "Consulta preguntas frecuentes y cómo usar la aplicación",
    link: "/ayuda",
    icon: <LifeBuoy color="#4f46e5" />,
  },
  {
    title: "Contacto",
    description: "Contáctanos para soporte o cualquier consulta",
    link: "/#contacto",
    icon: <CircleUser color="#4f46e5" />,
  },
];

export default function Welcome() {
  return (
    <div className="p-10">
      <div className="mb-8">
        <h1 className="text-[32px] font-bold text-gray-900">Bienvenido</h1>
        <p className="text-base text-gray-600 mt-2">
          Gestiona tus finanzas personales de forma sencilla
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Card {...link} key={link.title} />
        ))}
      </div>
    </div>
  );
}
