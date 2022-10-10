// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/main.css'],
    runtimeConfig: {
        public : {
            gtag: {
                id: 'G-DNVFH5R9CR'
            }
        }
    },
})
