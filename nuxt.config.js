export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-first-nuxt-app',
    titleTemplate: '%s | Nuxt.js tag items viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3b8070' },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {

  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.js'
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
