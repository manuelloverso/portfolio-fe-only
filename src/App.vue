<script>
// IMPORTS
import axios from "axios";
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
  <!-- Page Header -->
  <AppHeader />

  <!-- Page Main -->
  <main>
    <div class="container">
      <div class="row">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </main>

  <!-- Page Footer -->
  <AppFooter />
</template>
<style scoped></style>
