<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Leaf class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
      <p class="text-base sm:text-lg text-gray-600">START WITH A QUICK CARBON FOOTPRINT ESTIMATE</p>
    </div>

    <!-- Location Selection -->
    <div>
      <div class="flex flex-wrap justify-center border-b border-gray-200 mb-4">
        <button
          v-for="tab in locationTabs"
          :key="tab"
          @click="activeLocationTab = tab"
          class="px-4 py-2 -mb-px text-sm font-medium"
          :class="activeLocationTab === tab ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'"
        >
          {{ tab }}
        </button>
      </div>
      <input
        type="text"
        v-model="formData.location"
        :placeholder="`Enter your ${activeLocationTab.toLowerCase()}`"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        @input="emitUpdate"
      />
    </div>

    <!-- Household Size -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How many people live in your household?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.householdSize"
          min="1"
          max="5"
          step="1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-sm text-gray-600 mt-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5+</span>
        </div>
      </div>
    </div>

    <!-- Household Income -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">What is your approximate gross annual household income?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.income"
          min="0"
          max="120000"
          step="10000"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>&lt;10k</span>
          <span>20k</span>
          <span>40k</span>
          <span>60k</span>
          <span>80k</span>
          <span>100k</span>
          <span>120k+</span>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-2">
        Selected: ${{ formData.income.toLocaleString() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Leaf } from 'lucide-vue-next'

const emit = defineEmits(['update:data'])

const locationTabs = ['Zipcode', 'State', 'City', 'County', 'Country']
const activeLocationTab = ref('Zipcode')

const formData = ref({
  location: '',
  householdSize: 2,
  income: 50000
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