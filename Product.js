export default {
    template: `
        <!-- Image du produit -->
        <div class="product-image">
            <img :src="image" />
        </div>

        <!-- Description du produit -->
        <div class="product-description">
            <h1>
                {{ title }}

                <img v-show="this.bestseller" class="img-best-seller" src="assets/images/best-seller.png">
            
            </h1>

            <p v-show="notAvailable">Momentanément indisponible</p>

            <p v-if="superSale">
                <span class="sale">{{ price }} € </span>
                <span class="new-price"> {{ price - 5}} € SUPER PROMOTION</span>
            </p>
            <p v-else-if="classicSale">
                <span class="sale">{{ price }} € </span>
                <span class="new-price"> {{ price - 2}} € PROMOTION</span>
            </p>
            <p v-else>
                <span class="price">{{ price }} €</span>
            </p>

            <br />
            <strong>Ingrédients </strong>
            <div>
                <span v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient + ", "}}
                </span>
            </div>
            <br />

            <div class="sauces">
                <strong>Sauces au choix</strong>
                <ul>
                    <li :style="{backgroundColor : sauce.color}" @mouseover="updateImage(sauce.image)"
                        v-for="sauce in sauces" :key="sauce.id">
                        {{ sauce.type }}
                    </li>
                </ul>
            </div>

            <div>
                <strong>Valeurs nutritionnelles pour 100 grammes</strong>
                <ul>
                    <li v-for="(value, name, index) in energy" :key="index">
                        {{ name }} : {{ value }}
                    </li>
                </ul>
            </div>

            <!-- Bouton d'ajout au panier -->
            <button :class="{notActiveBtn : notAvailable === true}" @click="addProduct()"
                :disabled="notAvailable === true">Ajouter à ma commande</button>
            <br /><br />
        </div>
    `,
    props: {
        bestseller: {
            type: Boolean,
        }
    },
    data() {
        return {
            product: "Pizza",
            type: "Orientale",
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
        },
    },

    computed: {
        title() {
            return this.product + " " + this.type
        }
    },
}