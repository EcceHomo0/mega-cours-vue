import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routeur/index.js';

createApp(App).use(router).mount('#app')
// const App =createApp(App);
// app.use(router);
// app.mount('#app');