import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Experience from "@/views/Experience";
import Projects from "@/views/Projects";
import Skills from "@/views/Skills";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
  ]
})
