import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Contact from "../view/Contact.vue";
import NotFound from "../view/NotFound.vue";

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
        alias: "/contact"
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;