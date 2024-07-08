<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AboutMe",
  data() {
    return {};
  },

  methods: {
    animateParagraph() {
      const splitElement = document.querySelector(".split");

      const text = new SplitType(splitElement, { types: "words,chars" });

      gsap.fromTo(
        text.chars,
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".about-paragraph",
            start: "bottom 50%",
            end: "bottom 20%",
            scrub: 3,
          },
        }
      );
    },

    animateHeading() {
      gsap.from(".about-heading", {
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
    this.animateParagraph();
    this.animateHeading();
  },
};
</script>
<template>
  <div class="md-container">
    <section id="about-me">
      <h1 class="about-heading">Chi sono</h1>
      <p class="split about-paragraph">
        Sono un Junior Web Developer con una grande passione per la
        programmazione e la creazione di soluzioni web innovative. Dopo aver
        completato un corso intensivo di 700 ore, mi sono dedicato con
        entusiasmo allo sviluppo di competenze in diversi ambiti della
        programmazione web, sia front-end che back-end. Anche se sono
        relativamente nuovo in questo campo, ogni progetto rappresenta per me
        un'opportunità di crescita e apprendimento. Sono motivato a migliorare
        costantemente le mie abilità e sono entusiasta di affrontare nuove sfide
        nel mondo dello sviluppo web.
      </p>
    </section>
  </div>
</template>
