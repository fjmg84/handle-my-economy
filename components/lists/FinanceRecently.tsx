'use client';

import useFinanceHook from '@/stores/useFinanceHook';


export default function FinanceRecently() {
 const { transactions } = useFinanceHook();
 

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Transacciones Recientes</h2>
        <p className="text-sm text-gray-600 mt-1">
          Transacciones de tus ingresos y gastos
        </p>
      </div>
      
      <div className="mt-6 space-y-4 h-full overflow-y-auto">
        
        {transactions.slice(-10).map((t) => (
          <div key={t.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{t.description}</p>
              <p className="text-sm text-gray-600">{t.category}</p>
            </div>
            <div className="text-right">
              <span className={t.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                {t.type === 'income' ? '+' : '-'}$ {t.amount.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
