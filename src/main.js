import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuetify)
Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
