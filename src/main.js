import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import '/src/global/css/reset.css'
import '/src/global/css/variables.sass'
import '/src/global/css/main.sass'
import '/src/global/css/decorator.sass'
import '/src/global/js/script.js'

const app = createApp(App);

app.use(Router)

app.mount('#app');

