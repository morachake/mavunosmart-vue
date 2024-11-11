<template>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button @click="logout" class="text-red-600 hover:text-red-700">
          Logout
        </button>
      </div>
    </header>
  </template>
  
  <script setup>
  const emit = defineEmits(['logout'])
  
  const logout = () => {
    emit('logout')
  }
  </script>