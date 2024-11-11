<template>
  <section class="py-16 bg-green-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-green-700 mb-6">See Our Impact</h2>
          <p class="text-gray-700 mb-6">
            Watch how forest conservation and carbon credit programs are making
            a difference in communities and ecosystems around the world.
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
              <span>Real-time satellite monitoring</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
              <span>Community engagement programs</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
              <span>Transparent verification process</span>
            </li>
          </ul>
        </div>

        <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-white">
          <svg
            class="w-full h-full"
            viewBox="0 0 400 225"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Sky -->
            <rect width="400" height="225" fill="#87CEEB" />

            <!-- Sun -->
            <circle cx="50" cy="50" r="20" fill="#FFD700">
              <animate
                attributeName="cy"
                values="50;30;50"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>

            <!-- Ground -->
            <rect y="150" width="400" height="75" fill="#8B4513" />

            <!-- Trees -->
            <g v-for="(tree, index) in trees" :key="index">
              <path :d="tree.path" :fill="tree.fill">
                <animate
                  attributeName="d"
                  :values="tree.animation"
                  dur="5s"
                  :begin="`${index * 0.5}s`"
                  fill="freeze"
                />
              </path>
              <rect
                :x="tree.trunkX"
                :y="tree.trunkY"
                width="10"
                height="30"
                fill="#8B4513"
              >
                <animate
                  attributeName="height"
                  values="0;30"
                  dur="5s"
                  :begin="`${index * 0.5}s`"
                  fill="freeze"
                />
              </rect>
            </g>

            <!-- Carbon Credit Symbols -->
            <g v-for="(symbol, index) in carbonSymbols" :key="index">
              <text
                :x="symbol.x"
                :y="symbol.y"
                font-family="Arial"
                font-size="20"
                fill="#4CAF50"
              >
                CO₂
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="3s"
                  :begin="`${index * 1}s`"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 -50"
                  dur="3s"
                  :begin="`${index * 1}s`"
                  repeatCount="indefinite"
                />
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/solid';

const trees = ref([
  {
    path: 'M100,180 L100,180 L100,180 Z',
    fill: '#228B22',
    animation: 'M100,180 L100,180 L100,180 Z; M70,180 L100,120 L130,180 Z; M60,180 L100,100 L140,180 Z',
    trunkX: 95,
    trunkY: 180
  },
  {
    path: 'M200,180 L200,180 L200,180 Z',
    fill: '#32CD32',
    animation: 'M200,180 L200,180 L200,180 Z; M170,180 L200,120 L230,180 Z; M160,180 L200,100 L240,180 Z',
    trunkX: 195,
    trunkY: 180
  },
  {
    path: 'M300,180 L300,180 L300,180 Z',
    fill: '#228B22',
    animation: 'M300,180 L300,180 L300,180 Z; M270,180 L300,120 L330,180 Z; M260,180 L300,100 L340,180 Z',
    trunkX: 295,
    trunkY: 180
  }
]);

const carbonSymbols = ref([
  { x: 80, y: 100 },
  { x: 180, y: 80 },
  { x: 280, y: 90 }
]);
</script>