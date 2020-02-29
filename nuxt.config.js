
const config = require('config')
const env = config.get('env')

module.exports = {
  mode: 'history',
  env,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Weather',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'cityWeather', name: '날씨', content: '펭수의 세계정복을 위해 !!! 세계의 날씨 데이터를 알아야한다!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    {
      src: '~assets/reset.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/utils' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/axios',
      {
        baseURL: `${env.API_HOST}/data/${env.VERSION}`
      }
    ]
  ],
  router: {
    extendRoutes (routes, resolve) {
      // error
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/error/index.vue')
      })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
