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
      <div className="mb-10 flex flex-col items-start gap-4 lg:w-1/3">
        <h1 className="text-xl font-bold text-gray-900">
          Bienvenido a <br />
          <span className="text-[#4f46e5] text-6xl font-extrabold">
            Mi Economía
          </span>
        </h1>
        <span className="text-base">
          Gestiona tus finanzas de manera inteligente y sencilla con nuestra
          aplicación de finanzas personales impulsada por IA.
        </span>
        <p className="text-sm bg-lime-300 px-4 py-2 rounded-full w-max uppercase font-bold">
          ¡Empieza a organizar tu economía hoy mismo!
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link) => (
          <div key={link.title} className="max-w-100 ">
            <Card {...link} />
          </div>
        ))}
      </div>
    </div>
  );
}
