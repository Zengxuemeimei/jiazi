import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import About from '@/pages/about'
import Case from '@/pages/case'
import Contact from '@/pages/contact'
import Cooperation from '@/pages/cooperation'
import News from '@/pages/news'
import Products from '@/pages/products'
import Newsdetail from '@/pages/newsdetail'
import Casedetail from '@/pages/casedetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/newsdetail',
      name: 'Newsdetail',
      component: Newsdetail
    },
    {
      path: '/casedetail',
      name: 'Casedetail',
      component: Casedetail
    }
  ]
})
