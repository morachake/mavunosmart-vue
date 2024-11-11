<template>
    <div>
      <h2 class="text-2xl font-bold text-forest-700 mb-4">Recent Messages</h2>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul class="divide-y divide-gray-200">
          <li v-for="message in messages" :key="message.id" class="px-6 py-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-forest-600">{{ message.name }}</p>
                <p class="text-sm text-gray-500">{{ message.email }}</p>
              </div>
              <p class="text-sm text-gray-500">{{ message.date }}</p>
            </div>
            <p class="mt-2 text-sm text-gray-600">{{ message.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    messages: {
      type: Array,
      required: true
    }
  })
  </script>