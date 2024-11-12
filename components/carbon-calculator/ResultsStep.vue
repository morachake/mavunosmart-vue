<template>
  <div>
    <h2 class="text-2xl font-semibold text-green-700 mb-4">Your Carbon Footprint Results</h2>
    <div class="bg-green-100 p-4 sm:p-6 rounded-lg mb-6">
      <h3 class="text-xl font-semibold text-green-800 mb-2">Your Estimated Annual Carbon Emissions</h3>
      <p class="text-3xl font-bold text-green-600 mb-4">{{ totalEmissions.toFixed(2) }} tonnes CO2e</p>
      
      <div class="space-y-4">
        <div v-for="(value, key) in emissionBreakdown" :key="key" class="flex justify-between items-center">
          <span class="text-gray-700 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</span>
          <span class="font-semibold text-green-700">{{ value.toFixed(2) }} tonnes CO2e</span>
        </div>
      </div>
    </div>
    
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-green-800 mb-2">Comparison to Average Emissions</h3>
      <p class="text-gray-600 mb-2">Here's how your emissions compare to average annual per capita emissions:</p>
      <ul class="space-y-2">
        <li v-for="(value, key) in averageEmissions" :key="key" class="flex justify-between items-center">
          <span class="text-gray-700 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</span>
          <span class="font-semibold" :class="totalEmissions > value ? 'text-red-600' : 'text-green-600'">
            {{ value.toFixed(2) }} tonnes CO2e
            ({{ totalEmissions > value ? '+' : '-' }}{{ Math.abs(totalEmissions - value).toFixed(2) }})
          </span>
        </li>
      </ul>
    </div>
    
    <div class="mt-8">
      <h4 class="text-lg font-semibold text-green-700 mb-2">Offset Your Emissions</h4>
      <p class="text-gray-600 mb-4">
        Consider offsetting your carbon footprint by supporting one of these projects:
      </p>
      <ul class="space-y-2">
        <li v-for="project in offsetProjects" :key="project.id" class="flex items-start">
          <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
          <span>{{ project.name }} - {{ project.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

defineProps({
  totalEmissions: {
    type: Number,
    required: true
  },
  emissionBreakdown: {
    type: Object,
    required: true
  },
  offsetProjects: {
    type: Array,
    required: true
  },
  averageEmissions: {
    type: Object,
    required: true
  }
})
</script>