import { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Mis Finanzas Personales",
  description: "Gestiona tu economía personal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
