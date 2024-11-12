<template>
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <div class="relative h-64 sm:h-80 md:h-96">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div class="text-center text-white p-4">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{{ item.title }}</h2>
                <p class="text-sm sm:text-base md:text-lg">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Navigation arrows -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Previous slide"
      >
        <ChevronLeft class="w-6 h-6 text-gray-800" />
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Next slide"
      >
        <ChevronRight class="w-6 h-6 text-gray-800" />
      </button>
  
      <!-- Slide indicators -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button
          v-for="(_, index) in items"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          :class="index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    autoplayInterval: {
      type: Number,
      default: 5000
    }
  })
  
  const currentIndex = ref(0)
  let autoplayTimer
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length
  }
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
  }
  
  const goToSlide = (index) => {
    currentIndex.value = index
  }
  
  const startAutoplay = () => {
    autoplayTimer = setInterval(nextSlide, props.autoplayInterval)
  }
  
  const stopAutoplay = () => {
    clearInterval(autoplayTimer)
  }
  
  onMounted(() => {
    startAutoplay()
  })
  
  onUnmounted(() => {
    stopAutoplay()
  })
  </script>