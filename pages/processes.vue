<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-forest-800 mb-8 text-center">Carbon Credit Lifecycle</h1>
      <p class="text-lg sm:text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
        Discover how KenyaCarbon transforms sustainable farming practices into valuable carbon credits, driving environmental impact and economic growth.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="index" 
          ref="stepRefs" 
          class="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
        >
          <div 
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
            @click="toggleStep(index)"
          >
            <img 
              :src="step.image" 
              :alt="step.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6 flex-grow">
              <div class="flex items-center mb-4">
                <div class="flex-shrink-0 h-10 w-10 bg-forest-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {{ index + 1 }}
                </div>
                <h2 class="text-xl font-semibold text-forest-800">{{ step.title }}</h2>
              </div>
              <p class="text-gray-700 mb-4">{{ step.description }}</p>
              <button 
                class="text-forest-600 hover:text-forest-700 focus:outline-none transition-colors duration-300"
                @click.stop="toggleStep(index)"
              >
                {{ expandedSteps[index] ? 'Show Less' : 'Learn More' }}
              </button>
            </div>
            <transition name="fade">
              <div v-if="expandedSteps[index]" class="bg-forest-50 p-6 border-t border-forest-100">
                <h3 class="text-lg font-semibold text-forest-700 mb-4">Key Components:</h3>
                <ul class="space-y-2">
                  <li v-for="point in step.points" :key="point" class="flex items-start">
                    <CheckCircleIcon class="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                    <span class="text-sm text-gray-700">{{ point }}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div class="mt-24 text-center">
        <h2 class="text-3xl font-bold text-forest-800 mb-8">Ready to Make an Impact?</h2>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-forest-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-700 transition-colors duration-300"
        >
          Get Started Today
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const steps = [
  {
    title: "Sustainable Farming",
    description: "Empower farmers with eco-friendly methods to reduce emissions and increase carbon sequestration.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    points: [
      "No-till farming techniques",
      "Crop rotation and diversification",
      "Cover crops for soil health",
      "Organic fertilizers",
      "Agroforestry practices"
    ]
  },
  {
    title: "Advanced Monitoring",
    description: "Utilize cutting-edge technology for accurate measurement and continuous monitoring of carbon impact.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    points: [
      "IoT sensors for real-time data",
      "High-resolution satellite imagery",
      "AI-powered data analysis",
      "Regular soil sampling",
      "Digital record-keeping"
    ]
  },
  {
    title: "Rigorous Verification",
    description: "Engage top-tier, independent verifiers to ensure compliance with the highest international standards.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    points: [
      "Accredited verification bodies",
      "Adherence to global standards",
      "Comprehensive on-site audits",
      "Extensive documentation review",
      "Official certifications"
    ]
  },
  {
    title: "Secure Credit Issuance",
    description: "Register verified credits with unique identifiers in recognized carbon registries.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    points: [
      "Unique serial numbers",
      "Blockchain-based registry",
      "Full transparency and traceability",
      "Double-counting prevention",
      "Regulatory compliance"
    ]
  },
  {
    title: "Advanced Marketplace",
    description: "Showcase verified credits on our state-of-the-art platform for seamless trading.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    points: [
      "Detailed project profiles",
      "Dynamic pricing",
      "Real-time availability updates",
      "Customizable bundling options",
      "Secure payment systems"
    ]
  },
  {
    title: "Efficient Transfers",
    description: "Facilitate smooth credit purchases and secure ownership transfers through our sophisticated infrastructure.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1611&q=80",
    points: [
      "Peer-to-peer transactions",
      "Smart contract automation",
      "Real-time registry updates",
      "Detailed transaction receipts",
      "KYC compliance"
    ]
  },
  {
    title: "Impact Reporting",
    description: "Generate in-depth reports on environmental and social impacts for valuable stakeholder insights.",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    points: [
      "Data-rich visual reports",
      "Community benefit highlights",
      "Detailed emissions metrics",
      "SDG alignment demonstration",
      "Customized corporate reporting"
    ]
  }
]

const stepRefs = ref([])
const expandedSteps = reactive(Array(steps.length).fill(false))

const toggleStep = (index) => {
  expandedSteps[index] = !expandedSteps[index]
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10')
        entry.target.classList.add('opacity-100', 'translate-y-0')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  stepRefs.value.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>