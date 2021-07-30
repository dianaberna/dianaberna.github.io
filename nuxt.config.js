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
    title: 'Diana Bernabei - Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sono una sviluppatrice web e UI designer. Passionate community e communication' }
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

  script: [
    { src: '/iubenda.js'}  
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
    ['nuxt-rfg-icon', { masterPicture: 'static/icon.png' }],
    ['iubenda-module', {
      iubenda: {
        // Defaults:
        dev: true, // Activate module in dev environment.
        consentMode: true, // Use Google's consent mode.
        links: {
          enable: true, // Add script to include links to policy pages.
          style: 'nostyle', // Add styling to links. (nostyle, white or black)
          whiteLabel: true, // White label links.
          embed: true // Open links in embedded popup.
        },
    
        // Entire iubenda configuration
        config: {
          siteId: 2266998, // Required
          cookiePolicyId: 83839726, // Required
    
          // ...all other config options. (See Iubenda cookie banner script)
          // Example defaults:
          lang: 'it',
          gdprAppliesGlobally: false,
          cookiePolicyInOtherWindow: false,
          consentOnContinuedBrowsing: false,
          perPurposeConsent: true,
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            rejectButtonDisplay: false,
            acceptButtonColor: 'black',
            acceptButtonCaptionColor: 'white',
            customizeButtonColor: '#bbb',
            customizeButtonCaptionColor: 'black',
            rejectButtonColor: 'white',
            rejectButtonCaptionColor: 'black',
            closeButtonDisplay: false,
            position: 'float-bottom-right',
            textColor: '#333',
            backgroundColor: '#ddd'
          }
        }
      }
    }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
