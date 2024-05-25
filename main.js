import { createApp } from 'vue'

const app = createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12,
            image: "assets/images/pizza1-tomate.jpg",
            classicSale: false,
            superSale: false,
            notAvailable: false,
            ingredients: [
                "Olives",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf",
            ],
            sauces: [
                {
                    id: 1001,
                    type: "Sauce Tomate",
                    color: "#db4006",
                    image: "assets/images/pizza1-tomate.jpg",
                },
                {
                    id: 1002,
                    type: "Crème Fraiche",
                    color: "#e9cb8f",
                    image: "assets/images/pizza1-creme.jpg",
                },
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Proteines: 9.62,
                Sel: 11,
            },
            totalPrice: 0,
            nbrProduct: 0
        }
    }
})

app.mount("#app")