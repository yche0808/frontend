import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import MapView from "../views/MapView.vue";
import AccessibilityView from "../views/AccessibilityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "explore",
      component: SearchView,
    },
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/compare",
      name: "compare",
      component: AccessibilityView,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
