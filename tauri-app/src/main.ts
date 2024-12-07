import 'virtual:uno.css'
import './assets/css/reset.css'

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from "./App.vue";

import { Button, NavBar, Icon, RollingText, Notify, Progress, Tab, Tabs, Form, Field, CellGroup, Picker, Popup } from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const router = createRouter({
  history: createWebHistory(),
  routes,
})


app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(RollingText)
app.use(Notify)
app.use(Progress)
app.use(Tab)
app.use(Tabs)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Picker)
app.use(Popup)

app.use(pinia)
app.use(router)
app.mount("#app")
