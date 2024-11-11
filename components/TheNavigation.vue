<template>
  <nav class="bg-forest-600 text-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img src="https://www.mavunosmart.org/assets/images/logo/logo-white.png" alt="MavunoSmart Logo" class="h-8 w-auto" />
            <!-- <span class="text-xl font-bold">MavunoSmart</span> -->
          </NuxtLink>
        </div>
        <div class="hidden md:flex space-x-4">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" 
                    class="relative overflow-hidden px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    active-class="bg-forest-700">
            {{ item.name }}
            <transition name="slide-up">
              <div v-if="$route.path === item.path" class="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
            </transition>
          </NuxtLink>
        </div>
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none" aria-label="Toggle mobile menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path"
                    class="block hover:bg-forest-700 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    active-class="bg-forest-700">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blog' }

]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isActive = computed(() => (path) => route.path === path)
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.router-link-active {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>