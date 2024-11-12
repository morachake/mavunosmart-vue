<template>
    <div>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Consumption</h2>
      <p class="text-gray-600 mb-4">
        Please provide information about your annual spending on goods and services. This helps us estimate the carbon emissions from your consumption habits.
      </p>
      <div class="space-y-4">
        <div>
          <label for="goodsPurchased" class="block text-sm font-medium text-gray-700">
            Goods Purchased ($/year)
          </label>
          <input
            id="goodsPurchased"
            v-model.number="localFormData.goodsPurchased"
            type="number"
            min="0"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label for="servicesPurchased" class="block text-sm font-medium text-gray-700">
            Services Purchased ($/year)
          </label>
          <input
            id="servicesPurchased"
            v-model.number="localFormData.servicesPurchased"
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