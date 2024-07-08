<script>
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AppLoader from "./AppLoader.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomeProjects",
  components: {
    ProjectCard,
    AppLoader,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
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
    this.animateHeading();
    ScrollTrigger.refresh();
  },

  beforeDestroy() {
    this.animateHeading.scrollTrigger.kill();
    this.animateHeading.kill();
  },
};
</script>
<template>
  <!-- Projects Section -->
  <section id="home-projects">
    <div class="md-container">
      <h2 class="text-center projects-heading">I miei progetti</h2>
      <div v-if="!store.loading" class="cards-container">
        <template v-for="project in store.projects" :key="project.id">
          <ProjectCard v-if="project.is_in_evidence" :project="project" />
        </template>
      </div>

      <template v-else>
        <AppLoader />
      </template>

      <div class="projects-btn">
        <RouterLink :to="{ name: 'projects' }">
          <div class="btn"><button>Vedi di più</button></div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
