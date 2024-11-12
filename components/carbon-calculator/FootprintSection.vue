<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Footprints class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Footprint</h1>
      <p class="text-base sm:text-lg text-gray-600">SEE YOUR CARBON FOOTPRINT BREAKDOWN</p>
    </div>

    <!-- Total Emissions -->
    <div class="text-center">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Total Carbon Footprint</h2>
      <p class="text-3xl sm:text-5xl font-bold text-green-600">{{ totalEmissions.toFixed(1) }} <span class="text-xl sm:text-2xl">tons CO₂/year</span></p>
    </div>

    <!-- Emissions Breakdown -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Emissions Breakdown</h2>
      <div class="space-y-4">
        <div v-for="(value, category) in breakdown" :key="category" class="relative pt-1">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 capitalize">{{ category }}</span>
            <span class="text-sm font-medium text-gray-700">{{ value.toFixed(1) }}%</span>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              :style="{ width: `${value}%` }"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison to Average -->
    <div class="bg-gray-100 rounded-lg p-4 sm:p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">How You Compare</h2>
      <div class="flex justify-between items-center">
        <span class="text-sm font-medium text-gray-700">Your Footprint</span>
        <span class="text-sm font-medium text-gray-700">{{ totalEmissions.toFixed(1) }} tons CO₂/year</span>
      </div>
      <div class="relative pt-1 mt-2">
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
          <div
            :style="{ width: `${(totalEmissions / averageEmissions) * 100}%` }"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="text-sm font-medium text-gray-700">Average Footprint</span>
        <span class="text-sm font-medium text-gray-700">{{ averageEmissions.toFixed(1) }} tons CO₂/year</span>
      </div>
    </div>

    <!-- Suggestions -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Suggestions to Reduce Your Footprint</h2>
      <ul class="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
        <li>Consider using public transportation or carpooling to reduce your travel emissions.</li>
        <li>Switch to energy-efficient appliances and LED light bulbs to lower your home energy consumption.</li>
        <li>Reduce meat consumption and opt for more plant-based meals to decrease your food-related emissions.</li>
        <li>Practice mindful shopping and choose products with minimal packaging to reduce your consumption footprint.</li>
        <li>Improve your recycling habits to minimize waste-related emissions.</li>
      </ul>
    </div>

    <div class="mt-6">
      <!-- <img src="/placeholder.svg?height=200&width=400" alt="Carbon footprint visualization" class="w-full h-auto rounded-lg shadow-md" /> -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Footprints } from 'lucide-vue-next'

const props = defineProps({
  totalEmissions: {
    type: Number,
    required: true
  },
  breakdown: {
    type: Object,
    required: true
  }
})

const averageEmissions = 51 // Average household emissions

const comparisonPercentage = computed(() => {
  return (props.totalEmissions / averageEmissions) * 100
})
</script>