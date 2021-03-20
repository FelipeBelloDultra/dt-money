import { createContext, ReactNode, useEffect, useState } from 'react';
import api from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTranscation(transaction: TransactionInput): void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTranscation(transaction: TransactionInput) {
    await api.post('transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTranscation }}>
      {children}
    </TransactionsContext.Provider>
  );
}
