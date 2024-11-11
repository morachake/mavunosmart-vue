<template>
    <div class="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div class="flex-1 ml-64 overflow-auto">
        <AdminHeader />
        <main class="p-6">
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import AdminSidebar from '~/components/admin/Sidebar.vue'
  import AdminHeader from '~/components/admin/Header.vue'
  </script>