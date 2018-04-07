import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import StartItem from '@/components/StartCard'
import QuestionItem from '@/components/QuestionCard'
import MatchItem from '@/components/MatchCard'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartItem
    },
    {
      path: '/questions/:id',
      name: 'question',
      component: QuestionItem
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
