import { createApp } from 'vue'

const app = createApp({
    data() {
        return {
            product: "Pizza",
            type: "Orientale",
            price: 12,
            image: "assets/images/pizza1-tomate.jpg",
            classicSale: false,
            superSale: false,
            notAvailable: true,
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
            nbrProduct: 0,
            promo: "",
            isValidMsg: ""
        }
    },

    methods: {
        addProduct() {
            this.nbrProduct += 1;
            if (this.superSale) {
                this.totalPrice += this.price - 5
            } else if (this.classicSale) {
                this.totalPrice += this.price - 2
            } else {
                this.totalPrice += this.price
            }
        },

        updateImage(newLinkImage) {
            this.image = newLinkImage
        }
    },

    computed: {
        title() {
            return this.product + " " + this.type
        }
    },

    watch: {
        promo(newValue, oldValue) {
            if (newValue == "") {
                this.isValidMsg = ""
            }
            else if (newValue == "royale") {
                this.isValidMsg = "CODE PROMO VALIDE !"
            } else {
                this.isValidMsg = "code promo invalide"
            }
        },
    }
})

app.mount("#app")
