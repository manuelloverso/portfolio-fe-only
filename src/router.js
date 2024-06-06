import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ProjectShow from "./views/ProjectShow.vue";
import ContactsView from "./views/ContactsView.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/projects", name: "projects", component: ProjectsView },
    { path: "/projects/:id", component: ProjectShow },
    { path: "/contacts", name: "contacts", component: ContactsView },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
