<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Home class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Home</h1>
      <p class="text-base sm:text-lg text-gray-600">ESTIMATE YOUR HOME ENERGY USAGE</p>
    </div>

    <!-- Electricity Usage -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">What is your monthly electricity usage in kWh?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.electricity"
          min="0"
          max="2000"
          step="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>500</span>
          <span>1000</span>
          <span>1500</span>
          <span>2000+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Monthly electricity usage: {{ formData.electricity }} kWh
      </p>
    </div>

    <!-- Natural Gas Usage -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">What is your monthly natural gas usage in therms?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.naturalGas"
          min="0"
          max="200"
          step="5"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>50</span>
          <span>100</span>
          <span>150</span>
          <span>200+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Monthly natural gas usage: {{ formData.naturalGas }} therms
      </p>
    </div>

    <!-- Heating Oil Usage -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">What is your annual heating oil usage in gallons?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.heating"
          min="0"
          max="1000"
          step="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>250</span>
          <span>500</span>
          <span>750</span>
          <span>1000+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Annual heating oil usage: {{ formData.heating }} gallons
      </p>
    </div>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- <img src="/placeholder.svg?height=150&width=300" alt="Energy-efficient home" class="w-full h-auto rounded-lg shadow-md" /> -->
      <!-- <img src="/placeholder.svg?height=150&width=300" alt="Solar panels" class="w-full h-auto rounded-lg shadow-md" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Home } from 'lucide-vue-next'

const emit = defineEmits(['update:data'])

const formData = ref({
  electricity: 0,
  naturalGas: 0,
  heating: 0
})

const emitUpdate = () => {
  emit('update:data', formData.value)
}

watch(formData, () => {
  emitUpdate()
}, { deep: true })
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: #16a34a;
  cursor: pointer;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: #16a34a;
  cursor: pointer;
  border-radius: 50%;
}
</style>