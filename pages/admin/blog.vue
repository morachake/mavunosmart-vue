<template>
  <div>
    <h1 class="text-3xl font-bold text-forest-700 mb-8">Blog Management</h1>

    <div class="mb-4 flex justify-between items-center">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search blogs..."
        class="px-4 py-2 border rounded-md"
      />
      <button
        @click="openModal()"
        class="bg-forest-600 text-white px-4 py-2 rounded-md hover:bg-forest-700 transition-colors"
      >
        Add New Blog Post
      </button>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Read Time</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="blog in filteredBlogs" :key="blog.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ blog.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ blog.author }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(blog.date) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ blog.readTime }} min read</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button
                @click="openModal(blog)"
                class="text-forest-600 hover:text-forest-800 mr-2"
              >
                Edit
              </button>
              <button
                @click="deleteBlog(blog.id)"
                class="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal for Create/Edit -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 class="text-2xl font-bold mb-4">{{ editingBlog ? 'Edit Blog Post' : 'Create New Blog Post' }}</h2>
        <form @submit.prevent="saveBlog">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
              v-model="blogForm.title"
              id="title"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            />
          </div>
          <div class="mb-4">
            <label for="subtitle" class="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              v-model="blogForm.subtitle"
              id="subtitle"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            />
          </div>
          <div class="mb-4">
            <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
            <input
              v-model="blogForm.author"
              id="author"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            />
          </div>
          <div class="mb-4">
            <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              v-model="blogForm.image"
              id="image"
              type="url"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            />
          </div>
          <div class="mb-4">
            <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              v-model="blogForm.content"
              id="content"
              rows="6"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="readTime" class="block text-sm font-medium text-gray-700">Read Time (minutes)</label>
            <input
              v-model="blogForm.readTime"
              id="readTime"
              type="number"
              required
              min="1"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
            />
          </div>
          <div class="flex justify-end space-x-2">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-forest-600 text-white rounded-md hover:bg-forest-700"
            >
              {{ editingBlog ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'admin'
})

const blogs = ref([
  { 
    id: 1, 
    title: 'Introduction to Carbon Credits', 
    subtitle: 'Understanding the Basics of Environmental Finance',
    author: 'John Doe', 
    date: '2024-04-01', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: 4
  },
  { 
    id: 2, 
    title: 'Sustainable Farming Practices', 
    subtitle: 'Revolutionizing Agriculture for a Greener Future',
    author: 'Jane Smith', 
    date: '2024-04-05', 
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: 6
  },
  { 
    id: 3, 
    title: 'The Future of Green Energy', 
    subtitle: 'Innovations Shaping Our Sustainable Tomorrow',
    author: 'Bob Johnson', 
    date: '2024-04-10', 
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readTime: 5
  },
])

const searchQuery = ref('')
const isModalOpen = ref(false)
const editingBlog = ref(null)
const blogForm = ref({
  title: '',
  subtitle: '',
  author: '',
  content: '',
  image: '',
  readTime: 1
})

const filteredBlogs = computed(() => {
  return blogs.value.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const openModal = (blog = null) => {
  if (blog) {
    editingBlog.value = blog
    blogForm.value = { ...blog }
  } else {
    editingBlog.value = null
    blogForm.value = { title: '', subtitle: '', author: '', content: '', image: '', readTime: 1 }
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  editingBlog.value = null
}

const saveBlog = () => {
  if (editingBlog.value) {
    const index = blogs.value.findIndex(b => b.id === editingBlog.value.id)
    blogs.value[index] = { ...editingBlog.value, ...blogForm.value }
  } else {
    const newBlog = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      ...blogForm.value
    }
    blogs.value.push(newBlog)
  }
  closeModal()
}

const deleteBlog = (id) => {
  if (confirm('Are you sure you want to delete this blog post?')) {
    blogs.value = blogs.value.filter(blog => blog.id !== id)
  }
}
</script>