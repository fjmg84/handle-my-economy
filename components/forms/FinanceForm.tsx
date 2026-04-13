"use client";

import { Transaction, TransactionType } from "@/types/finance";
import { useState } from "react";
import useFinanceHook from "@/stores/useFinanceHook";
import { categories } from "@/utils/categories-list";

const initialTransaction: Transaction = {
  description: '',
  amount: 0,
  date: '',
  type: TransactionType.INCOME,
  category: 'General',
}


export default function FinanceForm() {
  const [transaction, setTransaction] = useState<Transaction>(initialTransaction);
  const { addTransaction } = useFinanceHook();

  const onAdd = () => {
    if (!transaction.description || !transaction.amount || !transaction.date) {
      alert('Por favor completa todos los campos');
      return;
    }
    addTransaction(transaction);
    setTransaction(initialTransaction);
  }
  
  return (
    <form className="space-y-4">
      <div>
        <label className="form-label">Descripción</label>
        <input
          type="text"
          required
          name="description"
          className="form-input"
          placeholder="Ej: Salario, Alquiler..."
          value={transaction.description}
          onChange={(e) => setTransaction({ ...transaction, description: e.currentTarget.value })}
        />
      </div>
      <div>
        <label className="form-label">Cantidad</label>
        <input
          type="number"
          required
          className="form-input"
          placeholder="0.00"
          step="0.01"
          name="amount"
          value={transaction.amount}
          onChange={(e) => setTransaction({ ...transaction, amount: parseFloat(e.currentTarget.value) })}
        />
      </div>
      <div>
        <label className="form-label">Fecha</label>
        <input
          type="date"
          required
          className="form-input"
          name="date"
          value={transaction.date}
          onChange={(e) => setTransaction({ ...transaction, date: e.currentTarget.value })}
        />
      </div>

      <div>
        <label className="form-label">Categoría</label>
        <select className="form-input" name="category" onChange={(e) => setTransaction({ ...transaction, category: e.currentTarget.value })}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Tipo</label>
        <select
          className="form-input"
          name="type"
          onChange={(e) => setTransaction({ ...transaction, type: e.currentTarget.value as TransactionType })}
        >
          <option value={TransactionType.INCOME}>Ingreso</option>
          <option value={TransactionType.EXPENSE}>Gasto</option>
        </select>
      </div>
      <button
        onClick={onAdd}
        type="button"
        className="btn btn-primary w-full mt-4"
      >
        Guardar Transacción
      </button>
    </form>
  );
}
