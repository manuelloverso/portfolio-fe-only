<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "HomeView",
  components: {
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
  <!-- Page Main -->
  <main id="home-main">
    <div class="md-container">
      <div class="row">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
