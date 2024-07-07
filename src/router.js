import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ProjectShow from "./views/ProjectShow.vue";
import ContactsView from "./views/ContactsView.vue";
import NotFound from "./views/NotFound.vue";
import lenis from "./lenis";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/projects", name: "projects", component: ProjectsView },
    { path: "/projects/:id", name: "ProjectShow", component: ProjectShow },
    { path: "/contacts", name: "contacts", component: ContactsView },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],

  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        lenis.scrollTo(0, 0);
        resolve({ top: 0 });
      }, 0);
    });
  },
});

export default router;
