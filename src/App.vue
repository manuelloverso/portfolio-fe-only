<script>
// IMPORTS
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    ProjectCard,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- Site Header -->
  <AppHeader />

  <RouterView />

  <!-- Site Footer -->
  <AppFooter />
</template>
<style scoped></style>
