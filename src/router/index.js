import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import home from '../pages/home';
import about from '../pages/about';
import login from '../pages/login';
import news from '../pages/news';
import api from '../pages/api';
import topic from '../pages/topic'
import user from '../pages/user'


export default new VueRouter({
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/api',
      component: api
    },
    {
      path: '/topic/:id',
      component: topic
    },
     {
      path:'/user/:loginname',
      component:user
    }

  ]
})
