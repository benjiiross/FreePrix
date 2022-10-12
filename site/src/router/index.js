import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/clothes",
      name: "clothes",
      component: () => import("../views/ClothesView.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("../views/ArticleView.vue"),
    },
    // {
    //   path: "/cart",
    //   name: "cart",
    //   component: () => import("../views/CartView.vue"),
    // },
  ],
});

export default router;
