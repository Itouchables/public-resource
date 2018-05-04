import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import Book from '@/components/Book'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]

})
