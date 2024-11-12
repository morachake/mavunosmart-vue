<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Plane class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Travel</h1>
      <p class="text-base sm:text-lg text-gray-600">ESTIMATE YOUR TRAVEL EMISSIONS</p>
    </div>

    <!-- Car Usage -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How many miles do you drive per year?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.carMiles"
          min="0"
          max="50000"
          step="1000"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>10k</span>
          <span>20k</span>
          <span>30k</span>
          <span>40k</span>
          <span>50k+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Miles driven: {{ formData.carMiles.toLocaleString() }}
      </p>
    </div>

    <!-- Public Transit -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How many miles do you travel by public transit per year?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.publicTransit"
          min="0"
          max="10000"
          step="100"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>2k</span>
          <span>4k</span>
          <span>6k</span>
          <span>8k</span>
          <span>10k+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Miles by public transit: {{ formData.publicTransit.toLocaleString() }}
      </p>
    </div>

    <!-- Flights -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How many hours do you spend flying per year?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.flights"
          min="0"
          max="100"
          step="1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Flight hours: {{ formData.flights }}
      </p>
    </div>

    <div class="mt-6">
      <!-- <img src="/placeholder.svg?height=200&width=400" alt="Travel emissions illustration" class="w-full h-auto rounded-lg shadow-md" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Plane } from 'lucide-vue-next'

const emit = defineEmits(['update:data'])

const formData = ref({
  carMiles: 0,
  publicTransit: 0,
  flights: 0
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