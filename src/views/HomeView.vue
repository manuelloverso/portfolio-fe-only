<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import AboutMe from "../components/AboutMe.vue";

export default {
  name: "HomeView",
  components: {
    ProjectCard,
    AboutMe,
  },
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    callApi(url) {
      axios.get(url).then((response) => {
        console.log(response.data.response);
        this.projects = response.data.response;
      });
    },
  },

  mounted() {
    this.callApi("http://127.0.0.1:8000/api/projects");
  },
};
</script>
<template>
  <!-- Home Page Jumbotron -->
  <div class="home-jumbotron">
    <!-- Page Header -->
    <AppHeader />
    <p class="md-container">{{ $route.fullPath }}</p>

    <div class="md-container">
      <div class="jumbo-text">
        <h1>I'm Manuel Loverso</h1>
        <h3 class="mb-5">Jr. Full Stack Web Developer</h3>
        <a href="#about-me">
          <button class="btn-gradient">
            About Me <i class="fa-solid fa-arrow-down"></i>
          </button>
        </a>
      </div>
    </div>
  </div>
  <!-- Page Main -->
  <main id="home-main">
    <AboutMe />

    <div class="md-container">
      <div class="row">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
