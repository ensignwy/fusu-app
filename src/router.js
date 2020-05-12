import Vue from 'vue';
import Router from 'vue-router';

import Index from './components/Index.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';
import Page3 from './components/Page3.vue';


Vue.use(Router)
const constantRoutes = [
  {
    path: '/',
    name: '首页',
    component: Index,
    children: []
  },
  {
    path: '/1',
    name: '1',
    component: Page1,
    children: []
  },
  {
    path: '/2',
    name: '2',
    component: Page2,
    children: []
  },
  {
    path: '/3',
    name: '3',
    component: Page3,
    children: []
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})
