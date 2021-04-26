// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuesax4 from 'vuesax4';
import { Carousel } from 'buefy';
// import { vsUpload } from 'vuesax3';

import 'vuesax3/dist/vuesax.css';
import 'vuesax4/dist/vuesax.css';
import '@mdi/font/css/materialdesignicons.css';

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/buefy.scss'
import '~/assets/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Vue.use(vsUpload);
  Vue.use(Carousel);
  Vue.use(Vuesax4, {
    colors: {
      primary: "#1a5cff",
      secondary: "#5b3cc4",
      success: "#46c93a",
      danger: "#ff4757",
      warn: "#ffba00",
      dark: "#1e1e1e",
      light: "#fff"
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
