import dotenv from "dotenv"; dotenv.config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Drako-Autopartes',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 server: {
    port: 3001 // por defecto: 3000
  },
     env: {
      APP_NAME   : process.env.APP_NAME,
      URL_BASE: process.env.URL_BASE,
      URL_API: process.env.URL_API,
      URL_WEB: process.env.URL_WEB,
      URL_RESET_PASS: process.env.URL_RESET_PASS,
  },
    
   
 
  // Global CSS: https://go.nuxtjs.dev/config-css
   
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/app-transitions',
    '@/assets/css/sass/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
     '@nuxtjs/tailwindcss',
      
      
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
