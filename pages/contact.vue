<template>
  <div>
    <!-- Hero Section with Swiper -->
    <div class="relative h-[400px] overflow-hidden">
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
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-forest-700 mb-8">Get in Touch</h2>
      
      <div class="mb-12">
        <p class="text-lg text-gray-700 mb-4">
          At MavunoSmart, we&apos;re committed to empowering African farmers and contributing to global sustainability efforts. Whether you&apos;re a farmer interested in our program, a business looking to offset your carbon footprint, or simply want to learn more about our mission, we&apos;re here to help.
        </p>
        <p class="text-lg text-gray-700">
          Reach out to us using the form below or through our contact information. We look forward to connecting with you and exploring how we can work together towards a greener future.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <form class="space-y-6 bg-green-50 p-6 rounded-lg shadow-md">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500" />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500" />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"></textarea>
            </div>
            
            <button type="submit" class="bg-forest-600 text-white px-6 py-2 rounded-md hover:bg-forest-700 transition duration-300 ease-in-out transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-forest-600">
            <h2 class="text-2xl font-semibold text-forest-600 mb-4">Contact Information</h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-gray-700">Address</h3>
                <p class="text-gray-600">123 Green Street, Nairobi, Kenya</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-700">Email</h3>
                <p class="text-gray-600">info@mavunosmart.com</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-700">Phone</h3>
                <p class="text-gray-600">+254 700 123456</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 bg-forest-50 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-forest-600 mb-4">Our Office Hours</h2>
            <ul class="space-y-2 text-gray-700">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQs Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-forest-700 mb-8">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-forest-600 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
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
    title: 'Contact MavunoSmart',
    description:
      'Get in touch with us to learn more about our sustainable farming initiatives and carbon credit program.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'We\'re Here to Help',
    description:
      'Have questions about sustainable farming or our carbon credit marketplace? Our team is ready to assist you.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    title: 'Join Our Mission',
    description:
      'Connect with us to be part of the sustainable agriculture revolution in Africa.',
  },
];

const faqs = [
  {
    question: 'What is MavunoSmart?',
    answer: 'MavunoSmart is a platform that empowers African farmers to implement sustainable farming practices and generate carbon credits. We connect these farmers with the global carbon credit marketplace, contributing to climate change mitigation efforts.'
  },
  {
    question: 'How can I participate as a farmer?',
    answer: "If you're a farmer interested in participating, please reach out to us using the contact form. We'll guide you through the process of implementing sustainable practices and generating carbon credits."
  },
  {
    question: 'How can businesses purchase carbon credits?',
    answer: 'Businesses can purchase carbon credits through our marketplace. Contact us for more information on available credits and the purchasing process.'
  },
  {
    question: 'What sustainable practices do you promote?',
    answer: 'We promote a range of sustainable practices including agroforestry, conservation agriculture, and improved crop management. These practices help sequester carbon and improve soil health.'
  }
];

onMounted(() => {
  console.log('Contact page component mounted');
});
</script>

<style>
@import 'swiper/css';
@import 'swiper/css/effect-fade';
</style>