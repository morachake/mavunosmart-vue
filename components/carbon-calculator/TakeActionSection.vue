<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div class="text-center">
      <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
        <Hand class="h-8 w-8 text-green-600" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Take Action</h1>
      <p class="text-base sm:text-lg text-gray-600">REDUCE YOUR IMPACT</p>
    </div>

    <!-- Action Categories -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="activeCategory = category"
        class="px-4 py-2 rounded-md text-sm font-medium"
        :class="activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
      >
        {{ category }}
      </button>
      <button
        @click="showAssumptions = !showAssumptions"
        class="px-4 py-2 rounded-md text-sm font-medium bg-cyan-500 text-white hover:bg-cyan-600"
      >
        Critical Assumptions
      </button>
    </div>

    <!-- Vehicle Options -->
    <div v-if="activeCategory === 'Transportation'" class="space-y-6">
      <!-- More Efficient Vehicle -->
      <div class="bg-gray-50 rounded-lg p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 class="text-lg font-medium mb-2 sm:mb-0">More efficient vehicle</h3>
          <button 
            @click="pledgeVehicle('efficient')"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Pledge
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <p class="text-sm text-gray-600">Tons saved</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">2.19</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Dollars saved</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">$686</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Upfront cost</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">$2,000</p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              I will trade in one of my vehicles
            </label>
            <select 
              v-model="vehicleForm.current"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option>Vehicle 1</option>
              <option>Vehicle 2</option>
              <option>Vehicle 3</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Current MPG
              </label>
              <input 
                type="number" 
                v-model="vehicleForm.currentMpg"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                New MPG
              </label>
              <input 
                type="number" 
                v-model="vehicleForm.newMpg"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Annual miles
            </label>
            <input 
              type="number" 
              v-model="vehicleForm.annualMiles"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Sell price
              </label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <input 
                  type="number" 
                  v-model="vehicleForm.sellPrice"
                  class="w-full pl-7 border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Purchase price
              </label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <input 
                  type="number" 
                  v-model="vehicleForm.purchasePrice"
                  class="w-full pl-7 border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Electric Vehicle Option -->
      <div class="bg-gray-50 rounded-lg p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 class="text-lg font-medium mb-2 sm:mb-0">Purchase electric vehicle</h3>
          <button 
            @click="pledgeVehicle('electric')"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Pledge
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <p class="text-sm text-gray-600">Tons saved</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">6.93</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Dollars saved</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">$1,850</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Upfront cost</p>
            <p class="text-xl sm:text-2xl font-bold text-green-600">$15,000</p>
          </div>
        </div>

        <p class="text-sm text-green-600 mb-4">
          Eligible for $7,500 federal tax credit and additional state incentives
        </p>
      </div>

      <!-- Alternative Options -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ActionItem
          title="Telecommute to work"
          :emissions-saved="4.2"
          :money-saved="1200"
          @pledge="handlePledge"
        />
        <ActionItem
          title="Take public transportation"
          :emissions-saved="2.8"
          :money-saved="800"
          @pledge="handlePledge"
        />
        <ActionItem
          title="Practice eco-driving"
          :emissions-saved="0.8"
          :money-saved="300"
          @pledge="handlePledge"
        />
        <ActionItem
          title="Maintain vehicles regularly"
          :emissions-saved="0.4"
          :money-saved="200"
          @pledge="handlePledge"
        />
      </div>
    </div>

    <!-- Assumptions Modal -->
    <div v-if="showAssumptions" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">Critical Assumptions</h3>
          <button @click="showAssumptions = false" class="text-gray-500 hover:text-gray-700">
            <X class="h-5 w-5" />
          </button>
        </div>
        
        <div class="space-y-4 text-sm text-gray-600">
          <div>
            <p class="font-medium text-gray-900 mb-1">Price of gasoline:</p>
            <p>$3.50 per gallon</p>
          </div>
          
          <div>
            <p class="font-medium text-gray-900 mb-1">Well-to-pump emissions:</p>
            <p>20% of fossil fuel emissions. This includes emissions from the fuel used to find, extract, transport and refine crude oil into gasoline.</p>
          </div>
          
          <div>
            <p class="font-medium text-gray-900 mb-1">Vehicle manufacturing emissions:</p>
            <p>53 grams CO2e per mile (8 metric tons per vehicle / 150,000 miles lifespan)</p>
          </div>
          
          <div>
            <p class="font-medium text-gray-900 mb-1">Not included:</p>
            <p>Emissions from road construction and maintenance, and other government-related emissions.</p>
          </div>
          
          <div>
            <p class="font-medium text-gray-900 mb-1">Electric vehicles:</p>
            <p>Emissions calculations based on your local electricity grid mix. Federal tax credit of up to $7,500 available for qualifying vehicles.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pledged Actions Summary -->
    <div v-if="pledgedActions.length > 0" class="mt-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Your Pledged Actions</h2>
      <div class="bg-green-50 rounded-lg p-4 sm:p-6">
        <ul class="space-y-4">
          <li v-for="action in pledgedActions" :key="action.title" class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p class="font-medium text-green-800">{{ action.title }}</p>
              <p class="text-sm text-green-600">{{ action.emissionsSaved.toFixed(1) }} tons CO₂/year saved</p>
            </div>
            <p class="text-green-600 font-medium mt-2 sm:mt-0">${{ action.moneySaved }} saved/year</p>
          </li>
        </ul>
        
        <div class="mt-6 pt-6 border-t border-green-200">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div>
              <p class="text-sm text-green-600 mb-1">Total Emissions Reduction</p>
              <p class="text-xl sm:text-2xl font-bold text-green-600">{{ totalEmissionsSaved.toFixed(1) }} tons/year</p>
            </div>
            <div>
              <p class="text-sm text-green-600 mb-1">Total Money Saved</p>
              <p class="text-xl sm:text-2xl font-bold text-green-600">${{ totalMoneySaved.toFixed(0) }}/year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Hand, X } from 'lucide-vue-next'
import ActionItem from './ActionItem.vue'

const emit = defineEmits(['pledge'])

const categories = ['Transportation', 'Housing', 'Shopping']
const activeCategory = ref('Transportation')
const showAssumptions = ref(false)
const pledgedActions = ref([])

const vehicleForm = ref({
  current: 'Vehicle 1',
  currentMpg: 22,
  newMpg: 32,
  annualMiles: 14600,
  sellPrice: 10000,
  purchasePrice: 12000
})

const handlePledge = (action) => {
  pledgedActions.value.push(action)
  emit('pledge', action)
}

const pledgeVehicle = (type) => {
  let action = {
    title: '',
    emissionsSaved: 0,
    moneySaved: 0,
    upfrontCost: 0
  }

  if (type === 'efficient') {
    action = {
      title: 'Switch to more efficient vehicle',
      emissionsSaved: 2.19,
      moneySaved: 686,
      upfrontCost: 2000
    }
  } else if (type === 'electric') {
    action = {
      title: 'Switch to electric vehicle',
      emissionsSaved: 6.93,
      moneySaved: 1850,
      upfrontCost: 15000
    }
  }

  pledgedActions.value.push(action)
  emit('pledge', action)
}

const totalEmissionsSaved = computed(() => {
  return pledgedActions.value.reduce((total, action) => total + action.emissionsSaved, 0)
})

const totalMoneySaved = computed(() => {
  return pledgedActions.value.reduce((total, action) => total + action.moneySaved, 0)
})
</script>