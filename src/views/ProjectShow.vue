<script>
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "ProjectShow",
  components: {
    AppLoader,
  },
  data() {
    return {
      project: null,
      id: null,
      loading: true,
    };
  },

  methods: {
    singleProject(url) {
      axios
        .get(url)
        .then((response) => {
          if (response.data.success) {
            this.project = response.data.response;
            this.loading = false;
          } else {
            this.$router.push({ name: "NotFound" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.singleProject(`http://127.0.0.1:8000/api/projects/${this.id}`);
  },
};
</script>
<template>
  <main id="project-show">
    <div class="md-container">
      <template v-if="loading">
        <AppLoader />
      </template>
      <div v-else>
        <h1 class="project-title text-center tracking-in-expand-fwd-top">
          {{ project.title }}
        </h1>

        <div class="image">
          <!-- Image -->
          <img
            class="slide-in-blurred-top"
            v-if="project.image.startsWith('http')"
            :src="project.image"
            alt=""
          />
          <img
            class="slide-in-blurred-top"
            v-else
            :src="'http://127.0.0.1:8000' + '/storage/' + project.image"
            alt=""
          />
        </div>

        <div class="details">
          <div class="left">
            <div class="description">
              {{ project.description }}
            </div>

            <div v-if="project.technologies.length != 0" class="technologies">
              <div class="technologies">
                <button
                  class="technology-btn"
                  v-for="tech in project.technologies"
                >
                  {{ tech.name }}
                </button>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="date">
              {{ project.date }}
            </div>
            <!-- Links -->
            <div class="project-links">
              <!-- GH Link -->
              <a
                target="_blank"
                class="gh-link"
                v-if="project.github_link != null"
                :href="project.github_link"
              >
                <i class="fa-brands fa-github"></i> Source Code
              </a>

              <!-- YT Link -->
              <a
                target="_blank"
                class="yt-link"
                v-if="project.yt_link != null"
                :href="project.yt_link"
              >
                <i class="fa-brands fa-youtube"></i> Showcase
              </a>

              <!-- Preview Link -->
              <a
                target="_blank"
                class="preview-link"
                v-if="project.preview_link != null"
                :href="project.preview_link"
              >
                <i class="fa-solid fa-laptop"></i> Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
/* Project Image */
.slide-in-blurred-top {
  -webkit-animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

/* Project Title */
.tracking-in-expand-fwd-top {
  -webkit-animation: tracking-in-expand-fwd-top 1.2s
    cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s both;
  animation: tracking-in-expand-fwd-top 1.2s cubic-bezier(0.215, 0.61, 0.355, 1)
    0.3s both;
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
</style>
