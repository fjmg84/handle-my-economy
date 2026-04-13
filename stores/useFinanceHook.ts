import useFinanceStore from "./useFinanceStore";

export default function useFinanceHook() {
    const transactions = useFinanceStore((state) => state.transactions);
    const addTransaction = useFinanceStore((state) => state.addTransaction);
    const removeTransaction = useFinanceStore((state) => state.removeTransaction);

    return {
        transactions,
        addTransaction,
        removeTransaction,
    }
}