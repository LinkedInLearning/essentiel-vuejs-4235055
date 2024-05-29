import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Contact from "../view/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contactez-nous",
        name: "Contact",
        component: Contact,
        // Alias
        //alias: "/contact"
    },

    // Redirection
    // {
    //   path: "/contact",
    //   redirect: {name: "Contact"}
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;