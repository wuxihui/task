import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: '/',
          redirect: 'top',
         },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/Index/center.vue')
        },
        {
          path: 'left',
          name: 'left',
          component: () => import('./views/Index/left.vue')
        },
        {
          path: 'right',
          name: 'right',
          component: () => import('./views/Index/right.vue')
        },
        {
          path: 'top',
          name: 'top',
          component: () => import('./views/Index/top.vue')
        },
        {
          path: 'jump',
          name: "jump",
          component: () => import('./views/Index/jump.vue')
        }
      ]
    }
  ]
})
