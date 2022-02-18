import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import '../src/assets/css/tailwind.css'
import { VueSpinners } from '@saeris/vue-spinners'


Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

import router from './router.js' //Tienes que importar el router en el archivo main.js
import { dollarFilter, percentFilter } from '@/filters'


Vue.filter('dollar', dollarFilter);
Vue.filter('percentage', percentFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
