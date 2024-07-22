<script>
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { store } from "../store";

export default {
  name: "AboutMe",
  data() {
    return {
      store,
      gsapParagraph: null,
      gsapHeading: null,
    };
  },

  methods: {
    animateParagraph() {
      const splitElement = this.$refs.splitElement;

      const text = new SplitType(splitElement, { types: "words,chars" });

      this.gsapParagraph = gsap.fromTo(
        text.chars,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: splitElement,
            start: "top 80%",
            end: "center 60%",
            scrub: 3,
          },
        }
      );
    },

    animateHeading() {
      this.gsapHeading = gsap.from(".about-heading", {
        x: 700,
        opacity: 0,
        scale: 0.2,
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          pin: true,
        },
      });
    },
  },

  mounted() {
    if (!store.isTouch) {
      this.animateHeading();
    }
    this.animateParagraph();
  },

  beforeUnmount() {
    if (this.gsapHeading) {
      this.gsapHeading.kill();
    }

    if (this.gsapParagraph) {
      this.gsapParagraph.kill();
    }
  },
};
</script>
<template>
  <div class="md-container">
    <section id="about-me">
      <h1 class="about-heading">Chi sono</h1>
      <p class="col-12 col-md-8 col-lg-6" ref="splitElement">
        Sono un Junior Web Developer con una grande passione per la
        programmazione e la creazione di soluzioni web innovative. Dopo aver
        completato un corso intensivo di 700 ore, mi sono dedicato con
        entusiasmo allo sviluppo di competenze in diversi ambiti della
        programmazione web, sia front-end che back-end. Anche se sono
        relativamente nuovo in questo campo, ogni progetto rappresenta per me
        un'opportunità di crescita e apprendimento. Mi piace affrontare nuove
        sfide nel mondo dello sviluppo web e sono sempre pronto a mettermi alla
        prova.
      </p>
    </section>
  </div>
</template>

<style scoped>
#about-me {
  overflow-x: hidden;
  padding: 3rem 0;
  color: var(--accent);
  margin-bottom: 350px;

  & h1 {
    color: var(--accent);
    font-size: 3rem;
    margin-bottom: 100px;
    font-weight: 500;
  }

  & p {
    font-size: 1.5rem;
    line-height: 1.7;
  }
}

@media screen and (min-width: 768px) {
  #about-me {
    & h1 {
      font-size: 5rem;
    }
  }
}
</style>
