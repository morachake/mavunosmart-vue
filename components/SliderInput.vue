<template>
    <div>
      <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
        {{ label }}
      </label>
      <div class="flex items-center space-x-4">
        <input
          :id="id"
          type="range"
          :min="min"
          :max="max"
          v-model="localValue"
          @input="updateValue"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        >
        <span class="text-sm font-medium text-gray-700 w-12 text-right">{{ localValue }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
    },
  })
  
  const emit = defineEmits(['update:modelValue', 'input'])
  
  const id = `slider-${Math.random().toString(36).substr(2, 9)}`
  const localValue = ref(props.modelValue)
  
  watch(() => props.modelValue, (newValue) => {
    localValue.value = newValue
  })
  
  const updateValue = () => {
    emit('update:modelValue', localValue.value)
    emit('input')
  }
  </script>
  
  <style scoped>
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #10B981;
    cursor: pointer;
    border-radius: 50%;
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #10B981;
    cursor: pointer;
    border-radius: 50%;
  }
  </style>