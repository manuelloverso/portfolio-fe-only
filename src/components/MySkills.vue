<script>
import { SplideSlide } from "@splidejs/vue-splide";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "MySkills",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      technologies: [
        {
          name: "VueJS",
          image: "vue.svg",
        },
        {
          name: "JS",
          image: "javascript.svg",
        },

        {
          name: "Laravel",
          image: "laravel.svg",
        },

        {
          name: "HTML",
          image: "html.svg",
        },

        {
          name: "Bootstrap",
          image: "bootstrap.svg",
        },

        {
          name: "CSS",
          image: "css.svg",
        },

        {
          name: "PHP",
          image: "php.svg",
        },

        {
          name: "Sass",
          image: "sass.svg",
        },

        /* sql: {
          name: "sql",
          image: "sql.svg",
        }, */

        {
          name: "Vite",
          image: "vite.svg",
        },

        {
          name: "Git",
          image: "git.svg",
        },
      ],
    };
  },

  methods: {
    slider() {
      const splide = new Splide(".splide", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 6,
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
        },
      });

      splide.mount({ AutoScroll });
    },

    animateHeading() {
      const text = document.querySelector(".skills-heading");

      gsap.from(text, {
        x: -1000,
        scale: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true,
          pin: true,
        },
      });
    },
  },

  mounted() {
    this.animateHeading();
    ScrollTrigger.refresh();
    this.slider();
  },

  beforeDestroy() {
    this.animateHeading.scrollTrigger.kill();
    this.animateHeading.kill();
  },
};
</script>
<template>
  <section id="skills">
    <h1 class="md-container skills-heading">Skills</h1>
    <div class="splide skills-slider" aria-label="skills">
      <div class="splide__track">
        <ul class="splide__list">
          <splide-slide v-for="tech in technologies">
            <div class="logo">
              <img
                class="tech"
                width="100"
                :src="`/public/img/${tech.image}`"
                :alt="tech.tech"
              />
            </div>
          </splide-slide>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "@splidejs/splide/dist/css/splide.min.css";

#skills {
  padding: 3rem 0;
  margin-bottom: 250px;
  .skills-slider {
    cursor: grab;
  }

  & h1 {
    text-align: center;
    font-size: 5rem;
    font-weight: 500;
    color: var(--accent);
    padding-bottom: 2rem;
    margin-bottom: 80px;
  }
}

.splide__track {
  max-height: 120px;
}

.logo {
  height: 120px;
  display: flex;
  align-items: center;
}
</style>
