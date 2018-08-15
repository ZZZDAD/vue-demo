import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

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
