import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import router from './router';

// 引入 UI 库
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount("#app");

export default app;