<template>
  <main>
    <HeroCarousel />

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-green-700 mb-12">
          What We Do
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <component
              :is="service.icon"
              class="w-12 h-12 text-green-600 mb-4"
            />
            <h3 class="text-2xl font-semibold text-green-600 mb-4">
              {{ service.title }}
            </h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-green-700 mb-12">
          Our Process
        </h2>
        <ProcessSteps />
      </div>
    </section>

    <VideoSection />

    <section class="bg-green-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-green-700 mb-12">
          Latest Blog Posts
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <NuxtLink
            v-for="post in recentPosts"
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              :src="post.image"
              class="w-full h-48 object-cover"
              :alt="post.title"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-green-600 mb-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>{{ post.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ post.readTime }} min read</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  ChartBarIcon,
  GlobeAltIcon,
  ChartPieIcon,
} from '@heroicons/vue/24/outline';
import HeroCarousel from '@/components/home/HeroCarousel.vue';
import ProcessSteps from '@/components/home/ProcessSteps.vue';
import VideoSection from '@/components/home/VideoSection.vue';

const services = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: 'Carbon Credit Trading',
    description:
      'Connect farmers with carbon credit buyers through our transparent marketplace.',
  },
  {
    id: 2,
    icon: GlobeAltIcon,
    title: 'Forest Monitoring',
    description:
      'Use advanced ML models to track and verify forest conservation efforts.',
  },
  {
    id: 3,
    icon: ChartPieIcon,
    title: 'Impact Analysis',
    description:
      'Measure and report the environmental impact of conservation projects.',
  },
];

const recentPosts = [
  {
    id: 1,
    title: 'The Impact of Forest Conservation',
    slug: 'impact-of-forest-conservation',
    excerpt:
      "How our carbon credit program is helping preserve Kenya's forests.",
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'Apr 3, 2024',
    readTime: 5,
  },
  {
    id: 2,
    title: 'Technology in Carbon Credit Verification',
    slug: 'technology-carbon-credit-verification',
    excerpt: 'Using ML and satellite data to ensure accurate measurements.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    date: 'Apr 2, 2024',
    readTime: 4,
  },
  {
    id: 3,
    title: 'Community Success Stories',
    slug: 'community-success-stories',
    excerpt: 'How local communities benefit from carbon credit trading.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: 'Apr 1, 2024',
    readTime: 6,
  },
];
</script>
