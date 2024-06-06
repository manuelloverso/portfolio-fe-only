<script>
import { RouterLink } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
      const cards = document.querySelectorAll(".project-card");

      const maxRotation = 15;
      if (cards.length === 0) return;

      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const cardWidth = card.clientWidth;
          const cardHeight = card.clientHeight;

          const cardWidthHalf = cardWidth / 2;
          const cardHeightHalf = cardHeight / 2;

          const offsetWidth = e.clientX - card.offsetLeft - cardWidthHalf;
          const offsetHeight = e.clientY - card.offsetTop - cardHeightHalf;

          let degX = -(offsetHeight * 0.05);
          let degY = offsetWidth * 0.03;

          degX = Math.max(-maxRotation, Math.min(maxRotation, degX));
          degY = Math.max(-maxRotation, Math.min(maxRotation, degY));

          card.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = `rotateX(0) rotateY(0)`;
        });
      });
    },

    cardsScroll() {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, x: -700 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 2,
            scrollTrigger: {
              trigger: card,
              toggleActions: "restart reverse none pause",
              start: "top 80%",
              end: "bottom 100px",
              markers: false,
            },
          }
        );
      });
    },
  },

  mounted() {
    /* this.cardEffect(); */
    this.cardsScroll();
  },
};
</script>
<template>
  <RouterLink
    v-if="project.is_in_evidence"
    class="card-link"
    :to="'projects/' + project.id"
  >
    <div class="project-card">
      <div class="left" ref="cardLeft">
        <div class="split project-title">{{ project.title }}</div>

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

        <!-- Project's Technologies -->
        <template v-if="project.technologies.length != 0">
          <div class="technologies">
            <div class="technology-btn" v-for="tech in project.technologies">
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
<style></style>
