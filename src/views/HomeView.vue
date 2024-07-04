<script>
import AboutMe from "../components/AboutMe.vue";
import HomeProjects from "../components/HomeProjects.vue";
import MySkills from "../components/MySkills.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomeView",
  components: {
    AboutMe,
    HomeProjects,
    MySkills,
  },
  data() {
    return {};
  },

  methods: {
    animateJumbo() {
      const splitElements = document.querySelectorAll(".split-jumbo");

      splitElements.forEach((el) => {
        const text = new SplitType(el, { types: "chars" });

        gsap.from(text.chars, {
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          yPercent: 130,
          ease: "back.out",
          scrollTrigger: {
            trigger: text.chars,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play restart",
          },
        });
      });
    },
  },

  mounted() {},
};
</script>
<template>
  <!-- Home Page Jumbotron -->
  <div class="home-jumbotron">
    <div class="md-container">
      <div class="jumbo-text tracking-in-contract-bck-top">
        <h1 class="split-jumbo head-jumbo">I'm Manuel Loverso</h1>
        <h3 class="mb-5 split-jumbo">Jr. Full Stack Web Developer</h3>
        <a href="#about-me">
          <button class="btn-gradient">
            About Me <i class="fa-solid fa-arrow-down"></i>
          </button>
        </a>
      </div>
    </div>
  </div>

  <!-- Page Main -->
  <main id="home-main">
    <AboutMe />

    <HomeProjects />

    <MySkills />
  </main>
</template>

<style scoped>
.tracking-in-contract-bck-top {
  -webkit-animation: tracking-in-contract-bck-top 3s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: tracking-in-contract-bck-top 3s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@-webkit-keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
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
@keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
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
