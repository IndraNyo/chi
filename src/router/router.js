import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import main from '@/pages/main'
import user from '@/pages/user'
import profile from '@/pages/profile'
import addRecipe from '@/pages/addRecipe'
import checkRecipe from '@/pages/checkRecipe'
import shoppingList from '@/pages/shoppingList'
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
      path: '/checkRecipe',
      name: 'checkRecipe',
      component: checkRecipe
    },
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component: shoppingList
    },
    {
      path: '/addRecipe',
      name: 'addRecipe',
      component: addRecipe
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
