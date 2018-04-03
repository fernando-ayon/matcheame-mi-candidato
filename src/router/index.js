import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import Question from '@/pages/QuestionPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/pregunta/:id',
      name: 'QuestionPage',
      component: Question
    }
  ]
})
