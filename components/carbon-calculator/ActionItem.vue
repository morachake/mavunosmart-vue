<template>
    <div class="bg-white shadow-md rounded-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
        <button
          @click="pledge"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Pledge
        </button>
      </div>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <p class="text-sm text-gray-600 mb-1">Emissions Saved</p>
          <p class="text-xl font-bold text-green-600">{{ emissionsSaved.toFixed(1) }} tons CO₂/year</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-1">Money Saved</p>
          <p class="text-xl font-bold text-green-600">${{ moneySaved }}/year</p>
        </div>
        <div v-if="upfrontCost">
          <p class="text-sm text-gray-600 mb-1">Upfront Cost</p>
          <p class="text-xl font-bold text-green-600">${{ upfrontCost }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    emissionsSaved: {
      type: Number,
      required: true
    },
    moneySaved: {
      type: Number,
      required: true
    },
    upfrontCost: {
      type: Number,
      default: null
    }
  })
  
  const emit = defineEmits(['pledge'])
  
  const pledge = () => {
    emit('pledge', {
      title: props.title,
      emissionsSaved: props.emissionsSaved,
      moneySaved: props.moneySaved,
      upfrontCost: props.upfrontCost
    })
  }
  </script>