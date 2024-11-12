<template>
    <div>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Diet</h2>
      <p class="text-gray-600 mb-4">
        Please select the option that best describes your diet. Different diets have varying impacts on carbon emissions.
      </p>
      <div>
        <label for="diet" class="block text-sm font-medium text-gray-700">
          Diet Type
        </label>
        <select
          id="diet"
          v-model="localFormData"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        >
          <option value="meat-heavy">Meat Heavy</option>
          <option value="average">Average</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    formData: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['update:formData'])
  
  const localFormData = ref(props.formData)
  
  watch(localFormData, (newValue) => {
    emit('update:formData', newValue)
  })
  </script>