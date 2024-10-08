<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
      gsapInstance: null,
      cardEvent: null,
    };
  },

  methods: {
    cardEffect() {
      const card = this.$refs.projectCard;

      const maxRotation = 15;
      if (card) {
        const handleMouseMove = (e) => {
          card.style.transition = "none";

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
        };

        const handleMouseLeave = () => {
          card.style.transform = `rotateX(0) rotateY(0)`;
          card.style.transition = "transform 0.3s ease";
          setTimeout(() => {
            card.style.transition = "none";
          }, 500);
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        this.cardEvent = { handleMouseMove, handleMouseLeave };
      }
    },

    cardsAnimation() {
      let card;
      if (window.outerWidth < 768) {
        card = this.$refs.smallProjectCard;
      } else {
        card = this.$refs.projectCard;
      }
      this.gsapInstance = gsap.fromTo(
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
          },
        }
      );
    },

    cardCursor() {
      if (!store.isTouch) {
        const cursor = document.getElementById("cursor");
        const cursorShadow = document.getElementById("cursor-shadow");
        cursorShadow.classList.add("card-hover");
        cursor.classList.add("card-hover");
      }
    },

    cardCursorLeave() {
      if (!store.isTouch) {
        const cursor = document.getElementById("cursor");
        const cursorShadow = document.getElementById("cursor-shadow");
        cursorShadow.classList.remove("card-hover");
        cursor.classList.remove("card-hover");
      }
    },
  },

  mounted() {
    if (store.isTouch) {
      const images = document.querySelectorAll(".image img");
      images.forEach((img) => {
        img.classList.add("visible");
      });
    } else {
      this.cardsAnimation();
      this.cardEffect();
    }
  },

  beforeUnmount() {
    if (this.gsapInstance) {
      this.gsapInstance.kill();
    }

    if (this.cardEvent) {
      const card = this.$refs.projectCard;
      card.removeEventListener("mousemove", this.cardEvent.handleMouseMove);
      card.removeEventListener("mouseleave", this.cardEvent.handleMouseLeave);
    }
  },
};
</script>
<template>
  <RouterLink
    class="card-link project-card-container"
    :to="'projects/' + project.id"
  >
    <div
      ref="projectCard"
      class="project-card d-none d-md-flex"
      @mouseenter="cardCursor"
      @mouseleave="cardCursorLeave"
      @click="cardCursorLeave"
    >
      <div class="left" ref="cardLeft">
        <div class="project-title">
          {{ project.title }}
        </div>

        <!-- Project's Technologies -->
        <template v-if="project.technologies.length > 0">
          <div class="technologies">
            <div class="technology-btn" v-for="tech in project.technologies">
              {{ tech }}
            </div>
          </div>
        </template>
      </div>

      <div class="image">
        <!-- Image -->
        <img
          loading="lazy"
          @mouseenter="cardCursorLeave"
          @mouseleave="cardCursor"
          :src="'/img/projects/' + project.cardImage"
          :alt="project.title"
        />
      </div>
    </div>

    <!-- small devices card -->

    <div class="small-project-card d-md-none" ref="smallProjectCard">
      <div class="image">
        <!-- Image -->
        <img
          loading="lazy"
          :src="'/img/projects/' + project.cardImage"
          :alt="project.title"
        />
      </div>

      <!-- title -->
      <h2 class="project-title">{{ project.title }}</h2>

      <!-- technologies -->
      <template v-if="project.technologies.length > 0">
        <div class="technologies">
          <div class="technology-btn" v-for="tech in project.technologies">
            {{ tech }}
          </div>
        </div>
      </template>
    </div>
  </RouterLink>
</template>
<style scoped>
.card-link {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 100px;
}

.project-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  min-height: 300px;
  border: 1px solid grey;
  border-radius: 15px;
  cursor: none;
  background: var(--bg-cards);
  position: relative;

  &:hover {
    transition: none;
  }

  .left {
    width: 60%;
    padding: 1rem;

    .project-title {
      font-size: 2.3rem;
      color: var(--accent);
      margin-bottom: 1rem;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 1.3rem;
    }
  }

  .image {
    width: 40%;

    & img {
      display: block;
      width: 100%;
      border-radius: 10px;
      aspect-ratio: 16 / 8;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }

    & img.visible {
      opacity: 1;
    }
  }
}

.project-card:hover {
  .image img {
    opacity: 1;
  }
}

.image img:hover {
  transform: rotate(5deg) scale(1.1);
}

.small-project-card {
  border: 1px solid grey;
  text-align: center;
  padding: 35% 20px 30px 20px;
  border-radius: 15px;
  position: relative;
  background-color: var(--bg-cards);
  .image {
    position: absolute;
    top: -40px;
    & img {
      width: 80%;
      border-radius: 10px;
      aspect-ratio: 16 / 8;
    }
  }

  .project-title {
    font-size: 7vw;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    justify-content: center;
  }
}
</style>
