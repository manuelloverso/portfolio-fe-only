<script>
import { RouterLink } from "vue-router";
import gsap from "gsap";
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

    cardsAnimation() {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, scale: 0.5 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              toggleActions: "play none none reverse",
              start: "top 80%",
              markers: false,
            },
          }
        );
      });
    },

    cardCursor() {
      const cursor = document.getElementById("cursor");
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.add("card-hover");
      cursor.classList.add("card-hover");
    },

    cardCursorLeave() {
      const cursor = document.getElementById("cursor");
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.remove("card-hover");
      cursor.classList.remove("card-hover");
    },
  },

  mounted() {
    this.cardEffect();
    this.cardsAnimation();
    ScrollTrigger.refresh();
  },

  beforeDestroy() {
    this.cardsAnimation.scrollTrigger.kill();
    this.cardsAnimation.kill();
  },
};
</script>
<template>
  <RouterLink class="card-link card-container" :to="'projects/' + project.id">
    <div
      class="project-card"
      @mouseenter="cardCursor()"
      @mouseleave="cardCursorLeave()"
      @click="cardCursorLeave()"
    >
      <div class="left" ref="cardLeft">
        <div class="project-title">
          {{ project.title }}
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
          @mouseenter="cardCursorLeave()"
          @mouseleave="cardCursor()"
          class="project-img"
          v-if="project.card_image.startsWith('http')"
          :src="project.card_image"
          :alt="project.title"
        />
        <img
          v-else
          @mouseenter="cardCursorLeave()"
          @mouseleave="cardCursor()"
          class="project-img"
          :src="'http://127.0.0.1:8000' + '/storage/' + project.card_image"
          :alt="project.title"
        />
      </div>
    </div>
  </RouterLink>
</template>
<style scoped></style>
