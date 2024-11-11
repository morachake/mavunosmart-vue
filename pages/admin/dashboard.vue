<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-forest-700">Admin Dashboard</h1>
      <button @click="auth.logout" class="text-red-600 hover:text-red-700">
        Logout
      </button>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Blog Management -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-forest-600 mb-4">Blog Posts</h2>
        <button
          @click="showBlogModal = true"
          class="mb-4 bg-forest-600 text-white px-4 py-2 rounded-md hover:bg-forest-700"
        >
          Add New Post
        </button>
        
        <div class="space-y-4">
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="flex items-center justify-between p-4 border rounded-md"
          >
            <div>
              <h3 class="font-semibold">{{ post.title }}</h3>
              <p class="text-sm text-gray-500">{{ post.date }}</p>
            </div>
            <div class="flex space-x-2">
              <button
                @click="editPost(post)"
                class="text-forest-600 hover:text-forest-700"
              >
                Edit
              </button>
              <button
                @click="deletePost(post.id)"
                class="text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- User Management -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-forest-600 mb-4">Users</h2>
        <div class="space-y-4">
          <div
            v-for="user in users"
            :key="user.id"
            class="flex items-center justify-between p-4 border rounded-md"
          >
            <div>
              <h3 class="font-semibold">{{ user.email }}</h3>
              <p class="text-sm text-gray-500">{{ user.role }}</p>
            </div>
            <button
              @click="toggleUserStatus(user.id)"
              :class="{
                'px-3 py-1 rounded-md': true,
                'bg-green-100 text-green-800': user.active,
                'bg-red-100 text-red-800': !user.active
              }"
            >
              {{ user.active ? 'Active' : 'Inactive' }}
            </button>
          </div>
        </div>
      </div>
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
const auth = useAuthStore();

// Blog management
const showBlogModal = ref(false);
const editingPost = ref(null);
const postForm = reactive({
  title: '',
  content: '',
  image: ''
});

const blogPosts = ref([
  {
    id: 1,
    title: 'The Impact of Forest Conservation',
    date: 'Apr 3, 2024',
    content: 'Sample content...'
  }
]);

// User management
const users = ref([
  {
    id: 1,
    email: 'admin@example.com',
    role: 'admin',
    active: true
  },
  {
    id: 2,
    email: 'user@example.com',
    role: 'user',
    active: true
  }
]);

function editPost(post) {
  editingPost.value = post;
  Object.assign(postForm, post);
  showBlogModal.value = true;
}

function deletePost(id) {
  if (confirm('Are you sure you want to delete this post?')) {
    blogPosts.value = blogPosts.value.filter(post => post.id !== id);
  }
}

function saveBlogPost() {
  if (editingPost.value) {
    const index = blogPosts.value.findIndex(p => p.id === editingPost.value.id);
    blogPosts.value[index] = { ...editingPost.value, ...postForm };
  } else {
    blogPosts.value.push({
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      ...postForm
    });
  }
  showBlogModal.value = false;
  editingPost.value = null;
  Object.assign(postForm, { title: '', content: '', image: '' });
}

function toggleUserStatus(id) {
  const user = users.value.find(u => u.id === id);
  if (user) {
    user.active = !user.active;
  }
}
</script>