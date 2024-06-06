<script>
import { gsap } from "gsap";

export default {
  name: "AboutMe",
  data() {
    return {};
  },

  /*  methods: {
    triggerAnimation() {
      gsap.to(".box", { rotation: 360, x: 100, duration: 2 });
    },
  },

  mounted() {
    this.triggerAnimation();
  }, */
};
</script>
<template>
  <section id="about-me" class="md-container">
    <h1 class="box">About Me</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis
      repellat optio consequatur consectetur et enim error laudantium similique,
      minus iure assumenda corporis iusto, exercitationem dolorum. Cupiditate
      eum iste a facere tenetur vel. Autem ad dolorum doloribus vel et porro
      tempora quis incidunt ipsa, at velit itaque mollitia id quo dolorem beatae
      possimus nesciunt sint nisi. Sunt.
    </p>
  </section>
</template>
