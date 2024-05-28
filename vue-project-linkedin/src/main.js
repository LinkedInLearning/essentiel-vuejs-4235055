import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Product from "./components/Product.vue";

const app = createApp(App)

app.component("Product", Product);
app.mount('#app')