import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import HomePage from '../components/HomeComponent/Content/HomePage/HomePage';
// Doc
import MenuDoc from '../components/HomeComponent/Content/MenuDoc/MenuDoc';
import InputDoc from '../components/HomeComponent/Content/InputDoc/InputDoc';
import TableDoc from '../components/HomeComponent/Content/TableDoc/TableDoc';
import BubbleDoc from '../components/HomeComponent/Content/BubbleDoc/BubbleDoc';
import MessageDoc from '../components/HomeComponent/Content/MessageDoc/MessageDoc';
import ButtonDoc from '../components/HomeComponent/Content/ButtonDoc/ButtonDoc';
import CascaderDoc from '../components/HomeComponent/Content/CascaderDoc/CascaderDoc';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/docs',
        name: 'Docs',
        component: () => import(/* webpackChunkName: "about" */ '../components/HomeComponent/Content/Content'),
        children: [
          {
            path: '/docs',
            name: 'HomePage',
            component: HomePage
          },
          {
            path: '/docs/menudoc',
            name: 'MenuDoc',
            component: MenuDoc
          },
          {
            path: '/docs/inputdoc',
            name: 'InputDoc',
            component: InputDoc
          },
          {
            path: '/docs/tableDoc',
            name: 'TableDoc',
            component: TableDoc
          },
          {
            path: '/docs/bubbleDoc',
            name: 'BubbleDoc',
            component: BubbleDoc
          },
          {
            path: '/docs/messageDoc',
            name: 'MessageDoc',
            component: MessageDoc
          },
          {
            path: '/docs/buttonDoc',
            name: 'ButtonDoc',
            component: ButtonDoc
          },
          {
            path: '/docs/cascaderDoc',
            name: 'CascaderDoc',
            component: CascaderDoc
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/custom',
    name: 'customView',
    component: () => import(/* webpackChunkName: "about" */ '../views/customView/customView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
