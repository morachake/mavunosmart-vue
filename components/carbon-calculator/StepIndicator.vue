<template>
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <div v-for="step in steps" :key="step.number" class="flex items-center">
          <div
            :class="[
              'rounded-full h-8 w-8 flex items-center justify-center',
              currentStep >= step.number ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
            ]"
          >
            {{ step.number }}
          </div>
          <div
            v-if="step.number < steps.length"
            :class="[
              'h-1 w-16',
              currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
            ]"
          ></div>
        </div>
      </div>
      <div class="flex justify-between mt-2">
        <div v-for="step in steps" :key="step.number" class="text-xs text-center" :style="{ width: '80px' }">
          {{ step.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    currentStep: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  })
  </script>