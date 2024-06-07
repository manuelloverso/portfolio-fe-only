<script>
// IMPORTS
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectCard from "./components/ProjectCard.vue";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    ProjectCard,
  },
  data() {
    return {};
  },

  mounted() {
    const cursor = new MouseFollower({
      speed: 0.5,
      skewingText: 0,
    });
  },
};
</script>
<template>
  <div class="bg-bobble1"></div>
  <div class="bg-bobble2"></div>
  <!-- Site Header -->
  <AppHeader />

  <RouterView />

  <!-- Site Footer -->
  <AppFooter />
</template>
<style>
.mf-cursor::before {
  background: rgb(197, 205, 209);
  transform: scale(0.4);
}

.mf-cursor-text {
  color: black;
}
</style>
