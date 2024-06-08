<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
        this.projects = response.data.response;
        this.loading = false;
      });
    },

    animateHeading() {
      const text = document.querySelector(".projects-heading");

      gsap.from(text, {
        x: -2000,
        duration: 2,
        ease: "back.out",
        scrollTrigger: {
          trigger: text,
          start: "top 87%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });
    },
  },

  mounted() {
    this.callApi("http://127.0.0.1:8000/api/projects");
    this.animateHeading();
  },
};
</script>
<template>
  <!-- Projects Section -->
  <section id="home-projects">
    <div class="md-container">
      <h2 class="text-center projects-heading">My Projects</h2>
      <div v-if="!loading" class="cards-container">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>

      <p v-else>Loading...</p>

      <RouterLink class="projects-btn" :to="{ name: 'projects' }">
        <button class="btn-accent">See All</button>
      </RouterLink>
    </div>
  </section>
</template>
