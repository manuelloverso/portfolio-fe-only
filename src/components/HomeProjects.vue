<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "HomeProjects",
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
  <!-- Projects Section -->
  <section id="home-projects">
    <div class="md-container">
      <h2>My Projects</h2>
      <div class="row">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </section>
</template>
