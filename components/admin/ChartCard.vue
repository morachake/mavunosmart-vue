<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-forest-600 mb-4">{{ title }}</h2>
      <div class="h-64 relative">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Line } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  interface Props {
    title: string
    chartData: {
      labels: string[]
      datasets: Array<{
        label: string
        data: number[]
        borderColor: string
        tension: number
      }>
    }
  }
  
  defineProps<Props>()
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `$${value.toLocaleString()}`
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  </script>