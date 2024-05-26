import { createApp } from 'vue'

const app = createApp({
    data() {
        return {
            totalPrice: 0,
            nbrProduct: 0,
            promo: "",
            isValidMsg: ""
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
