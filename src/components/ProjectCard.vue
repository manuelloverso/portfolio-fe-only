<script>
import { RouterLink } from "vue-router";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {};
  },

  methods: {
    cardEffect() {
      const card = this.$refs.card;
      const maxRotation = 15; // Maximum rotation angle in degrees
      if (!card) return;
      document.addEventListener("mousemove", (e) => {
        if (e.target.id === "card" || card.contains(e.target)) {
          const cardWidth = card.clientWidth;
          const cardHeight = card.clientHeight;

          const cardWidthHalf = cardWidth / 2;
          const cardHeightHalf = cardHeight / 2;

          const offsetWidth = e.clientX - card.offsetLeft - cardWidthHalf;
          const offsetHeight = e.clientY - card.offsetTop - cardHeightHalf;

          // Adjust the scaling factors for more subtle rotation
          let degX = -(offsetHeight * 0.05); // Reduced from 0.1 to 0.05
          let degY = offsetWidth * 0.03; // Reduced from 0.05 to 0.03

          // Clamp the values to prevent excessive rotation
          degX = Math.max(-maxRotation, Math.min(maxRotation, degX));
          degY = Math.max(-maxRotation, Math.min(maxRotation, degY));

          card.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
        } else {
          card.style.transform = `rotateX(0) rotateY(0)`;
        }
      });
    },
  },

  mounted() {
    this.cardEffect();
  },
};
</script>
<template>
  <RouterLink
    v-if="project.is_in_evidence"
    class="card-link"
    :to="'projects/' + project.id"
  >
    <div class="project-card" ref="card">
      <div class="left">
        <h2>{{ project.title }}</h2>

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
    </div>
  </RouterLink>
</template>
