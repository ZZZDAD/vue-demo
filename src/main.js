import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.devtools = true;  // Chrome Vue面板

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
