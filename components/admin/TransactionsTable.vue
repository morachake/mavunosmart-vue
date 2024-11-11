<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(transaction.date) }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ transaction.project }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${{ transaction.amount.toLocaleString() }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span :class="[
              'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full',
              transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            ]">
              {{ transaction.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Transaction {
  id: number
  date: string
  project: string
  amount: number
  status: 'Completed' | 'Pending'
}

const props = defineProps<{
  transactions: Transaction[]
}>()

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>