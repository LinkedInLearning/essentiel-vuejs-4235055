import { createApp } from 'vue'
import Product from './Product.js'

const app = createApp({
    components: {
        ProductComponent: Product
    },
    data() {
        return {
            totalPrice: 0,
            nbrProduct: 0,
            promo: "",
            isValidMsg: "",
            bestSellerProduct: true
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

// app.component('ProductComponent', Product)

app.mount("#app")
