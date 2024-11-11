<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-forest-700">Analytics Dashboard</h1>
      <div class="flex space-x-4">
        <select v-model="timeRange" class="rounded-md border-gray-300">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Total Sales</h3>
        <p class="text-3xl font-bold text-forest-600">$45,678</p>
        <p class="text-sm text-gray-500">+12.5% from last period</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Active Users</h3>
        <p class="text-3xl font-bold text-forest-600">1,234</p>
        <p class="text-sm text-gray-500">+5.3% from last period</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Carbon Credits Sold</h3>
        <p class="text-3xl font-bold text-forest-600">2,567</p>
        <p class="text-sm text-gray-500">+8.7% from last period</p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-forest-600 mb-4">Sales Analytics</h2>
        <LineChart :data="salesData" :options="chartOptions" class="h-64" />
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-forest-600 mb-4">User Activity</h2>
        <LineChart :data="userActivityData" :options="chartOptions" class="h-64" />
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold text-forest-600">Recent Transactions</h2>
        <button class="text-forest-600 hover:text-forest-700">View All</button>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="border-b">
              <th class="text-left py-3 px-4">Date</th>
              <th class="text-left py-3 px-4">Credit Type</th>
              <th class="text-left py-3 px-4">Amount</th>
              <th class="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in recentTransactions" :key="transaction.id" class="border-b">
              <td class="py-3 px-4">{{ transaction.date }}</td>
              <td class="py-3 px-4">{{ transaction.type }}</td>
              <td class="py-3 px-4">${{ transaction.amount }}</td>
              <td class="py-3 px-4">
                <span :class="{
                  'px-2 py-1 rounded-full text-sm': true,
                  'bg-green-100 text-green-800': transaction.status === 'Completed',
                  'bg-yellow-100 text-yellow-800': transaction.status === 'Pending'
                }">
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Line as LineChart } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const timeRange = ref('30d');

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Sales ($)',
    data: [12000, 19000, 15000, 25000, 22000, 30000],
    borderColor: '#16a34a',
    tension: 0.1
  }]
};

const userActivityData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Active Users',
    data: [500, 800, 1200, 1000, 1500, 1300],
    borderColor: '#92400e',
    tension: 0.1
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};

const recentTransactions = [
  { id: 1, date: '2024-04-03', type: 'Mau Forest Credits', amount: 1200, status: 'Completed' },
  { id: 2, date: '2024-04-02', type: 'Mt. Kenya Credits', amount: 800, status: 'Pending' },
  { id: 3, date: '2024-04-01', type: 'Coastal Forest Credits', amount: 1500, status: 'Completed' },
  { id: 4, date: '2024-03-31', type: 'Aberdares Credits', amount: 950, status: 'Completed' },
];
</script>