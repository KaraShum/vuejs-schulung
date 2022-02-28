import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import store from "@/store/index";
import CreateProductPage from "@/pages/CreateProductPage.vue";

const router = createRouter({
  // Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next("/shop");
        } else {
          next();
        }
      },
    },
    {
      path: "/shop",
      component: ShopPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/shop/create/product",
      component: CreateProductPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
