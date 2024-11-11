<template>
    <div class="flex h-screen bg-gray-100">
      <Sidebar />
      <div class="flex-1 ml-64 overflow-auto">
        <Header @logout="handleLogout" />
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import Sidebar from '@/components/admin/Sidebar.vue'
  import Header from '@/components/admin/Header.vue'
  import { useAuthStore } from '@/stores/auth'
  
  const router = useRouter()
  const auth = useAuthStore()
  
  const handleLogout = () => {
    auth.logout()
    router.push('/login')
  }
  </script>