<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div v-if="project.is_in_evidence" class="col-4">
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
</template>
