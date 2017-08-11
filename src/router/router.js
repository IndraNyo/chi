import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import userRegister from '@/components/userRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      children: [
        {
          path: '/userRegister',
          name: 'userRegister',
          component: userRegister
        }
      ]
    }
  ]
})
