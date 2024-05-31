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
  <!-- Home Page Jumbotron -->
  <div class="home-jumbotron">
    <!-- Page Header -->
    <AppHeader />

    <div class="jumbo-text md-container">
      <h1>I'm Manuel Loverso</h1>
      <h3 class="mb-5">Jr. Full Stack Web Developer</h3>
      <button class="btn-gradient">
        About Me <i class="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  </div>

  <!-- Page Main -->
  <!-- <main id="home-main">
    <div class="md-container">
      <div class="row">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </main> -->
  <RouterView />

  <!-- Page Footer -->
  <AppFooter />
</template>
<style scoped></style>
