import { createApp } from 'vue'

const app = createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12,
            image: "assets/images/pizza1-tomate.jpg",
            classicSale: false,
            superSale: true
        }
    }
})

app.mount('#app');