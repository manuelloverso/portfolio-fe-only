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
      loading: true,
    };
  },

  methods: {
    callApi(url) {
      axios.get(url).then((response) => {
        console.log(response.data.response);
        this.projects = response.data.response;
        this.loading = false;
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
      <h2 class="text-center">My Projects</h2>
      <div v-if="!loading" class="cards-container">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>

      <p v-else>Loading...</p>

      <RouterLink class="projects-btn" :to="{ name: 'projects' }">
        <button class="btn-gradient">See All</button>
      </RouterLink>
    </div>
  </section>
</template>
