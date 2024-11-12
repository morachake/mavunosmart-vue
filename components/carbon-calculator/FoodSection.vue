<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Apple class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Food</h1>
      <p class="text-base sm:text-lg text-gray-600">ESTIMATE YOUR FOOD-RELATED EMISSIONS</p>
    </div>

    <!-- Diet Type -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">What best describes your diet?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          v-for="diet in dietTypes"
          :key="diet"
          @click="selectDiet(diet)"
          class="p-4 border rounded-md text-left"
          :class="formData.diet === diet ? 'border-green-500 bg-green-50' : 'border-gray-300'"
        >
          <span class="font-medium">{{ diet }}</span>
        </button>
      </div>
    </div>

    <!-- Meat Consumption -->
    <div v-if="formData.diet !== 'Vegan' && formData.diet !== 'Vegetarian'">
      <h2 class="text-lg font-medium text-gray-900 mb-4">How often do you eat meat?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.meatConsumption"
          min="0"
          max="3"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>Never</span>
          <span>Occasionally</span>
          <span>Often</span>
          <span>Very Often</span>
        </div>
      </div>
    </div>

    <!-- Dairy Consumption -->
    <div v-if="formData.diet !== 'Vegan'">
      <h2 class="text-lg font-medium text-gray-900 mb-4">How often do you consume dairy products?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.dairyConsumption"
          min="0"
          max="3"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>Never</span>
          <span>Occasionally</span>
          <span>Often</span>
          <span>Very Often</span>
        </div>
      </div>
    </div>

    <!-- Local Food -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How often do you buy local or seasonal food?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.localFood"
          min="0"
          max="3"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>Never</span>
          <span>Occasionally</span>
          <span>Often</span>
          <span>Very Often</span>
        </div>
      </div>
    </div>

    <!-- Food Waste -->
    <div>
      <h2 class="text-lg font-medium text-gray-900 mb-4">How much food do you typically waste?</h2>
      <div class="relative pt-1">
        <input
          type="range"
          v-model="formData.foodWaste"
          min="0"
          max="3"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          @input="emitUpdate"
        />
        <div class="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span>Very Little</span>
          <span>Some</span>
          <span>Average</span>
          <span>A Lot</span>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <!-- <img src="/placeholder.svg?height=200&width=400" alt="Sustainable food choices" class="w-full h-auto rounded-lg shadow-md" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Apple } from 'lucide-vue-next'

const emit = defineEmits(['update:data'])

const dietTypes = ['Vegan', 'Vegetarian', 'Pescatarian', 'Omnivore', 'Heavy Meat Eater']

const formData = ref({
  diet: 'Omnivore',
  meatConsumption: 1.5,
  dairyConsumption: 1.5,
  localFood: 1.5,
  foodWaste: 1.5
})

const selectDiet = (diet) => {
  formData.value.diet = diet
  emitUpdate()
}

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