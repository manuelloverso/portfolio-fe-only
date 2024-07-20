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
      gsapInstance: null,
    };
  },

  methods: {
    animateHeading() {
      const text = this.$refs.projectsHeading;

      this.gsapInstance = gsap.from(text, {
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

      ScrollTrigger.refresh();
    },
  },

  mounted() {
    store.callApi();
    this.animateHeading();
  },

  beforeDestroy() {
    if (this.gsapInstance) {
      this.gsapInstance.scrollTrigger.kill();
    }
  },
};
</script>
<template>
  <!-- Projects Section -->
  <section id="home-projects">
    <div class="md-container">
      <h2 class="text-center" ref="projectsHeading">Progetti</h2>
      <div
        v-if="!store.projectsLoading && !store.failed"
        class="cards-container"
      >
        <template v-for="project in store.projects" :key="project.id">
          <ProjectCard v-if="project.is_in_evidence" :project="project" />
        </template>

        <div class="projects-btn">
          <RouterLink :to="{ name: 'projects' }">
            <div class="my-btn"><button>Vedi di più</button></div>
          </RouterLink>
        </div>
      </div>

      <template v-if="store.projectsLoading">
        <AppLoader />
      </template>

      <template v-if="store.failed">
        <div class="failed-call">
          <p>
            Mi spiace, al momento non è possibile visualizzare i progetti,
            riprova più tardi e invia una segnalazione
          </p>

          <div class="projects-btn">
            <RouterLink :to="{ name: 'contacts' }">
              <div class="my-btn"><button>Contattami</button></div>
            </RouterLink>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<style scoped>
.failed-call {
  flex-direction: column;
  gap: 2rem;
  color: red;
  font-size: 1.3rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#home-projects {
  padding: 3rem 0;
  margin-bottom: 300px;
  & h2 {
    font-size: 3.5rem;
    font-weight: 400;
    color: var(--accent);
    margin-bottom: 6rem;
  }

  .projects-btn {
    display: flex;
    justify-content: center;
    cursor: none;
  }
}

@media screen and (min-width: 768px) {
  #home-projects {
    & h2 {
      font-size: 5rem;
    }
  }
}
</style>
