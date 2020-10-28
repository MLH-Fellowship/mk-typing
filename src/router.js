import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GameOver from "./views/GameOver.vue";
import GameWon from "./views/GameWon.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game-over',
      name: 'game-over',
      component: GameOver,
      props: true
    },
    {
      path: '/game-won',
      name: 'game-won',
      component: GameWon,
      props: true
    }
  ]
})