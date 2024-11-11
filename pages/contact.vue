<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-forest-700 mb-8">Contact Us</h1>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"></textarea>
          </div>
          
          <button type="submit" class="bg-forest-600 text-white px-6 py-2 rounded-md hover:bg-forest-700">
            Send Message
          </button>
        </form>
      </div>
      
      <div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-forest-600 mb-4">Get in Touch</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-700">Address</h3>
              <p class="text-gray-600">Nairobi, Kenya</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700">Email</h3>
              <p class="text-gray-600">info@kenyacarbon.com</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700">Phone</h3>
              <p class="text-gray-600">+254 700 000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>