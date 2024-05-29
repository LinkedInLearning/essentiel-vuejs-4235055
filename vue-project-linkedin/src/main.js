import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Product from "./components/Product.vue";
import router from "./router/index.js";

const app = createApp(App)
app.component("Product", Product);
app.use(router)
app.mount('#app')
