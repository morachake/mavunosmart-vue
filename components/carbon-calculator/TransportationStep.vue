<template>
    <div>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Transportation</h2>
      <p class="text-gray-600 mb-4">
        Please provide information about your annual transportation usage. This helps us estimate the carbon emissions from your daily commute and other travel.
      </p>
      <div class="space-y-4">
        <div>
          <label for="carKm" class="block text-sm font-medium text-gray-700">
            Car Travel (km/year)
          </label>
          <input
            id="carKm"
            v-model.number="localFormData.carKm"
            type="number"
            min="0"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label for="carEfficiency" class="block text-sm font-medium text-gray-700">
            Car Fuel Efficiency (L/100km)
          </label>
          <input
            id="carEfficiency"
            v-model.number="localFormData.carEfficiency"
            type="number"
            min="0"
            step="0.1"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label for="publicTransportKm" class="block text-sm font-medium text-gray-700">
            Public Transport (km/year)
          </label>
          <input
            id="publicTransportKm"
            v-model.number="localFormData.publicTransportKm"
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