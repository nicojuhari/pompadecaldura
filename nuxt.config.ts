import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    //ssr: false,
    routes: {
      '/': { static: true }, // Once per build (via builder)
      // '/contacts': { ssr: false }, // Once on-demand per build (via lambda)
      // // '/stats/*': { swr: '10 min' }, // Once on-demand each 10 minutes (via lambda)
      // // '/admin/*': { ssr: false }, // Client-Side rendered
      // // '/react/*': { redirect: '/vue' }, // Redirect Rules
    }
})
