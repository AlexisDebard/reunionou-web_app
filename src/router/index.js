import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Evenements',
    component:()=> import(/* webpackChunkName: "about" */ '../views/Evenements.vue')
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscription.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deconnexion.vue')
  },
  {
    path: '/evenement/:idEvenement',
    name: 'Evenement',
    component: () => import(/* webpackChunkName: "about" */ '../views/Evenement.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router