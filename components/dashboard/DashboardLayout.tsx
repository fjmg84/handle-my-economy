import Link from "next/link";
import { ReactNode } from "react";

import Nav from "../shares/Nav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
        <div className="flex flex-col gap-6 p-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-lg"
          >
            <span className="text-lg font-bold text-white">Mi Economía</span>
          </Link>

          {/* Navigation */}
          <Nav />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        <div className="flex-1 overflow-auto p-10">{children}</div>
      </div>
    </div>
  );
}
