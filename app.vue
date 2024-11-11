<template>
  <div class="min-h-screen bg-gray-50">
    <TheNavigation />
    <NuxtPage />
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
              <li><NuxtLink to="/about">About Us</NuxtLink></li>
              <li><NuxtLink to="/marketplace">Marketplace</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@kenyacarbon.com</p>
            <p>Phone: +254 700 000000</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>