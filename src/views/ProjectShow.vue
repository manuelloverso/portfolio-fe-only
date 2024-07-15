<script>
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
      failed: false,
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
          this.loading = false;
          this.failed = true;
          console.log(err);
        });
    },

    animateInfo() {
      setTimeout(() => {
        if (!this.loading && !this.failed) {
          /* description animation */
          const splitElement = document.querySelector(".split");

          const text = new SplitType(splitElement, { types: "words,chars" });

          gsap.fromTo(
            text.chars,
            {
              opacity: 0.2,
            },
            {
              opacity: 1,
              stagger: 1,
              scrollTrigger: {
                trigger: ".description-paragraph",
                start: "top 80%",
                end: "center 65%",
                scrub: 3,
              },
            }
          );
        }
      }, 500);
    },

    animateTechnologies() {
      setTimeout(() => {
        if (!this.loading && !this.failed) {
          const techs = document.querySelectorAll(".technology-btn");
          console.log(techs);

          gsap.set(techs, { opacity: 0, y: 30 });

          gsap.to(techs, {
            ease: "back.out",
            opacity: 1,
            y: 0,
            stagger: 0.1,

            scrollTrigger: {
              trigger: ".technologies",
              toggleActions: "restart none none reverse",
              start: "top 80%",
            },
          });
        }
      }, 500);
    },
  },

  watch: {
    loading(newVal) {
      if (!newVal) {
        this.$nextTick(() => {
          this.animateInfo();
          this.animateTechnologies();
        });
      }
    },
  },

  mounted() {
    const activeHovers = document.querySelectorAll(".card-hover");
    if (activeHovers) {
      activeHovers.forEach((el) => {
        el.classList.remove("card-hover");
      });
    }

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
      <div v-if="!loading && !failed">
        <h1 class="project-title text-center tracking-in-expand-fwd-top">
          {{ project.title }}
        </h1>

        <div class="image">
          <!-- Image -->
          <img
            class="slide-in-blurred-top"
            v-if="project.show_image.startsWith('http')"
            :src="project.show_image"
            alt=""
          />
          <img
            class="slide-in-blurred-top"
            v-else
            :src="'http://127.0.0.1:8000' + '/storage/' + project.show_image"
            alt=""
          />
        </div>

        <div class="details">
          <div class="left">
            <div class="description">
              <p class="split description-paragraph">
                {{ project.description }}
              </p>
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
                v-if="project.github_link"
                :href="project.github_link"
              >
                <i class="fa-brands fa-github"></i> Source Code
              </a>

              <!-- FE Repo Link -->
              <a
                target="_blank"
                class="gh-link"
                v-if="project.frontend_link"
                :href="project.frontend_link"
              >
                <i class="fa-brands fa-github"></i> Frontend repo
              </a>

              <!-- BE Repo Link -->
              <a
                target="_blank"
                class="gh-link"
                v-if="project.backend_link"
                :href="project.backend_link"
              >
                <i class="fa-brands fa-github"></i> Backend repo
              </a>

              <!-- YT Link -->
              <a
                target="_blank"
                class="yt-link"
                v-if="project.yt_link"
                :href="project.yt_link"
              >
                <i class="fa-brands fa-youtube"></i> Preview
              </a>

              <!-- Preview Link -->
              <a
                target="_blank"
                class="preview-link"
                v-if="project.preview_link"
                :href="project.preview_link"
              >
                <i class="fa-solid fa-laptop"></i> Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>

      <template v-if="failed">
        <div class="failed-call">
          <p>
            Mi spiace, al momento non è possibile visualizzare i progetti,
            riprova più tardi e invia una segnalazione
          </p>

          <div class="projects-btn">
            <RouterLink :to="{ name: 'contacts' }">
              <div class="my-btn projects-color">
                <button>Contattami</button>
              </div>
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
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#project-show {
  padding-top: 4rem;
  margin-bottom: 250px;

  & h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  .image {
    margin-bottom: 3rem;
    & img {
      width: 100%;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;

    .left {
      width: 35%;

      .description {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        color: var(--accent);
      }

      .technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .date {
        text-align: end;
      }
    }
  }
}

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
