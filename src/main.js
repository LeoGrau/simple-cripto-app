import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/tailwind.css'

import router from './router.js' //Tienes que importar el router en el archivo main.js

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
