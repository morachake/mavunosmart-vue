<template>
  <nav class="bg-forest-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold">MavunoSmart</NuxtLink>
        </div>
        <div class="flex space-x-4">
          <NuxtLink to="/" class="hover:bg-forest-700 px-3 py-2 rounded-md">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:bg-forest-700 px-3 py-2 rounded-md">About</NuxtLink>
          <NuxtLink to="/marketplace" class="hover:bg-forest-700 px-3 py-2 rounded-md">Marketplace</NuxtLink>
          <NuxtLink to="/contact" class="hover:bg-forest-700 px-3 py-2 rounded-md">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>