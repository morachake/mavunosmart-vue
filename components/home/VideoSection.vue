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

        <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            class="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/yXcY_8X_zN0"
            title="The Role of Forests in Climate Change and Carbon Credits"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid';
</script>
