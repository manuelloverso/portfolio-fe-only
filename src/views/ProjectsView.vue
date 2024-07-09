<script>
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
import Scroller from "../components/Scroller.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
    Scroller,
    AppLoader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <main>
    <div class="md-container">
      <!-- Heading -->
      <div class="page-header">
        <div class="text-container">
          <h1 class="tracking-in-expand-fwd-top">I miei progetti</h1>
          <h2 class="tracking-in-expand-fwd-bottom">
            Una panoramica dei progetti realizzati nell'ultimo periodo
          </h2>
        </div>
        <Scroller />
      </div>

      <!-- Projects -->
      <div
        v-if="!store.projectsLoading && !store.failed"
        class="cards-container"
      >
        <template v-for="project in store.projects" :key="project.id">
          <ProjectCard :project="project" />
        </template>
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
              <div class="btn projects-color"><button>Contattami</button></div>
            </RouterLink>
          </div>
        </div>
      </template>
    </div>
  </main>
</template>
<style scoped>
.failed-call {
  flex-direction: column;
  gap: 2rem;
  color: red;
  font-size: 1.3rem;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-container {
  display: flex;
  flex-direction: column;
}
.tracking-in-expand-fwd-top {
  -webkit-animation: tracking-in-expand-fwd-top 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-top 2s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}

.tracking-in-expand-fwd-bottom {
  -webkit-animation: tracking-in-expand-fwd-bottom 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-bottom 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@-webkit-keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}

.page-header {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 300px;

  .text-container {
    color: rgb(197, 205, 209);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }

  & h1 {
    font-size: 6rem;
    font-weight: 300;
    margin-bottom: 30px;
  }

  & h2 {
    font-weight: 300;
    font-size: 2rem;
  }
}
</style>
