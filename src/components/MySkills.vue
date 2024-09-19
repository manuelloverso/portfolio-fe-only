<script>
import { store } from "../store";
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
      store,
      perPage: 2.5,
      splideInstance: null,
      gsapInstance: null,
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

        {
          name: "sql",
          image: "sql.svg",
        },

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
      this.splideInstance = new Splide(".splide", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: this.perPage,
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
        },
      });

      this.splideInstance.mount({ AutoScroll });
    },

    animateHeading() {
      const text = this.$refs.skillsHeading;

      this.gsapInstance = gsap.from(text, {
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

  watch: {
    "store.projectsLoading": function (newVal) {
      if (!newVal && !this.store.isTouch) {
        this.animateHeading();
      }
    },
  },

  mounted() {
    if (window.innerWidth > 400) {
      this.perPage = 3;
    }
    if (window.innerWidth > 600) {
      this.perPage = 4;
    }
    if (window.innerWidth > 900) {
      this.perPage = 6;
    }
    this.slider();
  },

  beforeUnmount() {
    if (this.gsapInstance) {
      this.gsapInstance.kill();
    }

    if (this.splideInstance) {
      this.splideInstance.destroy();
    }
  },
};
</script>
<template>
  <section id="skills">
    <h2 class="md-container" ref="skillsHeading">Skills</h2>
    <div class="splide skills-slider" aria-label="skills">
      <div class="splide__track">
        <ul class="splide__list">
          <splide-slide v-for="tech in technologies">
            <div class="logo">
              <img
                loading="lazy"
                class="tech"
                width="100"
                :src="`/img/${tech.image}`"
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

  & h2 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 500;
    color: var(--accent);
    padding-bottom: 2rem;
    margin-bottom: 80px;
  }
}

@media screen and (min-width: 768px) {
  #skills {
    & h2 {
      font-size: 5rem;
    }
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
