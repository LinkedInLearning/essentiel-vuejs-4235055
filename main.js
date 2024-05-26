import { createApp } from 'vue'
import Product from './Product.js'
import About from './About.js'
import Contact from './Contact.js'

const app = createApp({
    components: {
        ProductComponent: Product,
        About,
        Contact
    },
    data() {
        return {
            totalPrice: 0,
            nbrProduct: 0,
            promo: "",
            isValidMsg: "",
            bestSellerProduct: false,
            current: "About"
        }
    },
    methods: {
        addCard(price) {
            this.nbrProduct += 1;
            this.totalPrice = price
        }
    },
    watch: {
        promo(newValue, oldValue) {
            if (newValue === "") {
                this.isValidMsg = ""
            } else if (newValue === "royale") {
                this.isValidMsg = "CODE PROMO VALIDE !"
            } else {
                this.isValidMsg = "code promo invalide"
            }
        }
    }
})

//app.component('ProductComponent', Product)

app.mount("#app")
