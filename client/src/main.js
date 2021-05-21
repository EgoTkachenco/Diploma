import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ErrorCmp from '@/components/ErrorCmp'
Vue.config.productionTip = false

// isLogged Middleware for router 
router.beforeEach((to, from, next) => {
  let unsecuredRoutes = ['SignUp', 'SignIn']
  if (unsecuredRoutes.includes(to.name)) {
    store.state.currentUser ?
      router.push({ name: 'Dashboard' })
      :
      next();
  } else {
    let user = localStorage.getItem('user')
    if (user) {
      store.commit('LOG_USER', JSON.parse(user));
      next()
    } else {
      router.push({ name: 'SignIn' })
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('v-error', ErrorCmp)
