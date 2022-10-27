import { createRouter, createWebHistory } from "vue-router";


import Movies from "../views/Movies.vue";
import NotFound from "../views/NotFound.vue";




const routes = [
  {
    name: "Home",
    path: "/",
    component: Movies,
  },
//  not found route

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});





export default router;
