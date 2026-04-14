import { Metadata } from "next";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export const metadata: Metadata = {
  title: "Ayuda | Mi Economía",
  description: "Documentación y guía de uso de la aplicación",
};

const sections = [
  {
    id: "primeros-pasos",
    icon: "🚀",
    title: "Primeros Pasos",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Bienvenido a <span className="font-bold">Details of My Economy</span>,
          tu aplicación personal de gestión financiera. Esta herramienta te
          permite llevar un control detallado de tus ingresos y gastos, con
          análisis visuales y un asistente financiero inteligente.
        </p>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Registro de tu Primera Transacción
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm">
            <li>Haz clic en &quot;Nueva Transacción&quot;</li>
            <li>Selecciona el tipo (ingreso o gasto)</li>
            <li>Completa los campos: Descripción, Monto, Categoría y Fecha</li>
            <li>Haz clic en &quot;Guardar&quot;</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "interfaz",
    icon: "💻",
    title: "Interfaz Principal",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Panel de Control
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Vista general de tus finanzas</li>
            <li>Resumen de ingresos, gastos y balance</li>
            <li>Acceso rápido a todas las funcionalidades</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Barra de Navegación
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>
              <strong>Inicio</strong>: Vista general de tu situación financiera
            </li>
            <li>
              <strong>Transacciones</strong>: Historial completo de ingresos y
              gastos
            </li>
            <li>
              <strong>Gráficos</strong>: Análisis visual de tus finanzas
            </li>
            <li>
              <strong>Asistente</strong>: Acceso a Demia, tu asistente
              financiero
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "caracteristicas",
    icon: "📱",
    title: "Características Principales",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            num: "1",
            title: "Panel de Control",
            items: [
              "Vista general de finanzas",
              "Resumen de ingresos y gastos",
              "Acceso rápido a funcionalidades",
            ],
          },
          {
            num: "2",
            title: "Gestión de Transacciones",
            items: [
              "Registrar ingresos y gastos",
              "Categorización automática",
              "Historial completo",
              "Búsqueda y filtrado",
            ],
          },
          {
            num: "3",
            title: "Análisis y Reportes",
            items: [
              "Gráficos interactivos",
              "Distribución por categoría",
              "Historial mensual",
              "Exportación de datos",
            ],
          },
          {
            num: "4",
            title: "Asistente Demia",
            items: [
              "Análisis inteligente",
              "Respuestas a preguntas",
              "Recomendaciones personalizadas",
              "Reportes en lenguaje natural",
            ],
          },
        ].map((feat) => (
          <div key={feat.num} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {feat.num}
              </span>
              <h3 className="text-sm font-semibold text-gray-800">
                {feat.title}
              </h3>
            </div>
            <ul className="space-y-1">
              {feat.items.map((item) => (
                <li key={item} className="text-xs text-gray-600 flex gap-1.5">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "asistente",
    icon: "🤖",
    title: "Asistente Financiero (Demia)",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 text-sm">
          Demia es tu asistente financiero inteligente integrado que utiliza
          inteligencia artificial para ayudarte a comprender mejor tus finanzas.
          Requiere{" "}
          <a
            href="https://ollama.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ollama
          </a>{" "}
          corriendo en el puerto{" "}
          <code className="bg-gray-100 px-1 rounded text-xs">11434</code>.
        </p>

        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Preguntas que puedes hacerle
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                cat: "Análisis de Gastos",
                examples: [
                  "¿En qué categoría gasté más este mes?",
                  "¿Cuál fue mi mayor gasto la semana pasada?",
                ],
              },
              {
                cat: "Ingresos y Presupuesto",
                examples: [
                  "¿Cuánto he ganado este mes?",
                  "Compara mis ingresos con mis gastos",
                ],
              },
              {
                cat: "Recomendaciones",
                examples: [
                  "Dame sugerencias para ahorrar más",
                  "¿En qué podría gastar de menos?",
                ],
              },
            ].map((group) => (
              <div key={group.cat} className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs font-semibold text-blue-700 mb-2">
                  {group.cat}
                </p>
                {group.examples.map((ex) => (
                  <p
                    key={ex}
                    className="text-xs text-gray-600 italic mb-1 last:mb-0"
                  >
                    &quot;{ex}&quot;
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-xs font-semibold text-amber-700 mb-1">
            Solución de Problemas
          </p>
          <ul className="space-y-1 text-xs text-amber-700">
            <li>
              <strong>Demia no responde:</strong> Verifica tu instalación de{" "}
              <a
                href="https://ollama.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ollama
              </a>
            </li>
            <li>
              <strong>Falta información:</strong> Asegúrate de tener
              transacciones registradas
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "categorias",
    icon: "📊",
    title: "Categorías de Gastos",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-green-700 mb-2">
            Ingresos
          </h3>
          <ul className="space-y-1 text-sm text-gray-600">
            {["Salario", "Freelance", "Inversiones", "Otros"].map((item) => (
              <li key={item} className="flex gap-1.5">
                <span className="text-green-500">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-red-700 mb-2">Gastos</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            {[
              "Hogar",
              "Alimentación",
              "Transporte",
              "Ocio",
              "Salud",
              "Educación",
              "Ahorros",
              "Otros",
            ].map((item) => (
              <li key={item} className="flex gap-1.5">
                <span className="text-red-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "privacidad",
    icon: "🔒",
    title: "Seguridad y Privacidad",
    content: (
      <ul className="space-y-2 text-sm text-gray-600">
        {[
          "Tus datos se almacenan localmente en tu navegador",
          "No recopilamos ni compartimos tu información financiera",
          "Exporta tus datos cuando lo necesites",
        ].map((item) => (
          <li key={item} className="flex gap-2 items-start">
            <span className="text-green-500 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "faq",
    icon: "❓",
    title: "Preguntas Frecuentes",
    content: (
      <div className="space-y-4">
        {[
          {
            q: "¿Cómo restablezco mi contraseña?",
            a: "La aplicación no requiere contraseña ya que los datos se almacenan localmente en tu navegador.",
          },
          {
            q: "¿Puedo exportar mis datos?",
            a: "Sí, puedes exportar todas tus transacciones en formato CSV desde la sección de configuración.",
          },
          {
            q: "¿Cómo hago una copia de seguridad?",
            a: "Los datos se guardan automáticamente en el almacenamiento local. Para mayor seguridad, exporta regularmente tus datos.",
          },
        ].map((faq) => (
          <div
            key={faq.q}
            className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">{faq.q}</p>
            <p className="text-sm text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function AyudaPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-gray-900">Ayuda</h1>
          <p className="text-base text-gray-600 mt-2">
            Documentación y guía de uso de la aplicación
          </p>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              {s.icon} {s.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white rounded-xl border border-gray-200 p-6 scroll-mt-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>{section.icon}</span>
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
          <span>Última actualización: 13 de abril de 2026</span>
          <a
            href="mailto:fjmgqb@gmail.com"
            className="text-blue-600 hover:underline"
          >
            fjmgqb@gmail.com
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}
