const title = 'PaoStudio.Art'
const description = 'Website for Artist Pao Hung'
const image = ''

export default {
  ssr: false,
  target: 'static',
  head: {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: title},
      {hid: 'description', name: 'description', content: description},
      {hid: 'og:description', name: 'og:description', content: description},
      {hid: 'og:image', name: 'og:image', content: image},
      {name: 'og:locale', content: 'en_uk'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/icon.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/less/global.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/api',
    '~/plugins/err',
    '~/plugins/path',
    '~/plugins/router',
    '~/plugins/vue-rx',
    '~/plugins/vue-observe-visibility.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/router', {
      fileName: 'router.js',
      keepDefaultRouter: true
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    'portal-vue/nuxt',
  ],
  axios: {
    proxy: true
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    },
  },
  sitemap: {
    gzip: true,
    path: '/sitemap.xml',
    hostname: 'https://...',
    cacheTime: 1000 * 60 * 15,
    exclude: [],
    routes: []
  },
  generate: {
    fallback: true
  }
}
