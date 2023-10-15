import { defineComponent, h } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from 'views/Layout.vue';

const createRoute = (name: string) => {
  return { 
    name, 
    path: '/' + name,
    component: defineComponent({
      setup() {
        return () => h('div', {
          class: 'display-center'
        },
        name)
      }
    }), 
    meta: { name } 
  }
}

const routes: RouteRecordRaw[] = [
  { 
    name: 'layout', 
    path: '',
    component: Layout, 
    children: [
      createRoute('SELL'),
      createRoute('SUPPLY'),
      createRoute('LEARN'),
      createRoute('SUPPORT'),
      createRoute('START'),
      createRoute('Product-Detail'),
      { 
        name: 'login', 
        path: '/login',
        component: () => import('views/login.vue'), 
        meta: { name: 'login' } 
      },
      { 
        name: 'new-arrivals', 
        path: '/new-arrivals',
        component: () => import('views/new-arrivals/index.vue'), 
        meta: { name: 'new-arrivals' } 
      },
    ]
  },
];

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: routes,
});

export default router;
