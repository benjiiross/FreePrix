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
      path: "/clothesmen",
      name: "clothesmen",
      component: () => import("../views/ClothesViewMen.vue"),
    },
    {
      path: "/clotheswomen",
      name: "clotheswomen",
      component: () => import("../views/ClothesViewWomen.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("../views/ArticleView.vue"),
      props: (route) => ({ reference: route.query.ref }),
    },
    {
      path: "/sneakers",
      name: "sneakers",
      component: () => import("../views/SneakersView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginVue.vue"),
    },

    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;
