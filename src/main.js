import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'leaflet/dist/leaflet.css';

createApp(App).use(router).mount('#app')
