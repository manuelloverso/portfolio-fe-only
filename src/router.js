import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ProjectShow from "./views/ProjectShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/projects", name: "projects", component: ProjectsView },
    { path: "/projects/:id", component: ProjectShow },
  ],
});

export default router;
