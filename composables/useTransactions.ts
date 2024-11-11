import { ref } from 'vue'

export function useTransactions() {
  const transactions = ref([
    { id: 'TRX001', buyer: 'EcoTech Inc.', amount: 5000, date: '2024-04-01', status: 'Completed' },
    { id: 'TRX002', buyer: 'Green Future Ltd.', amount: 3500, date: '2024-03-28', status: 'Pending' },
    { id: 'TRX003', buyer: 'Sustainable Solutions', amount: 2800, date: '2024-03-25', status: 'Completed' },
  ])

  // Add functions to manage transactions here

  return {
    transactions
  }
}