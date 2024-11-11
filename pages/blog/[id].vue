<template>
    <div v-if="blog" class="container mx-auto px-4 py-8">
      <img :src="blog.image" :alt="blog.title" class="w-full h-64 object-cover rounded-lg mb-8">
      <h1 class="text-4xl font-bold text-forest-700 mb-2">{{ blog.title }}</h1>
      <h2 class="text-2xl text-forest-600 mb-4">{{ blog.subtitle }}</h2>
      <div class="flex justify-between items-center text-sm text-gray-500 mb-8">
        <span>By {{ blog.author }} | {{ formatDate(blog.date) }}</span>
        <span>{{ blog.readTime }} min read</span>
      </div>
      <div class="prose max-w-none">
        <p>{{ blog.content }}</p>
      </div>
      <NuxtLink to="/blog" class="mt-8 inline-block text-forest-600 hover:text-forest-700 font-medium">
        &larr; Back to Blog
      </NuxtLink>
    </div>
    <div v-else class="container mx-auto px-4 py-8">
      <p>Blog post not found.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const blogId = computed(() => Number(route.params.id))
  
  const blogs = ref([
    { 
      id: 1, 
      title: 'Introduction to Carbon Credits', 
      subtitle: 'Understanding the Basics of Environmental Finance',
      author: 'John Doe', 
      date: '2024-04-01', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: 4
    },
    { 
      id: 2, 
      title: 'Sustainable Farming Practices', 
      subtitle: 'Revolutionizing Agriculture for a Greener Future',
      author: 'Jane Smith', 
      date: '2024-04-05', 
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: 6
    },
    { 
      id: 3, 
      title: 'The Future of Green Energy', 
      subtitle: 'Innovations Shaping Our Sustainable Tomorrow',
      author: 'Bob Johnson', 
      date: '2024-04-10', 
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: 5
    },
  ])
  
  const blog = computed(() => blogs.value.find(b => b.id === blogId.value))
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  </script>