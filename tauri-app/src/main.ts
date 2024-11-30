import 'virtual:uno.css'
import './assets/css/reset.css'

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import App from "./App.vue";

import { Button, NavBar, Icon, RollingText, Notify } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})


app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(RollingText)
app.use(Notify)
app.use(router)
app.mount("#app")
