<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <h1 class="text-3xl sm:text-4xl font-bold text-green-700 mb-6 sm:mb-8">About Mavuno Smart</h1>

    <div class="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-center">
      <div class="order-2 md:order-1">
        <img
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          alt="African farmer in a field"
          class="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
        />
      </div>
      <div class="order-1 md:order-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-green-600 mb-3 sm:mb-4">Our Mission</h2>
        <p class="text-gray-700 mb-4 sm:mb-6">
          At Mavuno Smart, we empower smallholder farmers in Africa with
          innovative tools to farm sustainably and generate valuable carbon
          credits. Our mission is to bridge the gap between these farmers and
          global carbon markets, ensuring transparency, quality, and meaningful
          impact.
        </p>

        <h2 class="text-xl sm:text-2xl font-semibold text-green-600 mb-3 sm:mb-4">
          Why It Matters
        </h2>
        <ul class="space-y-3 sm:space-y-4 text-gray-700">
          <li class="flex items-start">
            <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
            <span class="text-sm sm:text-base">
              Transforming the economic landscape for over 2 billion
              smallholder farmers by providing access to the carbon credit
              market
            </span>
          </li>
          <li class="flex items-start">
            <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
            <span class="text-sm sm:text-base">
              Contributing to the United Nations Sustainable Development
              Goals
            </span>
          </li>
          <li class="flex items-start">
            <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
            <span class="text-sm sm:text-base">
              Empowering farmers to combat climate change through sustainable
              practices
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl font-semibold text-green-600 mb-6 sm:mb-8 text-center">
        Our Impact
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 class="text-lg sm:text-xl font-semibold text-green-600 mb-2">
            Farmers Supported
          </h3>
          <p class="text-3xl sm:text-4xl font-bold text-green-700 mb-2">2 billion+</p>
          <p class="text-sm sm:text-base text-gray-600">Smallholder farmers worldwide</p>
        </div>
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 class="text-lg sm:text-xl font-semibold text-green-600 mb-2">
            Carbon Credits Generated
          </h3>
          <p class="text-3xl sm:text-4xl font-bold text-green-700 mb-2">100,000+ tons</p>
          <p class="text-sm sm:text-base text-gray-600">Of CO2 equivalent</p>
        </div>
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 class="text-lg sm:text-xl font-semibold text-green-600 mb-2">
            Technology Integration
          </h3>
          <p class="text-3xl sm:text-4xl font-bold text-green-700 mb-2">3-in-1</p>
          <p class="text-sm sm:text-base text-gray-600">AI, Blockchain, and Remote Sensing</p>
        </div>
      </div>
    </div>

    <div class="mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl font-semibold text-green-600 mb-6 sm:mb-8 text-center">
        Our Services
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="service in services" :key="service.id" class="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-3 sm:mb-4">
            <component :is="service.icon" class="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mr-3" />
            <h3 class="text-lg sm:text-xl font-semibold text-green-600">{{ service.title }}</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-700">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 p-6 sm:p-8 rounded-lg">
      <h2 class="text-2xl sm:text-3xl font-semibold text-green-600 mb-6 sm:mb-8 text-center">
        Our Technology
      </h2>
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h3 class="text-xl sm:text-2xl font-semibold text-green-600 mb-3 sm:mb-4">Innovative Solutions</h3>
          <p class="text-sm sm:text-base text-gray-700 mb-4">
            Our cutting-edge technology combines AI, blockchain, and remote sensing to revolutionize sustainable farming and carbon credit generation. We provide:
          </p>
          <ul class="space-y-2 text-sm sm:text-base text-gray-700">
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
              <span>Real-time crop monitoring and analysis</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
              <span>Secure and transparent carbon credit transactions</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0" />
              <span>Data-driven insights for optimal farming practices</span>
            </li>
          </ul>
        </div>
        <div class="mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mavuno Smart Technology"
            class="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, LightBulbIcon, CurrencyDollarIcon, ChartBarIcon, CloudIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

const services = [
  {
    id: 1,
    title: 'Sustainable Farming Consultancy',
    description: 'Expert guidance on implementing sustainable farming practices that maximize crop yields and generate carbon credits.',
    icon: LightBulbIcon,
  },
  {
    id: 2,
    title: 'Carbon Credit Management',
    description: 'End-to-end support for generating, verifying, and selling carbon credits in the global marketplace.',
    icon: CurrencyDollarIcon,
  },
  {
    id: 3,
    title: 'Data Analytics and Insights',
    description: 'Advanced analytics and reporting to help farmers and businesses make data-driven decisions.',
    icon: ChartBarIcon,
  },
  {
    id: 4,
    title: 'Technology Licensing',
    description: 'License our innovative AI, blockchain, and remote sensing technologies for use in your own agricultural or environmental projects.',
    icon: CloudIcon,
  },
  {
    id: 5,
    title: 'Training and Capacity Building',
    description: 'Comprehensive training programs to empower farmers and organizations with the knowledge and skills for sustainable agriculture.',
    icon: UserGroupIcon,
  },
];
</script>