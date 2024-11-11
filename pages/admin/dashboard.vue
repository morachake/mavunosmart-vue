<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 overflow-auto">
      <Header @logout="handleLogout" />
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <CarbonCreditsTable :carbonCredits="carbonCredits" />
        <TransactionsTable :transactions="transactions" />
        <MessagesList :messages="messages" />
      </main>
    </div>

    <!-- Blog Post Modal -->
    <div v-if="showBlogModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-forest-700 mb-4">
          {{ editingPost ? 'Edit Post' : 'Add New Post' }}
        </h2>
        <form @submit.prevent="saveBlogPost" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input v-model="postForm.title" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Content</label>
            <textarea v-model="postForm.content" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Image URL</label>
            <input v-model="postForm.image" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="showBlogModal = false" class="px-4 py-2 border rounded-md">
              Cancel
            </button>
            <button type="submit" class="bg-forest-600 text-white px-4 py-2 rounded-md hover:bg-forest-700">
              {{ editingPost ? 'Update' : 'Add' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Sidebar from '@/components/admin/Sidebar.vue'
import Header from '@/components/admin/Header.vue'
import CarbonCreditsTable from '@/components/admin/CarbonCreditsTable.vue'
import TransactionsTable from '@/components/admin/TransactionsTable.vue'
import MessagesList from '@/components/admin/MessagesList.vue'
import { useAuthStore } from '@/stores/auth'
import { useCarbonCredits } from '@/composables/useCarbonCredits'
import { useTransactions } from '@/composables/useTransactions'
import { useMessages } from '@/composables/useMessages'

const auth = useAuthStore()
const { carbonCredits } = useCarbonCredits()
const { transactions } = useTransactions()
const { messages } = useMessages()

// Blog management
const showBlogModal = ref(false)
const editingPost = ref(null)
const postForm = reactive({
  title: '',
  content: '',
  image: ''
})

const blogPosts = ref([
  {
    id: 1,
    title: 'The Impact of Forest Conservation',
    date: 'Apr 3, 2024',
    content: 'Sample content...'
  }
])

function editPost(post) {
  editingPost.value = post
  Object.assign(postForm, post)
  showBlogModal.value = true
}

function deletePost(id) {
  if (confirm('Are you sure you want to delete this post?')) {
    blogPosts.value = blogPosts.value.filter(post => post.id !== id)
  }
}

function saveBlogPost() {
  if (editingPost.value) {
    const index = blogPosts.value.findIndex(p => p.id === editingPost.value.id)
    blogPosts.value[index] = { ...editingPost.value, ...postForm }
  } else {
    blogPosts.value.push({
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      ...postForm
    })
  }
  showBlogModal.value = false
  editingPost.value = null
  Object.assign(postForm, { title: '', content: '', image: '' })
}

function handleLogout() {
  auth.logout()
}
</script>