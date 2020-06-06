export default {
  buildDir: 'resources/.nuxt',
  generate: {
    dir: 'resources/dist',
  },
  dir: {
    assets: 'resources/assets',
    app: 'resources/app',
    layouts: 'resources/layouts',
    middleware: 'resources/middleware',
    pages: 'resources/pages',
    static: 'resources/static',
    store: 'resources/store',
  },
  mode: 'universal',
  server: {
    port: 3005,
    host: 'localhost',
    timing: false,
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: null,
    title: process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
  ],
  build: {
    extractCSS: true,
    filenames: {
      //   chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
