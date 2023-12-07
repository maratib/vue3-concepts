import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import VueClickAway from "vue3-click-away";

createApp(App).use(VueClickAway).mount('#app')
