import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import userRegister from '@/components/userRegister'
import main from '@/pages/main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
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
