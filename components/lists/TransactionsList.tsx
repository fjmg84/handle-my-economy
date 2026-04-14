import { Trash2 } from "lucide-react";

import { Transaction } from "@/types/finance";

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
      <div className="overflow-y-auto h-120 flex flex-col gap-2">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mr-4"
          >
            <div>
              <p className="font-semibold">{t.description}</p>
              <p className="text-sm text-gray-600">{t.category}</p>
              <p className="text-xs text-gray-600">
                {new Date(t.date).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right flex items-center">
              <span
                className={
                  t.type === "income" ? "text-green-600" : "text-red-600"
                }
              >
                {t.type === "income" ? "+" : "-"}$ {t.amount.toLocaleString()}
              </span>

              <button
                onClick={() => removeTransaction(t.id || "")}
                className="ml-4 text-red-600 hover:text-red-800 hover:bg-red-100 p-1 rounded hover:cursor-pointer transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {transactions.length === 0 && (
        <p className="text-center text-gray-500">
          No hay transacciones registradas
        </p>
      )}
    </>
  );
}

export default TransactionsList;
