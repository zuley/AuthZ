import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "../views/home.vue";

// const Home = { template: "<div>Home</div>" }
const Foo = { template: "<div>Foo</div>" }
const Bar = { template: "<div>Bar</div>" }

const routes = [
  { path: "/", component: Home },
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;