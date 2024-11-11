<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-green-700 mb-8">
      Carbon Credits Marketplace
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="credit in credits"
        :key="credit.id"
        class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
      >
        <div class="h-48 overflow-hidden">
          <img
            :src="credit.image"
            :alt="credit.name"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-semibold text-green-600 mb-2">
            {{ credit.name }}
          </h3>
          <p class="text-gray-600 mb-4">{{ credit.description }}</p>
          <div class="space-y-2 mb-4">
            <p class="text-sm text-gray-500 flex items-center">
              <MapPinIcon class="h-5 w-5 mr-2 text-green-500" />
              {{ credit.location }}
            </p>
            <p class="text-sm text-gray-500 flex items-center">
              <ScaleIcon class="h-5 w-5 mr-2 text-green-500" />
              {{ credit.quantity }} tons available
            </p>
            <p class="text-sm text-gray-500 flex items-center">
              <CalendarIcon class="h-5 w-5 mr-2 text-green-500" />
              Verified:
              {{ new Date(credit.verificationDate).toLocaleDateString() }}
            </p>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <span class="text-2xl font-bold text-green-700"
            >${{ credit.price }}</span
          >
          <button
            @click="purchaseCredit(credit)"
            class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapPinIcon, CalendarIcon, ScaleIcon } from '@heroicons/vue/24/outline';

export default {
  data() {
    return {
      credits: [
        {
          id: 1,
          name: 'Mau Forest Credits',
          description:
            'Carbon credits from conservation efforts in Mau Forest region. These credits support biodiversity and local communities.',
          price: 25,
          quantity: 1000,
          location: 'Mau Forest, Kenya',
          verificationDate: '2024-03-15',
          image:
            'https://images.unsplash.com/photo-1586967440896-a8f1e76d7b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
        {
          id: 2,
          name: 'Mt. Kenya Forest Credits',
          description:
            "Verified carbon credits from Mt. Kenya forest preservation. Help protect one of Africa's most iconic landscapes.",
          price: 30,
          quantity: 750,
          location: 'Mt. Kenya, Kenya',
          verificationDate: '2024-02-28',
          image:
            'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
        },
        {
          id: 3,
          name: 'Coastal Mangrove Credits',
          description:
            'Carbon credits from coastal mangrove conservation. Support crucial ecosystems that protect coastlines and marine life.',
          price: 28,
          quantity: 500,
          location: 'Coastal Region, Kenya',
          verificationDate: '2024-04-01',
          image:
            'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
        },
        {
          id: 4,
          name: 'Tsavo Conservation Credits',
          description:
            "Carbon credits from Tsavo National Park conservation efforts. Contribute to protecting Kenya's largest national park and its diverse wildlife.",
          price: 27,
          quantity: 800,
          location: 'Tsavo National Park, Kenya',
          verificationDate: '2024-05-10',
          image:
            'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
        },
        {
          id: 5,
          name: 'Aberdare Forest Credits',
          description:
            'Carbon credits from the Aberdare Forest conservation project. Help preserve this vital water catchment area and unique ecosystem.',
          price: 29,
          quantity: 600,
          location: 'Aberdare National Park, Kenya',
          verificationDate: '2024-06-20',
          image:
            'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        },
        {
          id: 6,
          name: 'Lake Nakuru Basin Credits',
          description:
            'Carbon credits from conservation efforts around Lake Nakuru. Support the protection of this unique alkaline lake and its famous flamingo population.',
          price: 26,
          quantity: 700,
          location: 'Lake Nakuru, Kenya',
          verificationDate: '2024-07-05',
          image:
            'https://images.unsplash.com/photo-1516260268-8b7fcfac7d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        },
      ],
    };
  },
  methods: {
    purchaseCredit(credit) {
      alert(`Processing purchase for ${credit.name} at $${credit.price}`);
    },
  },
  components: {
    MapPinIcon,
    CalendarIcon,
    ScaleIcon,
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
