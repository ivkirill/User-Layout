import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: function(resolve) {
        require(['@/pages/auth.vue'], resolve);
      }      
    },
  {
    path: '/users/',
    name: 'users',
    component: function(resolve) {
      require(['@/pages/user_list.vue'], resolve);
    }
  }
]
})
