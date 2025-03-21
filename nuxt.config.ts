// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    "@nuxtjs/color-mode",
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/supabase',
    "@prisma/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    prerender: {
      routes: ["/profile"]
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['/content(/*)?'],
      exclude: ['/content'],
      saveRedirectToCookie: false,
    }
  }
})