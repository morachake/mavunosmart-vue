<template>
    <div>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Home Energy</h2>
      <p class="text-gray-600 mb-4">
        Please provide information about your annual home energy usage. This helps us estimate the carbon emissions from your household energy consumption.
      </p>
      <div class="space-y-4">
        <div>
          <label for="electricity" class="block text-sm font-medium text-gray-700">
            Electricity Usage (kWh/year)
          </label>
          <input
            id="electricity"
            v-model.number="localFormData.electricity"
            type="number"
            min="0"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label for="naturalGas" class="block text-sm font-medium text-gray-700">
            Natural Gas Usage (m³/year)
          </label>
          <input
            id="naturalGas"
            v-model.number="localFormData.naturalGas"
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