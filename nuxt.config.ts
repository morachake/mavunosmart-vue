// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    '@nuxt/image'
  ],

  app: {
    head: {
      title: 'Farm Carbon Credits Marketplace',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kenya Farm Carbon Credits Trading Platform' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  devtools: { enabled: false },
  compatibilityDate: '2024-11-11'
})