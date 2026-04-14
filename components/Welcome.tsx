import Link from "next/link";

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
        <Link
          href="/dashboard"
          className="card hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <p className="text-gray-600">
            Accede al resumen de tus finanzas y gestiona tus transacciones
          </p>
        </Link>

        <Link href="/ayuda" className="card hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-4">Ayuda</h2>
          <p className="text-gray-600">
            Consulta preguntas frecuentes y cómo usar la aplicación
          </p>
        </Link>

        <Link
          href="/#contacto"
          className="card hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold mb-4">Contacto</h2>
          <p className="text-gray-600">
            Contáctanos para soporte o cualquier consulta
          </p>
        </Link>
      </div>
    </div>
  );
}
