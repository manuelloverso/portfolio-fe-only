<script>
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
import Scroller from "../components/Scroller.vue";
import projects from "../projects";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
    Scroller,
  },
  data() {
    return {
      store,
      projects,
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
      <div class="cards-container">
        <template v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </template>
      </div>
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
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }

  90% {
    white-space: nowrap;
  }

  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}
@keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }
  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
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
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }
  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }
  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}

.cards-container {
  margin-bottom: 300px;
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
    /* font-size: 6rem; */
    font-size: 13vw;
    font-weight: 300;
    margin-bottom: 30px;
  }

  & h2 {
    text-align: center;
    font-weight: 300;
    /*  font-size: 2rem; */
    font-size: 6vw;
  }
}

@media screen and (min-width: 576px) {
  .page-header {
    & h1 {
      font-size: 4.6rem;
    }

    & h2 {
      font-size: 1.6rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .page-header {
    & h1 {
      font-size: 5rem;
    }

    & h2 {
      font-size: 2rem;
    }
  }
}
</style>
