<!-- components/TheFooter.vue -->
<template>
    <footer class="bg-forest-700 text-white py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">KenyaCarbon</h3>
            <p>Empowering sustainable farming through carbon credits</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="hover:text-green-300 transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/marketplace" class="hover:text-green-300 transition-colors">Marketplace</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-green-300 transition-colors">Contact</NuxtLink></li>
              <li><NuxtLink to="/processes" class="hover:text-green-300 transition-colors">Our Processes</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@kenyacarbon.com</p>
            <p>Phone: +254 700 000000</p>
          </div>
        </div>
        <div class="mt-8 text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} KenyaCarbon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No additional script needed for this component
  </script>