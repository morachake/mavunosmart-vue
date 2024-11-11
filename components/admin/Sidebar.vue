<template>
  <aside class="w-64 bg-forest-600 text-white h-screen fixed left-0 top-0 overflow-y-auto z-10">
    <div class="p-4">
      <h1 class="text-2xl font-bold">Mavuno Smart</h1>
    </div>
    <nav class="mt-6">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.href"
        custom
        v-slot="{ isActive, href, navigate }"
      >
        <a
          :href="href"
          @click="navigate"
          :class="[
            'flex items-center px-4 py-2 text-sm font-medium',
            isActive ? 'bg-forest-700 text-white' : 'text-white'
          ]"
        >
          <component :is="item.icon" class="mr-3 h-5 w-5" aria-hidden="true" />
          {{ item.name }}
        </a>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import { 
  HomeIcon, 
  ChartBarIcon, 
  CreditCardIcon, 
  CogIcon, 
  InboxIcon, 
  UserIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

const menuItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Carbon Credits', href: '/admin/carbon-credits', icon: CreditCardIcon },
  { name: 'Marketplace', href: '/admin/marketplace', icon: ShoppingCartIcon },
  { name: 'Messages', href: '/admin/messages', icon: InboxIcon },
  { name: 'Users', href: '/admin/users', icon: UserIcon },
  { name: 'Blog', href: '/admin/blog', icon: DocumentTextIcon },
  { name: 'Education', href: '/admin/education', icon: AcademicCapIcon },
  { name: 'Settings', href: '/admin/settings', icon: CogIcon },
]
</script>