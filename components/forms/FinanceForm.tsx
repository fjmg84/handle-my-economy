"use client";

import { useState } from "react";

import useFinanceHook from "@/stores/useFinanceHook";
import { Transaction, TransactionType } from "@/types/finance";
import { categories } from "@/utils/constant";
import Headers from "../shares/Header";

const initialTransaction: Transaction = {
  description: "",
  amount: null,
  date: "",
  type: TransactionType.INCOME,
  category: "General",
};

export default function FinanceForm() {
  const [transaction, setTransaction] =
    useState<Transaction>(initialTransaction);
  const { addTransaction } = useFinanceHook();

  const onAdd = () => {
    if (!transaction.description || !transaction.amount || !transaction.date) {
      alert("Por favor completa todos los campos");
      return;
    }
    addTransaction(transaction);
    setTransaction(initialTransaction);
  };

  return (
    <div className="flex flex-col gap-6">
      <Headers
        title="Registrar Transacción"
        description="Agrega tus ingresos y gastos para llevar un control de tu economía."
      />

      <form className="flex flex-col gap-4">
        <div>
          <label className="form-label text-indigo-600">Descripción</label>
          <input
            type="text"
            required
            name="description"
            className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
            placeholder="Ej: Breve descripción de la transacción"
            value={transaction.description}
            onChange={(e) =>
              setTransaction({
                ...transaction,
                description: e.currentTarget.value,
              })
            }
          />
        </div>

        <div className="flex gap-4">
          <div className="w-40">
            <label className="form-label text-indigo-600">Tipo</label>
            <select
              className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
              name="type"
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  type: e.currentTarget.value as TransactionType,
                })
              }
            >
              <option value={TransactionType.INCOME}>Ingreso</option>
              <option value={TransactionType.EXPENSE}>Gasto</option>
            </select>
          </div>
          <div>
            <label className="form-label text-indigo-600">Monto</label>
            <input
              type="number"
              required
              className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
              placeholder="$ 0.00"
              name="amount"
              min={0}
              value={transaction.amount || ""}
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  amount: parseFloat(e.currentTarget.value),
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="form-label text-indigo-600">Fecha</label>
          <input
            type="date"
            required
            className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
            name="date"
            value={transaction.date}
            onChange={(e) =>
              setTransaction({ ...transaction, date: e.currentTarget.value })
            }
          />
        </div>

        <div>
          <label className="form-label text-indigo-600">Categoría</label>
          <select
            className="form-input bg-white p-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
            name="category"
            onChange={(e) =>
              setTransaction({
                ...transaction,
                category: e.currentTarget.value,
              })
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onAdd}
          type="button"
          className="btn btn-primary w-full rounded-full font-bold h-16"
        >
          Guardar Transacción
        </button>
      </form>
    </div>
  );
}
