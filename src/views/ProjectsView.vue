<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectsView",
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
      axios
        .get(url)
        .then((response) => {
          this.projects = response.data.response;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.callApi("http://127.0.0.1:8000/api/projects");
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
      </div>

      <!-- Projects -->
      <div v-if="!loading" class="cards-container">
        <template v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </template>
      </div>

      <p v-else>Loading...</p>
    </div>
  </main>
</template>
<style scoped>
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
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 400px;

  .text-container {
    color: rgb(197, 205, 209);
    display: flex;
    flex-direction: column;
    align-items: center;
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
