import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../views/notFound/NotFound.vue";
import Top from "../views/top/Top.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Top,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
