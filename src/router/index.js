import { createRouter, createWebHistory } from "vue-router";
import Counter from "../views/CounterView.vue";
import NotFound from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router