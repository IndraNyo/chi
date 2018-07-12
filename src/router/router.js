import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import main from '@/pages/main'
import user from '@/pages/user'
import profile from '@/pages/profile'
import userRegister from '@/components/userRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/user',
      name: 'edit profile',
      component: user
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
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
