<template>
    <div class="min-h-screen bg-white">
      <!-- Carousel -->
      <Carousel :items="carouselItems" />
  
      <!-- Navigation Icons -->
      <nav class="border-b border-gray-200 bg-white sticky top-0 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-center h-20">
            <div class="flex space-x-8 items-center">
              <button 
                v-for="(item, index) in navItems" 
                :key="index"
                @click="currentSection = item.id"
                class="flex flex-col items-center group relative"
                :class="currentSection === item.id ? 'text-green-600' : 'text-gray-500 hover:text-green-600'"
              >
                <component 
                  :is="item.icon" 
                  class="h-6 w-6 mb-1"
                />
                <span class="text-xs font-medium">{{ item.name }}</span>
                <div 
                  v-if="currentSection === item.id"
                  class="absolute -bottom-px w-full h-0.5 bg-green-600"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-8">
        <GetStartedSection v-if="currentSection === 'get-started'" @update:data="updateGetStartedData" />
        <TravelSection v-if="currentSection === 'travel'" @update:data="updateTravelData" />
        <HomeSection v-if="currentSection === 'home'" @update:data="updateHomeData" />
        <FoodSection v-if="currentSection === 'food'" @update:data="updateFoodData" />
        <ShoppingSection v-if="currentSection === 'shopping'" @update:data="updateShoppingData" />
        <FootprintSection 
          v-if="currentSection === 'footprint'" 
          :totalEmissions="calculateTotalEmissions()"
          :breakdown="emissionsBreakdown"
        />
        <TakeActionSection 
          v-if="currentSection === 'action'" 
          :totalEmissions="calculateTotalEmissions()"
          @pledge="handlePledge"
        />
  
        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-8">
          <button
            v-if="currentSectionIndex > 0"
            @click="navigateToPrevious"
            class="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            v-if="currentSectionIndex < navItems.length - 1"
            @click="navigateToNext"
            class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ml-auto"
          >
            Next
          </button>
        </div>
  
        <!-- Progress Summary -->
        <div class="mt-8 grid grid-cols-3 gap-4 text-center border-t pt-4">
          <div>
            <h4 class="text-sm text-gray-600">Your Total Footprint</h4>
            <p class="text-xl font-bold text-green-600">{{ calculateTotalEmissions().toFixed(1) }} tons CO₂/year</p>
          </div>
          <div>
            <h4 class="text-sm text-gray-600">Similar Households</h4>
            <p class="text-xl font-bold text-green-600">{{ averageEmissions.toFixed(1) }} tons CO₂/year</p>
          </div>
          <div>
            <h4 class="text-sm text-gray-600">Better than Average</h4>
            <p class="text-xl font-bold text-green-600">{{ calculatePercentageBetter() }}%</p>
          </div>
        </div>
        <EmissionsInfo/>
      </main>
     
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { 
    Leaf, 
    Plane, 
    Home, 
    Apple, 
    ShoppingCart, 
    Footprints, 
    Hand 
  } from 'lucide-vue-next'
  
  import Carousel from '@/components/Carousel.vue'
  import EmissionsInfo from '@/components/carbon-calculator/EmissionsInfo.vue'
  import GetStartedSection from '@/components/carbon-calculator/GetStartedSection.vue'
  import TravelSection from '@/components/carbon-calculator/TravelSection.vue'
  import HomeSection from '@/components/carbon-calculator/HomeSection.vue'
  import FoodSection from '@/components/carbon-calculator/FoodSection.vue'
  import ShoppingSection from '@/components/carbon-calculator/ShoppingSection.vue'
  import FootprintSection from '@/components/carbon-calculator/FootprintSection.vue'
  import TakeActionSection from '@/components/carbon-calculator/TakeActionSection.vue'
  
  const navItems = [
    { id: 'get-started', name: 'Get Started', icon: Leaf },
    { id: 'travel', name: 'Travel', icon: Plane },
    { id: 'home', name: 'Home', icon: Home },
    { id: 'food', name: 'Food', icon: Apple },
    { id: 'shopping', name: 'Shopping', icon: ShoppingCart },
    { id: 'footprint', name: 'Your Footprint', icon: Footprints },
    { id: 'action', name: 'Take Action', icon: Hand }
  ]
  
  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Understand Your Carbon Footprint',
      description: 'Learn how your daily activities impact the environment.'
    },
    {
      image: 'https://images.unsplash.com/photo-1516900448138-898720b936c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Take Action for a Greener Future',
      description: 'Discover simple ways to reduce your carbon emissions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464938769256-c01dc8ef1325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Track Your Progress',
      description: 'See the positive impact of your eco-friendly choices.'
    }
  ]
  
  const currentSection = ref('get-started')
  const currentSectionIndex = computed(() => 
    navItems.findIndex(item => item.id === currentSection.value)
  )
  
  const averageEmissions = ref(51) // Average household emissions
  
  // Data storage for each section
  const calculatorData = ref({
    getStarted: {
      location: '',
      householdSize: 2.5,
      income: 50000
    },
    travel: {
      carMiles: 0,
      publicTransit: 0,
      flights: 0
    },
    home: {
      electricity: 0,
      naturalGas: 0,
      heating: 0
    },
    food: {
      diet: 'average',
      meatConsumption: 1,
      dairyConsumption: 1
    },
    shopping: {
      goodsPurchased: 0,
      servicesPurchased: 0
    }
  })
  
  // Update functions for each section
  const updateGetStartedData = (data) => {
    calculatorData.value.getStarted = data
  }
  
  const updateTravelData = (data) => {
    calculatorData.value.travel = data
  }
  
  const updateHomeData = (data) => {
    calculatorData.value.home = data
  }
  
  const updateFoodData = (data) => {
    calculatorData.value.food = data
  }
  
  const updateShoppingData = (data) => {
    calculatorData.value.shopping = data
  }
  
  // Navigation functions
  const navigateToNext = () => {
    const nextIndex = currentSectionIndex.value + 1
    if (nextIndex < navItems.length) {
      currentSection.value = navItems[nextIndex].id
    }
  }
  
  const navigateToPrevious = () => {
    const prevIndex = currentSectionIndex.value - 1
    if (prevIndex >= 0) {
      currentSection.value = navItems[prevIndex].id
    }
  }
  
  // Calculation functions
  const calculateTotalEmissions = () => {
    const travelEmissions = calculatorData.value.travel.carMiles * 0.404 +
                           calculatorData.value.travel.publicTransit * 0.14 +
                           calculatorData.value.travel.flights * 0.9
  
    const homeEmissions = calculatorData.value.home.electricity * 0.92 +
                         calculatorData.value.home.naturalGas * 0.18 +
                         calculatorData.value.home.heating * 0.23
  
    const foodEmissions = {
      'vegan': 2.5,
      'vegetarian': 3.3,
      'average': 4.7,
      'meat-heavy': 7.2
    }[calculatorData.value.food.diet] || 4.7
  
    const shoppingEmissions = calculatorData.value.shopping.goodsPurchased * 0.0005 +
                            calculatorData.value.shopping.servicesPurchased * 0.0004
  
    return travelEmissions + homeEmissions + foodEmissions + shoppingEmissions
  }
  
  const emissionsBreakdown = computed(() => {
    const total = calculateTotalEmissions()
    return {
      travel: (calculatorData.value.travel.carMiles * 0.404 +
               calculatorData.value.travel.publicTransit * 0.14 +
               calculatorData.value.travel.flights * 0.9) / total * 100,
      home: (calculatorData.value.home.electricity * 0.92 +
             calculatorData.value.home.naturalGas * 0.18 +
             calculatorData.value.home.heating * 0.23) / total * 100,
      food: ({
        'vegan': 2.5,
        'vegetarian': 3.3,
        'average': 4.7,
        'meat-heavy': 7.2
      }[calculatorData.value.food.diet] || 4.7) / total * 100,
      shopping: (calculatorData.value.shopping.goodsPurchased * 0.0005 +
                 calculatorData.value.shopping.servicesPurchased * 0.0004) / total * 100
    }
  })
  
  const calculatePercentageBetter = () => {
    const total = calculateTotalEmissions()
    return Math.max(0, ((averageEmissions.value - total) / averageEmissions.value * 100).toFixed(1))
  }
  
  const handlePledge = (pledgeData) => {
    // Handle pledge actions
    console.log('Pledge made:', pledgeData)
  }
  </script>
  
  <style scoped>
  .nav-indicator {
    transition: all 0.2s ease-in-out;
  }
  </style>