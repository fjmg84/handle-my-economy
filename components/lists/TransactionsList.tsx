import { Trash2 } from "lucide-react";

import { Transaction } from "@/types/finance";
import Chips from "../shares/Chips";

interface TransactionsListProps {
  transactions: Transaction[];
  removeTransaction: (id: string) => void;
}

function TransactionsList({
  transactions,
  removeTransaction,
}: TransactionsListProps) {
  return (
    <>
      {transactions.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p>No hay transacciones registradas</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Categoría
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  Monto
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {t.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {t.date ? new Date(t.date).toLocaleDateString() : "—"}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Chips
                      text={t.category}
                      color={
                        t.type === "income"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`
                        font-bold text-sm
                        ${t.type === "income" ? "text-green-600" : "text-red-600"}
                      `}
                    >
                      {t.type === "income" ? "+" : "-"}{" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(t.amount || 0)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => removeTransaction(t.id || "")}
                      className="text-red-600 hover:text-red-800 hover:bg-red-100 p-1.5 rounded transition"
                      title="Eliminar transacción"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default TransactionsList;
