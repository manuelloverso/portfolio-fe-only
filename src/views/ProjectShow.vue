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
    /*  this.singleProject(this.url);
    console.log(this.project); */

    this.id = this.$route.params.id;
    this.singleProject(`http://127.0.0.1:8000/api/projects/${this.id}`);
  },
};
</script>
<template>
  <div class="md-container py-3">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="project-card">
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

        <!-- Project Data -->
        <div class="project-data">
          <!-- Project Title -->
          <h3>{{ project.title }}</h3>
          <!-- Project Description -->
          <p>{{ project.description }}</p>

          <!-- Links -->
          <div class="links">
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
          <!-- Project's Technologies -->
          <template v-if="project.technologies.length != 0">
            <div class="technologies">
              <div class="technology" v-for="tech in project.technologies">
                {{ tech.name }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
