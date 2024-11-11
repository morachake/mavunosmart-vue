<template>
  <aside class="w-64 bg-forest-800 text-white h-screen fixed left-0 top-0 overflow-y-auto z-10">
    <div class="p-4">
      <h1 class="text-2xl font-bold">Mavuno Smart</h1>
    </div>
    <nav class="mt-6">
      <a
        v-for="item in menuItems"
        :key="item.name"
        :href="item.href"
        :class="[
          'flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200',
          item.current ? 'bg-forest-700 text-white' : 'text-forest-100 hover:bg-forest-700 hover:text-white'
        ]"
      >
        <component :is="item.icon" class="mr-3 h-5 w-5" aria-hidden="true" />
        {{ item.name }}
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { 
  HomeIcon, 
  ChartBarIcon, 
  CreditCardIcon, 
  CogIcon, 
  InboxIcon, 
  UserIcon 
} from '@heroicons/vue/24/outline'

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon, current: false },
  { name: 'Carbon Credits', href: '/admin/carbon-credits', icon: CreditCardIcon, current: false },
  { name: 'Messages', href: '/admin/messages', icon: InboxIcon, current: false },
  { name: 'Users', href: '/admin/users', icon: UserIcon, current: false },
  { name: 'Settings', href: '/admin/settings', icon: CogIcon, current: false },
]
</script>