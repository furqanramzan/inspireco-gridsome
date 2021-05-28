// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_globals.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Inspirco',
  // templates: {
  //   products: [
  //     {
  //       path: (node) => {
  //         console.log(node.id);
  //         return `/product/${node.id}`
  //       },
  //       component: './src/templates/Products.vue',
  //       name: "detail"
  //     }
  //   ],
  // },
  plugins: [
    {
      use: 'gridsome-source-directus',
      options: {
        apiUrl: 'http://127.0.0.1:8055',
        assetUrl: 'http://127.0.0.1:8055/assets',
        project: '_',
        email: 'admin@example.com',
        password: 'admin@example.com',
        collections: [
          {
            name: 'main_sliders',
            status: 'published',
            fields: '*.*',
            downloadImages: true
          },
          {
            name: 'sub_sliders',
            status: 'published',
            fields: '*.*',
            downloadImages: true
          },
          {
            name: 'child_categories',
            status: 'published',
            fields: '*.*',
            downloadImages: true
          },
          {
            name: 'products',
            status: 'published',
            fields: '*.*.*',
            downloadImages: true,
          }
        ]
      }
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    });
  }
}
