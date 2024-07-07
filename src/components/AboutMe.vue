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
      const splitElements = document.querySelectorAll(".split");

      const text = new SplitType(splitElements[1], { types: "chars" });

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
      gsap.from(".heading", {
        x: 700,
        opacity: 0,
        scale: 0.2,
        scrollTrigger: {
          trigger: ".heading",
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
    ScrollTrigger.refresh();
  },

  beforeDestroy() {
    this.animateParagraph.scrollTrigger.kill();
    this.animateParagraph.kill();

    this.animateHeading.scrollTrigger.kill();
    this.animateHeading.kill();
  },
};
</script>
<template>
  <div class="md-container">
    <section id="about-me">
      <h1 class="split heading">About Me</h1>
      <p class="split about-paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis
        repellat optio consequatur consectetur et enim error laudantium
        similique, minus iure assumenda corporis iusto, exercitationem dolorum.
        Cupiditate eum iste a facere tenetur vel. Autem ad dolorum doloribus vel
        et porro tempora quis incidunt ipsa, at velit itaque mollitia id quo
        dolorem beatae possimus nesciunt sint nisi. Sunt.
      </p>
    </section>
  </div>
</template>
