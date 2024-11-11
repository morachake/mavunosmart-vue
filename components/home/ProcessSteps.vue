<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-forest-700 mb-12">Features of Our Platform</h2>
      
      <div class="relative">
        <div class="absolute top-1/2 left-0 w-full h-1 bg-forest-200 -translate-y-1/2 hidden md:block"></div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * index"
            class="relative bg-white p-6 rounded-lg shadow-md"
          >
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-xl">
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-xl font-semibold text-forest-600 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChartBarIcon, ShieldCheckIcon, BellAlertIcon, DocumentChartBarIcon } from '@heroicons/vue/24/outline';

const features = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: 'Monitoring',
    description: 'AI-powered analytics for tracking crop yields, soil health, and carbon emissions'
  },
  {
    id: 2,
    icon: DocumentChartBarIcon,
    title: 'Reporting',
    description: 'Detailed reports to help optimize practices and track progress'
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    title: 'Verification',
    description: 'Blockchain-based system for transparent and secure carbon credit records'
  },
  {
    id: 4,
    icon: BellAlertIcon,
    title: 'Alerts',
    description: 'Real-time notifications for weather changes, pests, and irrigation needs'
  }
];
</script>