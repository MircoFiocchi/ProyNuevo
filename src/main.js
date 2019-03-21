import Vue from 'vue'
//import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './components/router/router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  el: '#app', 
  router,
  render: h=> h(App)
})
