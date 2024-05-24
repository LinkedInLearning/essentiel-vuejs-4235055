import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12
        }
    }
})

app.mount('#app');