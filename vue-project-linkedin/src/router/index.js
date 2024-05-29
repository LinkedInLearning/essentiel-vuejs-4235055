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
        path: "/contact",
        name: "Contact",
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;