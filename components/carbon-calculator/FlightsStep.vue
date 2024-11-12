<template>
    <div>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Flights</h2>
      <p class="text-gray-600 mb-4">
        Please provide information about your annual air travel. This helps us estimate the carbon emissions from your flights.
      </p>
      <div class="space-y-4">
        <div>
          <label for="shortHaulFlights" class="block text-sm font-medium text-gray-700">
            Short Haul Flights (< 3 hours) per year
          </label>
          <input
            id="shortHaulFlights"
            v-model.number="localFormData.shortHaul"
            type="number"
            min="0"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label for="longHaulFlights" class="block text-sm font-medium text-gray-700">
            Long Haul Flights (> 3 hours) per year
          </label>
          <input
            id="longHaulFlights"
            v-model.number="localFormData.longHaul"
            type="number"
            min="0"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    formData: {
      type: Object,
      required: true
    }
  })
  
  const emit = defineEmits(['update:formData'])
  
  const localFormData = ref({ ...props.formData })
  
  watch(localFormData, (newValue) => {
    emit('update:formData', newValue)
  }, { deep: true })
  </script>