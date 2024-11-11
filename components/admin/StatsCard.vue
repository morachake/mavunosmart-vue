<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">{{ title }}</h3>
      <p class="text-3xl font-bold text-forest-600">{{ value }}</p>
      <p class="text-sm text-gray-500">{{ change }} from last period</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    value: String,
    change: String
  })
  </script>