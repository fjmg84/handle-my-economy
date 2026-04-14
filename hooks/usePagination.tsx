"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import { Transaction } from "@/types/finance";

function usePagination(transactions: Transaction[]) {
  const rowPerPage = 5;
  const maxPage = Math.ceil(transactions.length / rowPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPageTransactions = () => {
    const startIndex = (currentPage - 1) * rowPerPage;

    const orderedTransactions = transactions.sort((a, b) => {
      const dateA = new Date(a.createdAt || a.date).getTime();
      const dateB = new Date(b.createdAt || b.date).getTime();
      return dateB - dateA; // Orden descendente
    });

    return orderedTransactions.slice(startIndex, startIndex + rowPerPage);
  };

  const goToNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const Component = () => {
    const disabledNext = currentPage >= maxPage;
    const disabledPrevious = currentPage <= 1;

    return (
      <div id="paginations">
        <div className="flex items-center justify-center">
          <button
            className={`p-1 rounded transition ml-2 hover:cursor-pointer hover:disabled:cursor-not-allowed hover:disabled:bg-transparent`}
            onClick={goToPreviousPage}
            disabled={disabledPrevious}
          >
            <ArrowLeft
              color={disabledPrevious ? "#a1a1aa" : "#4f46e5"}
              size={20}
            />
          </button>
          <button
            className={`p-1 rounded transition ml-2 hover:cursor-pointer hover:disabled:cursor-not-allowed hover:disabled:bg-transparent`}
            onClick={goToNextPage}
            disabled={disabledNext}
          >
            <ArrowRight
              color={disabledNext ? "#a1a1aa" : "#4f46e5"}
              size={20}
            />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-2">
          Página {currentPage} de {maxPage} transacciones totales:{" "}
          {transactions.length}
        </p>
      </div>
    );
  };

  return {
    Component,
    currentPageTransactions: getCurrentPageTransactions(),
    goToNextPage,
    goToPreviousPage,
    currentPage,
    maxPage,
  };
}

export default usePagination;
