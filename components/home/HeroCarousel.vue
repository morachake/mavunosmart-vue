<template>
  <div class="relative h-[600px] overflow-hidden">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :slides-per-view="1"
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      class="h-full"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="relative h-full">
          <img
            :src="slide.image"
            class="absolute inset-0 w-full h-full object-cover"
            :alt="slide.title"
            crossorigin="anonymous"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50">
            <div
              class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
            >
              <div class="text-white max-w-2xl">
                <h1 class="text-5xl font-bold mb-6">{{ slide.title }}</h1>
                <p class="text-xl mb-8">{{ slide.description }}</p>
                <NuxtLink
                  :to="slide.link"
                  class="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 inline-block transition duration-300"
                >
                  {{ slide.cta }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Empowering African Farmers for a Sustainable Future',
    description:
      'Leveraging AI, blockchain, and remote sensing to provide sustainable farming tools and generate high-quality carbon credits.',
    cta: 'Join Waitlist',
    link: '/contact',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Transform Farming Practices',
    description:
      'Equip farmers with tools to farm sustainably, profitably, and resiliently while generating carbon credits.',
    cta: 'Learn More',
    link: '/about',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    title: 'Blockchain-Verified Carbon Credits',
    description:
      'Every tonne of sequestered carbon is accurately measured and securely traded on our platform.',
    cta: 'View Marketplace',
    link: '/marketplace',
  },
];

onMounted(() => {
  console.log('HeroSlider component mounted');
});
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/effect-fade';
</style>
