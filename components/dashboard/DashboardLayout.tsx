import { ReactNode } from "react";

import Nav from "../shares/Nav";
import TransactionsDisplay from "../shares/TransactionsDisplay";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Nav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        <div className="flex flex-col overflow-auto p-10 gap-10">
          <TransactionsDisplay />
          {children}
        </div>
      </div>
    </div>
  );
}
