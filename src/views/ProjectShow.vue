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
      gsapInstance: null,
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

    animateTechnologies() {
      if (!this.loading && !this.failed) {
        const techs = document.querySelectorAll(".technology-btn");

        gsap.set(techs, { opacity: 0, y: 30 });

        this.gsapInstance = gsap.to(techs, {
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
    },
  },

  watch: {
    loading(newVal) {
      if (!newVal) {
        this.$nextTick(() => {
          this.animateTechnologies();
        });
      }
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.singleProject(`http://127.0.0.1:8000/api/projects/${this.id}`);
    const activeHovers = document.querySelectorAll(".card-hover");
    if (activeHovers) {
      activeHovers.forEach((el) => {
        el.classList.remove("card-hover");
      });
    }

    this.animateTechnologies();
  },

  beforeUnmount() {
    if (this.gsapInstance) {
      this.gsapInstance.kill();
    }
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
        <div class="hero">
          <h1 class="project-title text-center tracking-in-expand-fwd-top">
            {{ project.title }}
          </h1>
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
            :src="
              'https://admin.manuelloverso.com' +
              '/storage/' +
              project.show_image
            "
            alt=""
          />
        </div>

        <div class="details">
          <div class="left col-12 col-md-6">
            <div class="description">
              <p>
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

          <div class="right col-12 col-md-6">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  class="icon"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                Source Code
              </a>

              <!-- FE Repo Link -->
              <a
                target="_blank"
                class="gh-link"
                v-if="project.frontend_link"
                :href="project.frontend_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  class="icon"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                Frontend repo
              </a>

              <!-- BE Repo Link -->
              <a
                target="_blank"
                class="gh-link"
                v-if="project.backend_link"
                :href="project.backend_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  class="icon"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                Backend repo
              </a>

              <!-- YT Link -->
              <a
                target="_blank"
                class="yt-link"
                v-if="project.yt_link"
                :href="project.yt_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="icon"
                >
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                  />
                </svg>
                Preview
              </a>

              <!-- Preview Link -->
              <a
                target="_blank"
                class="preview-link"
                v-if="project.preview_link"
                :href="project.preview_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="icon"
                >
                  <path
                    d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"
                  />
                </svg>
                Live Preview
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
  margin-bottom: 250px;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4rem;
    margin-bottom: 4rem;
    & h1 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 3rem;
    }
    & img {
      width: 100%;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .left {
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

      .project-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        gap: 10px;
        margin-bottom: 1.2rem;
        .icon {
          width: 20px;
          fill: var(--accent);
        }

        a {
          text-decoration: none;
          padding: 10px;
          border-radius: 13px;
        }

        .gh-link {
          background-color: black;
          color: white !important;
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: rgb(38, 38, 38);
          }
        }

        .yt-link {
          background-color: rgb(191, 43, 43);
          color: white !important;
          transition: background-color 0.3s ease-in-out;

          &:hover {
            background-color: rgb(105, 20, 20);
          }
        }

        .preview-link {
          background-color: var(--accent);
          color: black !important;
        }
      }
    }
  }
}

@media screen and (min-width: 576px) {
  #project-show {
    .hero {
      & h1 {
        font-size: 3rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .date {
    text-align: start !important;
    margin: 40px 0;
  }

  .project-links {
    justify-content: start !important;
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
