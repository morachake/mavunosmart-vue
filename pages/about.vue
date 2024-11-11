<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-green-700 mb-8">About Mavuno Smart</h1>

    <div class="grid md:grid-cols-2 gap-12 mb-16 items-center">
      <div>
        <img
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          alt="African farmer in a field"
          class="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
        />
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p class="text-gray-700 mb-6">
          At Mavuno Smart, we empower smallholder farmers in Africa with
          innovative tools to farm sustainably and generate valuable carbon
          credits. Our mission is to bridge the gap between these farmers and
          global carbon markets, ensuring transparency, quality, and meaningful
          impact.
        </p>

        <h2 class="text-2xl font-semibold text-green-600 mb-4">
          Why It Matters
        </h2>
        <ul class="space-y-4 text-gray-700">
          <li class="flex items-start">
            <CheckIcon class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <span
              >Transforming the economic landscape for over 2 billion
              smallholder farmers by providing access to the carbon credit
              market</span
            >
          </li>
          <li class="flex items-start">
            <CheckIcon class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <span
              >Contributing to the United Nations Sustainable Development
              Goals</span
            >
          </li>
          <li class="flex items-start">
            <CheckIcon class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <span
              >Empowering farmers to combat climate change through sustainable
              practices</span
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-3xl font-semibold text-green-600 mb-8 text-center">
        Our Impact
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold text-green-600 mb-2">
            Farmers Supported
          </h3>
          <p class="text-4xl font-bold text-green-700 mb-2">2 billion+</p>
          <p class="text-gray-600">Smallholder farmers worldwide</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold text-green-600 mb-2">
            Carbon Credits Generated
          </h3>
          <p class="text-4xl font-bold text-green-700 mb-2">100,000+ tons</p>
          <p class="text-gray-600">Of CO2 equivalent</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold text-green-600 mb-2">
            Technology Integration
          </h3>
          <p class="text-4xl font-bold text-green-700 mb-2">3-in-1</p>
          <p class="text-gray-600">AI, Blockchain, and Remote Sensing</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 p-8 rounded-lg">
      <h2 class="text-3xl font-semibold text-green-600 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div class="space-y-6">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-green-600 mb-2">
            {{ faq.question }}
          </h3>
          <p class="text-gray-700">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid';

const faqs = [
  {
    id: 1,
    question: 'What are carbon credits and how do they work?',
    answer:
      'Carbon credits are certificates representing the reduction of one metric ton of CO2 or equivalent greenhouse gases. Companies can offset their emissions by purchasing these credits. We generate credits through verified sustainable farming practices.',
  },
  {
    id: 2,
    question: 'How do you ensure quality and transparency?',
    answer:
      'We utilize blockchain technology to ensure transparency and security. Each credit is recorded on the blockchain, providing an immutable record. Third-party auditors verify our processes to meet international standards.',
  },
  {
    id: 3,
    question: 'What impact do purchases have on farmers?',
    answer:
      'Credit purchases directly support African smallholder farmers, helping them invest in sustainable practices, improve yields, and enhance livelihoods while contributing to global climate change efforts.',
  },
  {
    id: 4,
    question: 'How does your technology benefit farmers?',
    answer:
      'Our integrated AI, blockchain, and remote sensing technologies provide farmers with real-time insights, secure transactions, and accurate monitoring of their sustainable practices. This empowers them to make informed decisions and maximize their carbon credit potential.',
  },
];
</script>
