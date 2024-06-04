<script>
import axios from "axios";

export default {
  name: "ProjectShow",
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
  <section id="project-show">
    <div class="md-container">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h1 class="text-center">{{ project.title }}</h1>

        <div class="image">
          <!-- Image -->
          <img
            v-if="project.image.startsWith('http')"
            :src="project.image"
            alt=""
          />
          <img
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
  </section>
</template>
<style scoped></style>
