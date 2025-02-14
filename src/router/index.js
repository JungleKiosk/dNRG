import { createRouter, createWebHistory } from "vue-router";

import home from "../views/HomeView.vue"
import parameters from "../views/ParametersView.vue"


/* ------------------------------------------------- */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/parameters",
            name: "parameters",
            component: parameters
        }
    ]
})

export default router