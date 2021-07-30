export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'it'
    },
    title: 'Diana Bernabei - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sono una sviluppatrice web, streamer e community manager' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vue-gtag', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-124229163-1',
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-124229163-1'
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    ['nuxt-rfg-icon', { masterPicture: 'static/icon.png' }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    }
  }
}
