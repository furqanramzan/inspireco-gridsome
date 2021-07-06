// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuesax4 from 'vuesax4';
import { Carousel, Numberinput } from 'buefy';
import VueScrollTo from "vue-scrollto";
// import { vsUpload } from 'vuesax3';

import 'vuesax3/dist/vuesax.css';
import 'vuesax4/dist/vuesax.css';
import '@mdi/font/css/materialdesignicons.css';

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/scss/buefy.scss';
import '~/assets/scss/main.scss';


export default function (Vue, { router, head, isClient }) {
  Vue.filter("price", value => `$ ${value}`);
  Vue.filter('qauntity', function(value) {
    if (!value) {
      value = 0;
    }
    if (value <= 1) {
      value += " pc";
    } else {
      value += " pc(s)"
    }
    return value;
  });
  // Vue.use(vsUpload);
  Vue.use(Carousel);
  Vue.use(Numberinput);
  Vue.use(Vuesax4);
  Vue.use(VueScrollTo);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
