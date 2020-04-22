require('dotenv').config();


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
      }
    ]
  },
  /**
     * config local server|port
     */
  server: {
    port: process.env.PORT,
    host: '0.0.0.0'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/youtube',
      mode: 'client'
    },

    '@/plugins/axios',
  ],

  router: {
    middleware: ['check-auth']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL_API || "localhost:3000", // Default: http://[HOST]:[PORT][PREFIX]
    redirectError: {
      401: '/login',
      404: '/404',
      500: '/404',
    },
    debug: false, // default false
  },
  styleResources: {
    scss: [
      '~assets/scss/style.scss',
    ]
  },
  /*
  ** Toast module configuration
  */
  toast: {
    position: 'top-right',
    theme: 'bubble',
    duration: 3000,
    iconPack: 'material'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
