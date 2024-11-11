<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 overflow-auto ml-64">
      <Header @logout="handleLogout" />
      <main class="p-6">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-forest-700 mb-8">Dashboard Overview</h1>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard 
              v-for="stat in stats" 
              :key="stat.title" 
              :title="stat.title" 
              :value="stat.value" 
              :change="stat.change" 
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ChartCard title="Carbon Credits Sold" :chartData="carbonCreditsSoldData" />
            <ChartCard title="Revenue Trend" :chartData="revenueTrendData" />
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-forest-600 mb-4">Recent Transactions</h2>
            <TransactionsTable :transactions="transactions" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/admin/Sidebar.vue'
import Header from '@/components/admin/Header.vue'
import StatsCard from '@/components/admin/StatsCard.vue'
import ChartCard from '@/components/admin/ChartCard.vue'
import TransactionsTable from '@/components/admin/TransactionsTable.vue'
import { useAuthStore } from '@/stores/auth'
import { useTransactions } from '@/composables/useTransactions'
import { useCarbonCredit } from '@/composables/useCarbonCredit'

const auth = useAuthStore()
const { transactions } = useTransactions()
const { carbonCredits } = useCarbonCredit()

const stats = ref([
  { title: 'Total Carbon Credits', value: '10,234', change: '+5.3%' },
  { title: 'Active Projects', value: '23', change: '+2' },
  { title: 'Monthly Revenue', value: '$45,678', change: '+12.5%' }
])

const carbonCreditsSoldData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Carbon Credits Sold',
    data: [1200, 1900, 1500, 2500, 2200, 3000],
    borderColor: '#16a34a',
    tension: 0.1
  }]
}

const revenueTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue ($)',
    data: [25000, 32000, 28000, 40000, 38000, 50000],
    borderColor: '#92400e',
    tension: 0.1
  }]
}

const handleLogout = () => {
  auth.logout()
  // Add any additional logout logic here, such as redirecting to the login page
}
</script>