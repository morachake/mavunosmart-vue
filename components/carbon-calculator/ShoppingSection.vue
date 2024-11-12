<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <ShoppingCart class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shopping</h1>
      <p class="text-base sm:text-lg text-gray-600">ESTIMATE YOUR CONSUMPTION EMISSIONS</p>
    </div>

    <!-- Goods Purchased -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How much do you spend on goods per month?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.goodsPurchased"
          min="0"
          max="2000"
          step="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>$0</span>
          <span>$500</span>
          <span>$1000</span>
          <span>$1500</span>
          <span>$2000+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Monthly goods spending: ${{ formData.goodsPurchased }}
      </p>
    </div>

    <!-- Services Purchased -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How much do you spend on services per month?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.servicesPurchased"
          min="0"
          max="2000"
          step="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>$0</span>
          <span>$500</span>
          <span>$1000</span>
          <span>$1500</span>
          <span>$2000+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Monthly services spending: ${{ formData.servicesPurchased }}
      </p>
    </div>

    <!-- Recycling Habits -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How often do you recycle?</h2>
      <div class="flex flex-wrap justify-between space-x-2 space-y-2">
        <button
          v-for="option in recyclingOptions"
          :key="option"
          @click="selectRecyclingHabit(option)"
          class="flex-1 py-2 px-4 rounded-md text-sm font-medium"
          :class="formData.recyclingHabit === option ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- <img src="/placeholder.svg?height=150&width=300" alt="Sustainable shopping" class="w-full h-auto rounded-lg shadow-md" /> -->
      <!-- <img src="/placeholder.svg?height=150&width=300" alt="Recycling" class="w-full h-auto rounded-lg shadow-md" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ShoppingCart } from 'lucide-vue-next'

const emit = defineEmits(['update:data'])

const recyclingOptions = ['Never', 'Sometimes', 'Often', 'Always']

const formData = ref({
  goodsPurchased: 0,
  servicesPurchased: 0,
  recyclingHabit: 'Sometimes'
})

const emitUpdate = () => {
  emit('update:data', formData.value)
}

const selectRecyclingHabit = (habit) => {
  formData.value.recyclingHabit = habit
  emitUpdate()
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